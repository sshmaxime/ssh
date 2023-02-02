enum ENV {
  DEVELOPMENT,
  STAGING,
  PRODUCTION,
}

const nodeEnv = (() => {
  const env = process.env.REACT_APP__NODE_ENV;

  switch (env) {
    case "development":
      return ENV.DEVELOPMENT;
    case "staging":
      return ENV.STAGING;
    case "production":
      return ENV.PRODUCTION;
    default:
      throw new Error();
  }
})();

export const CONFIG = {
  env: nodeEnv,
  network: {
    server_url: process.env.REACT_APP__SERVER_URL!,
    websocket_server_url: process.env.REACT_APP__WEBSOCKET_SERVER_URL!,
  },
};

export const isDevelopment = (() => CONFIG.env === ENV.DEVELOPMENT)();
export const isStaging = (() => CONFIG.env === ENV.STAGING)();
export const isProduction = (() => CONFIG.env === ENV.PRODUCTION)();
