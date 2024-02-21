export const env = () => {
  const getCurrentEnvironment = () => {
    return "beta";
  };
  return {
    isDev: false,
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  };
};
