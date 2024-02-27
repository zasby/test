import { RootStore } from "./rootStore";
import { makeAutoObservable } from "mobx";

export type NotifierThemeTypes = "info" | "success" | "error" | "warning";

export default class NotifierStore {
  root: RootStore;
  private content: string | null;
  private theme: NotifierThemeTypes;
  private timeout?: number;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.content = "";
    this.theme = "info";
    this.timeout = 3000;
  }

  get getContent(): string | null {
    return this.content;
  }

  get getTheme(): NotifierThemeTypes {
    return this.theme;
  }

  get getTimeout(): number | undefined {
    return this.timeout;
  }

  setContent(content: string | null): void {
    this.content = content;
  }

  setTheme(theme: NotifierThemeTypes): void {
    this.theme = theme;
  }

  setTimeout(timeout: number): void {
    this.timeout = timeout;
  }

  show({ message, theme, timeout }: { message: string; theme?: NotifierThemeTypes; timeout?: number }): void {
    this.content = message;
    this.theme = theme ?? "info";
    this.timeout = timeout ?? 4000;

    setTimeout(() => {
      this.close();
    }, this.timeout);
  }

  showSuccessError(successMessage: string, errorMessage: string, value: boolean, timeout?: number): void {
    this.content = !!value ? successMessage : errorMessage;
    this.theme = !!value ? "success" : "error";
    this.timeout = timeout ?? 4000;

    setTimeout(() => {
      this.close();
    }, this.timeout);
  }

  close(): void {
    this.content = "";
    this.theme = "info";
    this.timeout = 4000;
  }
}
