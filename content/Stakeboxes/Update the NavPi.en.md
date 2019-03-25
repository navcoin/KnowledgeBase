---
title: How to update the NavPi
date: "2019-03-21"
---

### Updating the User Interface

You should be able to update simply by using the “update” button in the “server” section of the control page.

Then clicking the “Update WebUI” button. It should tell you that it pulled the latest version from GitHub and show you the files it updated, or say if you’re already up to date.

If this doesn’t work for you you may need to update manually.

Plugin your screen, keyboard and mouse, and boot to the Raspberry Pi Operating System (or connect with SSH if you have that enabled).

Open Terminal and navigate to the UI folder.

`cd /home/stakebox/UI`

Pull down the latest version.

`sudo git pull`

It should tell you that it pulled the latest version from GitHub and show you the files it updated, or say if you’re already up to date.

### Updating the NavCoin Daemon

If you’ve purchased or installed your NavPi recently, it should automatically check for updates every 24 hours. When a new update is found, it should download it and display an alert on the home screen of the Web Interface that says you need to reboot to install the update. Follow the instructions on screen and when your NavPi reboots it should have the latest version running.

If your NavPi isn’t configured to autoupdate, then you can update manually:

First make sure you’re on the latest version of the UI by following the steps above.

Then plugin your screen, keyboard and mouse, and boot to the Raspberry Pi Operating System (or connect with SSH if you have that enabled).

Open Terminal and run the updater script

`sudo /home/stakebox/UI/libs/updater.sh`

You should then see this output:

`Downloading latest version...`

After the new image is downloaded and expanded, you will see this on success:

`Copying to the startup location`  
`NavCoin has Successfully updated to the latest version`

You can add this script to periodically run from the sudo crontab to automatically check for and install new updates.
