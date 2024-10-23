export enum TagLabelColor {
  primary = "PRIMARY",
  warning = "WARNING",
  success = "SUCCESS",
  error = "ERROR",
}

export interface ITagLabel {
  text: string;
  color?: TagLabelColor;
  icon?: React.ReactNode;
}