import NotifierStore from "./notifierStore";
import AuthStore from "./authStore";
import AppStore from "./appStore";
import HelperStore from "./helperStore";
import BoardStore from "./boardStore";
import { makeAutoObservable } from "mobx";
import { HintStore } from "./hintStore";
import { RegulationStore } from "./regulationStore";
import BreadcrumbsStore from "./breadcrumbsStore";
import GroupCompanyStore from "./groupCompanyStore";
import { IssueInitDataStore } from "./issueInitDataStore";
import OrgchartStore from "./orgchartStore";
import DevStore from "./devStore";
import CommunicationStore from "./communicationStore";
import CommunicationCalendarPlanningStore from "./communicationCalendarPlanningStore";

export class RootStore {
  notifierStore: NotifierStore;
  authStore: AuthStore;
  appStore: AppStore;
  helperStore: HelperStore;
  boardStore: BoardStore;
  hintStore: HintStore;
  regulationStore: RegulationStore;
  breadcrumbsStore: BreadcrumbsStore;
  groupCompanyStore: GroupCompanyStore;
  issueInitDataStore: IssueInitDataStore;
  orgchartStore: OrgchartStore;
  devStore: DevStore;
  communicationStore: CommunicationStore;
  communicationCalendarPlanningStore: CommunicationCalendarPlanningStore;

  constructor() {
    console.log('RootStore');
    makeAutoObservable(this);
    this.notifierStore = new NotifierStore(this);
    this.authStore = new AuthStore(this);
    this.appStore = new AppStore(this);
    this.helperStore = new HelperStore(this);
    this.boardStore = new BoardStore(this);
    this.hintStore = new HintStore(this);
    this.regulationStore = new RegulationStore(this);
    this.breadcrumbsStore = new BreadcrumbsStore(this);
    this.groupCompanyStore = new GroupCompanyStore(this);
    this.issueInitDataStore = new IssueInitDataStore(this);
    this.orgchartStore = new OrgchartStore(this);
    this.devStore = new DevStore(this);
    this.communicationStore = new CommunicationStore(this);
    this.communicationCalendarPlanningStore = new CommunicationCalendarPlanningStore(this);
  }
}

// To access outside of react context
export const rootStore = new RootStore();
