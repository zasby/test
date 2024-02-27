import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { StaticFileDto } from "../models/StaticFileDto";

export class StaticFileController extends ApiControllerCrud<StaticFileDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "staticFile");
  }

  public async upload(
    data: FormData | FormData[],
    type: "image" | "file" | "audio" = "file",
    onUploadProgress?: (progressEvent: any) => void
  ): Promise<StaticFileDto[] | null> {
    return await this.process(
      this.post("range", { data: data, params: { type: type }, onUploadProgress: onUploadProgress })
    );
  }
}
