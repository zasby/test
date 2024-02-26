import { api } from "../services";
import {
  AuthenticationStrategyByCredentialsModel,
  CompanyDto,
  InitialInfoDto,
  RefreshTokenDto,
  User2CompanyDto,
} from "../api";
import { AxiosError } from "axios";


export const authorizeWithCredentials = async ({
  authModel,
  this,
}: any) => {
  await api.auth.logIn(
    authModel,
    async (res) => {
      this.setInviteCode(null);
      // setInviteCode(null);
      this.setExternalId(null);
      this.setRefreshToken(res.refreshToken as RefreshTokenDto);
      this.setAccessToken(res.tokenAccess as string);
      this.setInitialInfo(res.initialInfo as InitialInfoDto);
      this.setCurrentCompanyId(res.initialInfo?.identity?.currentCompanyId ?? null);
      // await this.refreshHelpers();
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
      return true;
    },
    (error) => {
      // req = error;
      return error;
    }
  );
}