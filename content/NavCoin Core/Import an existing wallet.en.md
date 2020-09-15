---
title: How to restore your NavCoin Core wallet from a backup?
date: "2020-09-14"
order: "060"
---

### Preperation

To restore your wallet back up first you need a few things: 

– Your `wallet.dat` file 
– The password you used to encrypt your wallet.dat (if your wallet is encrypted)
– The latest version of the NavCoin Core Wallet software. (You can find a guide on upgrading to the latest version [here](/navcoin-core/update-your-wallet)) 
- Make sure that the NavCoin Core software is closed

### Import the wallet

First, open your NavCoin data directory (you can locate it by following [this guide](/navcoin-core/locate-your-data-directory)).
Once inside the directory, if there is an existing `wallet.dat` file, rename it to `old_wallet.dat` and move the `wallet.dat` that you wish to import into NavCoin Core into the data directory.

### Open your wallet

Now you can launch the NavCoin Core wallet and it will load in your `wallet.dat` file. If this wallet was encrypted you will need the encryption password if you want to be able to do things like send coins.

### Extra

Keep a copy of `old_wallet.dat` if you need to, otherwise you can delete it. Just make sure that you don't have any coins inside it before you do.

