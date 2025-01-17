import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRootStore } from "./useRootStore";
import { NameDisplayOrderEnum } from "../api/models/NameDisplayOrderEnum";

export const useUserNameFormat = () => {
  const { i18n: { language } } = useTranslation();
  const { authStore } = useRootStore();

  const currentCompany = useMemo(() => authStore.getCurrentCompany, []);

  const isEngFormat = useMemo(() => {
    const { nameDisplayOrder = NameDisplayOrderEnum.Default } = currentCompany ?? {};
    if (nameDisplayOrder === NameDisplayOrderEnum.Default) {
      return language === 'en' || language === 'zh';
    }
    return nameDisplayOrder === NameDisplayOrderEnum.FirstLast
  }, [language, currentCompany])

  const getFullName = (lastName: string, firstName: string, middleName?: string | null) => {
    if (isEngFormat) {
      const userName = firstName
        ? `${firstName}${middleName ? ` ${middleName}` : ''} ${lastName}`.trim()
        :  lastName.trim();
      return userName.length ? userName : undefined
    }
    const userName= lastName
      ? `${lastName} ${firstName}${middleName ? ` ${middleName}` : ''}`.trim()
      : `${firstName}${middleName ? ` ${middleName}` : ''}`.trim();
    return userName.length ? userName : undefined
  }

  const getAvatarText = (lastName: string, firstName: string) => {
    if (isEngFormat) {
      return [firstName, lastName];
    }
    return [lastName, firstName];
  }

  const getUserShortFullName = (
    lastName: string | null | undefined,
    firstName: string | null | undefined,
    middleName?: string | null
  ): string | undefined => {

    const lastNameStr = (lastName ?? "").trim();
    const firstNameTrim = (firstName ?? "").trim();
    const firstNameStr = lastNameStr.length ? firstNameTrim[0] ?? "" : firstNameTrim;
    const middleNameStr = (middleName ?? "").trim();

    const userName = isEngFormat
      ? [
        firstNameStr.length ? firstNameStr + "." : "",
        middleNameStr.length ? ([...(middleNameStr ?? "")]?.[0] ?? "") + "." : "",
        lastName ?? "",
        ].join(" ").trim()
      : [
        lastName ?? "",
        firstNameStr.length ? firstNameStr + "." : "",
        middleNameStr.length ? ([...(middleNameStr ?? "")]?.[0] ?? "") + "." : "",
      ].join(" ").trim();

    return userName.length ? userName : undefined

  };

  return {
    getFullName,
    getAvatarText,
    getUserShortFullName,
  }
}
