import { ApiControllerBase } from "../helpers";
import { AxiosInstance } from "axios";
import { MenuItemDto } from "../models/MenuItemDto";

export class MenuItemController extends ApiControllerBase {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "menuItem");
  }

  public async getPendingStatuses(): Promise<MenuItemDto[] | null> {
    return await this.process(this.get("pending-status"));
  }
}
