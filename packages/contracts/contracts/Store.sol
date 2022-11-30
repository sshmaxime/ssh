// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.14;

import { SSHDrop } from "./drop/Drop.sol";

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ERC721Enumerable } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract SSHStore is Ownable {
    // Mapping from drop id to drop contract
    mapping(uint256 => SSHDrop) private _drops;

    // Total supply of DROPs
    uint256 TOTAL_SUPPLY = 0;

    // Event emitted when a DROP gets created
    event DropCreated(uint256 indexed dropId);

    /**
     * @dev Return the DROP item matching the drop id.
     */
    function getDrop(uint256 dropId) public view returns (SSHDrop) {
        return _drops[dropId];
    }

    /**
     * @dev Return the current supply.
     */
    function getSupply() public view returns (uint256) {
        return TOTAL_SUPPLY;
    }

    /**
     * @dev Create a DROP.
     */
    function createDrop(uint256 maxSupply, uint256 mintPrice, uint8 versions, address defaultItem) public onlyOwner {
        uint256 dropId = TOTAL_SUPPLY;
        _drops[dropId] = new SSHDrop(dropId, maxSupply, mintPrice, versions, defaultItem);
        TOTAL_SUPPLY++;

        emit DropCreated(dropId);
    }
}
