import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { TelephonyNotificationModel } from "../models/TelephonyNotificationModel";

export class TelephonyController extends ApiControllerCrud<TelephonyNotificationModel, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "telephony");
  }

  public async getInternalNumbers(): Promise<{ numbers: number[]; status: string; pbx_id: number } | null> {
    return await this.process(this.get("internalNumbers"));
  }

  public async getWebRTCKey(internalNumber: string | number): Promise<{ key: string; status: string } | null> {
    return await this.process(this.get("webRTCKey", { params: { internalNumber: internalNumber } }));
  }

  public async updateRecordLink(recordId: string | number): Promise<string | null> {
    return await this.process(this.put("updateRecordLink", { params: { recordId: recordId } }));
  }
}
