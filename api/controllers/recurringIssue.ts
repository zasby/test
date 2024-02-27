import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { RecurringIssueDto } from "../models/RecurringIssueDto";
import { RecurringIssueFilter } from "../filters/recurringIssueFilter";

export class RecurringIssue extends ApiControllerCrud<RecurringIssueDto, RecurringIssueFilter> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "recurringIssue");
  }
}
