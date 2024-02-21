import { ApiControllerGet } from "../helpers";
import { AxiosInstance } from "axios";
import { BoardDto } from "../models/BoardDto";

export class BoardController extends ApiControllerGet<BoardDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "board");
  }
}
