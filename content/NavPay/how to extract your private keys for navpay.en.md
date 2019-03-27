---
title: How to extract your Private Keys for NavPay
date: '2019-03-24'
draft: false
---

### Note

This guide is somewhat technical due to the nature of the tools we have available.
While unfortunate it is the best we can do at the moment.

THIS GUIDE ONLY WORKS WHEN YOU ARE USING NAVPAY FROM A DESKTOP WEB BROWSER. IT WILL NOT WORK FOR THE APP VERSIONS.

While the website we will use to extract the private keys of your NavPay wallet is trusted, it is not recommend to continue using the same NavPay wallet after extracting the private key for security reasons.

### Prequisites

- Install the latest version of Python 3 from https://www.python.org/downloads/
- Download the 'pycoin' tool from https://github.com/aguycalled/pycoin/archive/master.zip
- Make sure you extract the `master.zip` file.


### Get the NavPay xPrivKey

If your NavPay wallet has a spending password, you will need to remove the password for this next step.
You can re-add it after you have retrieved the xPrivKey but as said above, it is recommended to generate a new wallet.

To get the `xPrivKey`, you will need to open local storage.
Do this by right clicking on the page and clicking `Inspect Page`. A window will open up, click on the `Resources` tab. Inside this tab look for `LocalStorage` in the sidebar. Under `Local Storage` look for `https://navpay.navcoin.org` and click on it. A list of items should appear to the right.
Select `profile`. Under `Profile` expand `credentials` and then the `0`. Look for `xPrivKey` and copy it.
We will need this for the next step.

See the video below for an example.

<video src="/videos/Get xPrivKey.mp4" controls/>

### Extract 'Account Extended Private Key' using the bip39 tool

Open https://iancoleman.io/bip39/

Do not change any settings.

Paste your `xPrivKey` into the BIP32 Root Key field.

The `Account Extended Private Key` field will now have text inside it, copy this as we will need it for the next step.

See the video below for an example.

<video src="/videos/bip39.mp4" controls/>

### Convert the key using the Py Coin tool


Open up a terminal and navigate to the directory that contains the pycoin tool you downloaded at the beginning.

Inside this directory run `make`.

After that, take the `Account Extended Private Key` that was generated using the bip39 tool, and paste it in the following command:

```
ku -nNAV -s 0/0 PASTEKEYHERE
```

The `uncompressed` field below `private key` is the private key of your address.

The above command will generate the first key in your wallet, to generate any other keys, just increase the number `0/0` to `0/1`, `0/2`, `0/3` and so on.

```
# this will generate the 6th key in your wallet
ku -nNAV -s 0/5 PASTEKEYHERE
```

If you wish to generate multiple keys you can specify that by using:
```
# this will generate the first 11 keys
ku -nNAV -s 0/0-10 PASTEKEYHERE 
```

The `0/0-10` indicates the range of keys to generate. If you wanted to generate the first 100 keys then `0/0-99` would be what you would use.

See the video below for an example.

<video src="/videos/generate key.mp4" controls/>

### Import the keys into NavCoin Core

If you wish to import the keys into NavCoin Core, follow [this guide](/navcoin-core/import-private-key) for details.

