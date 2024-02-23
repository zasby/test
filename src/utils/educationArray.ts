export enum educationGroupConts {
  basics = "common:trainingGroup.basics",
  org_structure = "common:trainingGroup.org_structure",
  communications = "common:trainingGroup.communications",
}

type educationTitleType =
  | educationGroupConts.basics
  | educationGroupConts.org_structure
  | educationGroupConts.communications;

export interface ITraining {
  id: number;
  title: string;
  video: {
    videoId: string;
    vidioName: string;
    description: string;
  };
}

export interface I2Training {
  id: number;
  title: string;
  trainingKey: string;
  videoId: string;
  video: {
    videoId: string;
    vidioName: string;
    description: string;
  };
}

export interface IEducation {
  id: number;
  sectionTitle: educationTitleType;
  trainings: ITraining[];
}

//новая версия видосов
export const educationArray: IEducation[] = [
  {
    id: 1,
    sectionTitle: educationGroupConts.basics,
    trainings: [
      {
        id: 1,
        title: "common:training.introductory",
        video: {
          videoId: "bWGJ1RNI6_A",
          vidioName: "start",
          description: "",
        },
      },
      {
        id: 2,
        title: "common:training.overview",
        video: {
          videoId: "RlJJBT7KWp0",
          vidioName: "overview",
          description: "",
        },
      },
      {
        id: 3,
        title: "common:training.profile_settings",
        video: {
          videoId: "Yj8EToAaW7M",
          vidioName: "profile",
          description: "",
        },
      },
    ],
  },
  {
    id: 2,
    sectionTitle: educationGroupConts.org_structure,
    trainings: [
      {
        id: 4,
        title: "common:training.org_structure",
        video: {
          videoId: "GN7N7EVAdbo",
          vidioName: "orgchart",
          description: "",
        },
      },
      {
        id: 5,
        title: "common:training.settings_org_structure",
        video: {
          videoId: "R8uUu0eez74",
          vidioName: "orgchartSettings",
          description: "",
        },
      },
    ],
  },
  {
    id: 3,
    sectionTitle: educationGroupConts.communications,
    trainings: [
      {
        id: 6,
        title: "common:training.communication_module",
        video: {
          videoId: "PmNNuhI6ElU",
          vidioName: "communication",
          description: "",
        },
      },
      {
        id: 7,
        title: "common:training.interaction_with_issues",
        video: {
          videoId: "2-v1oZB8u7A",
          vidioName: "issueCreate",
          description: "",
        },
      },
      {
        id: 8,
        title: "common:training.recurring_issues",
        video: {
          videoId: "nNqciIUADZ8",
          vidioName: "recurringTasks",
          description: "",
        },
      },
      {
        id: 9,
        title: "common:training.settings_recurring_issues",
        video: {
          videoId: "d8DcRWOF4yU",
          vidioName: "recurringTasksSettings",
          description: "",
        },
      },
    ],
  },
];

//старая версия видосов
