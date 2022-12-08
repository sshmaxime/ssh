import { Signer } from '@ethersproject/abstract-signer';
import { ethers } from 'hardhat';
import { initDeployOrAttach, buildContracts } from 'hh-plugin-contracts';
import { TestERC721__factory, Drop__factory, Store__factory } from '../typechain';

const { deployOrAttach, attachOnly } = initDeployOrAttach(ethers);

export default buildContracts((signer?: Signer) => {
    return {
        TestERC721: deployOrAttach('TestERC721', TestERC721__factory, signer),
        Drop: deployOrAttach('Drop', Drop__factory, signer),
        Store: deployOrAttach('Store', Store__factory, signer)
    };
});
