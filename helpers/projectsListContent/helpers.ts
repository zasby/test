import { ProjectDto } from "../../api";
import { categories, sortKeys, sortValues } from "../../../components/modules/pages/projects/misc/constants/sortKeys";

export const filterCategoriesByAciveKey = (filterKey: sortKeys) =>
  filterKey === sortKeys.all ? categories : categories.filter((item) => item === filterKey);

export const filterProjectsByKey = (projects: ProjectDto[], filterKey: sortKeys): ProjectDto[] =>
  filterKey === sortKeys.all ? projects : projects.filter((item) => item.status === filterKey);

export const findTitileKeyBySortKey = (sortKey: sortKeys): string | undefined =>
  sortValues.find((item) => item.key === sortKey)?.text as string | undefined;
