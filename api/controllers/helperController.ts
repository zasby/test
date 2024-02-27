import { AxiosInstance } from "axios";
import { ApiControllerBase } from "../helpers";
import { PermissionDto } from "../models/PermissionDto";
import { CultureDto } from "../models/CultureDto";
import { MetaInfo } from "../models/MetaInfo";
import { IssueCustomFieldDto } from "../models/IssueCustomFieldDto";
import { CompanyModuleTypeDto, CurrencyType, TimeZoneDto, UserContactTypeDto } from "..";
import { IssueType, IssueTypeKeys } from "../../constants/issueTypeKeys";

export class HelperController extends ApiControllerBase {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "helper");
  }

  public async permission(): Promise<PermissionDto[] | null> {
    return await this.process(this.get("permission"));
  }

  public async culture(): Promise<CultureDto[] | null> {
    return await this.process(this.get("culture"));
  }

  public async timezone(): Promise<TimeZoneDto[] | null> {
    return await this.process(this.get("time-zone"));
    // return await this.process(this.get("timezone"));
  }

  public async timezoneCanonical(linkTimeZoneId: string): Promise<{ timeZoneId: string } | null> {
    return await this.process(this.get("time-zone/canonical", { params: { alias: linkTimeZoneId } }));
  }

  public async info(includeSha?: boolean): Promise<MetaInfo | null> {
    return await this.process(this.get("info", { params: { includeSha: includeSha ?? false } }));
  }

  public async color(): Promise<string[] | null> {
    return await this.process(this.get("color"));
  }

  public async currency(): Promise<CurrencyType[] | null> {
    return await this.process(this.get("currency"));
  }

  public async customField(type: IssueType | null = IssueTypeKeys.task): Promise<IssueCustomFieldDto[] | null> {
    return await this.process(this.get(`issue/custom-field?type=${type}`));
  }

  public async userContactType(): Promise<UserContactTypeDto[] | null> {
    return await this.process(this.get("user-contact-type"));
  }

  public async companyModuleType(): Promise<CompanyModuleTypeDto[] | null> {
    return await this.process(this.get("company-module-type"));
  }

  public async editorContent(content: string): Promise<string | null> {
    return await this.process(this.post(`editor-content/format`, { data: content }));
  }
}
