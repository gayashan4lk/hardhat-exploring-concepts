//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract Token {
  string public name = "My Hardhat Token";
  string public symbol = "MHT";

  uint256 public totalSupply = 1000000;
  address public owner;
  mapping(address => uint256) balances;
  event Transfer(address indexed _from, address indexed _to, uint256 _value);

  constructor() {
    balances[msg.sender] = totalSupply;
    owner = msg.sender;
    console.log("This is my Token contract, HA HA HA!!!");
  }

  function transfer(address to, uint256 amount) external {
    require(balances[msg.sender] >= amount, "Not enough tokens");

    console.log("Transfering from %s to %s %s tokens", msg.sender, to, amount);

    balances[msg.sender] -= amount;
    balances[to] += amount;

    emit Transfer(msg.sender, to, amount);
  }

  function balanceOf(address account) external view returns (uint256) {
    return balances[account];
  }
}