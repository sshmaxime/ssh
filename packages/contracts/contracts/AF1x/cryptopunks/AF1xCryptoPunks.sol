// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.9;

import { ERC721Enumerable, ERC721 } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

struct AF1xCC {
    bytes32 _id;
    //
    bytes32 name; // name of the item
    bytes32 size; // size of the item
    bytes32 redeemer; // twitter @ of the redeemer
}

error AlreadyMinted();
error OutOfBound();
error InsufficientFunds();
error NotAuthorized();
error NotExisting();
error IncorrectSize();

interface IAF1xSizes {
    function get(bytes32) external view returns (bool);
}

interface ICryptoPunksMarket {
    function punkIndexToAddress(uint256) external view returns (address);
}

contract AF1xCryptoPunks is Ownable, ERC721Enumerable {
    // dev address
    address public immutable _dev;

    // cryptopunks contract
    IAF1xSizes public immutable _Sizes;
    ICryptoPunksMarket public immutable _CryptoPunks;

    uint64 constant ITEM_PRICE = 0.2 ether;
    uint16 constant MAX_SUPPLY = 10000;

    mapping(uint16 => AF1xCC) public _AF1xCC;

    constructor(
        address dev,
        address size,
        address cryptoPunks
    ) ERC721("ssh-AF1xCryptoPunks", "ssh-AF1xCC") {
        // set up dev address
        _dev = dev;

        // set up necessary  contracts
        _CryptoPunks = ICryptoPunksMarket(cryptoPunks);
        _Sizes = IAF1xSizes(size);
    }

    event Redeemed(address indexed from, uint256 indexed tokenId, bytes32 indexed twitterUsername);

    function mint(uint16 tokenId, bytes32 tokenName) external payable {
        // if minting without paying, revert
        if (msg.value < ITEM_PRICE) revert InsufficientFunds();

        // if minting out of range, revert
        if (tokenId >= MAX_SUPPLY || tokenId < 0) revert OutOfBound();

        // if minting without cryptopunk ownership, revert
        if (!(msg.sender == _CryptoPunks.punkIndexToAddress(tokenId))) revert NotAuthorized();

        AF1xCC storage item = _AF1xCC[tokenId];

        // if minting an already set item, revert
        if (item._id != 0) revert AlreadyMinted();

        // store item info
        item.name = tokenName;
        item._id = keccak256(abi.encodePacked(tokenId, tokenName, block.number));

        _safeMint(msg.sender, tokenId);
    }

    function redeem(
        uint16 tokenId,
        bytes32 size,
        bytes32 twitterUsername
    ) external {
        // if redeeming without token ownership, revert
        if (ownerOf(tokenId) != msg.sender) revert NotAuthorized();

        // if size is incorrect, revert
        if (!(_Sizes.get(size))) revert IncorrectSize();

        AF1xCC storage item = _AF1xCC[tokenId];

        // set info into item
        item.size = size;
        item.redeemer = twitterUsername;

        _burn(tokenId);

        emit Redeemed(msg.sender, tokenId, twitterUsername);
    }

    function getToken(uint16 tokenId) external view returns (AF1xCC memory) {
        return _AF1xCC[tokenId];
    }
}
