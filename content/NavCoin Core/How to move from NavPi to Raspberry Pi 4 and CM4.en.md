---
title: How to move from NavPi to Raspberry Pi 4 and CM4 for staking
date: "2021-05-31"
order: "000"
---


# Moving from NavPi to headless Raspberry Pi Compute Module 4 for staking

Managing the NavPi through its GUI made managing and staking Navcoin a very simple process. Wanting to use the latest navcore 6.X and moving to a more up-to-date and powerful made staking a little but more commandline heavy due to the missing GUI component when wanting to stake on a Pi remotely. 

Below is a quick and dirty how to on how to move from a NavPi to a Raspberry Pi Compute Module 4 (CM4) and the latest version of navcoin 6.x and in  to stake Navcoins in a headless fashion.

**Disclaimer**: This was made to work with a lot of googeling and asking a ton of stupind questions to the patient Discord members of the Navcoin #navpi-support channel
                This may not be the 'only' or 'best' way BUT this is how I was able to get staking working for me.

**Special Thanks to `@salmonskinroll` and `@aguycalled` as well as `u/Zane_TLI` on Reddit for this [post](https://www.reddit.com/r/NavCoin/comments/l8jdcr/staking_with_navcoind_getstakinginfo_return>)**

This how to is using the CM4 [CM4104032](https://www.buyapi.ca/product/raspberry-pi-compute-module-4-wireless-4gb-32gb-cm4104032/)

1. Assumption is you have a running CM4 (how to can be found [here](https://www.youtube.com/watch?reload=9&v=jp_mF1RknU4)) and ssh access to it

   **Notes**:

- I had to use Raspbian 32bit as I believe the Navcoin binaries only come in 32-bit for arm (if I learn otherwise I will update)
- I also am utilizing the screen window session manager to keep things running in case you get disconnected (https://www.youtube.com/watch?v=hB6Y72DK8mc)

```
pi@raspberrypi:~ $ screen
```

**Note**: When reconnecting to the Raspberry Pi remotely re-connect to the still running window session(s)

```
pi@raspberrypi:~ $ screen -x
```

          - I am performing all commands from the /home/pi directory
          - At time of writing the latest version of navcoin was 6.1.0

2. Get the latest Navcoin files from [here](https://build.nav.community/binaries/master/navcoin-6.1.0-arm-linux-gnueabihf.tar.gz)

```
pi@raspberrypi:~ $ wget https://build.nav.community/binaries/master/navcoin-6.1.0-arm-linux-gnueabihf.tar.gz
```

3. Once downloaded untar the tarball file 

```
pi@raspberrypi:~ $ tar -zxvf navcoin-6.1.0-arm-linux-gnueabihf.tar.gz
```

4. Bootstrap you wallet

##### What is “Bootstrapping”? 

Bootstrapping is the process of adding a pre-synced blockchain from a trusted source to your wallet, allowing you to skip part or all of the blockchain syncing process. see [this article](/navcoin-core/bootstrap-your-wallet/)

First let's create the navcoin data directory. For more info please see [this article](/navcoin-core/locate-your-data-directory/)
```
pi@raspberrypi:~ $ mkdir .navcoin4
```
Now we download the pre-synched bloackchain inside the .navcoin4 data directory
```
pi@raspberrypi:~ $ cd .navcoin4
pi@raspberrypi:~/.navcoin4 $ wget https://bootstrap.nav.community/bootstrap.tar.gz
```

**Note**: this may take some time as this file is around 3.3GB in size

Then we untar the blockchain tarball

```
pi@raspberrypi:~/.navcoin4 $  tar -zxvf bootstrap.tar.gz
```

5. Copy your `wallet.dat` file from the NavPi data directry `~/.navcoin4/` to the new Paspberry Pi data directry `~/.navcoin4/`

There are several ways of doing this

- via ssh secure copy `scp`
- via SSD card moving the SSD from the old NavPi to the new Raspberry Pi and copying the `wallet.dat` file from there to `~/.navcoin4/`

6. Return to the home folder and start the navcoin server

```
pi@raspberrypi:~/.navcoin4 $ cd ~
pi@raspberrypi:~ $ navcoin-6.1.0/bin/navcoind -t -daemon -datadir=/home/pi/.nacvoin4 -staking=1 -externalip={IP address} -upnp=0 -rpcbind=127.0.0.1 -rpcallowip=127.0.0.1 -rpcuser=test -rpcpassword=test -upgradewallet &
```

**Notes**: 

- The `-upgradewallet` is only required the first time you run `navcoind` after you imported your `wallet.dat` file from the NavPi (see step 5) adding the `&` at the end of the command let's the command run in the background - you can bring the command back to the foreground by running `fg %1`
- I am not sure what the `-t` option is and does but I saw it somewhere used and it is not throwing an error so I left it in.

More info on using bash jobs can be found [here](https://www.linuxjournal.com/content/job-control-bash-feature-you-only-think-you-dont-need)

The navoin core daemon should now start in the background running a navcore client command will display the progress until it executes correctly displaying information.

```
pi@raspberrypi:~ $ navcoin-6.1.0/bin/navcoin-cli getinfo
```

When the navcoin daemon is completely loaded to `getinfo` command should display as follows:

```
pi@raspberrypi:~ $ navcoin-6.1.0/bin/navcoin-cli getinfo
{
  "version": 6010000,
  "protocolversion": 80021,
  "walletversion": 140000,
  "balance": 509.85726468,
  "private_balance": 0.00000000,
  "private_balance_pending": 0.00000000,
  "coldstaking_balance": 0.00000000,
  "newmint": 0.00000000,
  "stake": 0.00000000,
  "blocks": 5243678,
  "communityfund": {
    "available": 183021.10195571,
    "locked": 0.00000000
  },
  "publicmoneysupply": "1089969.49763987",
  "privatemoneysupply": "256076.01769613",
  "timeoffset": 0,
  "ntptimeoffset": 0,
  "connections": 8,
  "proxy": "",
  "testnet": false,
  "keypoololdest": 1521769038,
  "keypoolsize": 101,
  "unlocked_until": 1623302921,
  "paytxfee": 0.00100000,
  "relayfee": 0.00010000,
  "errors": ""
}
```

7. Unlock your wallet for staking

To unlock your wallet for staking run the following 

```
pi@raspberrypi:~ $ navcoin-6.1.0/bin/navcoin-cli walletpassphrase 'XXXXXX' 999999 true
```

**Note**: Your wallet password will be stored by bash in your bash history. Run the `history` command and delete the line containing your wallet password with `history -d XXX` where `XXX` is the number of the history line that is being displayed when running the `history` command.

8. Check that you are staking

Check that you are staking by running the command

```
pi@raspberrypi:~ $ navcoin-6.1.0/bin/navcoin-cli getstakinginfo
{
  "enabled": true,
  "staking": true,
  "errors": "",
  "currentblocksize": 1000,
  "currentblocktx": 0,
  "difficulty": 966769.0598687404,
  "search-interval": 16,
  "weight": 50985725640,
  "netstakeweight": 3151385231514200,
  "expectedtime": 1854275,
  "expecteddailyreward": X.XX319001
}
```

When you see `true` for both enabled ad staking you are good to go.

#### Additional Notes

If for some reason troubleshooting of the wallet via GUI is required the qt based GUI can be remotely accessed by running an Xserver on either the remote Linux/Windows/MAC machine. 

I was using [MobaXterm](https://mobaxterm.mobatek.net/) on Windows and had to use the following command to be able to start `navcoin-qt` remotely:

```
pi@raspberrypi:~ $ sudo apt-get install libfontconfig1
```

**It should be mentioned that that the remote qt X session will get disconnected/stopped when the ssh server connection is closed.**
