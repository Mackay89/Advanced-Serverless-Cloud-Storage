// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AccessControl {
    address public owner;
    mapping(address => bool) public authorizedUsers;

    event AccessGranted(address indexed user);
    event AccessRevoked(address indexed user);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    function grantAccess(address user) public onlyOwner {
        authorizedUsers[user] = true;
        emit AccessGranted(user);
    }

    function revokeAccess(address user) public onlyOwner {
        authorizedUsers[user] = false;
        emit AccessRevoked(user);
    }

    function checkAccess(address user) public view returns (bool) {
        return authorizedUsers[user];
    }
}

