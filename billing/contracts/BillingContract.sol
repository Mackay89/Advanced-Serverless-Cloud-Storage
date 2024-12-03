// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Billing {
    address public owner;

    struct User {
        uint256 storageUsed; // in GB
        uint256 processingUsed; // in units
        uint256 balance; // in Ether
    }

    mapping(address => User) public users;

    uint256 public pricePerGB = 0.01 ether; // Example price for storage (per GB)
    uint256 public pricePerProcessingUnit = 0.001 ether; // Example price for processing

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function updatePricing(uint256 _pricePerGB, uint256 _pricePerProcessingUnit) public onlyOwner {
        pricePerGB = _pricePerGB;
        pricePerProcessingUnit = _pricePerProcessingUnit;
    }

    function addUsage(address _user, uint256 _storageUsed, uint256 _processingUsed) public onlyOwner {
        users[_user].storageUsed += _storageUsed;
        users[_user].processingUsed += _processingUsed;
    }

    function payBill() public payable {
        User storage user = users[msg.sender];
        uint256 totalCost = (user.storageUsed * pricePerGB) + (user.processingUsed * pricePerProcessingUnit);
        require(msg.value >= totalCost, "Insufficient payment");

        user.balance += msg.value;
        user.storageUsed = 0;
        user.processingUsed = 0;
    }

    function withdrawFunds() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }

    function getUserDetails(address _user) public view returns (uint256, uint256, uint256) {
        User memory user = users[_user];
        return (user.storageUsed, user.processingUsed, user.balance);
    }
}

