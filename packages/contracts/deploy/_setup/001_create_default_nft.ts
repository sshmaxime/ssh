import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import Contracts from '../../components/contracts';

export const DEFAULT_NFT = 'DEFAULT_NFT';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy, execute, read } = deployments;

    const { deployer } = await getNamedAccounts();

    await deploy(DEFAULT_NFT, {
        contract: 'TestERC721',
        from: deployer,
        args: ['Default NFT', 'DNFT'],
        log: true,
        autoMine: true
    });
};

export default func;
