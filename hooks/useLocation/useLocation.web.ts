import { useLocation as webUseLocation } from 'react-router-dom';

console.log(1111);
export const useLocation = () => {
  return webUseLocation();
};

export default useLocation;
