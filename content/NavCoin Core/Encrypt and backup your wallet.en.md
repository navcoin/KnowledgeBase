---
title: How to encrypt and back up your wallet?
date: "2020-09-14"
order: "010"
---

### Before encrypting your wallet

It is vital that you create a strong passphrase to encrypt your wallet with and that you keep a back up of it somewhere secure. Using a password manager which can generate and store long, secure passwords is highly recommended. 

IF YOU LOSE YOUR WALLET ENCRYPTION PASSWORD YOU WILL NOT BE ABLE TO ACCESS YOUR WALLET'S FUNDS ANYMORE.

### How to encrypt your wallet

To encrypt your wallet, open the NavCoin Core wallet software and in the toolbar under `Settings`, click `Encrypt Wallet`.

You will be prompted to enter a secure password, enter your passphrase that you generated earlier.

After confirming your password the wallet will restart. When it reopens it will have encrypted your `wallet.dat`.
It is highly recommended that you now back up your `wallet.dat`.

### How to back up your wallet.dat

It's recommended that you keep more than one back up of your `wallet.dat`, you are your own bank and if you lose your wallet no one is going to be able to get you access to your funds. 

First ensure your wallet software is shutdown.

Next locate your data directory ([follow this guide](/navcoin-core/locate-your-data-directory)). Copy the `wallet.dat` from inside the `navcoin4` folder.

After this place your copy of your `wallet.dat` in some kind of secure storage. Potential places to store it are: on external hard drives or USB drives stored in secure locations, online in an encrypted file storage service. Make sure you store it in multiple places in order to ensure you have redundancy incase something goes wrong with one of your back ups.

Do not just make a copy of the `wallet.dat` on the same computer that you are using your wallet on. The reason for a back up is to prepare you for an event in which your computer is unable to be accesed, whether it be via theft, malfunction or something other incident.
