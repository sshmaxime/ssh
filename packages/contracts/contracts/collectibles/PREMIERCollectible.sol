// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.14;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721Enumerable } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

/**
 * @author Maxime Aubanel - @sshmaxime
 *
 * @title PREMIERCollectible
 */
contract PREMIERCollectible is ERC721Enumerable, Ownable {
    uint256 immutable PRICE;

    // Contract URI
    string CONTRACT_URI = "";

    // Base URI of the drips
    string BASE_URI = "";

    // Event triggered when an item is minted
    event Minted(uint256 indexed tokenId);

    constructor(string memory _name, string memory _symbol, uint256 _price) ERC721(_name, _symbol) {
        PRICE = _price;
    }

    /**
     * @dev Return the price of the mint.
     */
    function price() public view returns (uint256) {
        return PRICE;
    }

    /**
     * @dev Load the baseURI.
     */
    function setBaseURI(string memory newURI) public onlyOwner {
        BASE_URI = newURI;
    }

    /**
     * @dev Return the baseURI.
     */
    function _baseURI() internal view override returns (string memory) {
        return BASE_URI;
    }

    /**
     * @dev Set the contractURI.
     */
    function setContractURI(string memory newURI) public onlyOwner {
        CONTRACT_URI = newURI;
    }

    /**
     * @dev Load the contractURI.
     */
    function contractURI() public view returns (string memory) {
        return CONTRACT_URI;
    }

    /**
     * @dev Mint a token.
     */
    function mint() external payable {
        // Minter needs to pay with the correct amount needed
        require(msg.value == PRICE, "INCORRECT_FUNDS");

        uint256 tokenId = totalSupply();
        _safeMint(msg.sender, tokenId);
        emit Minted(tokenId);
    }
}
