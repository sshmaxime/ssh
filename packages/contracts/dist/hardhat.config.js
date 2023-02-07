"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@typechain/hardhat");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
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
            chainId: 1337,
            accounts: [
                {
                    privateKey: env['HARDHAT_DEPLOYER'],
                    balance: '10000000000000000000000000000000000000000000000'
                },
                {
                    privateKey: env['HARDHAT_USER'],
                    balance: '10000000000000000000000000000000000000000000000'
                }
            ],
            allowUnlimitedContractSize: true,
            deploy: [DEFAULT_DEPLOY_DIR, DEFAULT_SETUP_TEST_DIR]
        },
        localhost: {
            deploy: [DEFAULT_DEPLOY_DIR]
        },
        mainnet: {
            url: env['MAINNET'],
            deploy: [DEFAULT_DEPLOY_DIR, './deploy/mainnet']
        },
        goerli: {
            url: env['GOERLI'],
            chainId: 5,
            deploy: [DEFAULT_DEPLOY_DIR, './deploy/goerli'],
            accounts: [env['HARDHAT_DEPLOYER']],
            gasPrice: 10000000 // 0.01 Gwei
        }
    },
    etherscan: {
        apiKey: env['ETHERSCAN_API']
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
