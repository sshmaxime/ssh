// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.14;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721Enumerable } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import { IERC721 } from "@openzeppelin/contracts/interfaces/IERC721.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";

import { IMutator } from "./mutators/IMutator.sol";

/**
 * @dev
 */
enum DripStatus {
    VIRGIN,
    MUTATED
}

/**
 * @dev
 */
struct DripMutation {
    address mutator;
    uint256 mutatorId;
}

/**
 * @dev
 */
struct Drip {
    uint256 versionId;
    //
    DripStatus status;
    DripMutation mutation;
}

/**
 * @author Maxime Aubanel - @sshmaxime
 *
 * @title Drop
 */
contract Drop is ERC721Enumerable, Ownable {
    string constant _name = "DROP#";
    string constant _symbol = "DROP#";

    string BASE_URI = "";

    // Immutables

    // The id of the DROP
    uint256 immutable DROP_ID;

    // The maximum supply of the DROP
    uint256 immutable MAX_SUPPLY;

    // The price to mint the Drip
    uint256 immutable PRICE;

    // The number of versions
    uint256 immutable VERSIONS; // starts at version 1, cannot be 0

    // Drop Default Item
    address immutable DEFAULT_ITEM;

    // Mappings

    // Mapping from token id to Drip
    mapping(uint256 => Drip) tokenIdToDrip;

    // Mapping from a mutator contract address to a IMutator interface
    mapping(address => IMutator) mutatorAddressToIMutator;

    // Events

    // Event triggered when a Drip is minted
    event Minted(uint256 indexed tokenId);

    // Event triggered when a Drip is mutated
    event Mutated(uint256 indexed tokenId);

    constructor(
        uint256 id,
        uint256 _maxSupply,
        uint256 _price,
        uint256 _versions,
        address _defaultItem
    ) ERC721(string.concat(_name, Strings.toString(id)), string.concat(_symbol, Strings.toString(id))) {
        require(_versions > 0, "INVALID_VERSIONS");

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
     * @dev Return the versions of the mint.
     */
    function versions() public view returns (uint256) {
        return VERSIONS;
    }

    /**
     * @dev Return the default item.
     */
    function defaultItem() public view returns (address) {
        return DEFAULT_ITEM;
    }

    /**
     * @dev Return the Drip matching the token id.
     */
    function drip(uint256 tokenId) public view returns (Drip memory) {
        require(tokenId < totalSupply(), "INVALID_TOKEN_ID");
        return tokenIdToDrip[tokenId];
    }

    /**
     * @dev Load mutator interface.
     */
    function setMutator(address mutatorContract, IMutator _IMutator) public onlyOwner {
        mutatorAddressToIMutator[mutatorContract] = _IMutator;
    }

    /**
     * @dev Return the URI of the metadata of the DROP.
     */
    function URI() public view returns (string memory) {
        return BASE_URI;
    }

    /**
     * @dev Load the metadata URI of the DROP.
     */
    function setURI(string memory newURI) public onlyOwner {
        BASE_URI = newURI;
    }

    /**
     * @dev Mint a Drip.
     */
    function mint(uint256 versionId) external payable {
        uint256 tokenId = totalSupply();

        // Token id to be minted needs to be below the max supply limit
        require(tokenId < maxSupply(), "MAX_SUPPLY_REACHED");

        // Minter needs to mint a correct version of the DROP
        require(versionId <= VERSIONS, "INVALID_VERSION");

        // Minter needs to provide the correct amount
        require(msg.value == PRICE, "INVALID_FUNDS");

        _safeMint(msg.sender, tokenId);
        tokenIdToDrip[tokenId] = Drip({
            versionId: versionId,
            status: DripStatus.VIRGIN,
            mutation: DripMutation({ mutator: address(0), mutatorId: 0 })
        });

        emit Minted(tokenId);
    }

    /**
     * @dev Mutate a DROP item.
     */
    function mutate(uint256 tokenIdToMutate, IERC721 contractMutator, uint256 tokenIdMutator) external {
        require(tokenIdToMutate < totalSupply(), "OUT_OF_BOUND");
        require(this.ownerOf(tokenIdToMutate) == msg.sender, "INVALID_OWNER");

        // now that basics checks have been made we need to check if the contract mutator
        // needs to be handled in a non IERC721 specific way
        IMutator mutator = mutatorAddressToIMutator[address(contractMutator)];

        // if contract mutator is common check the given contract or else check its mutator
        if (address(mutator) == address(0)) {
            require(contractMutator.ownerOf(tokenIdMutator) == msg.sender, "INVALID_OWNER");
        } else {
            require(mutator.ownerOf(tokenIdMutator) == msg.sender, "INVALID_OWNER");
        }

        Drip storage _drip = tokenIdToDrip[tokenIdToMutate];

        _drip.status = DripStatus.MUTATED;
        _drip.mutation.mutator = address(contractMutator);
        _drip.mutation.mutatorId = tokenIdMutator;

        emit Mutated(tokenIdToMutate);
    }
}
