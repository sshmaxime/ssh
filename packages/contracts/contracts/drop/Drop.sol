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
 * versionId: The version of the DROP. Default: No default value
 */
struct DropItem {
    bool isMutable;
    uint8 versionId;
    //
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

    // The id of the drop
    uint256 immutable DROP_ID;

    // The maximum supply of the DROP
    uint256 immutable MAX_SUPPLY;

    // The price to mint the DROP item
    uint256 immutable PRICE;

    // Mapping from DROP version to metadata - metadata is JSON data as string
    mapping(uint8 => string) versionIdToMetadata;

    // Mapping from token id to DROP item
    mapping(uint256 => DropItem) tokenIdToDropItem;

    //
    event Minted(uint256 indexed tokenId);

    constructor(
        uint256 id,
        uint256 _maxSupply,
        uint256 _price
    ) ERC721(string.concat(_name, Strings.toString(id)), string.concat(_symbol, Strings.toString(id))) {
        DROP_ID = id;
        MAX_SUPPLY = _maxSupply;
        PRICE = _price;

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
     * @dev Return the DROP item matching the token id.
     */
    function getDropItem(uint256 tokenId) public view returns (DropItem memory) {
        return tokenIdToDropItem[tokenId];
    }

    /**
     * @dev Return the metadata of a version of the DROP.
     */
    function getMetadataVersion(uint8 versionId) public view returns (string memory) {
        return versionIdToMetadata[versionId];
    }

    /**
     * @dev Load metadata for a defined version.
     */
    function loadMetadataForVersion(uint8 versionId, string memory metadataLink) public onlyOwner {
        versionIdToMetadata[versionId] = metadataLink;
    }

    /**
     * @dev Mint a DROP item.
     */
    function mint(uint8 versionId) public payable {
        uint256 tokenId = totalSupply();
        uint256 maxSupply_ = maxSupply();

        // Token id to be minted needs to be below the max supply limit
        require(tokenId < maxSupply_, "MAX_SUPPLY_REACHED");

        // Minter needs to mint a correct version of the DROP
        require(
            keccak256(abi.encodePacked(versionIdToMetadata[versionId])) != keccak256(abi.encodePacked("")),
            "INCORRECT_VERSION"
        );

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
    function mutateDropItem(
        uint256 tokenId,
        address contractMutator,
        uint256 tokenIdMutator
    ) public {}
}
