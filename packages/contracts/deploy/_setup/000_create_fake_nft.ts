import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import Contracts from '../../components/contracts';

export const FAKE_NFT = 'FAKE_NFT';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy, execute, read } = deployments;

    const { deployer, user } = await getNamedAccounts();
    const userSigner = await ethers.getSigner(user);

    const deployResult = await deploy(FAKE_NFT, {
        contract: 'TestERC721',
        from: deployer,
        args: ['Bored Ape Fake Club', 'BAFC'],
        log: true,
        autoMine: true
    });

    const nftContractAddress = deployResult.address;
    const testERC721 = (await Contracts.TestERC721.attach(nftContractAddress)).connect(userSigner);

    await testERC721.mint({ value: testERC721.price() });
    await testERC721.mint({ value: testERC721.price() });
    await testERC721.mint({ value: testERC721.price() });
    await testERC721.mint({ value: testERC721.price() });
    await testERC721.mint({ value: testERC721.price() });
};

export default func;

func.tags = [FAKE_NFT];
