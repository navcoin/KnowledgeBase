---
title: How does community funding work?
date: "2020-03-12"
draft: false
---

The process can be broken down into 4 steps: submit proposals, vote on proposals, submit payment requests, vote on payment requests. Creating proposals and payment requests may require fees specified in the netowrk consensus "Minimum fee to submit a fund proposal" and "Minimum fee to submit a payment request. 

The voting process length is defined in the consensus parameter "Maximum of voting cycles for fund proposal votings" and "Maximum of voting cycles for payment request votings". The length of a cycle is defined in "Length in blocks of a voting cycle".

For the voting itself. There are two things at play: the quorum and the accept/rejection votes. For a decision to be made on a proposal for a payment request, the required amount of votes need to be cast as defined in "Minimum of quorum for fund proposal votings" and "Minimum of quorum of payment request votings". Once the quorum is met, the votes will then be checked with "Minimum of positive/negative votes for a fund proposal to be accepted/rejected" and "Minimum of positive/negative votes for a payment request to be accepted/rejected". If the voting passes any of the 4 specified values, the decision of the proposal or payment request is considered made and funds will be locked up or paid. If a decision cannot be made before the maximmum of voting cycle is reached, the proposal or payment request will expire.

