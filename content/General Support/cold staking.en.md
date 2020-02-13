---
title: Cold-Staking
date: "2020-02-13"
draft: false
---

Cold staking means that your wallet is not online staking and subject to attacks. Instead, a staking wallet which constains no NAV will be staking on behalf of your spending wallet which holds your NAV. Bear in mind that you still need a nodes actively staking ideally 24/7 to get your staking rewards.

To start cold staking, first back up your spending wallet's wallet.dat file. This file holds all your NavCoin. DO NOT LOSE IT. If you lose it, no one can help you recover it. Then you can create an empty wallet by removing the wallet.dat file in navcoin4 folder and then start the wallet client. Or, use a different machine and start the wallet client. You will then see a new wallet.dat file created in navcoin4 folder. We call this newly created one "staking wallet" since it is an empty wallet and it will be staking on behalf of your spending wallet. 

Now that you have spending and staking wallet, you will need to create a cold staking address which can be created by one spending address and one staking address. You can go to the recieve tab on your core wallet and click the "CREATE A COLD STAKING ADDRESS" button. A window will pop up to guide you throught the process. 

Now you can send your NAVs to your cold staking address. Your spending address from your spending wallet will still hold the NAVs and the power to spend it after you send it.

After you send your coins to the cold staking address, load your staking wallet with the mahcine you want to stake with (putting the wallet.dat file in the navcoin4 folder will do the trick). After syncing up, your cold staking balance will be shown. Now turn on staking and enjoy staking with your spending wallet offline. And remember to vote on proposals and consultations with your staking wallet.

