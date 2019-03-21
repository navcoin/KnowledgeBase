---
title: "Creating swap on NavPi SD card"
date: "2019-03-21"
---

These are the consolidated steps from a post by Justin Ellingwood called [Add Swap Space on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-16-04).

The configuration has been tested on the current version of the NavPi, running Rapsbian GNU/Linux 8 (jessie)

### Prerequisites, Caveats
For best results, it's recommended to utilize a USB drive as your swap space, due to the fact that repeated reads/writes to the SD card will eventually wear it out. You can follow this [USB swap guide](/stakeboxes/configure-navpi-to-use-usb-swap) or proceed with the SD swap configuration below. For example, you may just want to use the SD swap temporarily until you're ready to move to the USB swap solution.

## Let's get started

### Backup your current NavPi img
Before proceeding with this swap configuration, it is worth making a backup image of the SD card so if it fails, you can easily restore to this point. 

### Backup your wallet.dat
To ensure you don't lose any coins while making configuration changes to your NavPi, it's essential to backup the wallet.dat file. This holds your private keys. With a backup of the wallet.dat you can always restore your wallet.

First, make sure your have encrypted your wallet. Then proceed with the following steps:

1. Open the WebUI
2. Go to `control`
3. Scroll down to `security`
4. *Click* `Backup Wallet`. This will download the wallet.dat file to your preferred device (USB, HD)
5. Save the wallet backup and rename it to `wallet.dat`

### Check system for swap info

    `sudo swapon --show`

### Verify no swap exists

    `free -h`

### Check available space on hard drive

    `df -h`

### Create swap file

    `sudo fallocate -l 2G /navswap`

### Verify correct amount of space reserved
   
```bash
    ls -lh /navswap

    Output
    -rw-r--r-- 1 root root 1.0G Apr 25 11:14 /navswap`
```

### Make the file only accessible to root

    `sudo chmod 600 /navswap`

### Verify permissions change

```bash
    ls -lh /navswap

    Output
    -rw------- 1 root root 2.0G Apr 25 11:14 /navswap
```

### Mark file as swap space

```bash
    sudo mkswap /navswap

    Output
    Setting up swapspace version 1, size = 2048 MiB (1073737728 bytes)
    no label. UUID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
```

### Enable swap file

    `sudo swapon /navswap`

### Verify that the swap is available

```bash
    sudo swapon --show

    Output
    NAME      TYPE    SIZE    USED    PRIO
    /navswap file    2G      0B      -1
```

### Check the output of the free utility

```bash
    free -h

    Output
                  total        used        free      shared  buff/cache   available
    Mem:           488M         37M         96M        652K        354M        425M
    Swap:          2.0G          0B        2.0G
  ```

The swap has been set up successfully. Operating system will begin to use it as necessary.

### Make the Swap File Permanent

First backup your `/etc/fstab` file

   ` sudo cp /etc/fstab /etc/fstab.bak`

Then add the swap info as follows
```bash
    echo '/navswap none swap sw 0 0' | sudo tee -a /etc/fstab

    Output
    /navswap none swap sw 0 0
```

## Tweak your Swap Settings

Configure your NavPi's performance when dealing with swap.

### Configure swappiness

The swappiness parameter configures how often your system swaps data out of RAM to the swap space. This is a value between 0 and 100 that represents a percentage.

```bash
    sudo sysctl vm.swappiness=10

    Ouput
    vm.swappiness = 10
```

This value is sometimes recommended to improve performance when sufficient memory exists in a system, this value *10* could be considered for the performance being expected.

Make this persist on reboot:

   ` sudo nano /etc/sysctl.conf`

Add this at bottom of file:

 `   vm.swappiness=10`

### Adjust the cache pressure

This setting configures how much the system will choose to cache inode and dentry information over other data.

Check the current cache pressure setting:

```bash
    cat /proc/sys/vm/vfs_cache_pressure

    Ouput
    100
```

By default, the system removes inode information from the cache too quickly.

Set this to a more conservative setting like 50:

```bash
    sudo sysctl vm.vfs_cache_pressure=50

    Output
    vm.vfs_cache_pressure = 50
```

Make it persist:

   ` sudo nano /etc/sysctl.conf`

Add this to bottom of file:

    `vm.vfs_cache_pressure=50`

Save and close the file.

### Reboot NavPi

   ` sudo reboot`

### Verify new swap
    
```bash
    cat /proc/swaps

    Output
    Filename         Type         Size      Used      Priority
    /navswap         file         2097418   0         -1
```

### Check memory usage with swap in place

There are several options for checking memory use.

Built-in commands include:

    `free -h`
    `top`

**pro tip** - Install htop, a nice option for monitoring interactively. It's a nice way to filter on running processes, like 'nav'. It combines the functionality of top and iotop into a single screen.

```bash
    sudo apt-get install htop
    htop
```

You should now see the swap drive being monitored.
