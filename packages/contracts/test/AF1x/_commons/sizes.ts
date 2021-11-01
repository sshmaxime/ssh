import Contracts from '../../../components/contracts';
import { AF1xSizes } from '../../../typechain';
import { ethers } from 'hardhat';
import { expect } from 'chai';

const { formatBytes32String } = ethers.utils;

describe('AF1xSizes', () => {
    let AF1xSizes: AF1xSizes;

    before(async () => {
        AF1xSizes = await Contracts.AF1xSizes.deploy();
    });

    describe('sizes', () => {
        context('correct sizes', () => {
            it('get valid size should return true', async () => {
                expect(await AF1xSizes.get(formatBytes32String('42.5'))).to.be.true;
            });
        });

        context('incorrect sizes', () => {
            it('get invalid size should return false', async () => {
                expect(await AF1xSizes.get(formatBytes32String('302.5'))).to.be.false;
                expect(await AF1xSizes.get(formatBytes32String('fooo'))).to.be.false;
                expect(await AF1xSizes.get(formatBytes32String('111bar'))).to.be.false;
            });
        });
    });
});
