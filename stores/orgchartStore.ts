import { RootStore } from "./rootStore";
import { makeAutoObservable, toJS } from "mobx";
import "../locales/i18nconfig";
import { LocalStorageHelpers } from "../helpers/localStorageHelpers";
import { OrgchartDto } from "../api";
import i18n from "i18next";

const localStorageHelpers = LocalStorageHelpers();

export default class OrgchartStore {
  root: RootStore;
  // Localstorage keys
  private lsKeys = {
    currentOrgchartId: "currentOrgchartId",
    currentOrgchartCompanyId: "currentOrgchartCompanyId",
  };
  private currentOrgchartId: number | null | undefined;
  private currentOrgchartResultName: string | null | undefined;
  private currentOrgchart: OrgchartDto | null | undefined;
  private orgchartsList: OrgchartDto[];

  constructor(root: RootStore) {
    makeAutoObservable(this);
    const t = i18n.t;
    this.root = root;
    this.orgchartsList =
      root.authStore.getInitialInfo?.orgcharts?.filter((o) => o.companyId == root.authStore.getCurrentCompanyId) ?? [];
    this.currentOrgchartId =
      localStorageHelpers.get(this.lsKeys.currentOrgchartId) != null &&
      localStorageHelpers.get(this.lsKeys.currentOrgchartCompanyId) != null
        ? root.authStore.getCurrentCompanyId == localStorageHelpers.get(this.lsKeys.currentOrgchartCompanyId)
          ? Number(localStorageHelpers.get(this.lsKeys.currentOrgchartId))
          : root.authStore.getInitialInfo?.orgcharts?.[0]?.id
        : root.authStore.getInitialInfo?.orgcharts?.[0]?.id ?? null;
    this.currentOrgchart = this.orgchartsList.find((o) => o.id == this.currentOrgchartId);
    this.currentOrgchartResultName =
      this.currentOrgchart?.resultName && this.currentOrgchart.resultName.trim().length > 0
        ? this.currentOrgchart.resultName
        : t("ui:placeholder.glossary.r");
  }

  get getCurrentOrgchartId(): number | null | undefined {
    return this.currentOrgchartId;
  }

  get getCurrentOrgchart(): OrgchartDto | null | undefined {
    return toJS(this.currentOrgchart);
  }

  get getOrgchartsList(): OrgchartDto[] {
    return this.orgchartsList;
  }

  get getCurrentOrgchartResultName(): string {
    return this.currentOrgchartResultName ?? "";
  }

  setCurrentOrgchartId(id: number | null | undefined) {
    const t = i18n.t;
    this.currentOrgchartId = id;
    this.currentOrgchart = this.orgchartsList.find((o) => o.id == this.currentOrgchartId);
    if (this.currentOrgchart?.isEmpty) return;
    this.currentOrgchartResultName =
      this.currentOrgchart?.resultName && this.currentOrgchart.resultName.trim().length > 0
        ? this.currentOrgchart.resultName
        : t("ui:placeholder.glossary.r");
    localStorageHelpers.set(this.lsKeys.currentOrgchartId, id);
    localStorageHelpers.set(this.lsKeys.currentOrgchartCompanyId, this.root.authStore.getCurrentCompanyId);
  }

  setOrgchartsList(orgcharts: OrgchartDto[] | null | undefined) {
    const t = i18n.t;
    this.orgchartsList = orgcharts ?? [];
    this.currentOrgchart = this.orgchartsList.find((o) => o.id == this.currentOrgchartId);
    this.currentOrgchartId == null && this.setCurrentOrgchartId(orgcharts?.[0]?.id);
    this.currentOrgchartResultName =
      this.currentOrgchart?.resultName && this.currentOrgchart.resultName.trim().length > 0
        ? this.currentOrgchart.resultName
        : t("ui:placeholder.glossary.r");
  }

  getOrgchartResultNameByOrgchartId(orgchartId: number) {
    const t = i18n.t;
    const res = this.orgchartsList.find((o) => o.id == orgchartId)?.resultName;
    return res == null || res.trim().length == 0 ? t("ui:placeholder.glossary.r") : res;
  }
}
