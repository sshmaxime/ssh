// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.14;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721Enumerable } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import { IERC721 } from "@openzeppelin/contracts/interfaces/IERC721.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";

import { IMutator } from "./interfaces/IMutator.sol";

/**
 * @author Maxime Aubanel - @sshmaxime
 *
 * @title ICryptopunks
 */
interface ICryptopunks {
    function punkIndexToAddress(uint256 tokenId) external returns (address);
}

/**
 * @author Maxime Aubanel - @sshmaxime
 *
 * @title CryptopunksMutator
 */
contract CryptopunksMutator is IMutator {
    ICryptopunks immutable MUTATOR;

    constructor(ICryptopunks _mutator) {
        MUTATOR = _mutator;
    }

    function ownerOf(uint256 tokenId) public returns (address) {
        return MUTATOR.punkIndexToAddress(tokenId);
    }
}
