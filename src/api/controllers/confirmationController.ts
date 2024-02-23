import { ApiControllerBase } from "../helpers";
import { AxiosInstance } from "axios";
import { ConfirmationValidateCommand } from "../models/ConfirmationValidateCommand";

export class ConfirmationController extends ApiControllerBase {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "confirmation");
  }

  public async confirmCode(model: ConfirmationValidateCommand): Promise<boolean | null> {
    return await this.process(this.put("", { data: model }));
  }

  public async resetPasswordSendCode(): Promise<boolean | null> {
    return await this.process(
      this.get("email"),
      () => true,
      () => false
    );
  }
}
