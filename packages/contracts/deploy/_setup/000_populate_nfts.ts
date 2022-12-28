import { ethers } from 'hardhat';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import Contracts from '../../components/contracts';

import { ListMockTokens } from '@sshlabs/typings';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy, deterministic } = deployments;

    const { user } = await getNamedAccounts();
    const userSigner = await ethers.getSigner(user);

    for (const listName in ListMockTokens) {
        const list = ListMockTokens[listName];

        await hre.network.provider.request({
            method: 'hardhat_impersonateAccount',
            params: [list.owner]
        });
        const signer = await ethers.getSigner(list.owner);
        const contract = (await Contracts.TestERC721.attach(list.contract)).connect(signer);

        for (const boredApeX in list.tokens) {
            await contract.transferFrom(signer.address, userSigner.address, boredApeX);
        }

        console.log(`Populated ${(await contract.balanceOf(userSigner.address)).toNumber()} [${listName}]`);
    }
};

export default func;
