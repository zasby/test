import { ApiControllerGet } from "../helpers";
import { AxiosInstance } from "axios";
import { NotificationDto } from "../models/NotificationDto";
import { NotificationFilter } from "../filters/notificationFilter";

interface INotificationControllerSetIsReadParams {
  id?: number;
  setRead?: boolean;
  baseType?: 1 | 2;
  issueId?: number;
  regulationId?: number;
  sectionId?: number;
  companyId?: number;
}

export class NotificationController extends ApiControllerGet<NotificationDto, NotificationFilter> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "notification");
  }

  public async setIsRead(params: INotificationControllerSetIsReadParams): Promise<boolean | null> {
    return await this.process(this.get("proceed", { params }));
  }
}
