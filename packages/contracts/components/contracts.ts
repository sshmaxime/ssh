import { Signer } from '@ethersproject/abstract-signer';
import { ethers } from 'hardhat';
import { initDeployOrAttach, buildContracts } from 'hh-plugin-contracts';
import { AF1xCryptoPunks__factory, CryptoPunksMarket__factory, AF1xSizes__factory } from '../typechain';

const { deployOrAttach, attachOnly } = initDeployOrAttach(ethers);

export default buildContracts((signer?: Signer) => {
    return {
        AF1xCryptoPunks: deployOrAttach('AF1xCryptoPunks', AF1xCryptoPunks__factory, signer),
        CryptoPunksMarket: deployOrAttach('CryptoPunksMarket', CryptoPunksMarket__factory, signer),
        AF1xSizes: deployOrAttach('AF1xSizes', AF1xSizes__factory, signer)
    };
});
