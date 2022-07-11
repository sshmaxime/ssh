import Contracts from '../components/contracts';
import { SSHDrop } from '../typechain';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { BigNumber } from 'ethers';

const { parseEther: toEth, formatBytes32String } = ethers.utils;
const { AddressZero, HashZero } = ethers.constants;

const ITEM_NAME = formatBytes32String('MyRandomName');

const MAX_SUPPLY_REACHED = 'MAX_SUPPLY_REACHED';
const INCORRECT_FUNDS = 'INCORRECT_FUNDS';

describe('SSHDrop', () => {
    let ssh: SignerWithAddress;
    let normalUser: SignerWithAddress;

    let SSHDrop: SSHDrop;

    before(async () => {
        [ssh, normalUser] = await ethers.getSigners();
    });

    describe('construction', () => {
        for (let id of [0, 1, 10, 200, 100000]) {
            for (let maxSupply of [0, 1, 10, 200, 100000]) {
                context(`with id: ${id}, maxSupply: ${maxSupply}`, () => {
                    beforeEach(async () => {
                        SSHDrop = await Contracts.SSHDrop.deploy(id, maxSupply, 0, []);
                    });

                    it('should be properly constructed', async () => {
                        expect(await SSHDrop.name()).to.equal('SSH LABS DROP ' + id);
                        expect(await SSHDrop.symbol()).to.equal('DROP ' + id);
                        expect(await SSHDrop.maxSupply()).to.equal(maxSupply);
                        expect(await SSHDrop.totalSupply()).to.equal(0);
                    });
                });
            }
        }
    });

    describe('minting', () => {
        const id = 0;

        const mint = async (tokenId: number, value: BigNumber) => {
            it(`should mint`, async () => {
                await SSHDrop.connect(normalUser).mint({ value });
            });

            const newTotalSupply = tokenId + 1;

            it('balance of minter should be updated', async () => {
                expect(await SSHDrop.balanceOf(normalUser.address)).to.equal(newTotalSupply);
            });

            it('total supply should be updated', async () => {
                expect(await SSHDrop.totalSupply()).to.equal(newTotalSupply);
            });

            it('minted item should be properly initialized', async () => {
                const dropItem = { isMutable: (await SSHDrop.getDropItem(tokenId)).isMutable };
                expect(dropItem).to.deep.equal({ isMutable: true });
            });
        };

        for (let maxSupply of [0, 1, 10]) {
            for (let price of [BigNumber.from(0), toEth('0.05'), toEth('0.1'), toEth('0.5'), toEth('2.5')]) {
                context(`with id: ${id}, maxSupply: ${maxSupply}`, () => {
                    before(async () => {
                        SSHDrop = await Contracts.SSHDrop.deploy(id, maxSupply, price, []);
                    });

                    for (let tokenId = 0; tokenId !== maxSupply; tokenId++) {
                        mint(tokenId, price);
                    }

                    it(`shouldn't mint when max supply has been reached`, async () => {
                        await expect(SSHDrop.mint()).to.be.revertedWith(MAX_SUPPLY_REACHED);
                    });
                });
            }
        }
    });
});
