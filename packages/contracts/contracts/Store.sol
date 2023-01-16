// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.14;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ERC721Enumerable } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

import { Drop } from "./Drop.sol";

/**
 * @author Maxime Aubanel - @sshmaxime
 *
 * @title Store
 */
contract Store is Ownable {
    // Mapping from drop id to drop contract
    mapping(uint256 => Drop) private dropIdToDrop;

    // Total supply of DROPs
    uint256 TOTAL_SUPPLY = 0;

    // Event emitted when a DROP gets created
    event DropCreated(uint256 indexed dropId);

    /**
     * @dev Return the DROP item matching the drop id.
     */
    function drop(uint256 dropId) public view returns (Drop) {
        return dropIdToDrop[dropId];
    }

    /**
     * @dev Return the current supply.
     */
    function totalSupply() public view returns (uint256) {
        return TOTAL_SUPPLY;
    }

    /**
     * @dev Create a DROP.
     */
    function createDrop(uint256 maxSupply, uint256 mintPrice, uint8 versions, address defaultItem) public onlyOwner {
        uint256 dropId = TOTAL_SUPPLY;
        dropIdToDrop[dropId] = new Drop(dropId, maxSupply, mintPrice, versions, defaultItem);
        TOTAL_SUPPLY++;

        emit DropCreated(dropId);
    }
}
