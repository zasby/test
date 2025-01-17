import { SortOrder } from "antd/lib/table/interface";

import { StarIcon } from "./icon";

export const FAVORITE_TABLE_COLUMNS =   {
  title: "",
  dataIndex: "favorites",
  key: "favorites",
  icon: () => (<StarIcon color="var(--color-warning-base)"/>),
};

export const REGULATION_TABLE_COLUMNS = [
  {
    title: "ui:regulation_table_columns.title",
    dataIndex: "name",
    key: "name",
    sortedKey: "name",
    defaultSortOrder: "descend" as SortOrder,
  },
  {
    title: "ui:regulation_table_columns.employee",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "ui:regulation_table_columns.status",
    dataIndex: "statusCell",
    key: "status",
  },
  // {
  //   title: "ui:regulation_table_columns.status",
  //   dataIndex: "status",
  //  key: "status"
  // },
  {
    title: "ui:regulation_table_columns.publicationDate",
    dataIndex: "publicationDate",
    key: "publicationDate",
    width: 200,
    defaultSortOrder: undefined,
    sortedKey: "date_created",
  },
  {
    title: "",
    dataIndex: "action",
    key: "action"
  },
];
