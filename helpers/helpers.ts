import { allowsRegulationKeys } from "../constants/regulation/consts";
import { RegulationDto } from "../api";

export const defineAllow = (key: allowsRegulationKeys, arrKeys?: allowsRegulationKeys[] | null): boolean => !!arrKeys?.includes(key);

export const checkIsResetTestResultsOnPublish = (regulation?: RegulationDto): boolean =>
  !!regulation?.draftContent?.resetTestResultsOnPublish;
