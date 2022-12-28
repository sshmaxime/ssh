"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@typechain/hardhat");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
const hardhat_fork_config_1 = require("./hardhat.fork.config");
const process_1 = __importDefault(require("process"));
const env = process_1.default.env;
const DEFAULT_DEPLOY_DIR = './deploy/_default/';
const DEFAULT_SETUP_TEST_DIR = './deploy/_setup/';
const config = {
    networks: {
        hardhat: {
            forking: hardhat_fork_config_1.forkConfig,
            chainId: 1001,
            accounts: [
                {
                    privateKey: 'b732fed7801e4b3ea5b633035cc67d250e0ef798bbfa5ab33c00ff944406a30c',
                    balance: '10000000000000000000000000000000000000000000000'
                },
                {
                    privateKey: '6f9b1c4b34934ee64d02037344bf809f1a035145a2103a48bb425b64787af290',
                    balance: '10000000000000000000000000000000000000000000000'
                }
            ],
            allowUnlimitedContractSize: true,
            deploy: [DEFAULT_DEPLOY_DIR, DEFAULT_SETUP_TEST_DIR]
        },
        localhost: {
            deploy: [DEFAULT_DEPLOY_DIR]
        },
        sepolia: {
            url: 'https://rpc2.sepolia.org',
            chainId: 11155111,
            accounts: [env.DEPLOYER, '6f9b1c4b34934ee64d02037344bf809f1a035145a2103a48bb425b64787af290'],
            deploy: [DEFAULT_DEPLOY_DIR, DEFAULT_SETUP_TEST_DIR, 'deploy/testnet']
        },
        mainnet: {
            url: '',
            deploy: [DEFAULT_DEPLOY_DIR, 'deploy/mainnet']
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
exports.default = config;
