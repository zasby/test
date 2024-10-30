import { CompanyShortDto } from "../api";

export interface ISignupFormView {
  step: number;
  companyData: CompanyShortDto;
  isLoading: boolean;
  setStep(value: number): void;
  handleCodeCheck({ code }: { code: string }): void;
  handleSignup({ code, email, password }: { code: string; email: string; password: string }): void;
}
