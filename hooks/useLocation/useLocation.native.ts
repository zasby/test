import { useRoute } from '@react-navigation/native';

export const useLocation = () => {
  const route = useRoute();
  return {
    pathname: route.name,
    state: route.params || {},
  };
};

export default useLocation;
