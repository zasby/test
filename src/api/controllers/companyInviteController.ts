import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { CompanyInviteDto } from "../models/CompanyInviteDto";

export class CompanyInviteController extends ApiControllerCrud<CompanyInviteDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "companyInvite");
  }
}
