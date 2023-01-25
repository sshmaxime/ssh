import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import Contracts from '../../components/contracts';

const { parseEther: toEth } = ethers.utils;

const COLLECTIBLE_ID = 0;

export const name = 'PREMIER x Unknown';
export const symbol = 'PREMIERx0';

export const DEFAULT_NFT = name;

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy, read } = deployments;

    const { deployer } = await getNamedAccounts();
    const deployerSigner = await ethers.getSigner(deployer);

    await deploy(DEFAULT_NFT, {
        contract: 'PREMIERCollectible',
        from: deployer,
        args: [name, symbol, toEth('0')],
        log: true,
        autoMine: true
    });

    const collectibleContractAddresss = (await deployments.get(DEFAULT_NFT)).address;
    const collectibleContract = (await Contracts.PREMIERCollectible.attach(collectibleContractAddresss)).connect(
        deployerSigner
    );

    const address = await publishCollectibleMetadataToIPFS(COLLECTIBLE_ID);
    await collectibleContract.setContractURI(address);
};

export default func;
