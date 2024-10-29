

export type GooglePlanIssueDto = {
    name: string;
    description: string;
    timePlan?: string | null;
    timeFact?: string | null;
    dateWorkStart?: string | null;
    estimatedEndDate?: string | null;
    responseStatus?: string | null;
    htmlLink?: string | null;
    issueStatus?: string | null;
    googleEventId: string;
}