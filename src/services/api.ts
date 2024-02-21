import { AxiosInstance } from "axios";
import {
  // AdminCompanyController,
  AuthController,
  AuthorizedController,
  // BoardController,
  // CompanyController,
  // CompanyGroupController,
  // CompanyInviteController,
  // ConfirmationController,
  // ControlSessionHistoryController,
  // DashboardController,
  // DriverAdminController,
  // DriverController,
  // EducationController,
  // HelperController,
  // IssueController,
  // IssueHistoryController,
  // IssueScheduleController,
  // IssueShortController,
  // LocalizationController,
  // MenuItemController,
  // MetricController,
  // MetricReadController,
  // MetricSource2UserController,
  // MetricSourceController,
  // NotificationController,
  // OrgchartController,
  // PlanController,
  // PlanHistoryController,
  // PlanShortController,
  // ProjectController,
  // RecurringIssue,
  // RegulationController,
  // RegulationHistoryController,
  // ReportController,
  // RoleController,
  // RolePositionController,
  // SectionController,
  // StaticFileController,
  // TelephonyController,
  // UpdateNoteController,
  // UserController,
  // UserScheduleController,
  // UserShortController,
  // UserWithRegulationStatsController,
} from "../api/controllers";
import { client } from "../plugins/client";
// import { CalendarEventController } from "../api/controllers/calendarEventController";

class Api {
  public auth: AuthController;
  // public user: UserController;
  // public userShort: UserShortController;
  public authorized: AuthorizedController;
  // public companyInvite: CompanyInviteController;
  // public company: CompanyController;
  // public role: RoleController;
  // public rolePosition: RolePositionController;
  // public helper: HelperController;
  // public confirmation: ConfirmationController;
  // public board: BoardController;
  // public issue: IssueController;
  // public issueHistory: IssueHistoryController;
  // public issueShort: IssueShortController;
  // public recurringIssue: RecurringIssue;
  // public staticFile: StaticFileController;
  // public adminCompany: AdminCompanyController;
  // public driver: DriverController;
  // public controlSessionHistory: ControlSessionHistoryController;
  // public driverAdmin: DriverAdminController;
  // public education: EducationController;
  // public report: ReportController;
  // public userSchedule: UserScheduleController;
  // public regulation: RegulationController;
  // public section: SectionController;
  // public userWithRegulationStats: UserWithRegulationStatsController;
  // public regulationHistory: RegulationHistoryController;
  // public companyGroup: CompanyGroupController;
  // public metric: MetricController;
  // public dashboard: DashboardController;
  // public notification: NotificationController;
  // public updateNote: UpdateNoteController;
  // public plan: PlanController;
  // public planShort: PlanShortController;
  // public planHistory: PlanHistoryController;
  // public issueSchedule: IssueScheduleController;
  // public orgchart: OrgchartController;
  // public telephony: TelephonyController;
  // public project: ProjectController;
  // public metricSource2User: MetricSource2UserController;
  // public metricSource: MetricSourceController;
  // public metricRead: MetricReadController;
  // public localization: LocalizationController;
  // public menuItem: MenuItemController;
  // public calendarEvent: CalendarEventController;

  constructor(axios: AxiosInstance) {
    this.auth = new AuthController(axios);
    // this.user = new UserController(axios);
    // this.userShort = new UserShortController(axios);
    this.authorized = new AuthorizedController(axios);
    // this.companyInvite = new CompanyInviteController(axios);
    // this.company = new CompanyController(axios);
    // this.role = new RoleController(axios);
    // this.rolePosition = new RolePositionController(axios);
    // this.helper = new HelperController(axios);
    // this.confirmation = new ConfirmationController(axios);
    // this.board = new BoardController(axios);
    // this.issue = new IssueController(axios);
    // this.issueHistory = new IssueHistoryController(axios);
    // this.issueShort = new IssueShortController(axios);
    // this.recurringIssue = new RecurringIssue(axios);
    // this.staticFile = new StaticFileController(axios);
    // this.adminCompany = new AdminCompanyController(axios);
    // this.driver = new DriverController(axios);
    // this.controlSessionHistory = new ControlSessionHistoryController(axios);
    // this.driverAdmin = new DriverAdminController(axios);
    // this.education = new EducationController(axios);
    // this.report = new ReportController(axios);
    // this.userSchedule = new UserScheduleController(axios);
    // this.regulation = new RegulationController(axios);
    // this.section = new SectionController(axios);
    // this.userWithRegulationStats = new UserWithRegulationStatsController(axios);
    // this.regulationHistory = new RegulationHistoryController(axios);
    // this.companyGroup = new CompanyGroupController(axios);
    // this.metric = new MetricController(axios);
    // this.dashboard = new DashboardController(axios);
    // this.notification = new NotificationController(axios);
    // this.updateNote = new UpdateNoteController(axios);
    // this.plan = new PlanController(axios);
    // this.planShort = new PlanShortController(axios);
    // this.planHistory = new PlanHistoryController(axios);
    // this.issueSchedule = new IssueScheduleController(axios);
    // this.orgchart = new OrgchartController(axios);
    // this.telephony = new TelephonyController(axios);
    // this.project = new ProjectController(axios);
    // this.metricSource2User = new MetricSource2UserController(axios);
    // this.metricSource = new MetricSourceController(axios);
    // this.metricRead = new MetricReadController(axios);
    // this.localization = new LocalizationController(axios);
    // this.menuItem = new MenuItemController(axios);
    // this.calendarEvent = new CalendarEventController(axios);
  }
}

export const api = new Api(client);
