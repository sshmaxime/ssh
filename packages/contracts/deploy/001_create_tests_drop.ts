import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import Contracts from '../components/contracts';
import { getStatus, STATUS } from '@sshlabs/typings';

const { parseEther: toEth, formatBytes32String } = ethers.utils;

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { execute, read } = deployments;

    const { deployer, user } = await getNamedAccounts();
    const deployerSigner = await ethers.getSigner(deployer);
    const userSigner = await ethers.getSigner(user);

    await execute(
        'SSHStore',
        {
            from: deployer,
            log: true,
            autoMine: true
        },
        'createDrop',
        10,
        toEth('0.1')
    );

    await execute(
        'SSHStore',
        {
            from: deployer,
            log: true,
            autoMine: true
        },
        'createDrop',
        15,
        toEth('0.2')
    );

    await execute(
        'SSHStore',
        {
            from: deployer,
            log: true,
            autoMine: true
        },
        'createDrop',
        50,
        toEth('0.3')
    );

    await execute(
        'SSHStore',
        {
            from: deployer,
            log: true,
            autoMine: true
        },
        'createDrop',
        100,
        toEth('0.4')
    );

    const getContract = async (int: number) => {
        const dropContractAddress = (await read('SSHStore', {}, 'getDrop', int)) as string;
        const dropContract = (await Contracts.SSHDrop.attach(dropContractAddress)).connect(deployerSigner);

        return dropContract;
    };

    let dropContract = await getContract(0);

    dropContract = await getContract(1);
    await dropContract.updateStatus(getStatus(STATUS.MINTABLE));

    dropContract = await getContract(2);
    await dropContract.updateStatus(getStatus(STATUS.MINTABLE));
    await dropContract.updateStatus(getStatus(STATUS.STANDBY));

    dropContract = await getContract(3);
    await dropContract.updateStatus(getStatus(STATUS.MINTABLE));
    await dropContract.updateStatus(getStatus(STATUS.STANDBY));
    await dropContract.updateStatus(getStatus(STATUS.CUSTOMIZABLE));
};

export default func;
