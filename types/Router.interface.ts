import React from "react";

export type TRouteAccess = "private" | "public" | "devOnly";

export interface IRouterRoute {
  content?: React.ReactElement;
  // null/undefined - страница доступна всем, true - только аутентифицированным, false - только не аутентифицированным
  isPrivate?: boolean;
  // Уровни доступа, необходимые для открытия страницы
  requiredPermissions?: string[];
  // Страница, на которую произойдёт перенаправление, если нет необходимого доступа для текущей страницы
  fallbackPage?: string;
  // Ключ страницы, по которому проверяется доступность в меню
  // TODO: pageMenuKey/serverRouteKey
  pageKey?: string;
  // Роут, по которому идёт перенаправление
  // TODO: Реализовать работу пропса
  navigateTo?: string;
  // Версия (альфа / бета)
  versionType?: string | null;
}
