import { RootStore } from "./rootStore";
import { makeAutoObservable } from "mobx";
// import "../locales/i18nconfig";
import {
  AutocompleteModel,
  CompanyGlossaryItemDto,
  CurrencyType,
  IssueCustomFieldDto,
  MetaInfo,
  PermissionDto,
  TimeZoneDto,
  UserContactTypeDto,
} from "../api";
import { api } from "../services";
import { LocalStorageHelpers } from "../helpers/localStorageHelpers";
import { t } from "i18next";
import { IssueType } from "../constants/issueTypeKeys";

export interface IIssueCustomField {
  type: IssueType | null;
  items: IssueCustomFieldDto[];
}

const localStorageHelpers = LocalStorageHelpers();

export default class HelperStore {
  root: RootStore;
  private lsKeys = {
    // appLocale: "appLocale",
  };
  private permissions: PermissionDto[];
  private timezones: TimeZoneDto[];
  private colors: string[];
  private info: MetaInfo | null;
  private issueCustomField: IIssueCustomField[];
  private allRoles: AutocompleteModel[] | undefined;
  private rolesOfAuthUser: AutocompleteModel[] | undefined;
  private userContactType: UserContactTypeDto[] | null;
  private companyGlossary: CompanyGlossaryItemDto[] | null;
  private currency: CurrencyType[] | null;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.permissions = [];
    this.timezones = [];
    this.colors = [];
    this.info = null;
    this.issueCustomField = [];
    this.allRoles = undefined;
    this.rolesOfAuthUser = undefined;
    this.userContactType = [];
    this.companyGlossary = null;
    this.currency = [];
  }

  get getPermissions(): PermissionDto[] {
    return this.permissions;
  }

  get getTimezones(): TimeZoneDto[] {
    return this.timezones;
  }

  get getColors(): string[] {
    return this.colors;
  }

  get getIssueCustomField(): IIssueCustomField[] {
    return this.issueCustomField;
  }

  get getAllRoles(): AutocompleteModel[] | undefined {
    return this.allRoles;
  }

  get getRolesOfAuthUser(): AutocompleteModel[] | undefined {
    return this.rolesOfAuthUser;
  }

  get getInfo(): MetaInfo | null {
    return this.info;
  }

  get getUserContactType(): UserContactTypeDto[] | null {
    return this.userContactType;
  }

  get getCompanyGlossary(): CompanyGlossaryItemDto[] | null {
    return this.companyGlossary;
  }

  get getCurrency(): CurrencyType[] | null {
    return this.currency != null ? this.currency?.slice()?.sort((a, b) => (a.id as number) - (b.id as number)) : null;
  }

  getCompanyGlossaryItem = (key: "r") => {
    const glossaryItem = this.companyGlossary?.find((cG) => cG.key == key)?.value ?? "";
    return glossaryItem.trim().length > 0 ? glossaryItem : t("parse:glossary." + key);
  };

  setPermissions(permissions: PermissionDto[]): void {
    this.permissions = permissions;
  }

  setTimezones(timezones: TimeZoneDto[]): void {
    this.timezones = timezones;
  }

  setColors(colors: string[]): void {
    this.colors = colors;
  }

  setInfo(info: MetaInfo | null): void {
    this.info = info;
  }

  setIssueCustomField(field: IIssueCustomField): void {
    if (this.issueCustomField.some((item) => item.type === field.type))
      this.issueCustomField = this.issueCustomField.map((item) => (item.type === field.type ? field : item));
    else this.issueCustomField.push(field);
  }

  setAllRoles(roles: AutocompleteModel[]) {
    this.allRoles = roles;
  }

  setRolesOfAuthUser(roles: AutocompleteModel[]) {
    this.rolesOfAuthUser = roles;
  }

  setUserContactType(contactType: UserContactTypeDto[]) {
    this.userContactType = contactType;
  }

  setCompanyGlossary(companyGlossary: CompanyGlossaryItemDto[] | null) {
    this.companyGlossary = companyGlossary;
  }

  setCurrency(currency: CurrencyType[] | null) {
    this.currency = currency;
  }

  async getPermissionsFromServer(): Promise<boolean> {
    const r = await api.helper.permission();
    if (r) {
      this.setPermissions(r);
      return true;
    } else {
      return false;
    }
  }

  async getTimeZonesFromServer(): Promise<boolean> {
    const r = await api.helper.timezone();
    if (r) {
      this.setTimezones(r);
      return true;
    } else {
      return false;
    }
  }

  async getColorsFromServer(): Promise<boolean> {
    const r = await api.helper.color();
    if (r) {
      this.setColors(r);
      return true;
    } else {
      return false;
    }
  }

  async getInfoFromServer(): Promise<boolean> {
    const r = await api.helper.info(true);
    if (r) {
      this.setInfo(r);
      return true;
    } else {
      return false;
    }
  }

  async getUserContactTypeFromServer(): Promise<boolean> {
    const r = await api.helper.userContactType();
    if (r) {
      this.setUserContactType(r);
      return true;
    } else {
      return false;
    }
  }

  async getCurrencyFromServer(): Promise<boolean> {
    const r = await api.helper.currency();
    if (r) {
      this.setCurrency(r);
      return true;
    } else {
      return false;
    }
  }
}
