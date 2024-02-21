import { RootStore } from "./rootStore";

export default class GlobalSettingsStoreStore {
  root: RootStore;
  // Localstorage keys
  private navigate:  null;
  private button: null;

  constructor(root: RootStore) {
    this.root = root;
    this.navigate = null;
    this.button = null;
  }

  get getNavigate(): any {
    return this.navigate;
  }

  get getButton(): any {
    return this.button;
  }

  setNavigate(value: any): void {
    this.navigate = value;
  }

  setButton(value: any): void {
    // Add timeout to refresh this token
    this.button = value;
  }

  setInitialInfo(initialInfo: any): void {
    console.log('initialInfo', initialInfo);
    this.navigate = initialInfo.navigate;
    this.button = initialInfo.button ?? null;
  }

}
