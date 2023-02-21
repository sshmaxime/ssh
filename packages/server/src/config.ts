enum ENV {
  DEVELOPMENT,
  STAGING,
  PRODUCTION,
}

const nodeEnv = (() => {
  const env = process.env.SERVER__NODE_ENV;

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
  chainId: process.env.SERVER__CHAIN_ID,
  server: {
    port: Number(process.env.SERVER__PORT),
  },
  network: {
    cors_origin: process.env.SERVER__CORS_ORIGIN,
    web3_endpoint: process.env.SERVER__WEB3_ENDPOINT,
    ipfs_endpoint: process.env.SERVER__IPFS_ENDPOINT,
  },
  api_keys: {
    opensea: process.env.SERVER__OPENSEA_API_KEY,
  },
};

export const isDevelopment = (() => CONFIG.env === ENV.DEVELOPMENT)();
export const isStaging = (() => CONFIG.env === ENV.STAGING)();
export const isProduction = (() => CONFIG.env === ENV.PRODUCTION)();
