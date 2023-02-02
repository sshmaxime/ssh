import { CONFIG } from "./config";

export const IPFS_GATEWAY = CONFIG.network.ipfs_endpoint + "/ipfs/";
const IPFS_EXP = "ipfs://";

export const normalizeIPFSUrl = (address: string) => {
  address = address.replace(IPFS_EXP, IPFS_GATEWAY);
  return address;
};
