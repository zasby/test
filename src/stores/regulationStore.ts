import { makeAutoObservable, runInAction } from "mobx";
import {
  AutocompleteModel,
  AutocompleteModelPagingModel,
  MenuItemDto,
  PagingOptions,
  RegulationDto,
  SectionDto,
} from "../api";
import { RegulationFilter } from "../api/filters/regulationFilter";
import { SectionFilter } from "../api/filters/sectionFilter";
import { api } from "../services";
import { RootStore } from "./rootStore";

interface IPagingOptions {
  page: number;
  pageIsLast: boolean;
}

export default class RegulationStore {
  root: RootStore;

  private sections: SectionDto[];
  private regulations: RegulationDto[];

  private autocompleteSections: AutocompleteModel[];
  private autocompleteRegulations: AutocompleteModel[];

  private regulationPagingOptions: IPagingOptions;
  private sectionPagingOptions: IPagingOptions;

  private regulationAutocompletePagingOptions: IPagingOptions;
  private sectionAutocompletePagingOptions: IPagingOptions;

  private regulationFilters: RegulationFilter & PagingOptions;
  private sectionsFilters: SectionFilter & PagingOptions;

  private regulationAutocompleteFilters: RegulationFilter & PagingOptions;
  private sectionsAutocompleteFilters: SectionFilter & PagingOptions;

  private pageTabs: MenuItemDto[];

  private loading: boolean;
  private autocompleteLoading: boolean;

  private onError?: () => void;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
    this.sections = [];
    this.regulations = [];
    this.autocompleteSections = [];
    this.autocompleteRegulations = [];
    this.regulationPagingOptions = { page: 1, pageIsLast: false };
    this.sectionPagingOptions = { page: 1, pageIsLast: false };
    this.regulationAutocompletePagingOptions = { page: 1, pageIsLast: false };
    this.sectionAutocompletePagingOptions = { page: 1, pageIsLast: false };
    this.regulationFilters = { pageSize: 10 };
    this.sectionsFilters = { pageSize: 10 };
    this.regulationAutocompleteFilters = { pageSize: 10 };
    this.sectionsAutocompleteFilters = { pageSize: 40 };
    this.pageTabs = [];
    this.loading = false;
    this.autocompleteLoading = false;
  }

  get getAutocompleteLoading(): boolean {
    return this.autocompleteLoading;
  }

  get getLoading(): boolean {
    return this.loading;
  }

  get getSections(): SectionDto[] {
    return this.sections;
  }

  get getRegulations(): RegulationDto[] {
    return this.regulations;
  }

  get getSectionsFilters(): SectionFilter & PagingOptions {
    return this.sectionsFilters;
  }

  get getRegulationsFilters(): RegulationFilter & PagingOptions {
    return this.regulationFilters;
  }

  get getRegulationPagingOptions(): IPagingOptions {
    return this.regulationPagingOptions;
  }

  get getSectionPagingOptions(): IPagingOptions {
    return this.sectionPagingOptions;
  }

  get getRegulationAutocompletePagingOptions(): IPagingOptions {
    return this.regulationAutocompletePagingOptions;
  }

  get getSectionAutocompletePagingOptions(): IPagingOptions {
    return this.sectionAutocompletePagingOptions;
  }

  get getPageTabs(): MenuItemDto[] {
    return this.pageTabs;
  }

  get getAutocompleteRegulations(): AutocompleteModel[] {
    return this.autocompleteRegulations;
  }

  get getAutocompleteSections(): AutocompleteModel[] {
    return this.autocompleteSections;
  }

  get getAutocompleteRegulationFilters(): RegulationFilter & PagingOptions {
    return this.regulationAutocompleteFilters;
  }

  get getAutocompleteSectionFilters(): AutocompleteModelPagingModel & PagingOptions {
    return this.sectionsAutocompleteFilters;
  }

  setLoading(newValue: boolean): void {
    runInAction(() => {
      this.loading = newValue;
    });
  }

  setAutocompleteLoading(newValue: boolean): void {
    runInAction(() => {
      this.autocompleteLoading = newValue;
    });
  }

  setSections(newSections: SectionDto[], withPrev?: boolean): void {
    runInAction(() => {
      if (withPrev) this.sections.push(...newSections);
      else this.sections = newSections;
    });
  }

  setRegulations(newRegulations: RegulationDto[], withPrev?: boolean): void {
    runInAction(() => {
      if (withPrev) this.regulations.push(...newRegulations);
      else this.regulations = newRegulations;
    });
  }

  setSectionsFilters(newFilters: SectionFilter & PagingOptions): void {
    runInAction(() => {
      this.sectionsFilters = { ...this.sectionsFilters, ...newFilters };
    });
  }

  setRegulationsFilters(newFilters: RegulationFilter & PagingOptions): void {
    runInAction(() => {
      this.regulationFilters = { ...this.regulationFilters, ...newFilters };
    });
  }

  setRegulationPagingOptions(newOptions: IPagingOptions) {
    runInAction(() => {
      this.regulationPagingOptions = { ...this.regulationPagingOptions, ...newOptions };
    });
  }

  setSectionPagingOptions(newOptions: IPagingOptions) {
    runInAction(() => {
      this.sectionPagingOptions = { ...this.sectionPagingOptions, ...newOptions };
    });
  }

  setRegulationAutocompletePagingOptions(newOptions: IPagingOptions) {
    runInAction(() => {
      this.regulationAutocompletePagingOptions = { ...this.regulationAutocompletePagingOptions, ...newOptions };
    });
  }

  setSectionAutocompletePagingOptions(newOptions: IPagingOptions) {
    runInAction(() => {
      this.sectionAutocompletePagingOptions = { ...this.sectionAutocompletePagingOptions, ...newOptions };
    });
  }

  setPageTabs(newTabs: MenuItemDto[]) {
    runInAction(() => {
      this.pageTabs = newTabs;
    });
  }

  setRegulationsAutoComplete(newRegulations: AutocompleteModel[], withPrev?: boolean): void {
    const currentRegulations = !!withPrev ? [...this.getAutocompleteRegulations, ...newRegulations] : newRegulations;
    runInAction(() => {
      this.autocompleteRegulations = currentRegulations;
    });
  }

  setSectionsAutoComplete(newSections: AutocompleteModel[], withPrev?: boolean): void {
    const currentSections = !!withPrev ? [...this.getAutocompleteSections, ...newSections] : newSections;
    runInAction(() => {
      this.autocompleteSections = currentSections;
    });
  }

  setAutocompleteRegulationFilters(newFilters: RegulationFilter & PagingOptions): void {
    runInAction(() => {
      this.regulationAutocompleteFilters = { ...this.getAutocompleteRegulationFilters, ...newFilters };
    });
  }

  setAutocompleteSectionFilters(newFilters: SectionFilter & PagingOptions): void {
    runInAction(() => {
      this.sectionsAutocompleteFilters = { ...this.getAutocompleteSectionFilters, ...newFilters };
    });
  }

  setOnError(onError: () => void) {
    this.onError = onError;
  }

  resetRegulationAndSection(): void {
    this.setRegulations([]);
    this.setSections([]);
    this.setSectionPagingOptions({ page: 1, pageIsLast: false });
    this.setRegulationPagingOptions({ page: 1, pageIsLast: false });
    this.regulationFilters = {};
    this.sectionsFilters = {};
  }

  resetRegulationAutocompleteOptions(): void {
    this.setRegulationAutocompletePagingOptions({ page: 1, pageIsLast: false });
    // this.regulationAutocompleteFilters = { pageSize: 10, currentStatusKey: 3 };
    this.regulationAutocompleteFilters = { pageSize: 10 };
  }

  resetSectionsAutocompleteOptions(): void {
    this.setSectionAutocompletePagingOptions({ page: 1, pageIsLast: false });
    this.sectionsAutocompleteFilters = { pageSize: 40 };
  }

  resetStore(): void {
    runInAction(() => {
      this.resetRegulationAndSection();
      this.setRegulationsAutoComplete([]);
      this.setSectionsAutoComplete([]);
      this.resetRegulationAutocompleteOptions();
      this.resetSectionsAutocompleteOptions();
      this.setPageTabs([]);
    });
  }

  async fetchNextPageRegulations() {
    if (!this.getRegulationPagingOptions?.pageIsLast) {
      this.setLoading(true);
      api.regulation
        .getAll({
          ...this.getRegulationsFilters,
          page: this.getRegulationPagingOptions.page,
        })
        .then((res) => {
          if (res?.items) {
            const isLastPage = this.getRegulations.length + res.items.length >= res.totalItems!;
            this.setRegulations(res.items, true);
            this.setRegulationPagingOptions({
              page: this.getRegulationPagingOptions.page + 1,
              pageIsLast: isLastPage,
            });
          }
        })
        .catch(() => this.onError && this.onError())
        .finally(() => this.setLoading(false));
    }
  }

  async fetchNextPageSections() {
    if (!this.getSectionPagingOptions?.pageIsLast) {
      this.setLoading(true);
      api.section
        .getAll({ ...this.getSectionsFilters, page: this.getSectionPagingOptions.page })
        .then((res) => {
          if (res?.items) {
            const isLastPage = this.getSections.length + res.items.length >= res.totalItems!;
            this.setSections(res.items, true);
            this.setSectionPagingOptions({
              page: this.getSectionPagingOptions.page + 1,
              pageIsLast: isLastPage,
            });
          }
        })
        .catch(() => this.onError && this.onError())
        .finally(() => this.setLoading(false));
    }
  }

  async fetchNextPageRegulationAutocomplete() {
    if (!this.getRegulationAutocompletePagingOptions?.pageIsLast) {
      this.setAutocompleteLoading(true);
      api.regulation
        .autocomplete({
          ...this.getAutocompleteRegulationFilters,
          page: this.getRegulationAutocompletePagingOptions.page,
        })
        .then((res) => {
          if (res?.items) {
            const isLastPage = this.getAutocompleteRegulations.length + res.items.length >= res.totalItems!;
            this.setRegulationsAutoComplete(res.items, true);
            this.setRegulationAutocompletePagingOptions({
              page: this.getRegulationAutocompletePagingOptions.page + 1,
              pageIsLast: isLastPage,
            });
          }
        })
        .catch(() => this.onError && this.onError())
        .finally(() => this.setAutocompleteLoading(false));
    }
  }

  async fetchNextPageSectionAutocomplete() {
    if (!this.getSectionAutocompletePagingOptions?.pageIsLast) {
      this.setAutocompleteLoading(true);
      api.section
        .autocomplete({
          ...this.getAutocompleteSectionFilters,
          page: this.getSectionAutocompletePagingOptions.page,
        })
        .then((res) => {
          if (res?.items) {
            const isLastPage = this.getAutocompleteSections.length + res.items.length >= res.totalItems!;
            this.setSectionsAutoComplete(res.items, true);
            this.setSectionAutocompletePagingOptions({
              page: this.getSectionPagingOptions.page + 1,
              // pageIsLast: res.items.length <= pageSize
              pageIsLast: isLastPage,
            });
          }
        })
        .catch(() => this.onError && this.onError())
        .finally(() => this.setAutocompleteLoading(false));
    }
  }

  async initialFetchRegulations(force?: boolean) {
    if (this.getRegulations.length === 0 || force) {
      this.setLoading(true);
      api.regulation
        .getAll(this.getRegulationsFilters)
        .then((res) => {
          if (res?.items) {
            const pageSize = this.getRegulationsFilters.pageSize ?? 10;
            this.setRegulations(res?.items);
            this.setRegulationPagingOptions({
              page: this.regulationPagingOptions.page + 1,
              pageIsLast: res.items.length < pageSize,
            });
          }
        })
        .catch(() => this.onError && this.onError())
        .finally(() => this.setLoading(false));
    }
  }

  async initialFetchSections(force?: boolean) {
    if (this.getSections.length === 0 || force) {
      this.setLoading(true);
      api.section
        .getAll(this.getSectionsFilters)
        .then((res) => {
          if (res?.items) {
            const pageSize = this.getSectionsFilters.pageSize ?? 10;
            this.setSections(res.items);
            this.setSectionPagingOptions({
              page: this.getSectionPagingOptions.page + 1,
              pageIsLast: res.items.length < pageSize,
            });
          }
        })
        .catch(() => this.onError && this.onError())
        .finally(() => this.setLoading(false));
    }
  }

  async initialFetchRegulationAutocomplete(forceReload?: boolean) {
    if (this.getAutocompleteRegulations?.length === 0 || !!forceReload) {
      this.setAutocompleteLoading(true);
      api.regulation
        .autocomplete(this.getAutocompleteRegulationFilters)
        .then((res) => {
          if (res?.items) {
            const pageSize = this.getAutocompleteRegulationFilters.pageSize ?? 10;
            this.setRegulationsAutoComplete(res.items);
            this.setRegulationAutocompletePagingOptions({
              page: this.getRegulationAutocompletePagingOptions.page + 1,
              pageIsLast: res.items.length < pageSize,
            });
          }
        })
        .catch(() => this.onError && this.onError())
        .finally(() => this.setAutocompleteLoading(false));
    }
  }

  async initialFetchSectionAutocomplete(forceReload?: boolean) {
    if (this.getAutocompleteSections?.length === 0 || !!forceReload) {
      this.setAutocompleteLoading(true);
      api.section
        .autocomplete(this.getAutocompleteSectionFilters)
        .then((res) => {
          if (res?.items) {
            const pageSize = this.getAutocompleteSectionFilters.pageSize ?? 10;
            this.setSectionsAutoComplete(res.items);
            this.setSectionAutocompletePagingOptions({
              page: this.getSectionAutocompletePagingOptions.page + 1,
              pageIsLast: res.items.length < pageSize,
            });
          }
        })
        .catch(() => this.onError && this.onError())
        .finally(() => this.setAutocompleteLoading(false));
    }
  }

  async fetchPageTabs(forceReload?: boolean) {
    if (this.getPageTabs.length === 0 || forceReload) {
      this.setLoading(true);
      api.regulation
        .getTabs()
        .then((tabs) => tabs && this.setPageTabs(tabs))
        .catch(() => this.onError && this.onError())
        .finally(() => this.setLoading(false));
    }
  }
}
