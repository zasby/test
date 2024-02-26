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
  setInviteCode,
  setExternalId,
  setRefreshToken,
  setAccessToken,
  setInitialInfo,
  setCurrentCompanyId,
  owner,
}: any) => {
  await api.auth.logIn(
    authModel,
    async (res) => {
      console.log('res', res);
      console.log('this', this);
      console.log('owner', owner);
      owner.setInviteCode(null);
      // setInviteCode(null);
      setExternalId(null);
      owner.setInviteCode(null);
      setRefreshToken(res.refreshToken as RefreshTokenDto);
      setAccessToken(res.tokenAccess as string);
      setInitialInfo(res.initialInfo as InitialInfoDto);
      setCurrentCompanyId(res.initialInfo?.identity?.currentCompanyId ?? null);
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