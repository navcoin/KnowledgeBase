---
title: How to set up your own node?
date: "2020-09-14"
order: "000"
---

### Pre-built Binaries

If you would like to install the client using pre-built binaries for your system, please visit [NavCoin.org](https://navcoin.org/en/wallets/#download-core)

### Building in Linux

This guide has only been tested on Ubuntu 20.04.

Install essential packages before building from source

```
sudo apt update
sudo apt upgrade
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
cd ./depends && make -j$(nproc) && cd .. && ./autogen.sh && ./configure --prefix=`pwd`/depends/`uname -m`-pc-linux-gnu && make -j$(nproc) &
```

Once the build finishes, you can launch the daemon with `./src/navcoind` or the Qt wallet with `./src/qt/navcoin-qt`

### Building in OSX

Install essential packages before building from source

```
brew install automake berkeley-db4 libtool boost --c++11 miniupnpc openssl pkg-config homebrew/core/protobuf260 --c++11 qt5 libevent curl
```

lone the repo

```
git clone https://github.com/navcoin/navcoin-core.git
```

Change directory to the repo

```
cd navcoin-core
```

Build the depends and the source code

```
cd ./depends && make -j$(nproc) && cd .. && ./autogen.sh && ./configure --prefix=`pwd`/depends/`uname -m`-pc-linux-gnu && make -j$(nproc) &
```

### Bulding for Windows 10

You can install Ubuntu from Windows Store 

https://docs.microsoft.com/en-us/windows/wsl/install-win10

After Ubuntu is installed, follow the guide for building in Linux
