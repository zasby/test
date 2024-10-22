import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { PlanDto } from "../models/PlanDto";
import { PlanStatusTypeDto } from "../models/PlanStatusTypeDto";
import { IssueShortDtoPagingModel } from "../models/IssueShortDtoPagingModel";
import { IssueDtoPagingModel } from "../models/IssueDtoPagingModel";
import { IssueDto } from "../models/IssueDto";
import { PlanUpdateStatus } from "../../types/PlanningPageMainContent.interface";

export class PlanController extends ApiControllerCrud<PlanDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "plan");
  }

  public async status(): Promise<PlanStatusTypeDto[] | null> {
    return await this.process(
      this.get("status"),
      (s) => s,
      () => null
    );
  }

  public async migrateIssues(toId: number): Promise<PlanDto | null> {
    return await this.process(
      this.post(`${toId}/migrate-issues`),
      (s) => s,
      () => null
    );
  }

  public async fetchIncompleteIssues(page?: number, pageSize?: number): Promise<IssueShortDtoPagingModel | null> {
    return await this.process(
      this.get(`incomplete-issues`, {
        params: {
          page: page ?? 1,
          pageSize: pageSize ?? 10,
        }
      }),
      (s) => s,
      () => null
    );
  };

  public async fetchUnassignedIssues(page?: number, pageSize?: number): Promise<IssueShortDtoPagingModel | null> {
    return await this.process(
      this.get(`unassigned-issues`, {
        params: {
          page: page ?? 1,
          pageSize: pageSize ?? 10,
        }
      }),
      (s) => s,
      () => null
    );
  };

  public async fetchAssignedIssues(planId: number, page?: number, pageSize?: number): Promise<IssueDtoPagingModel | null> {
    return await this.process(
      this.get(`${planId}/assigned-issues`, {
        params: {
          page: page ?? 1,
          pageSize: pageSize ?? 10,
        }
      }),
      (s) => s,
      () => null
    );
  };

  public async fetchIssues(planId: number, page?: number, pageSize?: number): Promise<IssueDto[] | null> {
    return await this.process(
      this.get(`${planId}/issues`, {
        params: {
          page: page ?? 1,
          pageSize: pageSize ?? -1,
        }
      }),
      (s) => s,
      () => null
    );
  };


  public async addedIssueToPlan(planId: number, issueId: number): Promise<IssueDto[] | null> {
    return await this.process(
      this.post(`${planId}/issue`, { params: { issueId } }),
      (s) => s,
      () => null
    );
  };

  public async submitForApproval(planId: number, userPublisherId?: number): Promise<any | null> {
    return await this.process(
      this.post(`${planId}/submit-for-approval`, { params: { userPublisherId } }),
      (s) => s,
      () => null
    );
  };

  public async updatePlanStatus(planId: number, updatedStatus: PlanUpdateStatus): Promise<any | null> {
    return await this.process(
      this.post(`${planId}/review`, { params: { updatedStatus } }),
      (s) => s,
      () => null
    );
  };

  public async deleteIssueFromPlan(planId: number, issueId: number): Promise<any | null> {
    return await this.process(
      this.delete(`${planId}/issue`, { params: { issueId } }),
      (s) => s,
      () => null
    );
  };
}
