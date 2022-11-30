import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import Contracts from '../components/contracts';
import { publishDropMetadataToIPFS } from '../scripts';
import { deployedAddy } from './002_create_default_nft';

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
        toEth('0.1'),
        5,
        deployedAddy
    );

    const getContract = async (int: number) => {
        const dropContractAddress = (await read('SSHStore', {}, 'getDrop', int)) as string;
        const dropContract = (await Contracts.SSHDrop.attach(dropContractAddress)).connect(deployerSigner);

        return dropContract;
    };

    let dropContract = await getContract(0);
    const address = await publishDropMetadataToIPFS(0);
    await dropContract.setDropURI(address);
};

export default func;
