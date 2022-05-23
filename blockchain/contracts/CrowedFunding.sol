//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract CrowedFunding {
    mapping(address => uint) public contributer;
    address public manager;
    uint public minContribution;
    uint public noOfContributer;
    uint public raisedAmount;


    struct Request {
        string title;
        string description;
        address payable recipient;
        uint noOfVoters;
        uint  target;
        uint  deadline;
        bool completed;
        uint requestNo;
        mapping(address => bool) voters;
    }

    mapping(uint => Request) public requests;
    uint public noOfRequests;

    constructor() {
        manager = msg.sender;
        minContribution = 100 wei;
    }


    function sendEth() external payable {
        require(msg.value > minContribution, "Minimum contribution of 100 wei required.");
        if(contributer[msg.sender] == 0) {
            noOfContributer += 1;
        }
        contributer[msg.sender] += msg.value;
        raisedAmount += msg.value;
    }


    function getContractBalance() external view returns(uint) {
        return address(this).balance;
    }


    function refund() public {
        require(msg.sender == manager , "You need to mangaer to refund the money");
        require(contributer[msg.sender] > 0, "You didnot contribute for this project.");
        address payable user = payable(msg.sender);
        user.transfer(contributer[msg.sender]);
        contributer[msg.sender] = 0;
    }

    modifier onlyManager() {
        require(msg.sender == manager, "Only manager can call this function");
        _;
    }

    function createRequest(string memory _title, string memory _description, address payable _recipient, uint _deadline, uint _target) public onlyManager {
        Request storage newRequest = requests[noOfRequests];
        newRequest.requestNo = noOfRequests;
        noOfRequests ++;
        newRequest.title = _title;
        newRequest.description = _description;
        newRequest.recipient = _recipient;
        newRequest.deadline = block.timestamp + _deadline;
        newRequest.target = _target;
        newRequest.completed = false;
        newRequest.noOfVoters = 0;
    }

    function voteRequest(uint _requestNo) public {
        require(contributer[msg.sender] > 0, "You must contribute to vote");
        Request storage thisRequest = requests[_requestNo];
        require(thisRequest.voters[msg.sender] == false, "You have already voted.");
        thisRequest.voters[msg.sender] = true;
        thisRequest.noOfVoters ++;
    }

    function makePayment(uint _requestNo) public {
        Request storage thisRequest = requests[_requestNo];
        require(raisedAmount >= thisRequest.target, "Required Amount is not raised.");
        require(thisRequest.completed == false, "The request has already been completed.");
        require(thisRequest.noOfVoters > noOfContributer / 2, "Majority vote is required to proceed payment.");
        thisRequest.recipient.transfer(thisRequest.target);
        thisRequest.completed = true;
    }
}