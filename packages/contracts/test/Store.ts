import Contracts from '../components/contracts';
import { SSHStore } from '../typechain';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { BigNumber } from 'ethers';

const { parseEther: toEth, formatBytes32String } = ethers.utils;

describe.only('SSHStore', () => {
    let ssh: SignerWithAddress;
    let normalUser: SignerWithAddress;

    let SSHStore: SSHStore;

    before(async () => {
        [ssh, normalUser] = await ethers.getSigners();
    });

    describe('construction', () => {
        beforeEach(async () => {
            SSHStore = await Contracts.SSHStore.deploy();
        });

        it('initial total supply should be properly initialized', async () => {
            expect(await SSHStore.getSupply()).to.equal(0);
        });
    });

    describe('create drop', () => {
        before(async () => {
            SSHStore = await Contracts.SSHStore.deploy();
        });

        const createDrop = async (dropId: number, maxSupply: number, price: BigNumber) => {
            it('should create drop', async () => {
                await SSHStore.createDrop(maxSupply, price);
            });

            it('total supply of drop should be updated', async () => {
                expect(await SSHStore.getSupply()).to.equal(dropId + 1);
            });
        };

        let dropId = 0;
        for (let maxSupply of [0, 1, 10]) {
            for (let price of [BigNumber.from(0), toEth('0.05'), toEth('0.1'), toEth('0.5'), toEth('2.5')]) {
                context(`with dropId: ${dropId}, maxSupply: ${maxSupply}, price: ${price}`, () => {
                    createDrop(dropId, maxSupply, price);
                    dropId++;
                });
            }
        }
    });
});
