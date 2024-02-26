import { AxiosError } from "axios";
import { api } from "../services";
import {
  AuthenticationStrategyByCredentialsModel,
  CompanyDto,
  InitialInfoDto,
  RefreshTokenDto,
  User2CompanyDto,
} from "../api";

import versionCheck from "../plugins/versionCheck";

export const authorizeWithCredentials = async ({
  authModel: AuthenticationStrategyByCredentialsModel,
  owner,
  rootStore,
}: any) => {
  return await api.auth.logIn(
    authModel,
    async (res) => {
      console.log('owner', owner);
      owner.setInviteCode(null);
      // setInviteCode(null);
      owner.setExternalId(null);
      owner.setRefreshToken(res.refreshToken as RefreshTokenDto);
      owner.setAccessToken(res.tokenAccess as string);
      owner.setInitialInfo(res.initialInfo as InitialInfoDto);
      owner.setCurrentCompanyId(res.initialInfo?.identity?.currentCompanyId ?? null);
      await owner.refreshHelpers();
      owner.setCurrentCompanyUiType(
        res.initialInfo?.identity?.companies?.find(
          (c: User2CompanyDto) => c.companyId == owner.initialInfo?.identity?.currentCompanyId
        )?.company?.uiType ?? null
      );
      owner.setCurrentBoardId((owner.initialInfo?.boards ?? [])[0]?.id || null);
      rootStore.helperStore.setCompanyGlossary(
        owner.initialInfo?.identity?.companies?.find(
          (u2c: User2CompanyDto) => u2c.companyId == owner.initialInfo?.identity?.currentCompanyId
        )?.company?.glossary ?? null
      );
      rootStore.orgchartStore.setOrgchartsList(owner.initialInfo?.orgcharts);
      versionCheck();
      return true;
    },
    (error) => {
      console.log('error', error);
      // req = error;
      return error;
    }
  );
};

export const authorizeWithToken = ({
  token: string,
  owner
}) => {
  const resp = await api.auth.logInWithToken({ token });
  if (resp == null) return false;
  // runInAction(() => {
  owner.setRefreshToken(r.refreshToken as RefreshTokenDto);
  owner.setAccessToken(r.tokenAccess as string);
  owner.setInitialInfo(r.initialInfo as InitialInfoDto);
  owner.setCurrentCompanyId(r.initialInfo?.identity?.currentCompanyId ?? null);
  owner.setCurrentCompanyUiType(
    r.initialInfo?.identity?.companies?.find(
      (c: User2CompanyDto) => c.companyId == owner.initialInfo?.identity?.currentCompanyId
    )?.company?.uiType ?? null
  );
  owner.setCurrentBoardId((owner.initialInfo?.boards ?? [])[0]?.id || null);
  owner.refreshHelpers();
  rootStore.helperStore.setCompanyGlossary(
    owner.initialInfo?.identity?.companies?.find(
      (u2c: User2CompanyDto) => u2c.companyId == owner.initialInfo?.identity?.currentCompanyId
    )?.company?.glossary ?? null
  );
  rootStore.orgchartStore.setOrgchartsList(owner.initialInfo?.orgcharts);
  versionCheck();
  // });

  return true;
};