export interface ILoginFormView {
  isLoading: boolean;
  handleLogin: ({ login, password }: { login: string; password: string }) => void;
}
