import {
  RegulationContentDto,
  RegulationContentQuestionDto,
  RegulationDto,
  SectionDto,
  UserShortDto,
} from "../api";
import React from "react";
import { regulationContentType } from "../constants/headerTools";
import { allowsRegulationKeys } from "../constants/consts";
import { NavigationMenuItemDto } from "../api/models/NavigationMenuDto";
import {
  IeditableSectionForm
} from "../../components/modules/forms/createRegulationSectionForm/CreateRegulationSectionForm.interface";

export interface IMainRegulation {
  regulationContentType: regulationContentType;
}

export interface IRegulationContent {
  isLoading: boolean;
  isTestPass?: boolean;
  allowedActions?: allowsRegulationKeys[] | null;
  testIsPassed: boolean;
  isDraft: boolean;
  isLoadingStudyBtn: boolean;
  draftTitle: string;
  countQuestions: number;
  testRef: React.MutableRefObject<{ test: RegulationContentQuestionDto[]; hasChanges: boolean }>;
  regulation?: RegulationDto;
  editableTest: RegulationContentQuestionDto[];
  draftContent?: RegulationContentDto;
  currentContent?: RegulationContentDto;
  onChangeDraftContent: (newContent: string, withoutUpdateChangesFlag?: boolean) => void;
  onChangeTitle: (newValue: string, withoutUpdateChangesFlag?: boolean) => void;
  isEditable: boolean;
  onStudyRegulation: () => void;
  onOpenTestPassDialog: () => void;
  onOpenSelectApproverDialog: () => void;
  onSetHasDraftTestChanges: (value: boolean) => void;
  usersWhoStudied: UserShortDto[];
  usersToStudy: UserShortDto[];
  usersWhoStudiedTotalItems: number;
  usersToStudyTotalItems: number;
  usersWhoStudiedLoadNext: () => void;
  usersToStudyLoadNext: () => void;
  usersWhoStudiedIsDone: boolean;
  usersToStudyIsDone: boolean;
  onOpenRequestChangeAccessTypeDialog?: () => void;
}

export interface ISectionContent {
  section: NavigationMenuItemDto | null;
  isEditable: boolean;
  creator?: UserShortDto;
  isLoading: boolean;
  onOffEditable: () => void;
  onRedirectToRegulation: (regulationId: number) => void;
  toEdit?: IeditableSectionForm;

  onMove: (id: number, overId?: number) => void;
  onRemovalRegulationsFromSection: (id: number, isRegular: boolean) => void;
  onAppointApprover: (
    regulationId: number,
    approverId: number,
    resetTestResults: boolean,
    urgency?: string
  ) => void;
  handleSubmitForPublish: (id: number) => void;
  handleSubmitForReject: (id: number) => void;
  onOpenRequestChangeAccessTypeDialog?: () => void;
}
