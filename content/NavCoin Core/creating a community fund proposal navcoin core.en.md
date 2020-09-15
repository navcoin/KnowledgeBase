---
date: "2019-03-18"
title: "How to create a Community Fund proposal using NavCoin Core?"
draft: false
order: "110"
---

### Generate the proposal command

If you aren't sure how to write out the code to submit a proposal yourself, then use the Proposal Builder to create it.

Go to the create proposal page in the Proposal Builder and fill in the form (The proposal builder can be found [here](https://nav-proposal-creator.netlify.com/) )

After filling in the form, click the GENERATE COMMAND button and copy the code that appears below.

### Submit the proposal

Open your NavCoin Core wallet and in the dropdowns select Debug Window under Help.

In the textbox enter `walletpassphrase "passphrase" timeout`, where `"passphrase"` is your wallet’s password and `timeout` is how long you wish to unlock your wallet in seconds.  
e.g. `walletpassphrase "MySecurePassword" 30`

With your wallet unlocked, paste in the generated code from the proposal website  
e.g. `createproposal mnyKBfcG4cGfhNZQqbBAaN1ujvjyMEg9wt 1000 42595200 "NavCoin Italia meet up event 2019 funding"`

Your proposal has now been submitted.


### If something went wrong

If something went wrong make sure that:  

You have at least 50 NAV in your wallet as this is the minimum fee required to submit a proposal

You pasted in the entire `createproposal` command

Your wallet didn’t relock itself before you pasted in the `createproposal` command (if you’re using the NavCoin Core Wallet)

