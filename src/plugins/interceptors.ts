import { AxiosRequestConfig } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { rootStore, RootStore } from "../stores/rootStore";
import { client } from "./client";

interface IInterceptorsParams {
  accessToken?: string;
  companyId?: number;
  appLocale?: string;
}

const getRefreshToken = () => {
  return rootStore.authStore.getAccessToken;
};

export default {
  setup: (store: RootStore, params?: IInterceptorsParams) => {
    console.log('RootStore', store);
    client.interceptors.request.use((config: AxiosRequestConfig) => {
      console.log('config', config);
      if (config && config.headers) {
        // SET ACCESS TOKEN HEADER
        console.log('store.authStore.getAccessToken', store.authStore.getAccessToken);
        if (params?.accessToken != null) {
          // params.accessToken
          config.headers.Authorization = "Bearer " + getRefreshToken();
        } else if (store.authStore.getAccessToken) {
          // store.authStore.getAccessToken
          config.headers.Authorization = "Bearer " + getRefreshToken();
        }

        // SET COMPANY ID HEADER
        if (params?.companyId != null) {
          config.headers.CurrentCompanyId = params.companyId.toString();
        } else if (store.authStore.getCurrentCompanyId) {
          config.headers.CurrentCompanyId = store.authStore.getCurrentCompanyId.toString();
        }

        // SET APP LOCALE HEADER
        // if (params?.appLocale != null) {
        //   config.headers.Culture = params.appLocale.toString();
        // } else if (store.appStore.getAppLocale) {
        //   config.headers.Culture = store.appStore.getAppLocale.toString();
        // }
      }
      return config;
    });
  },
};

const refreshAuthLogic = async (failedRequest: any) => {
  console.warn("Detected 401 (Unauthorized). Trying to refresh the token");
  // await rootStore.authStore.authorizeWithRefreshToken();
  // failedRequest.response.config.headers["Authorization"] = `Bearer ${getRefreshToken()}`;
  // return Promise.resolve();
};

createAuthRefreshInterceptor(client, refreshAuthLogic, { pauseInstanceWhileRefreshing: false });