// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract StudentRecord{
    struct Student {
        uint256 rollNumber;
        string name;
    }
    mapping (uint256 => Student) public students;
    function addStudent(uint _rollNumber,string memory _name) public{
        students[_rollNumber]=Student(_rollNumber,_name);
    }
    function getStudent(uint256 _rollNumber) public view returns(string memory) {
        require(students[_rollNumber].rollNumber > 0, "Student not found");
        return students[_rollNumber].name;
    }
}