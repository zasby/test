import { useNavigate } from "react-router-dom";
import { Form } from "antd";
import { useEffect } from "react";
import { ISignupFormView } from "../../types";

export const useSignupFormView = (props: ISignupFormView) => {

  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleClickGoToLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (props.step == 0) {
      if ((form.getFieldsValue()?.code ?? "").length > 0) {
        form.submit();
      }
    }
  }, [form]);

  return {
    form,
    handleClickGoToLogin,
  }
}
