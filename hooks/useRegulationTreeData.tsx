
import React, { useCallback, useState } from "react";
import { useNotifier } from "./useNotifier";

import { LucideCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { DataNode } from "antd/es/tree";
import { useTranslation } from "react-i18next";
import { RegulationTreeNode } from "../api/models/RegulationTreeDto";
import { RegulationTreeItemDto } from "../api/models/RegulationTreeItemDto";
import { NavigationMenuItemDto } from "../api/models/NavigationMenuDto";
import { defineAllow } from "../helpers/helpers";
import { Icon } from "../../components/uiKit";
import { api } from "../services";
import { allowsRegulationKeys } from "../constants/regulation/consts";

export const useRegulationTreeData = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const notifier = useNotifier();
  const location = useLocation();

  const [treeData, setTreeData] = useState<RegulationTreeNode[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);

  const handleExpand = useCallback((keys: string[], isChangeRoute?: boolean) => {
    setExpandedKeys((prev) => {
      const uniqClosedItem = keys.filter((item) => isChangeRoute ? prev : !prev.includes(item));
      const uniqOpenItem = prev.filter((item) => !keys.includes(item));
      return [...uniqOpenItem.concat(uniqClosedItem)];
    })
  }, []);


  const findElementByKey = (array: DataNode[], key: string): DataNode | null=>  {
    for (let i = 0; i < array.length; i++) {
      if (array[i].key === key) {
        return array[i];
      }
      if ((array[i]?.children ?? []).length > 0) {
        const result = findElementByKey((array[i]?.children ?? []), key);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  const findElementById = (array: RegulationTreeNode[], id: number): RegulationTreeNode | null=>  {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return array[i];
      }
      if ((array[i]?.children ?? []).length > 0) {
        const result = findElementById((array[i]?.children ?? []), id);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([]);

  const generateTreeDataItem = (
    treeItem: RegulationTreeItemDto,
    navigationItem: NavigationMenuItemDto,
    parentItem?: RegulationTreeItemDto,
    sectionId?: number,
  ): RegulationTreeNode => {
    const type = treeItem.regulationId ? 'r' : 's';
    const itemId = treeItem.id || treeItem.regulationId || 0;
    const key = parentItem ? `${parentItem.key}-${type}${itemId}` : `${type}${itemId}`;
    if (sectionId && parentItem?.id === sectionId &&  !!treeItem.regulationId) {
      setDefaultSelectedKeys((prev) => ([
        ...prev,
        key,
      ]));
    }

    const children = treeItem?.items
      // ?.sort((a, b) => a.order - b.order)
      ?.map((children: NavigationMenuItemDto, i) => {
        // console.log("generateTreeDataItem children", children);
        const title = !!children.regulationId ? children.regulation?.name : children.name ?? `${children.id}`
        return generateTreeDataItem(
            {
              ...children,
              title,
              isLeaf: !!children.regulationId,
              key,
            },
            children,
            {
              ...treeItem,
              key
            },
            sectionId,
            )
        }
      ) ?? [];
    //
    const title = !!treeItem.regulationId ? treeItem.regulation?.name : treeItem.name ?? `${treeItem.id}`;

    const draggable = parentItem && !parentItem.withoutATopic
      ? defineAllow(allowsRegulationKeys.edit, parentItem.actions ?? [])
      : !treeItem.withoutATopic && defineAllow(allowsRegulationKeys.edit, treeItem.actions ?? []);

    return {
      title: title ?? '',
      id: itemId,
      key,
      style: { fontWeight: treeItem.isRoot ? "bold" : "normal"},
      // className: `pa-1 __s-${treeItem.id}`,
      className: "regulation-menu-item",
      isLeaf: !!treeItem.regulationId,
      draggable: draggable,
      icon: !!treeItem.regulationId && (
        <Icon
          className={"regulation-menu-item__icon"}
          style={{ verticalAlign: "middle" }}
          component={() => <LucideCircle size={8} color="var(--color-gray-weak)" strokeWidth={4} />}
        />
      ),
      children,
      navigationItem,
      parentName: parentItem && !parentItem.withoutATopic ? parentItem.name : '',
      parentActions: parentItem && !parentItem.withoutATopic ? parentItem.actions : undefined,
      disableCheckbox: !!(sectionId && parentItem?.id === sectionId && !!treeItem.regulationId),
      actions: treeItem.actions ?? [],
    }
  }

  const generateTreeData = (list: NavigationMenuItemDto[], parentItem?: NavigationMenuItemDto, sectionId?: number) => {
    const data = list
      // .sort((a, b) => a.order - b.order)
      .map((item) => {
        return generateTreeDataItem(
          {
            ...item,
            title: item.name ?? `${item.id}`,
            key: "",
            isRoot: !parentItem,
            isLeaf: false,
          },
          item,
          parentItem ? {
            ...parentItem,
            key: parentItem?.key ?? '',
            title: parentItem.name ?? `${parentItem.id}`,
            isRoot: !parentItem,
            isLeaf: false,
          } : undefined,
          sectionId,
        );

      });
    if (!!parentItem) {
      return data;
    }
    setTreeData(data);
  };

  const getInfoFromUri = useCallback(() => {
    const { pathname } = location;
    let id, type;
    const pathParts = pathname.split("/");

    if (pathParts.includes("policy")) {
      if (pathParts[2] === "all") {
        type = "r";
        id = parseInt(pathParts[3], 10);
      } else if (pathParts[2] === "topics") {
        type = "s";
        id = parseInt(pathParts[3], 10);
      }
    }
    return { type, id };
  }, [location]);

  const updateTreeData = (list: RegulationTreeNode[], key: React.Key, children: RegulationTreeNode[]): RegulationTreeNode[] => {
    return list.map((node) => {
      if (node.key === key) {
        return {
          ...node,
          children,
        };
      }
      if (node.children) {
        return {
          ...node,
          children: updateTreeData(node.children, key, children),
        };
      }
      return node;
    });
  };

  const fetchNavigationItemData = useCallback(async (item: any, hasRegulationId?: boolean) => {
    const list = await api.navigationMenu.getTree(item.id, undefined, hasRegulationId);
    if (list === null || !list.items) {
      notifier.show({ message: t("notifier:error.something_wrong"), theme: "error" });
      return false;
    }
    const { key, title, isRoot, isLeaf } = item;
    const childrenList = generateTreeData(list.items,
      {
        ...item.navigationItem,
        key,
        title,
        isRoot,
        isLeaf,
      });

    if (childrenList) {
      setTreeData((prev) => {
          return updateTreeData(prev, item.key, childrenList);
        }
      );
    }
    return true;
  }, []);

  const [loadedKeys, setLoadedKeys] = useState<string[]>([]);

  const handleLoadData = useCallback(async (item: RegulationTreeNode, hasRegulationId?: boolean) => {
    setLoadedKeys((prev) => ([
      ...prev,
      item.key,
    ]))
    return new Promise<void>(async (resolve) => {
      // if (item.children.length) {
      //   resolve();
      //   return;
      // }
      if (item.navigationItem?.withoutATopic) {
        resolve();
        return;
      }
      const status = await fetchNavigationItemData(item, hasRegulationId);

      if (!status) {
        notifier.show({ message: t("notifier:error.something_wrong"), theme: "error" });
        resolve();
        return;
      }
      resolve();
    });
  }, []);

  const getSelectedKeysFromUri = async (isChangeRoute?: boolean) => {
    const { type, id } = getInfoFromUri();
    // const [sectionId, regulationId] = key.split("-").map((key) => key.replace(/[^0-9]/g, ""));

    if (type !== "s" || id == null || Number.isNaN(id)) return;
    const resp = await api.navigationMenu.getTree(id);
    if (resp === null) {
      return;
    }
    const { breadcrumbs } = resp;
    if (!(breadcrumbs ?? []).length) {
      const key = `s${id}`
      setSelectedKeys([key]);

      return;
    }
    const [rootItem] = breadcrumbs;
    let key = `s${rootItem.id}`
    const closedKeys = [key];
    breadcrumbs.pop();
    breadcrumbs.shift();
    const rootChildrenList = treeData.find((el) => el.key === key);
    for (const item of breadcrumbs) {
      key += `-s${item.id}`
      const el = findElementByKey(rootChildrenList?.children ?? [], key);
      if (!(el?.children ?? []).length) {
        await handleLoadData({
          id: item.id,
          key,
          children: [],
          isLeaf: false,
          title: item.name,
        });
      }
      closedKeys.push(key);
    }
    setSelectedKeys([`${key}-s${id}`]);
    handleExpand(closedKeys, isChangeRoute);
  };

  const loadData = async (isSoftLoad?: boolean, sectionId?: number, hasRegulationId?: boolean) => {
    !isSoftLoad && setIsLoading(true);
    if (isSoftLoad) {
      setLoadedKeys([]);
    }
    const list = await api.navigationMenu.getTree(undefined, undefined, hasRegulationId);
    if (list === null || !list.items) {
      notifier.show({ message: t("notifier:error.something_wrong"), theme: "error" });
      setIsLoading(false);
      return;
    }
    generateTreeData(list.items, undefined, sectionId);
    await getSelectedKeysFromUri();
    setIsLoading(false);
  };

  return {
    selectedKeys,
    treeData,
    isLoading,
    defaultSelectedKeys,
    loadData,
    setTreeData,
    getSelectedKeysFromUri,
    setSelectedKeys,
    handleLoadData,
    findElementById,
    fetchNavigationItemData,
    generateTreeData,
    generateTreeDataItem,
    loadedKeys,
  }
}
