import { RootStore } from "./rootStore";
import { makeAutoObservable, runInAction } from "mobx";
import "../locales/i18nconfig";
import { ImgsViewerImageType } from "react-images-viewer";
import { LocalStorageHelpers } from "../helpers/localStorageHelpers";
import { FilesViewerFileType } from "../types/FilesViewer";

type TVideosState = {
  start?: boolean;
  overview?: boolean;
  profile?: boolean;
  orgchart?: boolean;
  orgchartSettings?: boolean;
  communication?: boolean;
  issueCreate?: boolean;
  recurringTasks?: boolean;
  recurringTasksSettings?: boolean;
};

type TAudioSettingsState = {
  notifications: "on" | "inactiveOnly" | "off";
};

type TNotificationsVisibilitySettingsState = {
  notificationsCenter: "on" | "tooltipOnly" | "off";
};

export type TSidebarSettingsState = {
  notifications: "expanded" | "collapsed" | "auto" | "expandOnHover";
};

const localStorageHelpers = LocalStorageHelpers();

export default class AppStore {
  root: RootStore;
  // Localstorage keys
  private lsKeys = {
    fallbackLocation: "fallbackLocation",
    appLocale: "appLocale",
    appTheme: "appTheme",
    isTutorialWatched: "isTutorialWatched",
    leftDrawerState: "leftDrawerState",
    drawerBehavior: "appSettings.drawerBehavior",
    audioSettings: "appStore.audioSettings",
    notificationsVisibilitySettings: "appStore.notificationsVisibilitySettings",
  };
  private loading: boolean;
  private preloader: boolean;
  private fallbackLocation: string | null;
  private appLocale: string | null;
  private appTheme: number | null;
  private isTutorialWatched: boolean;
  private isAppOnMouseDragAndDrop: boolean;
  private imagesToViewLinks: ImgsViewerImageType[];
  private filesToViewLinks: FilesViewerFileType[];
  private canDrawMainLayout: boolean;
  private leftDrawerState: "__expanded" | "__collapsed";
  // private appSettings: {
  private drawerBehavior: "alwaysExpanded" | "alwaysCollapsed" | "collapseAutomatically" | "expandManually";
  // };
  private videosState: {
    start?: boolean;
    overview?: boolean;
    profile?: boolean;
    orgchart?: boolean;
    orgchartSettings?: boolean;
    communication?: boolean;
    issueCreate?: boolean;
    recurringTasks?: boolean;
    recurringTasksSettings?: boolean;
  };

  private audioSettingsState: TAudioSettingsState;
  private notificationsVisibilitySettingsState: TNotificationsVisibilitySettingsState;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.loading = false;
    this.preloader = false;
    this.fallbackLocation = localStorageHelpers.get(this.lsKeys.fallbackLocation) ?? "/orgchart";
    this.appLocale = localStorageHelpers.get(this.lsKeys.appLocale) ?? null;
    this.appTheme = localStorageHelpers.get(this.lsKeys.appTheme) ?? null;
    this.isTutorialWatched = localStorageHelpers.get(this.lsKeys.isTutorialWatched) ?? true;
    this.leftDrawerState = localStorageHelpers.get(this.lsKeys.leftDrawerState) ?? "__expanded";
    this.drawerBehavior = localStorageHelpers.get(this.lsKeys.drawerBehavior) ?? "alwaysExpanded";
    this.isAppOnMouseDragAndDrop = false;
    this.imagesToViewLinks = [];
    this.filesToViewLinks = [];
    this.canDrawMainLayout = true;
    this.videosState = {
      start: localStorageHelpers.get("videoDialog.start") ?? false,
      overview: localStorageHelpers.get("videoDialog.overview") ?? false,
      profile: localStorageHelpers.get("videoDialog.profile") ?? false,
      orgchart: localStorageHelpers.get("videoDialog.orgchart") ?? false,
      orgchartSettings: localStorageHelpers.get("videoDialog.orgchartSettings") ?? false,
      communication: localStorageHelpers.get("videoDialog.communication") ?? false,
      recurringTasks: localStorageHelpers.get("videoDialog.recurringTasks") ?? false,
      recurringTasksSettings: localStorageHelpers.get("videoDialog.recurringTasksSettings") ?? false,
      issueCreate: localStorageHelpers.get("videoDialog.issueCreate") ?? false,
    };
    this.audioSettingsState = localStorageHelpers.get(this.lsKeys.audioSettings) ?? {
      notifications: "off",
    };
    this.notificationsVisibilitySettingsState = localStorageHelpers.get(
      this.lsKeys.notificationsVisibilitySettings
    ) ?? {
      notificationsCenter: "off",
    };
    // this.appSettings = {
    // };
  }

  get getLsKeys() {
    return this.lsKeys;
  }

  get getLoading(): boolean {
    return this.loading;
  }

  get getPreloader(): boolean {
    return this.preloader;
  }

  get getFallbackLocation(): string {
    return this.fallbackLocation ?? "/orgchart";
  }

  get getAppLocale(): string | null {
    return this.appLocale ?? null;
  }

  get getAppTheme(): number | null {
    return this.appTheme ?? null;
  }

  get getIsTutorialWatched(): boolean {
    return this.isTutorialWatched;
  }

  get getLeftDrawerState(): "__expanded" | "__collapsed" {
    return this.leftDrawerState;
  }

  get getDrawerBehavior(): "alwaysExpanded" | "alwaysCollapsed" | "collapseAutomatically" | "expandManually" {
    return this.drawerBehavior;
  }

  get getVideosState(): TVideosState {
    return this.videosState;
  }

  get getIsAppOnMouseDragAndDrop(): boolean {
    return this.isAppOnMouseDragAndDrop;
  }

  get getImagesToViewLinks(): ImgsViewerImageType[] {
    return this.imagesToViewLinks;
  }

  get getFilesToViewLinks(): FilesViewerFileType[] {
    return this.filesToViewLinks;
  }

  get getCanDrawMainLayout(): boolean {
    return this.canDrawMainLayout;
  }

  get getAudioSettingsState(): TAudioSettingsState {
    return this.audioSettingsState;
  }

  get getNotificationsVisibilitySettingsState(): TNotificationsVisibilitySettingsState {
    return this.notificationsVisibilitySettingsState;
  }

  setLoading(value: boolean): void {
    this.loading = value;
  }

  setPreloader(value: boolean): void {
    this.preloader = value;
  }

  setFallbackLocation(fallbackLocation: string) {
    localStorageHelpers.set(this.lsKeys.fallbackLocation, fallbackLocation);
    this.fallbackLocation = fallbackLocation;
  }

  setAppLocale(appLocale: string) {
    localStorageHelpers.set(this.lsKeys.appLocale, appLocale);
    this.appLocale = appLocale;
  }

  setAppTheme(appTheme: number) {
    localStorageHelpers.set(this.lsKeys.appTheme, appTheme);
    this.appTheme = appTheme;
  }

  setIsTutorialWatched(value: boolean, later = true) {
    if (!later) {
      localStorageHelpers.set(this.lsKeys.isTutorialWatched, value);
    }
    this.isTutorialWatched = value;
  }

  setLeftDrawerState(state: "__expanded" | "__collapsed") {
    localStorageHelpers.set(this.lsKeys.leftDrawerState, state);
    this.leftDrawerState = state;
  }

  setDrawerBehavior(behavior: "alwaysExpanded" | "alwaysCollapsed" | "collapseAutomatically" | "expandManually") {
    localStorageHelpers.set(this.lsKeys.drawerBehavior, behavior);
    runInAction(() => {
      if (behavior == "alwaysExpanded") {
        this.setLeftDrawerState("__expanded");
      }
      if (behavior == "alwaysCollapsed") {
        this.setLeftDrawerState("__collapsed");
      }
    });
    this.drawerBehavior = behavior;
  }

  setVideosState(state: TVideosState) {
    this.videosState = { ...this.videosState, ...state };
  }

  setIsAppOnMouseDragAndDrop(value: boolean) {
    this.isAppOnMouseDragAndDrop = value;
  }

  setImagesToViewLinks(value: ImgsViewerImageType[]) {
    this.imagesToViewLinks = value;
  }

  setFilesToViewLinks(value: FilesViewerFileType[]) {
    this.filesToViewLinks = value;
  }

  setCanDrawMainLayout(value: boolean) {
    this.canDrawMainLayout = value;
  }

  setAudioSettingsState(value: TAudioSettingsState) {
    localStorageHelpers.set(this.lsKeys.audioSettings, value);
    this.audioSettingsState = value;
  }

  setNotificationsVisibilitySettingsState(value: TNotificationsVisibilitySettingsState) {
    localStorageHelpers.set(this.lsKeys.notificationsVisibilitySettings, value);
    this.notificationsVisibilitySettingsState = value;
  }
}
