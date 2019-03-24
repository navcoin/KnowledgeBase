---
title: Fixing balance and syncing issues with the NavCoin Core wallet
date: "2019-03-21"
---
### Make sure your wallet is on the latest version

First check if your wallet is up to date and install the latest version if it isn't. 
Check [this guide](/navcoin-core/update-your-wallet) for more information.

### Ensure your wallet has peers

If you have no peers you will be unable to sync. Peers are other nodes on the NavCoin network. 
In your core wallet it will list your 'active connections' on the home screen at the bottom of the window. 
If this is not visible or you have 0 connections this may be a sign of a deeper issue, follow the steps below to troubleshoot.

Check you're connected to the internet, this might seem obvious, but if your aren't connected to the internet than your walet will be unable to sync.

You can try to add peers to your wallet manually by adding them to your config file, see [this guide](./manually-add-nodes-to-navcoin-core) for more information. 
If this fails to increase your connection count try the next step. For more in

Your computer or router firewall may be blocking incoming connections from peers. 
NavCoin uses the port `44440` to talk to other nodes on the network. Ensure this is open on your firewalls.

You can also try bootstrapping the wallet, read [this guide](/navcoin-core/bootstrap-your-wallet) for more information.

If you have tried all these steps and are still having issues, look for help on the NavCoin Community Discord: https://discord.gg/y4Vu9jw
