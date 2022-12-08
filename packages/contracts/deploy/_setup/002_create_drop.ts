import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import Contracts from '../../components/contracts';
import { publishDropMetadataToIPFS } from '../../scripts';

import { STORE } from '../_default/000_deploy_store';
import { DEFAULT_NFT } from './001_create_default_nft';

const { parseEther: toEth, formatBytes32String } = ethers.utils;

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { execute, read } = deployments;

    const { deployer } = await getNamedAccounts();
    const deployerSigner = await ethers.getSigner(deployer);

    const defaultNftAddress = (await deployments.get(DEFAULT_NFT)).address;

    await execute(
        STORE,
        {
            from: deployer,
            log: true,
            autoMine: true
        },
        'createDrop',
        10,
        toEth('0.1'),
        5,
        defaultNftAddress
    );

    const getContract = async (int: number) => {
        const dropContractAddress = (await read(STORE, {}, 'drop', int)) as string;
        const dropContract = (await Contracts.Drop.attach(dropContractAddress)).connect(deployerSigner);

        return dropContract;
    };

    let dropContract = await getContract(0);
    const address = await publishDropMetadataToIPFS(hre, 0);
    await dropContract.setURI(address);
};

export default func;
