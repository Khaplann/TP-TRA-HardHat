// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;
contract Adoption {
    address[16] public adopters;

    function adopt(uint petId) public returns(uint) {
        require(petId >= 0 && petId <= 15);
        adopters[petId] = msg.sender;
        return petId;
    }

    function getAdopters() public view returns(address[16] memory){
        return adopters;
    }

    function getAdopterOf(uint petId) public view returns (address) {
        return adopters[petId];
    }
}