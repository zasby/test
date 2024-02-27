export interface IGlobalAuthorizedContext {
  audio?: {
    currentActivePlayerId?: string | number | null;
  };
  regulation?: {
    isSidebarOpen?: boolean;
    onSidebarOpenChange?: () => void;
    reloadSidebarData?: () => void;
  };
  issue?: {
    reloadIssue?: () => void;
    reloadIssueHistory?: () => void;
    reloadIssueBoard?: (() => void)[];
    reloadIssueBoardCounters?: () => void;
  };
  setState: (state: IGlobalAuthorizedContext) => void;
}