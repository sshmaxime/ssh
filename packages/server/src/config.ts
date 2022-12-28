import { env } from "process";
import { IPFS_SUFFIX } from "./_constants";

// Environement
export const ENV = (() => {
  const envVar = env["ENV"];

  if (envVar === "PROD") return "PROD";
  return "TEST";
})();

// API key
export const OPENSEA_API_KEY = env["OPENSEA_API_KEY"];

// Endpoint
export const WEB3_ENDPOINT = env["WEB3_ENDPOINT"];

// Network
export const PORT = Number(env["PORT"]);
export const CORS_ORIGIN = env["CORS_ORIGIN"];

// IPFS
export const IPFS_HOST = env["IPFS_HOST"];
export const IPFS_GATEWAY = IPFS_HOST + IPFS_SUFFIX;

// Blockchain
export const ADDRESS_STORE = env["ADDRESS_STORE"];
