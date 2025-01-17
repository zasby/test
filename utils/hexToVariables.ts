export const orgchartHexToVariables = (hex: string) => {
  switch (hex.toLowerCase()) {
    case "#dce2f0":
      return "var(--color-orgst-gray)"
    case "#ffc6c6":
      return "var(--color-orgst-red)"
    case "#ffe2c6":
      return "var(--color-orgst-peach)"
    case "#fff7c6":
      return "var(--color-orgst-yellow)"
    case "#ceffc6":
      return "var(--color-orgst-lightgreen)"
    case "#d0f4f1":
      return "var(--color-orgst-teal)"
    case "#c6d7ff":
      return "var(--color-orgst-blue)"
    case "#dec6ff":
      return "var(--color-orgst-purple)"
    case "#ffc6df":
      return "var(--color-orgst-pink)"
    case "#b140cc":
      return "var(--color-orgst-pink)";
    case "#d971f6":
      return "var(--color-orgst-pink)";
    default:
      return hex
  }
}

export const tagHexToVariables = (color: string) => {
  switch (color) {
    case "#252525":
      return "gray";
    case "#EB2F96":
      return "pink";
    case "#52C41A":
      return "green";
    case "#F5222D":
      return "red";
    case "#FA541C":
      return "red";
    case "#9E5A40":
      return "orange";
    case "#FA8C16":
      return "orange";
    case "#866D2D":
      return "orange";
    case "#F8B01F":
      return "orange";
    case "#FAAD14":
      return "orange";
    case "#A0D911":
      return "green";
    case "#13C2C2":
      return "turquoise";
    case "#1890FF":
      return "blue";
    case "#2F54EB":
      return "blue";
    case "#722ED1":
      return "purple";
    default:
      return color.includes("#") ? "gray" : color;
  }
}
