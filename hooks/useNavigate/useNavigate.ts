export const useNavigate = process.env.EXPO_PUBLIC_IS_MOBILE
  ? require('./useNavigate.native').default
  : require('./useNavigate.desktop').default;
