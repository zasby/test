console.log(1234);

export const useLocation = process.env.EXPO_PUBLIC_IS_MOBILE
  ? require('./useLocation.native').default
  : require('./useLocation.desktop').default;
