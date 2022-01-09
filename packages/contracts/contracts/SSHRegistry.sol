// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.9;

import { IERC721 } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract SSHRegistry is Ownable {
    // mapping from project to its ERC721 contract
    mapping(bytes32 => IERC721) _Projects;

    /**
     * @notice Return wether or not a project is a member of the SSH ecosystem
     * @param projectName the project name to test
     */
    function isProjectMemberOfSSH(bytes32 projectName) external view returns (bool) {
        return !(address(_Projects[projectName]) == address(0));
    }

    function add(bytes32 projectName, address projectAddress) external onlyOwner {
        if (address(_Projects[projectName]) == address(0)) {
            _Projects[projectName] = IERC721(projectAddress);
        }
    }
}
