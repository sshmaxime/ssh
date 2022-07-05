import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import Contracts from '../components/contracts';

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
        toEth('0.2')
    );

    const dropContractAddress = (await read('SSHStore', {}, 'getDrop', 0)) as string;
    const dropContract = (await Contracts.SSHDrop.attach(dropContractAddress)).connect(userSigner);

    await dropContract.mint({ value: toEth('0.2') });
};

export default func;
