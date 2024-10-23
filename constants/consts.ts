export enum errorKeys {
  noCompleteTest = "NO_COMPLETE_TEST",
  emptyTitle = "EMPTY_TITLE",
  emptyContent = "EMPTY_CONTENT",
  noNameQuestion = "NO_NAME_QUESTION",
  noNameAnswer = "NO_NAME_ANSWER",
  noRightsAnswer = "NO_RIGHTS_ANSWER",
  noAnswers = "NO_ANSWERS",
}

export type ItervaTypes = ItervalConsts.Months | ItervalConsts.Dates | ItervalConsts.Hours | ItervalConsts.Minutes;
export enum ItervalConsts {
  Months = "months",
  Dates = "dates",
  Hours = "hours",
  Minutes = "minutes",
}
