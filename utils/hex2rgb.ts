export const hex2rgb = (hex: string): {r?: number, g?: number, b?: number } | null => {
  const rgbChar = ['r', 'g', 'b'];

  const normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (normal) {
    return normal.slice(1).reduce((a, e, i) => {
      // @ts-ignore
      a[rgbChar[i]] = parseInt(e, 16);
      return a;
    }, {});
  }

  const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (shorthand) {
    return shorthand.slice(1).reduce((a, e, i) => {
      // @ts-ignore
      a[rgbChar[i]] = 0x11 * parseInt(e, 16);
      return a;
    }, {});
  }

  return null;
};

export const getColor = (color: string = "#171E40", alfa?: number) => {
  const {r, g, b} = hex2rgb(color) ?? {};

  return r && g && b ? `rgba(${r}, ${g}, ${b}, ${alfa ?? 1})` : color;
}