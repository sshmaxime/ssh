// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.14;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721Enumerable } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import { IERC721 } from "@openzeppelin/contracts/interfaces/IERC721.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";

import { IMutator } from "../mutators/interfaces/IMutator.sol";
import "hardhat/console.sol";

/**
 * @dev Define a DROP item.
 *
 * isMutable: Status of the DROP item. Default: True
 * versionId: The version id of the DROP item. Default: No default value
 * contractMutator: Contract address of the asset mutating the DROP item. Default: address(0)
 * tokenIdMutator: Token id of the asset mutating the DROP item. Default: 0
 */
struct DropItem {
    bool isMutable;
    uint256 versionId;
    address contractMutator;
    uint256 tokenIdMutator;
}

/**
 * @author Maxime Aubanel - @sshmaxime
 *
 * @title SSHDrop
 */
contract SSHDrop is ERC721Enumerable, Ownable {
    string constant _name = "SSH LABS DROP ";
    string constant _symbol = "DROP #";

    string BASE_URI = "";

    // Immutables

    // The id of the DROP
    uint256 immutable DROP_ID;

    // The maximum supply of the DROP
    uint256 immutable MAX_SUPPLY;

    // The price to mint the DROP item
    uint256 immutable PRICE;

    // The number of versions
    uint256 immutable VERSIONS; // starts at version 0

    // Drop Default Item
    address immutable DEFAULT_ITEM;

    // Mappings

    // Mapping from token id to DROP item
    mapping(uint256 => DropItem) tokenIdToDropItem;

    // Mapping from a mutator contract address to a IMutator interface
    mapping(address => IMutator) mutatorAddressToIMutator;

    // Events

    // Event triggered when an item is minted
    event Minted(uint256 indexed tokenId);

    // Event triggered when an item is mutated
    event Mutated(uint256 indexed tokenId);

    constructor(
        uint256 id,
        uint256 _maxSupply,
        uint256 _price,
        uint256 _versions,
        address _defaultItem
    ) ERC721(string.concat(_name, Strings.toString(id)), string.concat(_symbol, Strings.toString(id))) {
        DROP_ID = id;
        MAX_SUPPLY = _maxSupply;
        PRICE = _price;
        VERSIONS = _versions;
        DEFAULT_ITEM = _defaultItem;

        transferOwnership(tx.origin);
    }

    /**
     * @dev Return the id of the DROP.
     */
    function dropId() public view returns (uint256) {
        return DROP_ID;
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
     * @dev Return the default item.
     */
    function defaultItem() public view returns (address) {
        return DEFAULT_ITEM;
    }

    /**
     * @dev Return the DROP item matching the token id.
     */
    function getDropItem(uint256 tokenId) public view returns (DropItem memory) {
        require(tokenId < totalSupply(), "INCORRECT_TOKENID");
        return tokenIdToDropItem[tokenId];
    }

    /**
     * @dev Return the URI of the metadata of the DROP.
     */
    function dropURI() public view returns (string memory) {
        return BASE_URI;
    }

    /**
     * @dev Load the metadata URI of the DROP.
     */
    function setDropURI(string memory newURI) public onlyOwner {
        BASE_URI = newURI;
    }

    /**
     * @dev Load mutator interface.
     */
    function setMutator(address mutatorContract, IMutator _imutator) public onlyOwner {
        mutatorAddressToIMutator[mutatorContract] = _imutator;
    }

    /**
     * @dev Mint a DROP item.
     */
    function mint(uint256 versionId) external payable {
        uint256 tokenId = totalSupply();
        uint256 maxSupply_ = maxSupply();

        // Token id to be minted needs to be below the max supply limit
        require(tokenId < maxSupply_, "MAX_SUPPLY_REACHED");

        // Minter needs to mint a correct version of the DROP
        require(versionId <= VERSIONS, "INCORRECT_VERSION");

        // Minter needs to pay with the correct amount needed
        require(msg.value == PRICE, "INCORRECT_FUNDS");

        _safeMint(msg.sender, tokenId);
        tokenIdToDropItem[tokenId] = DropItem({
            isMutable: true,
            versionId: versionId,
            contractMutator: address(0),
            tokenIdMutator: 0
        });

        emit Minted(tokenId);
    }

    /**
     * @dev Mutate a DROP item.
     */
    function mutate(uint256 tokenIdToMutate, IERC721 contractMutator, uint256 tokenIdMutator) external {
        uint256 totalSupply_ = totalSupply();

        require(tokenIdToMutate < totalSupply_, "TOKEN ID OUT OF BOUND");
        require(this.ownerOf(tokenIdToMutate) == tx.origin, "INVALID_OWNER");

        // now that basics checks have been made we need to check if the contract mutator
        // needs to be handled in a non IERC721 specific way
        IMutator mutator = mutatorAddressToIMutator[address(contractMutator)];

        // if contract mutator is common check the given contract or else check its mutator
        if (address(mutator) == address(0)) {
            require(contractMutator.ownerOf(tokenIdMutator) == tx.origin, "INVALID_OWNER");
        } else {
            require(mutator.ownerOf(tokenIdMutator) == tx.origin, "INVALID_OWNER");
        }

        DropItem storage dropItem = tokenIdToDropItem[tokenIdToMutate];

        dropItem.contractMutator = address(contractMutator);
        dropItem.tokenIdMutator = tokenIdMutator;

        dropItem.isMutable = false;

        emit Mutated(tokenIdToMutate);
    }
}
