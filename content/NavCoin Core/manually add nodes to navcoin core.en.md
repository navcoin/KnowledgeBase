---
title: Manually add peer nodes to NavCoin Core
date: '2019-03-24'
---
We will be modifing your wallet's configuration file, so first locate your NavCoin data directory, you can find it by following [this guide](./locate-your-data-directory).

Open the file called `navcoin.conf` in a text editor, if you don't have a file called `navcoin.conf` in the `navcoin4` folder, create a new file with the name `navcoin.conf`.

Next, in your web browser, go to https://chainz.cryptoid.info/nav/#!network and click node list for newest version in the list (this should be the top of the list, in this example below it's `/NavCoin:4.5.2/`)

![where to find the node list](/images/where-is-the-node-list.png)

Copy all the `addnode ...` text from the window that pops up, paste it into your `navcoin.conf` file. and save.

![nodelist](/images/node-list.png)

After adding the nodes, close and reopen your wallet, it should now try to connect to all of the nodes you added to your `navcoin.conf` file.
