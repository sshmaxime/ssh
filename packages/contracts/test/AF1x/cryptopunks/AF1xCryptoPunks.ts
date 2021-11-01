import Contracts from '../../../components/contracts';
import { AF1xCryptoPunks, CryptoPunksMarket, AF1xSizes } from '../../../typechain';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ethers } from 'hardhat';
import { expect } from 'chai';

const { parseEther, formatBytes32String } = ethers.utils;
const { AddressZero, HashZero } = ethers.constants;

const ITEM_NAME = formatBytes32String('MyRandomName');
const ITEM_PRICE = parseEther('0.2');
const INCORRECT_ITEM_PRICE = parseEther('0.02');

describe('AF1xCryptoPunks', () => {
    let ssh: SignerWithAddress;
    let punkOwner: SignerWithAddress;
    let normalUser: SignerWithAddress;

    let CryptoPunksMarket: CryptoPunksMarket;
    let AF1xSizes: AF1xSizes;
    let AF1xCryptoPunks: AF1xCryptoPunks;

    before(async () => {
        [ssh, punkOwner, normalUser] = await ethers.getSigners();
    });

    beforeEach(async () => {
        CryptoPunksMarket = await Contracts.CryptoPunksMarket.deploy();
        AF1xSizes = await Contracts.AF1xSizes.deploy();
        AF1xCryptoPunks = await Contracts.AF1xCryptoPunks.deploy(
            ssh.address,
            AF1xSizes.address,
            CryptoPunksMarket.address
        );
    });

    describe('construction', () => {
        it('should be properly constructed', async () => {
            expect(await AF1xCryptoPunks._CryptoPunks()).to.equal(CryptoPunksMarket.address);
        });
    });

    describe('minting', () => {
        context('InsufficientFunds', () => {
            it("shouldn't allow to mint if not sending enough ETH with the tx", async () => {
                await expect(AF1xCryptoPunks.mint(0, ITEM_NAME)).to.revertedWith('InsufficientFunds');

                await expect(AF1xCryptoPunks.mint(0, ITEM_NAME, { value: INCORRECT_ITEM_PRICE })).to.revertedWith(
                    'InsufficientFunds'
                );
            });

            it('should not revert when minting with enough ETH in the tx', async () => {
                await expect(AF1xCryptoPunks.mint(0, ITEM_NAME, { value: ITEM_PRICE })).to.not.revertedWith(
                    'InsufficientFunds'
                );
            });
        });

        context('OutOfBound', () => {
            it("shouldn't allow minting when tokenId is lower than 0", async () => {
                await expect(AF1xCryptoPunks.mint(-1, ITEM_NAME, { value: ITEM_PRICE })).to.reverted;
            });

            it("shouldn't allow minting when tokenId is higher than 10000", async () => {
                await expect(AF1xCryptoPunks.mint(10000, ITEM_NAME, { value: ITEM_PRICE })).to.revertedWith(
                    'OutOfBound'
                );
            });

            it('should not revert when minting with in bound tokenId', async () => {
                await expect(AF1xCryptoPunks.mint(2345, ITEM_NAME, { value: ITEM_PRICE })).to.not.revertedWith(
                    'OutOfBound'
                );
            });
        });

        context('NotAuthorized', () => {
            it("should not allow minting if user doesn't own the respective cryptopunk", async () => {
                await expect(AF1xCryptoPunks.mint(0, ITEM_NAME, { value: ITEM_PRICE })).to.revertedWith(
                    'NotAuthorized'
                );
            });

            it('should not revert minting if user own the respective cryptopunk', async () => {
                await CryptoPunksMarket.connect(ssh).setInitialOwner(punkOwner.address, 0);

                await expect(
                    AF1xCryptoPunks.connect(punkOwner).mint(0, ITEM_NAME, { value: ITEM_PRICE })
                ).to.not.revertedWith('NotAuthorized');
            });
        });

        context('AlreadyMinted', () => {
            it('should not allow minting a token that already exist', async () => {
                await CryptoPunksMarket.connect(ssh).setInitialOwner(punkOwner.address, 0);
                await AF1xCryptoPunks.connect(punkOwner).mint(0, ITEM_NAME, { value: ITEM_PRICE });

                await expect(
                    AF1xCryptoPunks.connect(punkOwner).mint(0, ITEM_NAME, { value: ITEM_PRICE })
                ).to.revertedWith('AlreadyMinted');
            });
        });

        context('Success', () => {
            beforeEach(async () => {
                await CryptoPunksMarket.connect(ssh).setInitialOwner(punkOwner.address, 0);
                await CryptoPunksMarket.connect(ssh).setInitialOwner(punkOwner.address, 1);
            });

            it('should allow minting if tx is properly set up', async () => {
                await expect(AF1xCryptoPunks.connect(punkOwner).mint(0, ITEM_NAME, { value: ITEM_PRICE }))
                    .to.emit(AF1xCryptoPunks, 'Transfer')
                    .withArgs(AddressZero, punkOwner.address, 0);
            });

            it('token should be properly set after success mint', async () => {
                await AF1xCryptoPunks.connect(punkOwner).mint(0, ITEM_NAME, { value: ITEM_PRICE });

                const token = await AF1xCryptoPunks.getToken(0);

                expect(token._id).to.not.be.equal(HashZero);
                expect(token.name).to.be.equal(ITEM_NAME);
            });

            context('Balances', () => {
                it('balances should be correct after mint', async () => {
                    await AF1xCryptoPunks.connect(punkOwner).mint(0, ITEM_NAME, { value: ITEM_PRICE });
                    expect(await AF1xCryptoPunks.balanceOf(punkOwner.address)).to.equal(1);

                    await AF1xCryptoPunks.connect(punkOwner).mint(1, ITEM_NAME, { value: ITEM_PRICE });
                    expect(await AF1xCryptoPunks.balanceOf(punkOwner.address)).to.equal(2);
                });
            });
        });
    });

    context('redeeming', () => {
        const TWITTER_NAME = formatBytes32String('0000');

        const SIZE = formatBytes32String('42.5');

        const INVALID_SIZE_1 = formatBytes32String('21345');
        const INVALID_SIZE_2 = formatBytes32String('blablabla');

        beforeEach(async () => {
            await CryptoPunksMarket.connect(ssh).setInitialOwner(punkOwner.address, 0);
            await AF1xCryptoPunks.connect(punkOwner).mint(0, ITEM_NAME, { value: ITEM_PRICE });
        });

        context('NotAuthorized', () => {
            it('should revert when trying to redeem a token not existing', async () => {
                await expect(AF1xCryptoPunks.connect(normalUser).redeem(1000, SIZE, TWITTER_NAME)).to.be.revertedWith(
                    'ERC721: owner query for nonexistent token'
                );
            });

            it('should revert when trying to redeem a token not owned', async () => {
                await expect(AF1xCryptoPunks.connect(normalUser).redeem(0, SIZE, TWITTER_NAME)).to.be.revertedWith(
                    'NotAuthorized'
                );
            });
        });

        context('IncorrectSize', () => {
            it('should revert when trying to redeem a token with an invalid size', async () => {
                await expect(
                    AF1xCryptoPunks.connect(punkOwner).redeem(0, INVALID_SIZE_1, TWITTER_NAME)
                ).to.be.revertedWith('IncorrectSize');
            });

            it('should revert when trying to redeem a token with an invalid size', async () => {
                await expect(
                    AF1xCryptoPunks.connect(punkOwner).redeem(0, INVALID_SIZE_2, TWITTER_NAME)
                ).to.be.revertedWith('IncorrectSize');
            });

            it('should not revert when trying to redeem a token with a valid size', async () => {
                await expect(AF1xCryptoPunks.connect(punkOwner).redeem(0, SIZE, TWITTER_NAME)).to.not.be.revertedWith(
                    'IncorrectSize'
                );
            });
        });

        context('Success', () => {
            it('should not allow minting a redeemed token', async () => {
                await AF1xCryptoPunks.connect(punkOwner).redeem(0, SIZE, TWITTER_NAME);

                await expect(
                    AF1xCryptoPunks.connect(punkOwner).mint(0, ITEM_NAME, { value: ITEM_PRICE })
                ).to.revertedWith('AlreadyMinted');
            });

            it('token should be properly set after success redeem', async () => {
                await AF1xCryptoPunks.connect(punkOwner).redeem(0, SIZE, TWITTER_NAME);

                const token = await AF1xCryptoPunks.getToken(0);

                expect(token._id).to.not.be.equal(HashZero);

                expect(token.name).to.be.equal(ITEM_NAME);
                expect(token.size).to.be.equal(SIZE);
                expect(token.redeemer).to.be.equal(TWITTER_NAME);
            });
        });
    });
});
