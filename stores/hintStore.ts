import { RootStore } from "./rootStore";
import { makeAutoObservable } from "mobx";
import { guideContentType, guideKeys } from "../types";

export class HintStore {
  root: RootStore;
  private anchorId: number | string;
  private open: boolean;
  private key: guideContentType;
  private lang: string | null;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.anchorId = 0;
    this.open = false;
    this.key = guideKeys.none;
    this.lang = null;
  }

  get getOpen(): boolean {
    return this.open;
  }

  get getAnchorId(): number | string {
    return this.anchorId;
  }

  get getKey(): string {
    return this.key;
  }

  get getLang(): string | null {
    return this.lang;
  }

  setOpen(open: boolean) {
    this.open = open;
  }

  setAnchorId(newId: number | string): void {
    this.anchorId = newId;
  }

  setKey(key: guideContentType) {
    this.key = key;
  }

  setLang(lang: string | null) {
    this.lang = lang ?? null;
  }

  onOpenHint(key: guideContentType, anchorId?: number | string, lang?: string) {
    this.setKey(key);
    this.setLang(lang ?? null);
    anchorId && this.setAnchorId(anchorId);
    this.setOpen(true);
  }

  onCloseHint() {
    this.setOpen(false);
    this.setKey(guideKeys.none);
    this.setAnchorId(0);
    this.setLang(null);
  }
}
