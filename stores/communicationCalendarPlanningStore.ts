import { RootStore } from "./rootStore";
import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { CalendarPlanningCalendarViewType } from "../types";


export default class CommunicationCalendarPlanningStore {
  root: RootStore;
  calendarViewType: CalendarPlanningCalendarViewType;
  isSidebarOpen: boolean;
  dateFrom: Date;
  dateTo: Date;
  maxDropDate: Date | null;
  onGoToToday: () => void;
  onGoToPrevious: () => void;
  onGoToNext: () => void;
  onSidebarReload: (item: any) => void;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.calendarViewType = CalendarPlanningCalendarViewType.WEEK;
    this.isSidebarOpen = true;
    this.dateFrom = new Date();
    this.dateTo = new Date();
    this.maxDropDate = null;
    this.onGoToToday = () => undefined;
    this.onGoToPrevious = () => undefined;
    this.onGoToNext = () => undefined;
    this.onSidebarReload = () => undefined;

    makePersistable(this, {
      name: "communicationCalendarPlanningStore",
      properties: ["calendarViewType", "isSidebarOpen"],
      storage: window.localStorage,
    });
  }

  get getCalendarViewType(): CalendarPlanningCalendarViewType {
    return this.calendarViewType;
  }

  get getIsSidebarOpen(): boolean {
    return this.isSidebarOpen;
  }

  get getOnGoToToday(): () => void {
    return this.onGoToToday;
  }

  get getDateFrom(): Date {
    return this.dateFrom;
  }

  get getDateTo(): Date {
    return this.dateTo;
  }

  get getOnGoToPrevious(): () => void {
    return this.onGoToPrevious;
  }

  get getOnGoToNext(): () => void {
    return this.onGoToNext;
  }

  get getOnSidebarReload(): (b: boolean) => void {
    return this.onSidebarReload;
  }

  get getMaxDropDate(): Date | null {
    return this.maxDropDate;
  }

  setCalendarViewType(value: CalendarPlanningCalendarViewType) {
    this.calendarViewType = value;
  }

  setIsSidebarOpen(value: boolean) {
    this.isSidebarOpen = value;
  }

  setOnGoToToday(value: () => void) {
    this.onGoToToday = value;
  }

  setOnGoToPrevious(value: () => void) {
    this.onGoToPrevious = value;
  }

  setOnGoToNext(value: () => void) {
    this.onGoToNext = value;
  }

  setDateFrom(value: Date) {
    this.dateFrom = value;
  }

  setDateTo(value: Date) {
    this.dateTo = value;
  }

  setOnSidebarReload(value: (item: any) => void) {
    this.onSidebarReload = value;
  }

  setMaxDropDate(value: Date | null) {
    this.maxDropDate = value;
  }
}
