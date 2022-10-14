import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import Contracts from '../components/contracts';
import { VersionMetadata } from '@sshlabs/typings';

const { parseEther: toEth, formatBytes32String } = ethers.utils;

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy, execute, read } = deployments;

    const { deployer, user } = await getNamedAccounts();
    const deployerSigner = await ethers.getSigner(deployer);
    const userSigner = await ethers.getSigner(user);

    const deployResult = await deploy('FakeNft', {
        from: deployer,
        args: ['myNft', 'nft'],
        log: true,
        autoMine: true
    });

    const nftContractAddress = deployResult.address;
    const fakeNft = (await Contracts.FakeNft.attach(nftContractAddress)).connect(userSigner);

    await fakeNft.mint(0);
    await fakeNft.mint(1);
};

export default func;
