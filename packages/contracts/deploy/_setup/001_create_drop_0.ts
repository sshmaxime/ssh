import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import Contracts from '../../components/contracts';
import { publishDropMetadataToIPFS } from '../../scripts';

import { STORE } from '../_default/000_deploy_store';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const { parseEther: toEth, formatBytes32String } = ethers.utils;

const DROP_ID = 0;

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { execute, read } = deployments;

    const { deployer } = await getNamedAccounts();
    const deployerSigner = await ethers.getSigner(deployer);

    await execute(
        STORE,
        {
            from: deployer,
            log: true,
            autoMine: true
        },
        'createDrop',
        100,
        toEth('0.1'),
        5
    );

    const getContract = async (int: number) => {
        const dropContractAddress = (await read(STORE, {}, 'drop', int)) as string;
        const dropContract = (await Contracts.Drop.attach(dropContractAddress)).connect(deployerSigner);

        return dropContract;
    };

    let dropContract = await getContract(DROP_ID);
    const address = await publishDropMetadataToIPFS(DROP_ID);
    await dropContract.setDropURI(address);
};

export default func;
