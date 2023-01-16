import { Signer } from '@ethersproject/abstract-signer';
import { ethers } from 'hardhat';
import { initDeployOrAttach, buildContracts } from 'hh-plugin-contracts';
import {
    TestERC721__factory,
    Drop__factory,
    Store__factory,
    ERC721__factory,
    CryptoPunksMarket__factory,
    CryptopunksInterface__factory
} from '../typechain';

const { deployOrAttach, attachOnly } = initDeployOrAttach(ethers);

export default buildContracts((signer?: Signer) => {
    return {
        ERC721: deployOrAttach('ERC721', ERC721__factory, signer),
        TestERC721: deployOrAttach('TestERC721', TestERC721__factory, signer),
        Drop: deployOrAttach('Drop', Drop__factory, signer),
        Store: deployOrAttach('Store', Store__factory, signer),
        //
        CryptoPunksMarket: deployOrAttach('CryptoPunksMarket', CryptoPunksMarket__factory, signer),
        CryptopunksInterface: deployOrAttach('CryptopunksInterface', CryptopunksInterface__factory, signer)
    };
});
