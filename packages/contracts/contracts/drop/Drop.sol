// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.14;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721Enumerable } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @dev Define a DROP item.
 *
 * isMutable: Status of the DROP. Default: True
 */
struct DropItem {
    bool isMutable;
}

/**
 * @author Maxime Aubanel - @sshmaxime
 *
 * @title SSHDrop
 */
contract SSHDrop is ERC721Enumerable, Ownable {
    string constant _name = "SSH LABS DROP ";
    string constant _symbol = "DROP ";

    // The maximum supply of the DROP
    uint256 immutable MAX_SUPPLY;

    // The price to mint the DROP item
    uint256 immutable PRICE;

    // List of the whitelisted addresses
    address[] WHITELIST;

    // Mapping from token id to DROP item
    mapping(uint256 => DropItem) tokenIdToDropItem;

    //
    event Minted(uint256 indexed tokenId);

    constructor(
        uint256 id,
        uint256 _maxSupply,
        uint256 _price
    ) ERC721(string.concat(_name, Strings.toString(id)), string.concat(_symbol, Strings.toString(id))) {
        MAX_SUPPLY = _maxSupply;
        PRICE = _price;

        transferOwnership(tx.origin);
    }

    /**
     * @dev Return the maximum supply of the DROP.
     */
    function maxSupply() public view returns (uint256) {
        return MAX_SUPPLY;
    }

    /**
     * @dev Return the price of the mint.
     */
    function price() public view returns (uint256) {
        return PRICE;
    }

    /**
     * @dev Return the whitelisted addresses.
     */
    function whitelist() public view returns (address[] memory) {
        return WHITELIST;
    }

    /**
     * @dev Return the DROP item matching the token id.
     */
    function getDropItem(uint256 tokenId) public view returns (DropItem memory) {
        return tokenIdToDropItem[tokenId];
    }

    /**
     * @dev Mint a DROP item.
     */
    function mint() public payable {
        uint256 tokenId = totalSupply();
        uint256 maxSupply_ = maxSupply();

        // Token id to be minted needs to be below the max supply limit
        require(tokenId < maxSupply_, "MAX_SUPPLY_REACHED");

        // Minter needs to pay with the correct amount needed
        require(msg.value == PRICE, "INCORRECT_FUNDS");

        _safeMint(msg.sender, tokenId);
        tokenIdToDropItem[tokenId] = DropItem({ isMutable: true });

        emit Minted(tokenId);
    }
}
