import { IRestoreForm, IRestorePasswordFormView } from "../../types";

export const useRestorePasswordFormView = (props: IRestorePasswordFormView) => {
  const handleSubmitForm = (values: IRestoreForm) => {
    props.step == 0
      ? props.handleSendCode({ email: values.login })
      : props.handleReset({ email: values.login, password: values.password, code: values.code });
  }

  return {
    handleSubmitForm,
  }
}
