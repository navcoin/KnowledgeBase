---
title: Which NavPay servers can my wallet connect to?
date: "2020-09-06"
draft: false
order: "010"
---

NavPay user an opensource, modified version of the Bitcore Node. The API behind NavPay can be used in a trustless way, your wallet never sends your private keys or any other vulnerable information to the API. When broadcasting a transaction, your tx is constructed and signed locally by your wallet and the API simply relays it the NavCoin network. If the API attempted to modify your transaction to steal your funds, the signature would be invalidated and the network would reject the transaction.

There are a number of NavPay APIs which you can configure you wallet to connect to. Multiple are setup to offer redunancy and balance the server load during peak times.

| Address        |  &nbsp; &nbsp; &nbsp; | Maintainer      |  &nbsp; &nbsp; &nbsp; | Status    |
| :------------- | :-------------------: | :-------------: | :-------------------: | --------: |
|  https://navpay-api-3.navcoin.org/bws/api | &nbsp; | [@proletesseract](https://github.com/proletesseract) | &nbsp; | online |
|  https://navpay-api-4.navcoin.org/bws/api | &nbsp; | [@proletesseract](https://github.com/proletesseract) | &nbsp; | online |
|  https://navpay-api-5.navcoin.org/bws/api | &nbsp; | [@proletesseract](https://github.com/proletesseract) | &nbsp; | online |

<br />
By default NavPay will try to automatically select one of these APIs for you on start up. If you're having trouble connecting to one of these APIs you can manually set which one to try in each wallet's settings;

**Settings > "Wallet Name" > More Options > Wallet Service URL**

Then paste in one of the API addresses here and save it. The wallet will refresh and attempt to connect to the API you have specified.

If you don't see your balance after switching to a new API you may need to register your wallet and/or scan your addresses for funds.

#### Re-registering a NavPay Wallet 

**Home > "Wallet Name"**

If your wallet needs to be re-registered the app should recognise this and there will be a "recreate" button which you can press to attempt the recreation on the back end. If this doesn't work, you might need to delete and recreate your wallet from your seed phrase to get it to re-register with the new API correctly. Make sure you have the correct seed phrase backed up before deleting your wallet as this can not be undone.

#### Scan for Transactions

If your wallet appears to be registered but your balance or transaction history is not correct, you probably need to scan you addresses for funds.

**Settings > "Wallet Name" > More Options > Wallet Addresses**

From here you can click "Scan addresses for funds". If you don't see any addresses in here, click the "+" button to load your addresses. Once you see the addresses which should have transactions or balances appear in this list, click "Scan addresses for funds" again and your balance and transaction history should then be displayed correctly.

#### Setting up Your Own API

You are welcome to setup your own NavPay API and use it or open it to the public. There are detailed instructions on how to setup an API in the [Deployment Documentation](https://github.com/Encrypt-S/bitcore-node/blob/master/hetzner.md). You will need a bit of linux experience to get one up and running, but the steps there are very verbose and should be able to be followed relatively easily. If you want to allow the public to connect to your server, please make a PR on this markdown file adding your address to the table of available servers above.

#### Other Issues

If you're having any other issues, please connect with the community on [Discord](https://discord.gg/y4Vu9jw) or open an issue on the relevant [NavPay Repository](https://github.com/Encrypt-S/NavPay). 