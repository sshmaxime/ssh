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
        toEth('0.1')
    );

    const getContract = async (int: number) => {
        const dropContractAddress = (await read('SSHStore', {}, 'getDrop', int)) as string;
        const dropContract = (await Contracts.SSHDrop.attach(dropContractAddress)).connect(deployerSigner);

        return dropContract;
    };

    let dropContract = await getContract(0);
};

export default func;
