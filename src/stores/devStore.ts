import { RootStore } from "./rootStore";
import { makeAutoObservable } from "mobx";

export default class DevStore {
  root: RootStore;
  private isEntitiesIdsVisibleInAutocompleteAsync: boolean;
  private isEntitiesIdsVisibleInSelect: boolean;
  private isThemeSwitcherFloatButtonVisible: boolean;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.isEntitiesIdsVisibleInAutocompleteAsync = false;
    this.isEntitiesIdsVisibleInSelect = false;
    this.isThemeSwitcherFloatButtonVisible = false;
  }

  get getIsEntitiesIdsVisibleInAutocompleteAsync(): boolean {
    return this.isEntitiesIdsVisibleInAutocompleteAsync;
  }

  get getIsEntitiesIdsVisibleInSelect(): boolean {
    return this.isEntitiesIdsVisibleInSelect;
  }
  get getIsThemeSwitcherFloatButtonVisible(): boolean {
    return this.isThemeSwitcherFloatButtonVisible;
  }

  setIsEntitiesIdsVisibleInAutocompleteAsync(value: boolean) {
    this.isEntitiesIdsVisibleInAutocompleteAsync = value;
  }

  setIsEntitiesIdsVisibleInSelect(value: boolean) {
    this.isEntitiesIdsVisibleInSelect = value;
  }

  setIsThemeSwitcherFloatButtonVisible(value: boolean) {
    this.isThemeSwitcherFloatButtonVisible = value;
  }
}
