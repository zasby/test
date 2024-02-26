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
  owner,
}: any) => {
  await api.auth.logIn(
    authModel,
    async (res) => {
      console.log('this', owner);
      owner.setInviteCode(null);
      // setInviteCode(null);
      owner.setExternalId(null);
      owner.setRefreshToken(res.refreshToken as RefreshTokenDto);
      owner.setAccessToken(res.tokenAccess as string);
      owner.setInitialInfo(res.initialInfo as InitialInfoDto);
      owner.setCurrentCompanyId(res.initialInfo?.identity?.currentCompanyId ?? null);
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