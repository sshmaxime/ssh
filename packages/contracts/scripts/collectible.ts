import { create, IPFSHTTPClient } from 'ipfs-http-client';
import { promises as fs } from 'fs';
import path from 'path';
import { DropMetadata } from '@sshlabs/typings';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const DROP_DIR = path.join(__dirname, '..', '_data', 'drop');
const DROP_VERSIONS_DIR_NAME = 'versions';
const DROP_MODEL_FILE = 'model.glb';

const IPFS_PREFIX = 'ipfs://';

const node: IPFSHTTPClient = create({ url: '/ip4/127.0.0.1/tcp/5001' });

const readFile = async (pathToFile: string) => {
    return await fs.readFile(pathToFile);
};

const generateCollectibleMetadata = async (collectibleId: number): Promise<DropMetadata> => {};

export const publishDropMetadataToIPFS = async (dropId: number) => {
    const result = await generateDropMetadata(dropId);

    const file = await node.add({
        content: JSON.stringify(result)
    });

    const fileAddress = IPFS_PREFIX + file.cid.toString();
    console.log('Added file:', fileAddress);

    return fileAddress;
};
