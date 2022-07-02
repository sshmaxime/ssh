import { Signer } from '@ethersproject/abstract-signer';
import { ethers } from 'hardhat';
import { initDeployOrAttach, buildContracts } from 'hh-plugin-contracts';
import { SSHDrop__factory, SSHStore__factory } from '../typechain';

const { deployOrAttach, attachOnly } = initDeployOrAttach(ethers);

export default buildContracts((signer?: Signer) => {
    return {
        SSHDrop: deployOrAttach('SSHDrop', SSHDrop__factory, signer),
        SSHStore: deployOrAttach('SSHStore', SSHStore__factory, signer)
    };
});
