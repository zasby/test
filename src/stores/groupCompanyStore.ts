import { RootStore } from "./rootStore";
import { makeAutoObservable } from "mobx";

export default class GroupCompanyStore {
  private loading: boolean;
  private zoom: number;
  private deleteCompanyId?: number;
  private deleteEmployeeId?: number;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.loading = false;
    this.zoom = 1;
  }

  get getZoom(): number {
    return this.zoom;
  }

  get getLoading(): boolean {
    return this.loading;
  }

  get getDeleteEmployeeId(): number | undefined {
    return this.deleteEmployeeId;
  }

  get getDeleteCompanyId(): number | undefined {
    return this.deleteCompanyId;
  }

  setLoading(loading: boolean): void {
    this.loading = loading;
  }

  setZoom(newValue: number): void {
    this.zoom = newValue;
  }

  setDeleteEmployeeId(newValue?: number): void {
    this.deleteEmployeeId = newValue;
  }

  setDeleteCompanyId(newValue?: number): void {
    this.deleteCompanyId = newValue;
  }
}
