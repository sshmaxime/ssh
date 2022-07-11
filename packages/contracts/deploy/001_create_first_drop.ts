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
        toEth('0.5'),
        ['0x116aebbad1c8226c80f9f0cb4e255540a0f7afd9', '0xd8682bfa6918b0174f287b888e765b9a1b4dc9c3']
    );

    const dropContractAddress = (await read('SSHStore', {}, 'getDrop', 0)) as string;

    const dropContract = (await Contracts.SSHDrop.attach(dropContractAddress)).connect(userSigner);

    await dropContract.mint({ value: toEth('0.5') });
    await dropContract.mint({ value: toEth('0.5') });
};

export default func;
