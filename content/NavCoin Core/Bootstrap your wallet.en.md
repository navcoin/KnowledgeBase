---
title: How to bootstrap your wallet?
date: "2021-04-28"
order: "030"
---

### Bootstrap

A boostrap for the wallet can be downloaded from:

https://bootstrap.nav.community/bootstrap.tar.gz

NOTE: this may take some time as this file is around 3.3GB in size

Once downloaded, you will need to use a program like winzip (tar/gunzip on linux) to extract the blockchain folders from this file.

You simply need to replace the `chainstate` and `blocks` folders inside your NavCoin data directory with the ones from your bootstrap.

To find the data directory please see [this article](/navcoin-core/locate-your-data-directory/)

NOTE: If you get the error `error opening block database, do you want to rebuild the block database?`, this would indicate your download failed or the file did not fully extract.

### What is “Bootstrapping”? 

Bootstrapping is the process of adding a pre-synced blockchain from a trusted source to your wallet, allowing you to skip part or all of the blockchain syncing process. 

