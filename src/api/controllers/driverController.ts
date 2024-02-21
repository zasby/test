import { ApiControllerBase } from "../helpers";
import { AxiosError, AxiosInstance } from "axios";
import { DriverCardDto } from "../models/DriverCardDto";
import { DriverCardCalculatedDto } from "../models/DriverCardCalculatedDto";

export class DriverController extends ApiControllerBase {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "driver");
  }

  public async next(onError?: (error: AxiosError) => void): Promise<DriverCardDto | null> {
    return await this.process(this.get("next"), undefined, onError);
  }

  public async proceed(controlSessionId: number): Promise<DriverCardDto | null> {
    return await this.process(this.get(controlSessionId + "/proceed"));
  }

  public async calculated(controlSessionId: number): Promise<DriverCardCalculatedDto | null> {
    return await this.process(this.get(controlSessionId + "/calculated"));
  }

  public async getById(id: number): Promise<DriverCardDto | null> {
    return await this.process(this.get(id.toString()));
  }

  public async getCardsInQueueCount(): Promise<number | null> {
    return await this.process(this.get("queue/count"));
  }

  public async call(phoneNumber: string): Promise<boolean | null> {
    return await this.process(
      this.get("call/" + phoneNumber),
      (x) => true,
      (x) => false
    );
  }
}
