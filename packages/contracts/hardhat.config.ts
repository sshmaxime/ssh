import '@typechain/hardhat';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';

import 'hardhat-deploy';

import('hardhat-tracer');

import { HardhatUserConfig } from 'hardhat/config';

const config: HardhatUserConfig = {
    networks: {
        hardhat: {
            accounts: {
                count: 10,
                accountsBalance: '10000000000000000000000000000000000000000000000'
            },
            gas: 'auto',
            gasPrice: 'auto',
            allowUnlimitedContractSize: true
        }
    },

    namedAccounts: {
        deployer: 0
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
