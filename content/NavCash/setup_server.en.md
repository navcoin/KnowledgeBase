---
title: How to run my own NavCash Server?
date: "2020-09-06"
draft: false
order: "020"
---

We have put a lot of effort into making the process of running your own node as simple as possible. We will teach you how to do it with a rented VPS, which will not require you to have your computer turned on 24 hours. If you are going to stake using a pool because you don’t want to run your own server (whether NavCash, NavPool or other), you can skip this section.

The first step would be to get a VPS. We recommend you to make this step in [Hetzner](https://console.hetzner.cloud/), a German provider which is famous for its low prices and high quality service. Simply create an account there and log in. Choose ‘Add Server’, select Ubuntu 20.04 and CX21 (2vCPU and 4GB RAM). The costs are as low as 5,83€ per month!

Once the server is created, you will see the details to access it over SSH. Connect to it and one command will be enough to set it up.

> curl -s https://index.nav.community/setup.sh|sudo -E bash

It will take about 30 minutes to complete.

You will be prompted with two important values when it’s finished: your staking address and the address of your Electrum node.

When you launch NavCash for the first time, you will be asked about which server you want to connect. You can then input the server information to let NavCash connect to your own server.

For more information on the setup and how NavCash works, please checkout [this medium article](https://medium.com/@NAVCoin/navcoin-the-ultimate-guide-to-staking-its-never-been-so-easy-c0ef2f9983c8).
