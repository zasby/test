import { useEffect, useRef, useState } from "react";
import { toJS } from "mobx";
import { AppMainMenuLinks } from "../../utils/appLinksAndTabs";
import { useRootStore } from "../useRootStore";
import { MenuItemWithChildrenDto } from "../../api";
import { IRouterRoute } from "../../types";

export const useRouterRoute = (props: IRouterRoute) => {
  const { authStore, appStore } = useRootStore();
  // const defaultAuthorizedPage: string = "/orgchart";
  const defaultAuthorizedPage = useRef<string>("/orgchart");
  const defaultUnauthorizedPage: string = "/login";
  const currentCompanyId = useRef(authStore.getInitialInfo?.identity?.currentCompanyId);
  // Ключи страниц (пропс pageKey), которые доступны без нахождения в левом меню
  const availableKeysWithoutLeftMenu: string[] = ["settings", "service.error404", "driver.user"];

  const flattenArr = (arr: any) => {
    const result: any = [];
    arr.forEach((item: any) => {
      const { id, key, children } = item;
      if (!children) {
        result.push({ id, key });
      } else {
        result.push(...flattenArr(children));
        return;
      }
    });
    return result;
  };

  const generateAvailablePages: any = (value: MenuItemWithChildrenDto[]) => {
    return (
      flattenArr(
        window.location.hostname == "localhost" || window.location.hostname == "beta.tonnus.io"
          ? value
          : value.filter((i) => !i.isDisabled)
      )
        .map((i: any) => i.key ?? "")
        .filter((i: any) => i) ?? []
    );
  };

  const isAuthenticated = useRef<boolean>(authStore.isAuthorized);
  const isInitiated = useRef<boolean>(false);
  const userPermissions = useRef<string[]>(authStore.getInitialInfo?.permissions ?? []);
  const availablePages = useRef<string[]>(generateAvailablePages(toJS(authStore.getInitialInfo?.menuItems ?? [])));

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [navigateTo, setNavigateTo] = useState<string>("");

  useEffect(() => {
    const init = async () => {
      // Если не аутентифицирован, пытаемся это сделать
      if (!isAuthenticated.current) {
        setIsLoading(true);
        isAuthenticated.current = await authStore.authorizeWithRefreshToken();
        userPermissions.current = authStore.getInitialInfo?.permissions ?? [];
        availablePages.current = generateAvailablePages(toJS(authStore.getInitialInfo?.menuItems ?? []));
        setIsLoading(false);
      }
      initRoute();
      isInitiated.current = true;
    };
    init();
  }, []);

  useEffect(() => {
    appStore.setPreloader(isLoading);
  }, [isLoading]);

  // Следим за стором и определяем, аутентифицирован ли пользовать
  useEffect(() => {
    isAuthenticated.current = authStore.isAuthorized;
  }, [authStore.isAuthorized]);

  // Следим за доступными элементами левого меню и добавляем их в массив
  useEffect(() => {
    availablePages.current = generateAvailablePages(toJS(authStore.getInitialInfo?.menuItems ?? []));
  }, [authStore.getInitialInfo?.menuItems]);

  // Следим за доступными разрешениями и добавляем их в массив
  useEffect(() => {
    userPermissions.current = authStore.getInitialInfo?.permissions ?? [];
  }, [authStore.getInitialInfo?.permissions]);

  // Следим за стором и на основании этого определяем первый доступный элемент меню
  useEffect(() => {
    defaultAuthorizedPage.current = getFirstMenuPage();
  }, [authStore.getInitialInfo?.menuItems, authStore.isAuthorized, authStore.getInitialInfo]);

  useEffect(() => {
    if (currentCompanyId.current == authStore.getInitialInfo?.identity?.currentCompanyId) return;
    currentCompanyId.current = authStore.getInitialInfo?.identity?.currentCompanyId;
    // Перенаправляем на первый доступный модуль
    initRoute();
  }, [authStore.getInitialInfo?.identity?.currentCompanyId]);

  useEffect(() => {
    setNavigateTo("");
    if (!isInitiated.current) return;
    initRoute();
  }, [props.isPrivate, props.requiredPermissions, props.content]);

  const initRoute = () => {
    if (props.isPrivate === true) {
      if (isAuthenticated.current) {
        // Если страница приватная и пользователь аутентифицирован, проверяем разрешения
        if (!checkForPermissions()) {
          setNavigateTo(
            (props.fallbackPage ?? "").length > 0 ? (props.fallbackPage as string) : defaultAuthorizedPage.current
          );
        }
        // Если в меню нет страниц, перенаправляем на сервисную страницу
        if (availablePages.current.length == 0 && props.pageKey != "service.np" && props.pageKey != "settings") {
          setNavigateTo("/no-pages");
        }
        // Если сервисная страница и есть другие доступные страницы, перенаправляем на первую
        if (availablePages.current.length > 0 && props.pageKey == "service.np") {
          setNavigateTo(defaultAuthorizedPage.current);
        }
        // Если в меню нет текущей страницы, перенаправляем на ближайшую доступную
        if (!checkForPageKeyInMenu() && props.pageKey != "service.np") {
          setNavigateTo(defaultAuthorizedPage.current);
        }
        setIsLoading(false);
      } else {
        // Если страница приватная и пользователь не аутентифицирован, перенаправляем на страницу входа
        // navigate("/login");
        setNavigateTo(defaultUnauthorizedPage);
        setIsLoading(false);
        // return <Navigate to="/login" />;
      }
      return null;
    }

    if (props.isPrivate === false) {
      if (isAuthenticated.current) {
        // Если страница не приватная и пользователь аутентифицирован, перенаправляем на основную страницу
        setNavigateTo(defaultAuthorizedPage.current);
        setIsLoading(false);
        // return <Navigate to={defaultAuthorizedPage}" />;
      } else {
        // Если страница не приватная и пользователь не аутентифицирован, показываем контент
        setIsLoading(false);
      }
      return null;
    }

    if (props.isPrivate == null) {
      if (isAuthenticated.current) {
        // Если страница общая и пользователь аутентифицирован, показываем контент
        setIsLoading(false);
      } else {
        // Если страница общая и пользователь не аутентифицирован, показываем контент
        setIsLoading(false);
      }
      return null;
    }
  };

  const checkForPermissions = (): boolean => {
    if ((props.requiredPermissions ?? []).length == 0) return true;
    return (props.requiredPermissions ?? []).every((p) => userPermissions.current.find((up) => up == p) != null);
  };

  const checkForPageKeyInMenu = (): boolean => {
    if (props.pageKey == null || availableKeysWithoutLeftMenu.includes(props.pageKey)) return true;
    if (availablePages.current.length == 0) return false;
    return availablePages.current.some((k) => k == props.pageKey);
  };

  const getFirstMenuPage = () => {
    //AppMainMenuLinks
    if (availablePages.current.length == 0) return "/no-pages";
    return AppMainMenuLinks.find((al) => al.key == availablePages.current[0])?.link ?? "/orgchart";
  };

  return {
    navigateTo,
    isLoading,
    isAuthorized: authStore.isAuthorized
  }

}
