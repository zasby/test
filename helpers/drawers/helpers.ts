import {
  enCommunicationsGuideNodes,
  enEmployeeGuideNodes,
  enPermissionsGuideNodes,
  enRoutineTasks,
  IGuideNodes,
  ruCommunicationsGuideNodes,
  ruEmployeeGuideNodes,
  ruPermissionsGuideNodes,
  ruRoutineTasks,
  enOrgchartNodes,
  ruOrgchartNodes,
  ruScheduleNodes,
  enScheduleNodes,
  ukCommunicationsGuideNodes,
  ukEmployeeGuideNodes,
  ukOrgchartNodes,
  ukPermissionsGuideNodes,
  ukRoutineTasks,
  ukScheduleNodes,
} from "../../utils/guides";
import { guideContentType, guideKeys } from "../../types";

export const getGuideContent = (locale: string | null = "en", guideKey: guideContentType): IGuideNodes[] => {
  switch (locale) {
    case "en": {
      switch (guideKey) {
        case guideKeys.communications:
          return enCommunicationsGuideNodes;
        case guideKeys.inviteEmployee:
          return enEmployeeGuideNodes;
        case guideKeys.permissions:
          return enPermissionsGuideNodes;
        case guideKeys.recurringIssues:
          return enRoutineTasks;
        case guideKeys.orgchart:
          return enOrgchartNodes;
        case guideKeys.schedule:
          return enScheduleNodes;
        default:
          return [];
      }
    }
    case "ru": {
      switch (guideKey) {
        case guideKeys.communications:
          return ruCommunicationsGuideNodes;
        case guideKeys.inviteEmployee:
          return ruEmployeeGuideNodes;
        case guideKeys.permissions:
          return ruPermissionsGuideNodes;
        case guideKeys.recurringIssues:
          return ruRoutineTasks;
        case guideKeys.orgchart:
          return ruOrgchartNodes;
        case guideKeys.schedule:
          return ruScheduleNodes;
        default:
          return [];
      }
    }
    case "uk": {
      switch (guideKey) {
        case guideKeys.communications:
          return ukCommunicationsGuideNodes;
        case guideKeys.inviteEmployee:
          return ukEmployeeGuideNodes;
        case guideKeys.permissions:
          return ukPermissionsGuideNodes;
        case guideKeys.recurringIssues:
          return ukRoutineTasks;
        case guideKeys.orgchart:
          return ukOrgchartNodes;
        case guideKeys.schedule:
          return ukScheduleNodes;
        default:
          return [];
      }
    }
    default:
      return [];
  }
};
