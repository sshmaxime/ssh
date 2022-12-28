import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';

const { parseEther: toEth } = ethers.utils;

export const DEFAULT_NFT = 'DEFAULT_NFT';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;

    const { deployer } = await getNamedAccounts();

    await deploy(DEFAULT_NFT, {
        contract: 'TestERC721',
        from: deployer,
        args: ['Default NFT', 'DNFT', toEth('0')],
        log: true,
        autoMine: true
    });
};

export default func;
