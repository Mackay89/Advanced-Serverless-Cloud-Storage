// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Billing {
    address public owner;
    mapping(address => uint256) public balances;

    event PaymentReceived(address indexed user, uint256 amount);
    event PaymentWithdrawn(address indexed owner, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    function makePayment() public payable {
        require(msg.value > 0, "Payment must be greater than zero");
        balances[msg.sender] += msg.value;
        emit PaymentReceived(msg.sender, msg.value);
    }

    function withdrawFunds(uint256 amount) public onlyOwner {
        require(amount <= address(this).balance, "Insufficient balance");
        payable(owner).transfer(amount);
        emit PaymentWithdrawn(owner, amount);
    }
}

