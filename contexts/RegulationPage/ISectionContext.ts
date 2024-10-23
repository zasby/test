import {
  IeditableSectionForm
} from "../../../components/modules/forms/createRegulationSectionForm/CreateRegulationSectionForm.interface";
import { UserSelectionRule } from "../../api/types/userSelectionRule";
import { AutocompleteModel, RegulationDto } from "../../api";
import {  NavigationMenuItemDto } from "../../api/models/NavigationMenuDto";
import { BreadcrumbsType } from "../../../components/elements/breadcrumbsNew/BreadcrumbsNew.interface";

export interface ISectionContext {
  handleSave: (toEdit?: IeditableSectionForm) => void;
  setNewRegulations: React.Dispatch<React.SetStateAction<AutocompleteModel[]>>;
  newRegulations: AutocompleteModel[];
  userSelectionRules: UserSelectionRule[] | undefined;
  setUserSelectionRules: React.Dispatch<React.SetStateAction<UserSelectionRule[] | undefined>>;

  isRequestLoading: boolean;
  titleSection: string;
  setTitleSection: React.Dispatch<React.SetStateAction<string>>;
  isOpenAccessSettingsDialog: boolean;
  isOpenAssignForStudyDialog: boolean;
  handleOpenAssignForStudyDialog: () => void;
  handleCloseAssignForStudyDialog: () => void;
  handleCloseAccessSettingsDialog: () => void;
  handleOpenAccessSettingsDialog: () => void;
  handleCancel: (toEdit?: IeditableSectionForm) => void;
  breadcrumbsList: BreadcrumbsType[];
  section: NavigationMenuItemDto | null;
  setSection: React.Dispatch<React.SetStateAction<NavigationMenuItemDto | null>>;
  // handlePutAccessSettings;
  isEditable: boolean;
  handleSwitchEditable: () => void;
  handleOffEditable: () => void;
  isOpenConfirmDialog: boolean;
  handleOpenConfirmDialog: () => void;
  handleCloseConfirmDialog: () => void;
  regulationIds: number[];
  setRegulationIds: React.Dispatch<React.SetStateAction<number[]>>;
  navigationMenuItemIds: number[];
  setNavigationMenuItemIds: React.Dispatch<React.SetStateAction<number[]>>;
  isOpenAddingRegulations: boolean;
  handleOpenAddingRegulation: () => void;
  handleCloseAddingRegulation: () => void;
  fetchSection: (id: number) => Promise<void>;
  handleAddedRegulationsToSection: (regulationIds: number[], navigationMenuItemIds: number[]) => Promise<boolean | null>;
  getRegulations: (regulationIds: number[], navigationMenuItemIds: number[]) => Promise<RegulationDto[]>;
  onMove: (id: number, overId?: number) => Promise<void>;
  onRemovalRegulationsFromSection: (id: number, isRegular: boolean) => Promise<boolean | null>;
  onAppointApprover: ( regulationId: number, approverId: number, resetTestResults: boolean, urgency?: string) => Promise<void>;
  handleSubmitForPublish: (id: number) => Promise<boolean | null>;
  handleSubmitForReject: (id: number) => void;
  isLoading: boolean;
  handleClickCreateDocument: () => void;
  handleClickCreateSection: () => void;
}
