import { ClockIcon, EditIcon, LinkIcon, UserIcon } from "./icon";
import React from "react";

export const DECLINED = "declined";
export const TENTATIVE = "tentative";
export const ACCEPTED = "accepted";

export const RESPONSE_STATUS_OPTIONS_LIST = [
  {
    label: "ui:button.google_event.accepted",
    value: ACCEPTED
  },
  {
    label: "ui:button.google_event.declined",
    value: DECLINED
  },
  {
    label: "ui:button.google_event.tentative",
    value: TENTATIVE
  },
];

export const GOOGLE_CALENDAR_EVENT_ROWS = [
  {
    icon: (<EditIcon/>),
    key: "description"
  },
  {
    icon: (<LinkIcon/>),
    key: "url"
  },
  {
    icon: (<ClockIcon/>),
    key: "eventTime",
  },
  {
    icon: (<UserIcon/>),
    key: 'creatorEmail',
  },
]