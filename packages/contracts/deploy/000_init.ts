import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;

    const { deployer } = await getNamedAccounts();

    await deploy('SSHStore', {
        from: deployer,
        args: [],
        log: true,
        autoMine: true
        // 0x5FbDB2315678afecb367f032d93F642f64180aa3
    });
};

export default func;

func.tags = ['SSHStore'];
