// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.9;

import { IERC721 } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

error NotExisting();

contract SSHRegistry is Ownable {
    mapping(bytes32 => IERC721) _Projects;

    function isMember(bytes32 projectName, address caller) external view returns (bool) {
        IERC721 project = _Projects[projectName];

        if (address(project) == address(0)) revert NotExisting();

        if (project.balanceOf(caller) > 0) {
            return true;
        }

        return false;
    }

    function add(bytes32 projectName, address projectAddress) external onlyOwner {
        if (address(_Projects[projectName]) == address(0)) {
            _Projects[projectName] = IERC721(projectAddress);
        }
    }
}
