import { IssueDto } from "../api";
import { RootStore } from "./rootStore";
import { makeAutoObservable } from "mobx";
import { blockedFieldsKeys } from "../components/modules/forms/types/consts";

export class IssueInitDataStore {
  root: RootStore;
  private issueData: IssueDto;
  private blockedFields: blockedFieldsKeys[];
  private onSuccessCreate?: (issues: (IssueDto | null)[]) => Promise<void | any> | void;
  private onStatusChange?: () => void;
  public onChangeDefiniteField?: () => void;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.issueData = {};
    this.blockedFields = [];
  }

  get getOnStatusChange(): (() => void) | undefined {
    return this.onStatusChange;
  }

  get getBlockedFields(): blockedFieldsKeys[] {
    return this.blockedFields;
  }

  get getIssueData() {
    return this.issueData;
  }

  get getOnCreate() {
    return this.onSuccessCreate;
  }

  get getOnSidebarIssuesRestart() {
    return this.onChangeDefiniteField;
  }

  /*set setOnCreate(newOnCreate: (issues: (IssueDto | null)[]) => void) {
    this.onSuccessCreate = newOnCreate;
  }*/

  set setOnCreate(newOnCreate: (issues: (IssueDto | null)[]) => void) {
    this.onSuccessCreate = newOnCreate;
  }

  set setOnChangeDefiniteField(newOnChangeDefiniteField: (() => void) | undefined) {
    this.onChangeDefiniteField = newOnChangeDefiniteField;
  }

  set setBlockedFields(blockedField: blockedFieldsKeys[]) {
    this.blockedFields = blockedField;
  }

  set setOnStatusChange(newOnStatusChange: (() => void) | undefined) {
    this.onStatusChange = newOnStatusChange;
  }

  setIssueData(newData: IssueDto) {
    this.issueData = { ...this.issueData, ...newData };
  }

  reset() {
    this.onStatusChange = undefined;
    this.onSuccessCreate = undefined;
    this.onChangeDefiniteField = undefined;
    this.issueData = {};
    this.blockedFields = [];
  }
}
