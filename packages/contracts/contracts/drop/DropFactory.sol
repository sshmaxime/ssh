// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.9;

import { IERC721 } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract SSHRegistry is Ownable {
    // mapping from project name to its ERC721 contract
    mapping(bytes32 => IERC721) _Projects;

    /**
     * @notice Return wether or not a project name is a member of the SSH ecosystem
     * @param projectName the project name to test
     */
    function isProjectMemberOfSSH(bytes32 projectName) external view returns (bool) {
        IERC721 project = _Projects[projectName];

        if (address(project) == address(0)) return false;
        return true;
    }

    /**
     * @notice Return wether or not an address is a member of the SSH ecosystem
     * @param projectName the project name to test
     * @param caller the address to test
     */
    function isCallerMemberOfSSHProject(bytes32 projectName, address caller) external view returns (bool) {
        IERC721 project = _Projects[projectName];

        if (address(project) == address(0)) return false;

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
