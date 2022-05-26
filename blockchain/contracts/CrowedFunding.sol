//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract CrowedFunding {
    address public manager;
    uint public minContribution;
    // mapping(address => mapping(uint => uint)) public contributer; //first int in second mapping refers to the requestNo and second is contribution


    struct Request {
        string title;
        string description;
        address payable recipient;
        uint noOfVoters;
        uint noOfContributer;
        uint raisedAmount;
        uint  target;
        uint  deadline;
        bool completed;
        uint requestNo;
        mapping(address => bool) voters;
        mapping(address => uint) contributer;
    }

    mapping(uint => Request) public requests;
    uint public noOfRequests;

    constructor() {
        manager = msg.sender;
        minContribution = 100 wei;
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
    newRequest.noOfContributer = 0;
    newRequest.raisedAmount = 0;
}


    function sendEth(uint _requestNo) external payable {
        require(msg.value > minContribution, "Minimum contribution of 100 wei required.");
        Request storage thisRequest = requests[_requestNo];
        if(thisRequest.contributer[msg.sender] == 0) {
            thisRequest.noOfContributer += 1;
        }
        thisRequest.contributer[msg.sender] += msg.value;
        thisRequest.raisedAmount += msg.value;
    }


    function getRequestBalance(uint _requestNo) external view returns(uint) {
        Request storage thisRequest = requests[_requestNo];
        return thisRequest.raisedAmount;
    }


    function refund(uint _requestNo) public {
        Request storage thisRequest = requests[_requestNo];
        require(block.timestamp > thisRequest.deadline, "you cannot get refund before deadline");
        require(msg.sender == manager , "You need to mangaer to refund the money");
        require(thisRequest.contributer[msg.sender] > 0, "You didnot contribute for this project.");
        address payable user = payable(msg.sender);
        user.transfer(thisRequest.contributer[msg.sender]);
        thisRequest.contributer[msg.sender] = 0;
    }

    modifier onlyManager() {
        require(msg.sender == manager, "Only manager can call this function");
        _;
    }


    function voteRequest(uint _requestNo) public {
        Request storage thisRequest = requests[_requestNo]; 
        require(thisRequest.contributer[msg.sender] > 0, "You must contribute to vote");
        require(thisRequest.voters[msg.sender] == false, "You have already voted.");
        thisRequest.voters[msg.sender] = true;
        thisRequest.noOfVoters ++;
    }

    function makePayment(uint _requestNo) public onlyManager {
        Request storage thisRequest = requests[_requestNo];
        require(thisRequest.raisedAmount >= thisRequest.target, "Required Amount is not raised.");
        require(thisRequest.completed == false, "The request has already been completed.");
        require(thisRequest.noOfVoters > thisRequest.noOfContributer / 2, "Majority vote is required to proceed payment.");
        thisRequest.recipient.transfer(thisRequest.target);
        thisRequest.completed = true;
    }
}