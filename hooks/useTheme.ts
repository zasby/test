import { useEffect, useState } from "react";
import { useRootStore } from "./useRootStore";

interface IUseThemeState {
  color: IUseThemeStateColors;
}

interface IUseThemeReturn {
  color: IUseThemeStateColors;
}

interface IUseThemeStateColorScheme {
  base?: string;
  weak?: string;
  weaker?: string;
  strong?: string;
  stronger?: string;
}

// interface IUseThemeStateTextColorsScheme {
//   base?: string;
//   secondary?: string;
//   tertiary?: string;
//   quaternary?: string;
// }

interface IUseThemeStateColors {
  primary: IUseThemeStateColorScheme;
  info: IUseThemeStateColorScheme;
  warning: IUseThemeStateColorScheme;
  error: IUseThemeStateColorScheme;
  success: IUseThemeStateColorScheme;
  text: Omit<IUseThemeStateColorScheme & { weakest?: string }, "strong" | "stronger">;
  layout: {
    background?: string;
    container?: string;
    divider?: string;
    fill?: { primary?: string; secondary?: string; tertiary?: string; quaternary?: string };
  };
}

const generateThemeColorsObjectByThemeId = (themeId: number): Readonly<IUseThemeStateColors> => {
  return {
    primary: {
      base: themeId == 0 ? "#5672ff" : "#4c64dc",
      weak: themeId == 0 ? "#788eff" : "#7083e3",
      weaker: themeId == 0 ? "#9aaaff" : "#94a2ea",
      strong: themeId == 0 ? "#3c50b3" : "#35469a",
      stronger: themeId == 0 ? "#2b3980" : "#26326e",
    },
    info: {
      // 17a2b8
      base: themeId == 0 ? "#5672ff" : "#4c64dc",
      weak: themeId == 0 ? "#788eff" : "#7083e3",
      weaker: themeId == 0 ? "#9aaaff" : "#94a2ea",
      strong: themeId == 0 ? "#3c50b3" : "#35469a",
      stronger: themeId == 0 ? "#2b3980" : "#26326e",
    },
    warning: {
      base: themeId == 0 ? "#ffcc4d" : "#dcb044",
      weak: themeId == 0 ? "#ffd671" : "#e3c069",
      weaker: themeId == 0 ? "#ffe094" : "#ead08f",
      strong: themeId == 0 ? "#b38f36" : "#9a7b30",
      stronger: themeId == 0 ? "#806627" : "#6e5822",
    },
    error: {
      base: themeId == 0 ? "#fd5a44" : "#da503d",
      weak: themeId == 0 ? "#fd7b69" : "#e17364",
      weaker: themeId == 0 ? "#fe9c8f" : "#e9968b",
      strong: themeId == 0 ? "#b13f30" : "#99382b",
      stronger: themeId == 0 ? "#7f2d22" : "#6d281f",
    },
    success: {
      base: themeId == 0 ? "#00b894" : "#039f81",
      weak: themeId == 0 ? "#33c6a9" : "#35b29a",
      weaker: themeId == 0 ? "#66d4bf" : "#68c5b3",
      strong: themeId == 0 ? "#008168" : "#026f5a",
      stronger: themeId == 0 ? "#005c4a" : "#025041",
    },
    text: {
      base: themeId == 0 ? "#000000e0" : "#ffffffd9",
      weak: themeId == 0 ? "#000000a6" : "#ffffffa6",
      weaker: themeId == 0 ? "#00000073" : "#ffffff73",
      weakest: themeId == 0 ? "#00000040" : "#ffffff40",
    },
    layout: {
      background: themeId == 0 ? "#f5f5f5" : "#000000",
      container: themeId == 0 ? "#ffffff" : "#141414",
      divider: themeId == 0 ? "#9ba6c233" : "#9ba6c226",
      fill: {
        primary: themeId == 0 ? "#00000026" : "#ffffff2e",
        secondary: themeId == 0 ? "#0000000f" : "#ffffff1f",
        tertiary: themeId == 0 ? "#0000000a" : "#ffffff14",
        quaternary: themeId == 0 ? "#00000005" : "#ffffff0a",
      },
    },
  };
};

const generateThemeObjectByThemeId = (themeId: number): IUseThemeState => {
  return {
    color: generateThemeColorsObjectByThemeId(themeId),
  };
};

export const useTheme = (useRootStore: any): IUseThemeReturn => {
  const { appStore } = useRootStore();
  console.log('appStore', appStore);

  const [state, setState] = useState<IUseThemeState>(generateThemeObjectByThemeId(appStore.getAppTheme ?? 0));



  useEffect(() => {
    setState(generateThemeObjectByThemeId(appStore.getAppTheme ?? 0));
    console.log('useEffect theme');
  }, [appStore.getAppTheme]);

  return state;
};
