import '@typechain/hardhat';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';

import 'hardhat-deploy';

import('hardhat-tracer');

import { HardhatUserConfig } from 'hardhat/config';
import { forkConfig } from './hardhat.fork.config';

const config: HardhatUserConfig = {
    networks: {
        hardhat: {
            forking: forkConfig,
            chainId: 1001,
            accounts: [
                {
                    privateKey: 'b732fed7801e4b3ea5b633035cc67d250e0ef798bbfa5ab33c00ff944406a30c', // deployer - steal it
                    balance: '10000000000000000000000000000000000000000000000'
                },
                {
                    privateKey: '6f9b1c4b34934ee64d02037344bf809f1a035145a2103a48bb425b64787af290', // user - steal it
                    balance: '10000000000000000000000000000000000000000000000'
                }
            ],
            gas: 'auto',
            gasPrice: 'auto',
            allowUnlimitedContractSize: true
        }
    },

    namedAccounts: {
        deployer: 0,
        user: 1
    },

    solidity: {
        compilers: [
            {
                version: '0.8.14',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    },
                    metadata: {
                        bytecodeHash: 'none'
                    },
                    outputSelection: {
                        '*': {
                            '*': ['storageLayout'] // Enable slots, offsets and types of the contract's state variables
                        }
                    }
                }
            },
            {
                version: '0.4.11',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    }
                }
            }
        ]
    },

    typechain: {
        outDir: 'typechain'
    },

    mocha: {
        timeout: 600000,
        color: true
    }
};

export default config;
