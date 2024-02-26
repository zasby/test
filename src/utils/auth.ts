export const authorizeWithCredentials = async ({
  authModel,
  setInviteCode,
  setExternalId,
  setRefreshToken,
  setAccessToken,
  setInitialInfo,
  setCurrentCompanyId,
}) => {
  await api.auth.logIn(
    authModel,
    async (res) => {
      setInviteCode(null);
      setExternalId(null);
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
      req = error;
      return error;
    }
  );
}