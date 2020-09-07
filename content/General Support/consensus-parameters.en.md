---
title: How do Consensus Parameters Work?
date: "2020-03-12"
draft: false
order: "040"
---

Consensus parameters are enforced on the whole network. Changes can be proposed by anyone. If a change passes the voting, the change will take effect on the first block of the next block cycle.

Consensus parameter changes work very similarly to consultations with 2 differences. One, having multiple answers is not a requirement. Two, the voting cycle could end earlier if the 75% of votes accept/reject the proposed change AFTER meeting the quorum requirement.

The process can be broken down into 3 phases: support, reflection, and voting.

1. Support Phase:
When a consultation is created, it will have "Maximum of voting cycles for a consultation to gain support" as defined in the consensus parameter. If the support specified in "Minimum of support needed for a consultation answer proposal" or "Minimum of support needed for starting a range consultation" can not be met during the cycles, the consultation will expire. During the support phase, if the required supports are met, the consultation will still need to pass "Earliest cycle when a consultation can get in confirmation phase". The reason for this is to give people enough time to support the consultations and to suggest more answers. Once all the requirements are met, the consultation will enter the next phase.

2. Reflection Phase:
The length of this phase is defined in the consensus parameter "Length in cycles for the reflection phase of consultations". This is to give people enough time to think over what they want to vote on regarding the consultation.

3. Voting Phase:
The length of this phase is defined in the consensus parameter "Length in cycles for consultation votings". Votes will be reset at each cycle. After the last cycle ends, the votes will be locked in and stored in the blockchain for future reference. 
