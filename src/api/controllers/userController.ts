import { ApiControllerCrud } from "../helpers";
import { UserDto } from "../models/UserDto";
import { AxiosInstance } from "axios";

export class UserController extends ApiControllerCrud<UserDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "user");
  }

  public async leaveCompany(userId: number, companyId: number): Promise<boolean | null> {
    return await this.process(
      this.delete(userId + "/" + companyId),
      (x) => true,
      (x) => false
    );
  }

  public async getTelegramLink(): Promise<string | null> {
    return await this.process(
      this.get("telegram-link"),
      (x) => x,
      (x) => null
    );
  }
}
