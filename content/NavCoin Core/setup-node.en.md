---
title: How to set up your own node?
date: "2020-09-14"
order: "000"
---

### Pre-built Binaries

If you would like to install the client using pre-built binaries for your system, please visit [NavCoin.org](https://navcoin.org/en/wallets/#download-core)

### Building your own client For Linux

This guide has only been tested on Ubuntu 20.04.

Install essential packages before building from source

```
sudo apt-get -y install build-essential libtool autotools-dev automake pkg-config git curl libattr1-dev cmake
```

Clone the repo

```
git clone https://github.com/navcoin/navcoin-core.git
```

Change directory to the repo

```
cd navcoin-core
```

Build the depends and the source code

```
cd ./depends && make -j4 && cd .. && ./autogen.sh && ./configure --prefix=`pwd`/depends/`uname -m`-pc-linux-gnu && make -j4 &
```

You can increase the nodes count to compile the code faster by changing `-j4` to higher counts that your CPU is capable of like `-j12`.

Once the build finishes, you can launch the daemon with `./src/navcoind` or the Qt wallet with `./src/qt/navcoin-qt`

