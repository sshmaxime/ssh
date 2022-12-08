// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.14;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721Enumerable } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

import { ITestERC721 } from "./ITestERC721.sol";

contract TestERC721 is ERC721Enumerable, ITestERC721 {
    //
    uint256 constant PRICE = 0.1 ether;

    // Event triggered when an item is minted
    event Minted(uint256 indexed tokenId);

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    /**
     * @dev Return the price of the mint.
     */
    function price() public pure returns (uint256) {
        return PRICE;
    }

    function mint() external payable {
        // Minter needs to pay with the correct amount needed
        require(msg.value == PRICE, "INCORRECT_FUNDS");

        uint256 tokenId = totalSupply();
        _safeMint(msg.sender, tokenId);
        emit Minted(tokenId);
    }
}
