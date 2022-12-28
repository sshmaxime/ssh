import Contracts from '../components/contracts';
import { Drop, ERC721 } from '../typechain';
import { DripStructOutput } from '../typechain/contracts/Drop';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { BigNumber } from 'ethers';
import { DripStatus } from '@sshlabs/typings';

const { parseEther: toEth, formatBytes32String } = ethers.utils;
const { AddressZero, HashZero } = ethers.constants;

const ITEM_NAME = formatBytes32String('MyRandomName');

const MAX_SUPPLY_REACHED = 'MAX_SUPPLY_REACHED';
const INVALID_FUNDS = 'INVALID_FUNDS';
const INVALID_VERSION = 'INVALID_VERSION';
const INVALID_TOKEN_ID = 'INVALID_TOKEN_ID';
const OUT_OF_BOUND = 'OUT_OF_BOUND';

describe('Drop', () => {
    let ssh: SignerWithAddress;
    let normalUser: SignerWithAddress;

    let Drop: Drop;

    let defaultItem: ERC721;

    before(async () => {
        [ssh, normalUser] = await ethers.getSigners();
        defaultItem = await Contracts.TestERC721.deploy('Name', 'Symbol');
    });

    describe('construction', () => {
        let id = 0;
        for (let maxSupply of [0, 200, 100000]) {
            for (let mintPrice of [toEth('0.05'), toEth('0.25'), toEth('2.5')]) {
                for (let versions of [1, 5, 10]) {
                    context(`with maxSupply: ${maxSupply}, mintPrice: ${mintPrice}, versions: ${versions}`, () => {
                        beforeEach(async () => {
                            Drop = await Contracts.Drop.deploy(id, maxSupply, mintPrice, versions, defaultItem.address);
                        });

                        afterEach(async () => {
                            id++;
                        });

                        it('should be properly constructed', async () => {
                            expect(await Drop.name()).to.equal('DROP#' + id);
                            expect(await Drop.symbol()).to.equal('DROP#' + id);
                            expect(await Drop.dropId()).to.equal(id);
                            expect(await Drop.maxSupply()).to.equal(maxSupply);
                            expect(await Drop.totalSupply()).to.equal(0);
                            expect(await Drop.price()).to.equal(mintPrice);
                            expect(await Drop.versions()).to.equal(versions);
                            expect(await Drop.defaultItem()).to.equal(defaultItem.address);
                            expect(await Drop.URI()).to.equal('');
                        });
                    });
                }
            }
        }

        it('should revert with invalid version', async () => {
            await expect(Contracts.Drop.deploy(0, 10, toEth('1'), 0, defaultItem.address)).revertedWith(
                'INVALID_VERSIONS'
            );
        });
    });

    describe('drip', () => {
        beforeEach(async () => {
            Drop = await Contracts.Drop.deploy(0, 1, toEth('1'), 1, defaultItem.address);
            await Drop.mint(1, { value: toEth('1') });
        });

        it('accessing drip', async () => {
            const drip = await Drop.drip(0);
            expect(drip.versionId).equal(1);
        });

        it('accessing invalid drip should throw', async () => {
            await expect(Drop.drip(20)).revertedWith(INVALID_TOKEN_ID);
        });
    });

    describe('URI', () => {
        const URI = 'https://alpha.beta.sigma.com';
        beforeEach(async () => {
            Drop = await Contracts.Drop.deploy(0, 10, toEth('1'), 1, defaultItem.address);
        });

        it('should properly set URI variable', async () => {
            await Drop.setURI(URI);
            expect(await Drop.URI()).equal(URI);
        });
    });

    describe('minting', () => {
        const mint = async (tokenId: number, versionId: BigNumber, value: BigNumber) => {
            it(`should mint`, async () => {
                await Drop.connect(normalUser).mint(versionId, { value });
            });

            const newTotalSupply = tokenId + 1;

            it('balance of minter should be updated', async () => {
                expect(await Drop.balanceOf(normalUser.address)).to.equal(newTotalSupply);
            });

            it('total supply should be updated', async () => {
                expect(await Drop.totalSupply()).to.equal(newTotalSupply);
            });

            it('minted item should be properly initialized', async () => {
                const drip = await Drop.drip(tokenId);
                expect(drip.status).equal(DripStatus.VIRGIN);
                expect(drip.versionId).equal(versionId);
                expect(drip.mutation.mutator).equal(AddressZero);
                expect(drip.mutation.mutatorId).equal(0);
            });
        };

        let id = 0;
        for (let maxSupply of [1, 3, 5]) {
            for (let mintPrice of [toEth('0.05'), toEth('2.5')]) {
                for (let versions of [1, 10]) {
                    context(`with id: ${id}, maxSupply: ${maxSupply}`, () => {
                        before(async () => {
                            Drop = await Contracts.Drop.deploy(id, maxSupply, mintPrice, versions, defaultItem.address);
                        });

                        for (let tokenId = 0; tokenId !== maxSupply; tokenId++) {
                            mint(tokenId, BigNumber.from(0), mintPrice);
                        }

                        it(`shouldn't mint when max supply has been reached`, async () => {
                            await expect(Drop.mint(0)).to.be.revertedWith(MAX_SUPPLY_REACHED);
                        });
                    });
                }
            }
        }

        it('minting above max supply should revert', async () => {
            Drop = await Contracts.Drop.deploy(0, 0, toEth('1'), 1, defaultItem.address);
            await expect(Drop.mint(0)).revertedWith(MAX_SUPPLY_REACHED);
        });

        it('minting with an invalid version should revert', async () => {
            Drop = await Contracts.Drop.deploy(0, 10, toEth('1'), 1, defaultItem.address);
            await expect(Drop.mint(5)).revertedWith(INVALID_VERSION);
        });

        it('minting with an invalid value should revert', async () => {
            Drop = await Contracts.Drop.deploy(0, 10, toEth('1'), 1, defaultItem.address);
            await expect(Drop.mint(0)).revertedWith(INVALID_FUNDS);
        });

        describe('mutating', () => {});
    });
});

// TODO mutating
