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
        autoMine: true,
        deterministicDeployment: true
        // 0x45cB5F5D2cAf1F3Bc6ddCDC6a73a92F88ad07b25
    });
};

export default func;

func.tags = ['SSHStore'];
