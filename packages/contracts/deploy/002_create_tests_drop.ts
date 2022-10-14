import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import Contracts from '../components/contracts';
import { VersionMetadata } from '@sshlabs/typings';

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

    let matadata: VersionMetadata = {
        imgUrl: 'http://localhost:3001/deck0.png',
        versionColor: '#FFFFFF',
        versionName: 'nicewhite'
    };
    await dropContract.loadMetadataForVersion(0, JSON.stringify(matadata));

    matadata = {
        imgUrl: 'http://localhost:3001/deck1.png',
        versionColor: '#FFF5D5',
        versionName: 'niceyellow'
    };
    await dropContract.loadMetadataForVersion(1, JSON.stringify(matadata));

    matadata = {
        imgUrl: 'http://localhost:3001/deck2.png',
        versionColor: '#FFEEF0',
        versionName: 'nicepink'
    };
    await dropContract.loadMetadataForVersion(2, JSON.stringify(matadata));

    await dropContract.connect(userSigner).mint(0, { value: toEth('0.1') });
    await dropContract.connect(userSigner).mint(1, { value: toEth('0.1') });
    await dropContract.connect(userSigner).mint(2, { value: toEth('0.1') });
};

export default func;
