import { NavigationMenuItemDto } from "../api/models/NavigationMenuDto";
import { UserSelectionRule } from "../api/types/userSelectionRule";
import { AutocompleteModel } from "../api";


export interface IeditableSectionForm {
  isEdit: boolean;
  // currentRegulations: AutocompleteModel[];
  sectionTitle: string;
  onCancel: () => void;
  section?: NavigationMenuItemDto;
  userSelectionRules: UserSelectionRule[];
}

export interface ICreateRegulationSectionForm {
  toEdit?: IeditableSectionForm;
  section?: NavigationMenuItemDto;
  addedRegulations?: (regulations: NavigationMenuItemDto[]) => void;
  removeRegulation?: (id: number) => void;
}
export interface ICreateRegulationSectionFormView {
  section: NavigationMenuItemDto | undefined;
  isEdit: boolean;
  isLoading: boolean;
  isRequestLoading: boolean;
  regulationsIsUploaded: boolean;
  isChanged: boolean;
  sections: AutocompleteModel[];
  commonRegulations: AutocompleteModel[];
  newRegulations: AutocompleteModel[];
  activeSectionIdFilter?: number;
  regulationSearchValue: string;
  titleSection: string;
  onOpenDialog: () => void;
  onChangeRegulationSearchValue: (newValue: string) => void;
  onChangeTitleSection: (newValue: string) => void;
  onAppendNewRegulation: (ids: number[]) => void;
  onRemoveNewRegulation: (id: number) => void;
  onChangeActiveSectionFilter: (newValue: number) => void;
  onRedirectToCreateSection: () => void;
  onResetNewRegulations: () => void;
  onLoadNextRegulations: () => void;
  onSave: () => void;
  totalItems: number;
  onOpenAddingRegulation: () => void;
  onMoveRegulations: (ids: number[]) => void;
}
export interface ITransferRegulationsList {
  isLoading: boolean;
  regulationSearchValue: string;
  activeSectionIdFilter?: number;
  regulationsIsUploaded: boolean;
  commonRegulations: AutocompleteModel[];
  newRegulations: AutocompleteModel[];
  sections: AutocompleteModel[];
  onChangeRegulationSearchValue: (newValue: string) => void;
  onRedirectToCreateSection: () => void;
  onAppendNewRegulation: (ids: number[]) => void;
  onRemoveNewRegulation: (ids: number[]) => void;
  onLoadNextRegulations: () => void;
  onChangeActiveSectionFilter: (newValue: number) => void;
  onResetNewRegulations: () => void;
  onSave: () => void;
  totalItems: number;
}
