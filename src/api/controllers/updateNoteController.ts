import { ApiControllerCrud } from "../helpers";
import { UpdateNoteDto } from "../models/UpdateNoteDto";
import { AxiosInstance } from "axios";
import { UpdateNoteFilter } from "../filters/updateNote";

export class UpdateNoteController extends ApiControllerCrud<UpdateNoteDto, UpdateNoteFilter> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "updateNote");
  }
}
