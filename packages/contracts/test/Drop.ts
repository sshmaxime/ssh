import Contracts from '../components/contracts';
import { CryptoPunksMarket, Drop, ERC721, ITokenInterface, TestERC721 } from '../typechain';
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
        defaultItem = await Contracts.TestERC721.deploy('Name', 'Symbol', toEth('0'));
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

    describe('getter / setter', () => {
        context('URI', () => {
            const URI = 'https://google.com';
            beforeEach(async () => {
                Drop = await Contracts.Drop.deploy(0, 10, toEth('1'), 1, defaultItem.address);
            });

            it('should properly set URI variable', async () => {
                await Drop.setURI(URI);
                expect(await Drop.URI()).equal(URI);
            });

            context('permission', () => {
                it('should throw when not allowed to set', async () => {
                    await expect(Drop.connect(normalUser).setURI(URI)).to.revertedWith(
                        'Ownable: caller is not the owner'
                    );
                });
            });
        });

        context('tokenInterface', () => {
            let nft: ERC721;
            let fakeInterface: ERC721;

            beforeEach(async () => {
                nft = await Contracts.ERC721.deploy('SYMBOL', 'NAME');
                fakeInterface = await Contracts.ERC721.deploy('SYMBOL', 'NAME');
            });

            it('should be nil at first', async () => {
                expect(await Drop.getTokenInterface(nft.address)).to.equal(AddressZero);
            });

            it('should be set once added', async () => {
                await Drop.setTokenInterface(nft.address, fakeInterface.address);
                expect(await Drop.getTokenInterface(nft.address)).to.equal(fakeInterface.address);
            });

            context('permission', () => {
                it('should throw when not allowed to set', async () => {
                    await expect(
                        Drop.connect(normalUser).setTokenInterface(nft.address, fakeInterface.address)
                    ).to.revertedWith('Ownable: caller is not the owner');
                });
            });
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
                expect(drip.status).equal(DripStatus.DEFAULT);
                expect(drip.versionId).equal(versionId);
                expect(drip.mutation.token).equal(AddressZero);
                expect(drip.mutation.tokenId).equal(0);
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

        describe('mutating', () => {
            let tokenMutating: TestERC721;

            beforeEach(async () => {
                tokenMutating = await Contracts.TestERC721.deploy('SYMBOL', 'NAME', '0');
                tokenMutating = tokenMutating.connect(normalUser);

                await tokenMutating.mint();

                Drop = await Contracts.Drop.deploy(0, 1, toEth('1'), 1, defaultItem.address);
                Drop = Drop.connect(normalUser);
            });

            it("shouldn't mutate if token to mutate is out of bound", async () => {
                await expect(Drop.mutate(10, tokenMutating.address, 0)).to.revertedWith('OUT_OF_BOUND');
            });

            it("shouldn't mutate if user is not holder of the drip", async () => {
                await Drop.connect(ssh).mint(1, { value: toEth('1') });

                await expect(Drop.mutate(0, tokenMutating.address, 0)).to.revertedWith('INVALID_OWNER');
            });

            it("shouldn't mutate if already mutated", async () => {
                await Drop.mint(1, { value: toEth('1') });
                await Drop.mutate(0, tokenMutating.address, 0);

                await expect(Drop.mutate(0, tokenMutating.address, 0)).to.revertedWith('ALREADY_MUTATED');
            });

            it('should mutate if done properly', async () => {
                await Drop.mint(1, { value: toEth('1') });

                await Drop.mutate(0, tokenMutating.address, 0);

                const drip = await Drop.drip(0);

                expect(drip.status).to.equal(DripStatus.MUTATED);
                expect(drip.mutation.token).to.equal(tokenMutating.address);
                expect(drip.mutation.tokenId).to.equal(0);
            });
        });

        describe('mutation interfaces', () => {
            context('CryptoPunks', () => {
                let cryptoPunksMarket: CryptoPunksMarket;
                beforeEach(async () => {
                    Drop = await Contracts.Drop.deploy(0, 1, toEth('1'), 1, defaultItem.address);
                    Drop = Drop.connect(normalUser);

                    cryptoPunksMarket = await Contracts.CryptoPunksMarket.deploy();

                    await cryptoPunksMarket.setInitialOwner(normalUser.address, 10);
                });

                it('should throw when no interface has been set', async () => {
                    await Drop.mint(1, { value: toEth('1') });
                    await expect(Drop.mutate(0, cryptoPunksMarket.address, 10)).to.reverted;
                });

                it('should throw when interface returns invalid owner', async () => {
                    const cryptoPunksInterface = await Contracts.CryptopunksInterface.deploy(cryptoPunksMarket.address);
                    await Drop.connect(ssh).setTokenInterface(cryptoPunksMarket.address, cryptoPunksInterface.address);

                    await Drop.mint(1, { value: toEth('1') });
                    await expect(Drop.mutate(0, cryptoPunksMarket.address, 11)).to.be.revertedWith('INVALID_OWNER');
                });

                it('should not throw when interface has been set', async () => {
                    const cryptoPunksInterface = await Contracts.CryptopunksInterface.deploy(cryptoPunksMarket.address);

                    await Drop.connect(ssh).setTokenInterface(cryptoPunksMarket.address, cryptoPunksInterface.address);
                    await Drop.mint(1, { value: toEth('1') });
                    await Drop.mutate(0, cryptoPunksMarket.address, 10);

                    const drip = await Drop.drip(0);

                    expect(drip.status).to.equal(DripStatus.MUTATED);
                    expect(drip.mutation.token).to.equal(cryptoPunksMarket.address);
                    expect(drip.mutation.tokenId).to.equal(10);
                });
            });
        });
    });
});
