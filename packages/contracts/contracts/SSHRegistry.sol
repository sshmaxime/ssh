// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.9;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract SSHRegistry is Ownable {
    mapping(bytes32 => address) _Projects;

    function add(bytes32 projectName, address projectAddress) external onlyOwner {
        if (_Projects[projectName] == address(0)) {
            _Projects[projectName] = projectAddress;
        }
    }
}
