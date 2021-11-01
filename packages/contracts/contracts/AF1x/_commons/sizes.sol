// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.9;

contract AF1xSizes {
    mapping(bytes32 => bool) public _sizes;

    constructor() {
        _sizes["35.5"] = true;
        _sizes["36"] = true;
        _sizes["36.5"] = true;
        _sizes["37.5"] = true;
        _sizes["38"] = true;
        _sizes["38.5"] = true;
        _sizes["39"] = true;
        _sizes["40"] = true;
        _sizes["40.5"] = true;
        _sizes["41"] = true;
        _sizes["42"] = true;
        _sizes["42.5"] = true;
        _sizes["43"] = true;
        _sizes["44"] = true;
        _sizes["44.5"] = true;
        _sizes["45"] = true;
        _sizes["45.5"] = true;
        _sizes["46"] = true;
        _sizes["47"] = true;
        _sizes["47.5"] = true;
        _sizes["48.5"] = true;
        _sizes["49.5"] = true;
        _sizes["50.5"] = true;
        _sizes["51.5"] = true;
        _sizes["52.5"] = true;
    }

    function get(bytes32 size) external view returns (bool) {
        return _sizes[size];
    }
}
