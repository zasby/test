// export const debounce = (func: Function, timeout: number) => {
//   let t;
//   return function executedFunction(...args: any[]) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };
//     clearTimeout(timeout);
//     t = setTimeout(later, timeout);
//   };
// };

export default function debounce(func: Function, timeout: number) {
  let t: any;
  function debounced(...args: any[]) {
    // @ts-ignore
    const that: any = this;
    const later = () => {
      func.apply(that, args);
    };
    clearTimeout(timeout);
    t = setTimeout(later, timeout);
  }

  debounced.clear = () => {
    clearTimeout(t);
  };

  return debounced;
}
