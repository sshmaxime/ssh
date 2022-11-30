import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import Contracts from '../components/contracts';

const { parseEther: toEth, formatBytes32String } = ethers.utils;

export let deployedAddy = '';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy, execute, read } = deployments;

    const { deployer, user } = await getNamedAccounts();
    const deployerSigner = await ethers.getSigner(deployer);
    const userSigner = await ethers.getSigner(user);

    const deployResult = await deploy('TestERC721', {
        from: deployer,
        args: ['Default NFT', 'DNFT'],
        log: true,
        autoMine: true
    });

    const nftContractAddress = deployResult.address;
    deployedAddy = nftContractAddress;
    const testERC721 = (await Contracts.TestERC721.attach(nftContractAddress)).connect(deployerSigner);
};

export default func;
