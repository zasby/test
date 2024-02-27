export enum colorScheme {
  Success = "success",
  Warning = "warning",
  Error = "error",
  Primary = "primary",
  Secondary = "secondary",
  Dark = "dark",
  Faint = "faint",
  Default = "default",
}

export type colorSchemeType =
  | colorScheme.Success
  | colorScheme.Error
  | colorScheme.Warning
  | colorScheme.Faint
  | colorScheme.Primary
  | colorScheme.Secondary
  | colorScheme.Dark
  | colorScheme.Default;

export interface IColorScheme {
  key: colorSchemeType;
  status: string;
  backgroundColor: string;
  color: string;
  colorAccent: string;
}

export const ColorScheme: IColorScheme[] = [
  {
    key: colorScheme.Success,
    status: "success",
    backgroundColor: "var(--color-success-base)",
    color: "var(--color-white)",
    colorAccent: "var(--color-success-weak)",
  },
  {
    key: colorScheme.Warning,
    status: "warning",
    backgroundColor: "var(--color-warning-base)",
    color: "var(--color-black)",
    colorAccent: "var(--color-warning-weak)",
  },
  {
    key: colorScheme.Error,
    status: "error",
    backgroundColor: "var(--color-error-base)",
    color: "var(--color-white)",
    colorAccent: "var(--color-error-weak)",
  },
  {
    key: colorScheme.Primary,
    status: "primary",
    backgroundColor: "var(--color-primary-base)",
    color: "var(--color-white)",
    colorAccent: "var(--color-primary-weak)",
  },
  {
    key: colorScheme.Secondary,
    status: "secondary",
    backgroundColor: "var(--color-info-weaker)",
    color: "var(--color-black)",
    colorAccent: "var(--color-text-weak)",
  },
  {
    key: colorScheme.Dark,
    status: "dark",
    backgroundColor: "var(--color-layout-fill-primary)",
    color: "var(--color-text-base)",
    colorAccent: "var(--color-text-weak)",
  },
  {
    key: colorScheme.Faint,
    status: "faint",
    backgroundColor: "var(--color-layout-fill-tertiary)",
    color: "var(--color-text-base)",
    colorAccent: "var(--color-text-weak)",
  },
];

export const FaintColorScheme: IColorScheme[] = [
  {
    key: colorScheme.Success,
    status: "success",
    backgroundColor: "var(--color-success-weaker)",
    color: "var(--color-black)",
    colorAccent: "var(--color-success-weak)",
  },
  {
    key: colorScheme.Warning,
    status: "warning",
    backgroundColor: "var(--color-warning-weaker)",
    color: "var(--color-black)",
    colorAccent: "var(--color-warning-weak)",
  },
  {
    key: colorScheme.Error,
    status: "error",
    backgroundColor: "var(--color-error-weaker)",
    color: "var(--color-black)",
    colorAccent: "var(--color-error-weak)",
  },
  {
    key: colorScheme.Primary,
    status: "primary",
    backgroundColor: "var(--color-primary-weaker)",
    color: "var(--color-black)",
    colorAccent: "var(--color-primary-weak)",
  },
  {
    key: colorScheme.Secondary,
    status: "secondary",
    backgroundColor: "var(--color-layout-fill-secondary)",
    color: "var(--color-text-base)",
    colorAccent: "var(--color-text-weak)",
  },
  {
    key: colorScheme.Dark,
    status: "dark",
    backgroundColor: "var(--color-layout-fill-primary)",
    color: "var(--color-text-base)",
    colorAccent: "var(--color-text-weak)",
  },
  {
    key: colorScheme.Faint,
    status: "faint",
    backgroundColor: "var(--color-layout-fill-tertiary)",
    color: "var(--color-dark-main)",
    colorAccent: "var(--color-text-weak)",
  },
];
