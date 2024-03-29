import { makeAutoObservable, runInAction } from "mobx";
import { BreadcrumbToken } from "../components/modules/pages/regulation/misc/breadcrumbsKeys";
import { RootStore } from "./rootStore";

export default class BreadcrumbsStore {
  root: RootStore;
  breadcrumbsToken: BreadcrumbToken | undefined;
  lastCrumb: string | undefined;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  get getBreadcrumbsToken(): BreadcrumbToken | undefined {
    return this.breadcrumbsToken;
  }

  get getLastCrumb(): string | undefined {
    return this.lastCrumb;
  }

  setBreadcrumbsToken(newBreadcrumbToken: BreadcrumbToken | undefined): void {
    runInAction(() => (this.breadcrumbsToken = newBreadcrumbToken));
  }

  setLastCrumb(newLastCrumb: string | undefined): void {
    runInAction(() => (this.lastCrumb = newLastCrumb));
  }

  resetBreadcrumbsToken(): void {
    runInAction(() => this.setBreadcrumbsToken(undefined));
  }

  resetLastCrumb(): void {
    runInAction(() => this.setLastCrumb(undefined));
  }
}
