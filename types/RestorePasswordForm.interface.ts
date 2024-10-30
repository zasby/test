export interface IRestorePasswordFormView {
  step: number;
  isLoading: boolean;

  setStep(value: number): void;

  handleSendCode({ email }: { email: string }): void;

  handleReset({ email, code, password }: { email: string; code: string; password: string }): void;
}


export interface IRestoreForm {
  login: string;
  password: string;
  code: string;
}
