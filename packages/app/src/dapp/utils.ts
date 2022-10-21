export const IPFS_GATEWAY = "http://127.0.0.1:8080" + "/ipfs/";
const IPFS_EXP = "ipfs://";

export const shortenAddress = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const normalizeIPFSUrl = (address: string) => {
  address = address.replace(IPFS_EXP, IPFS_GATEWAY);
  return address;
};
