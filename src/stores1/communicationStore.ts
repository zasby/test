import { RootStore } from "./rootStore";
import { makeAutoObservable } from "mobx";
import { CommunicationModeKey } from "../components/modules/pages/communications/constants/keys";

export default class CommunicationStore {
  root: RootStore;
  private _mode: string;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    const communicationModeValue: CommunicationModeKey | null =
      localStorage.getItem('communicationModeKey') as CommunicationModeKey || CommunicationModeKey.Kanban;
    this.root = root;
    this._mode = communicationModeValue;
  }

  get getMode() {
    return this._mode;
  }

  setMode(mode: CommunicationModeKey) {
    this._mode = mode;
    localStorage.setItem('communicationModeKey', mode);
  }
}
