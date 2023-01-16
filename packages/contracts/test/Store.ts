import Contracts from '../components/contracts';
import { ERC721, Store } from '../typechain';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { BigNumber } from 'ethers';

const { parseEther: toEth } = ethers.utils;

describe('Store', () => {
    let admin, user: SignerWithAddress;

    let Store: Store;

    let defaultItem: ERC721;

    before(async () => {
        [admin, user] = await ethers.getSigners();
        defaultItem = await Contracts.TestERC721.deploy('Name', 'Symbol', toEth('0'));
    });

    describe('construction', () => {
        beforeEach(async () => {
            Store = await Contracts.Store.deploy();
        });

        it('initial total supply should be properly initialized', async () => {
            expect(await Store.totalSupply()).to.equal(0);
        });
    });

    describe('create drop', () => {
        before(async () => {
            Store = await Contracts.Store.deploy();
        });

        const createDrop = async (maxSupply: number, mintPrice: BigNumber, versionNb: number) => {
            let snapshotDropTotalSupply: BigNumber;
            it('should create drop', async () => {
                snapshotDropTotalSupply = await Store.totalSupply();
                await Store.createDrop(maxSupply, mintPrice, versionNb, defaultItem.address);
            });

            it('total supply of drop should be updated', async () => {
                expect(await Store.totalSupply()).to.equal(snapshotDropTotalSupply.add(1));
            });
        };

        for (let maxSupply of [0, 5, 100]) {
            for (let mintPrice of [toEth('0.05'), toEth('0.25'), toEth('2.5')]) {
                for (let versionNb of [1, 5, 10]) {
                    context(`with maxSupply: ${maxSupply}, mintPrice: ${mintPrice}`, () => {
                        createDrop(maxSupply, mintPrice, versionNb);
                    });
                }
            }
        }
    });
});
