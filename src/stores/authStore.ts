import { rootStore, RootStore } from "./rootStore";
import {
  AuthenticationStrategyByCredentialsModel,
  CompanyDto,
  InitialInfoDto,
  RefreshTokenDto,
  User2CompanyDto,
} from "../api";
import { makeAutoObservable, toJS } from "mobx";
import { AxiosError } from "axios";

import { api } from "../services";
// import versionCheck from "../plugins/versionCheck";
import { LocalStorageHelpers } from "../helpers/localStorageHelpers";
import Interceptors from "../plugins/interceptors";


const localStorageHelpers = LocalStorageHelpers();

export default class AuthStore {
  root: RootStore;
  // Localstorage keys
  private lsKeys = {
    refreshToken: "refreshToken",
    initialInfo: "initialInfo",
    inviteCode: "inviteCode",
    externalId: "externalId",
  };
  private refreshToken: RefreshTokenDto | null;
  private accessToken: string | null;
  private initialInfo: InitialInfoDto | null;
  private currentCompany: CompanyDto | null;
  private currentCompanyId: number | null;
  private currentCompanyUiType: number | null;
  private currentBoardId: number | null;
  private inviteCode: string | null;
  private externalId: string | null;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.refreshToken = localStorageHelpers.get(this.lsKeys.refreshToken) ?? null;
    this.accessToken = null;
    this.initialInfo = localStorageHelpers.get(this.lsKeys.initialInfo) ?? null;
    this.currentCompanyId = this.initialInfo?.identity?.currentCompanyId ?? null;

    this.currentCompany =
      this.initialInfo?.identity?.companies?.find((c) => c.companyId == this.initialInfo?.identity?.currentCompanyId)
        ?.company ?? null;
    this.currentCompanyUiType =
      this.initialInfo?.identity?.companies?.find((c) => c.companyId == this.initialInfo?.identity?.currentCompanyId)
        ?.company?.uiType ?? null;
    this.currentBoardId = (this.initialInfo?.boards ?? [])[0]?.id || null;
    this.inviteCode = localStorageHelpers.get(this.lsKeys.inviteCode) ?? null;
    this.externalId = localStorageHelpers.get(this.lsKeys.externalId) ?? null;
  }

  get getRefreshToken(): RefreshTokenDto | null {
    return this.refreshToken;
  }

  get getAccessToken(): string | null {
    // return toJS(this.accessToken);
    return this.accessToken;
  }

  get getInitialInfo(): InitialInfoDto | null {
    // TODO: Проверить необходимость toJS
    return toJS(this.initialInfo);
  }

  get isAuthorized(): boolean {
    return toJS(this.accessToken) != null && toJS(this.refreshToken) != null;
  }

  get getCurrentCompanyId(): number | null {
    return this.currentCompanyId;
  }

  get getCurrentCompany(): CompanyDto | null {
    return this.currentCompany;
  }

  get getCurrentCompanyUiType(): number | null {
    return this.currentCompanyUiType;
  }

  get getCurrentBoardId(): number | null {
    return this.currentBoardId;
  }

  get getInviteCode(): string | null {
    return this.inviteCode;
  }

  get getExternalId(): string | null {
    return this.externalId;
  }

  setRefreshToken(token: RefreshTokenDto | null): void {
    this.refreshToken = token;
    localStorageHelpers.set(this.lsKeys.refreshToken, token);
  }

  setAccessToken(token: string | null): void {
    // Add timeout to refresh this token
    this.accessToken = token;
  }

  setInitialInfo(initialInfo: InitialInfoDto | null): void {
    console.log('initialInfo', initialInfo);
    this.initialInfo = initialInfo;
    localStorageHelpers.set(this.lsKeys.initialInfo, initialInfo);
    rootStore.boardStore.setBoardId(initialInfo?.boards?.[0]?.id ?? null);
    rootStore.boardStore.fetchBoard(initialInfo?.boards?.[0]?.id ?? null);
    // rootStore.helperStore.setCompanyGlossary(
    //   initialInfo?.identity?.companies?.find(
    //     (u2c: User2CompanyDto) => u2c.companyId == initialInfo?.identity?.currentCompanyId
    //   )?.company?.glossary ?? null
    // );
    // rootStore.orgchartStore.setOrgchartsList(
    //   initialInfo?.orgcharts?.filter((o) => o.companyId == this.getCurrentCompanyId) ?? []
    // );
    // rootStore.orgchartStore.getCurrentOrgchartId != null &&
    //   !rootStore.orgchartStore.getOrgchartsList.some((o) => o.id == rootStore.orgchartStore.getCurrentOrgchartId) &&
    //   rootStore.orgchartStore.setCurrentOrgchartId(
    //     initialInfo?.orgcharts?.filter((o) => o.companyId == this.getCurrentCompanyId)?.[0]?.id
    //   );
  }

  setCurrentCompanyId(companyId: number | null): void {
    this.currentCompanyId = companyId;
    console.log('companyId', companyId);
    // this.setCurrentCompany(
    //   rootStore.authStore.getInitialInfo?.identity?.companies?.find((u2c) => u2c.companyId == companyId)?.company ??
    //     null
    // );
  }

  setCurrentCompany(company: CompanyDto | null): void {
    this.currentCompany = company;
  }

  setCurrentCompanyUiType(uiType: number | null): void {
    this.currentCompanyUiType = uiType ?? null;
  }

  setCurrentBoardId(boardId: number | null) {
    this.currentBoardId = boardId;
  }

  setInviteCode(code: string | null) {
    this.inviteCode = code;
    localStorageHelpers.set(this.lsKeys.inviteCode, code ?? "");
  }

  setExternalId(code: string | null) {
    this.externalId = code;
    localStorageHelpers.set(this.lsKeys.externalId, code ?? "");
  }

  async authorizeWithCredentials(authModel: AuthenticationStrategyByCredentialsModel): Promise<AxiosError | true> {
    let req: AxiosError | true = true;
    // TODO: Add TS to onSuccess
    await api.auth.logIn(
      authModel,
      async (res) => {
        console.log('res', res);
        this.setInviteCode(null);
        this.setExternalId(null);
        this.setRefreshToken(res.refreshToken as RefreshTokenDto);
        this.setAccessToken(res.tokenAccess as string);
        this.setInitialInfo(res.initialInfo as InitialInfoDto);
        this.setCurrentCompanyId(res.initialInfo?.identity?.currentCompanyId ?? null);
        Interceptors.setup(rootStore);
        await this.refreshHelpers();
        // this.setCurrentCompanyUiType(
        //   res.initialInfo?.identity?.companies?.find(
        //     (c: User2CompanyDto) => c.companyId == this.initialInfo?.identity?.currentCompanyId
        //   )?.company?.uiType ?? null
        // );
        // this.setCurrentBoardId((this.initialInfo?.boards ?? [])[0]?.id || null);
        // rootStore.helperStore.setCompanyGlossary(
        //   this.initialInfo?.identity?.companies?.find(
        //     (u2c: User2CompanyDto) => u2c.companyId == this.initialInfo?.identity?.currentCompanyId
        //   )?.company?.glossary ?? null
        // );
        // rootStore.orgchartStore.setOrgchartsList(this.initialInfo?.orgcharts);
        // versionCheck();
      },
      (error) => {
        req = error;
      }
    );
    return req;
  }

  // async authorizeWithToken(token: string): Promise<boolean> {
  //   const r = await api.auth.logInWithToken({ token: token });
  //   if (r == null) return false;
  //   // runInAction(() => {
  //   this.setRefreshToken(r.refreshToken as RefreshTokenDto);
  //   this.setAccessToken(r.tokenAccess as string);
  //   this.setInitialInfo(r.initialInfo as InitialInfoDto);
  //   this.setCurrentCompanyId(r.initialInfo?.identity?.currentCompanyId ?? null);
  //   this.setCurrentCompanyUiType(
  //     r.initialInfo?.identity?.companies?.find(
  //       (c: User2CompanyDto) => c.companyId == this.initialInfo?.identity?.currentCompanyId
  //     )?.company?.uiType ?? null
  //   );
  //   this.setCurrentBoardId((this.initialInfo?.boards ?? [])[0]?.id || null);
  //   this.refreshHelpers();
  //   rootStore.helperStore.setCompanyGlossary(
  //     this.initialInfo?.identity?.companies?.find(
  //       (u2c: User2CompanyDto) => u2c.companyId == this.initialInfo?.identity?.currentCompanyId
  //     )?.company?.glossary ?? null
  //   );
  //   rootStore.orgchartStore.setOrgchartsList(this.initialInfo?.orgcharts);
  //   versionCheck();
  //   // });
  //
  //   return true;
  // }
  //
  // async authorizeWithRefreshToken(): Promise<boolean> {
  //   if (toJS(this.refreshToken) == null) {
  //     await this.unauthorize();
  //     return false;
  //   }
  //   const r = await api.auth.refreshToken(toJS(this.refreshToken) as RefreshTokenDto);
  //
  //   if (r == false || typeof r === "boolean") {
  //     await this.unauthorize();
  //     return false;
  //   }
  //   if (r == null) {
  //     return false;
  //   }
  //   // runInAction(() => {
  //   this.setRefreshToken(r.refreshToken as RefreshTokenDto);
  //   this.setAccessToken(r.tokenAccess as string);
  //   this.setInitialInfo(r.initialInfo as InitialInfoDto);
  //   this.setCurrentCompanyId(r.initialInfo?.identity?.currentCompanyId ?? null);
  //   this.setCurrentCompanyUiType(
  //     r.initialInfo?.identity?.companies?.find(
  //       (c: User2CompanyDto) => c.companyId == this.initialInfo?.identity?.currentCompanyId
  //     )?.company?.uiType ?? null
  //   );
  //   this.setCurrentBoardId((this.initialInfo?.boards ?? [])[0]?.id || null);
  //   this.refreshHelpers();
  //   rootStore.orgchartStore.setOrgchartsList(this.initialInfo?.orgcharts);
  //   versionCheck();
  //   // });
  //   return true;
  // }
  //
  // async refreshAccessTokenWithRefreshToken(): Promise<boolean> {
  //   if (toJS(this.refreshToken) == null) {
  //     await this.unauthorize();
  //     return false;
  //   }
  //   const r = await api.auth.refreshToken(toJS(this.refreshToken) as RefreshTokenDto);
  //   if (r == false || typeof r === "boolean") {
  //     await this.unauthorize();
  //     return false;
  //   }
  //   if (r == null) {
  //     return false;
  //   }
  //   this.setRefreshToken(r.refreshToken as RefreshTokenDto);
  //   this.setAccessToken(r.tokenAccess as string);
  //   this.setInitialInfo(r.initialInfo as InitialInfoDto);
  //   // this.setCurrentCompanyId(r.initialInfo?.identity?.currentCompanyId ?? null);
  //   // this.setCurrentCompanyUiType(
  //   //   r.initialInfo?.identity?.companies?.find(
  //   //     (c: User2CompanyDto) => c.companyId == this.initialInfo?.identity?.currentCompanyId
  //   //   )?.company?.uiType ?? null
  //   // );
  //   return true;
  // }
  //
  // async reauthorizeWithNewCompanyId(companyId: number) {
  //   // rootStore.appStore.setLoading(true);
  //   rootStore.appStore.setCanDrawMainLayout(false);
  //   const currentCompanyIdBackup = this.currentCompanyId;
  //   this.setCurrentCompanyId(companyId);
  //   const r = await api.auth.refreshToken(toJS(this.refreshToken) as RefreshTokenDto);
  //   if (r == null || r == false || typeof r === "boolean") {
  //     this.setCurrentCompanyId(currentCompanyIdBackup);
  //     // rootStore.appStore.setLoading(false);
  //     rootStore.appStore.setCanDrawMainLayout(true);
  //     return false;
  //   }
  //   //rootStore.communicationsStore.resetStore();
  //   rootStore.regulationStore.resetStore();
  //   // Here we can to reset the sockets
  //   this.setInitialInfo(r.initialInfo as InitialInfoDto);
  //   this.setCurrentCompanyUiType(
  //     r.initialInfo?.identity?.companies?.find(
  //       (c: User2CompanyDto) => c.companyId == this.initialInfo?.identity?.currentCompanyId
  //     )?.company?.uiType ?? null
  //   );
  //   this.setRefreshToken(r.refreshToken as RefreshTokenDto);
  //   this.setAccessToken(r.tokenAccess as string);
  //   this.setCurrentBoardId((this.initialInfo?.boards ?? [])[0]?.id || null);
  //   // rootStore.appStore.setLoading(false);
  //   rootStore.appStore.setCanDrawMainLayout(true);
  //   rootStore.helperStore.setCompanyGlossary(null);
  //   rootStore.orgchartStore.setOrgchartsList(this.initialInfo?.orgcharts);
  //   return true;
  // }
  //
  // async unauthorize(): Promise<boolean> {
  //   this.setCurrentCompanyId(null);
  //   this.setCurrentCompanyUiType(null);
  //   this.setInitialInfo(null);
  //   //rootStore.communicationsStore.resetStore();
  //   rootStore.regulationStore.resetStore();
  //   rootStore.helperStore.setCompanyGlossary(null);
  //   this.setRefreshToken(null);
  //   this.setAccessToken(null);
  //   this.setInviteCode(null);
  //   this.setExternalId(null);
  //   return true;
  // // }
  //
  async refreshHelpers(): Promise<void> {
    await this.root.helperStore.getPermissionsFromServer();
    await this.root.helperStore.getTimeZonesFromServer();
    await this.root.helperStore.getColorsFromServer();
    await this.root.helperStore.getCurrencyFromServer();
    await this.root.helperStore.getInfoFromServer();
    await this.root.helperStore.getUserContactTypeFromServer();
  }
  //
  // async refreshInitialInfo(): Promise<void> {
  //   const r = await api.authorized.getInitialInfo();
  //   if (r == null) {
  //     return;
  //   }
  //   this.setInitialInfo(r);
  //   this.setCurrentCompanyId(r.identity?.currentCompanyId ?? null);
  // }
}
