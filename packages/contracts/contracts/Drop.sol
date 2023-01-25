// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.14;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721Enumerable } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import { IERC721 } from "@openzeppelin/contracts/interfaces/IERC721.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";

import { ITokenInterface } from "./tokens/ITokenInterface.sol";

/**
 * @dev
 */
enum DripStatus {
    DEFAULT,
    MUTATED
}

/**
 * @dev
 */
struct DripMutation {
    address token;
    uint256 tokenId;
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

    // URI of the drop
    string DROP_URI = "";

    // Base URI of the drips
    string BASE_TOKEN_URI = "";

    // Immutables

    // The id of the DROP
    uint256 immutable DROP_ID;

    // The maximum supply of the DROP
    uint256 immutable MAX_SUPPLY;

    // The price to mint the Drip
    uint256 immutable PRICE;

    // The number of versions
    uint256 immutable VERSIONS; // starts at version 1, cannot be 0

    // Mappings

    // Mapping from token id to Drip
    mapping(uint256 => Drip) tokenIdToDrip;

    // Mapping from a token contract address to ITokenInterface
    mapping(address => ITokenInterface) tokenAddressToInterface;

    // Events

    // Event triggered when a Drip is minted
    event Minted(uint256 indexed tokenId);

    // Event triggered when a Drip is mutated
    event Mutated(uint256 indexed tokenId);

    constructor(
        uint256 id,
        uint256 _maxSupply,
        uint256 _price,
        uint256 _versions
    ) ERC721(string.concat(_name, Strings.toString(id)), string.concat(_symbol, Strings.toString(id))) {
        require(_versions > 0, "INVALID_VERSIONS");

        DROP_ID = id;
        MAX_SUPPLY = _maxSupply;
        PRICE = _price;
        VERSIONS = _versions;

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
     * @dev Return the Drip matching the token id.
     */
    function drip(uint256 tokenId) public view returns (Drip memory) {
        require(tokenId < totalSupply(), "INVALID_TOKEN_ID");
        return tokenIdToDrip[tokenId];
    }

    /**
     * @dev Load token interface.
     */
    function setTokenInterface(address tokenAddress, ITokenInterface _ITokenInterface) public onlyOwner {
        tokenAddressToInterface[tokenAddress] = _ITokenInterface;
    }

    /**
     * @dev Get token interface.
     */
    function getTokenInterface(address tokenAddress) public view returns (ITokenInterface) {
        return tokenAddressToInterface[tokenAddress];
    }

    /**
     * @dev Return the URI of the metadata of the DROP.
     */
    function dropURI() public view returns (string memory) {
        return DROP_URI;
    }

    /**
     * @dev Load the baseURI of the metadata of the DROP.
     */
    function setDropURI(string memory newURI) public onlyOwner {
        DROP_URI = newURI;
    }

    /**
     * @dev Load the baseURI of the Drips.
     */
    function setBaseTokenURI(string memory newURI) public onlyOwner {
        BASE_TOKEN_URI = newURI;
    }

    /**
     * @dev Return the baseURI of the Drips.
     */
    function _baseURI() internal view override returns (string memory) {
        return BASE_TOKEN_URI;
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
            status: DripStatus.DEFAULT,
            mutation: DripMutation({ token: address(0), tokenId: 0 })
        });

        emit Minted(tokenId);
    }

    /**
     * @dev Mutate a Drip.
     */
    function mutate(uint256 dripToMutate, IERC721 token, uint256 tokenId) external {
        Drip storage _drip = tokenIdToDrip[dripToMutate];

        require(dripToMutate < totalSupply(), "OUT_OF_BOUND");
        require(this.ownerOf(dripToMutate) == msg.sender, "INVALID_OWNER");
        require(_drip.status == DripStatus.DEFAULT, "ALREADY_MUTATED");

        // now that basics checks have been made we need to check if the token mutating
        // needs to be handled in a non IERC721 way
        ITokenInterface tokenInterface = getTokenInterface(address(token));

        // if token mutating is common, check the given contract or else check its interface
        if (address(tokenInterface) == address(0)) {
            require(token.ownerOf(tokenId) == msg.sender, "INVALID_OWNER");
        } else {
            require(tokenInterface.ownerOf(tokenId) == msg.sender, "INVALID_OWNER");
        }

        _drip.status = DripStatus.MUTATED;
        _drip.mutation.token = address(token);
        _drip.mutation.tokenId = tokenId;

        emit Mutated(dripToMutate);
    }
}
