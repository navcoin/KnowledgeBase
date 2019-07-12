---
title: How to bootstrap your wallet
date: "2019-03-21"
---

### Automatically bootstrap

The NavCoin core wallet has automatic boostrap capability built in. In the toolbar simply look under File -> Bootstrap blockchain. There will be a URL prefilled in the input field, you can either click 'OK' to download and install that blockchain or you can paste in a URL from another source.

A boostrap for the wallet can be downloaded from:

https://bootstrap.navcoin.org/bootstrap-navcoin_mainnet.tar

After clicking OK your wallet will close (if it fails to reopen, simply reopen it yourself), and when it reopens it will download and install the bootstrap from the provided URL automatically.

NOTE: this may take some time as the blockchain is around 2GB in size


### Manually bootstrap

If for some reason you wish to boostrap manually, you simply need to replace the `chainstate` and `blocks` folders inside your NavCoin data directory with the ones from your bootstrap.

To find the data directory please see [this article](/navcoin-core/locate-your-data-directory/)

### What is “Bootstrapping”? 

Bootstrapping is the process of adding a pre-synced blockchain from a trusted source to your wallet, allowing you to skip part or all of the blockchain syncing process. 

