/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CompanySettingsDto = {
    notMovedInWorkForMoreThan48HoursIndicatorVisible?: boolean | null;
    deadlineIsExpiredIndicatorVisible?: boolean | null;
    hasMessageWithoutAnswerForMoreThan3HoursIndicatorVisible?: boolean | null;
    notAcceptedForMoreThan24HoursIndicatorVisible?: boolean | null;
    notApprovedFor72HoursIndicatorVisible?: boolean | null;
    timeFactRequired?: boolean | false;
    dateWorkStartRequired?: boolean | false;
}
