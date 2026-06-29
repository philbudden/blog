---
title: "Installing Linux on a Chromebook using Submarine"
date: 2024-09-02
summary: "A tested Chromebook installation walkthrough using Submarine and Ultramarine images, including the rough edges."
tags:
  - linux
  - chromebook
  - ultramarine
  - installation
draft: false
layout: article
---

**PROCEED AT YOUR OWN RISK**

These are the specific instructions that worked for me on an Acer Chromebook Spin 13 and [Ultramarine Linux](https://ultramarine-linux.org/). For more generalised usage, see the [source document](https://wiki.ultramarine-linux.org/en/anywhere/chromebook/).

This method requires a raw image not an ISO. There is a method using an ISO in the source material but I haven't tested it.
 
## Acknowledgments

- [Source Document](https://wiki.ultramarine-linux.org/en/anywhere/chromebook/)
- [Owen](https://github.com/Owen-sz) from [FyraLabs](https://github.com/FyraLabs) who helped me when I stumbled!

## Prerequisites
- An exisitng Linux machine (MacOS may work too).
- A USB stick/SD Card < Chromebooks HDD capacity (for the purposes of this document we are assuming a USB stick and will refer to it as so)

## Preparing the Media
- Download an [Ultramarine Raw Image](https://images.fyralabs.com/images/ultramarine/) with a desktop environment (for example, `gnome-base-disk-x86_64.img.zst`)
- Uncompress the file by running:
```shell
zstd -d /path/to/file.img.zst
```
- Flash the image to the USB stick using an imaging utility that supports `.img` files.
- Using your OS disk utility, delete the first partition on the disk, this will be labelled something like: `Filesystem Partition 1: EFI 511 MB FAT`.
- Create a new 16MB ext4 partition on the disk.
- Download [Submarine](https://nightly.link/FyraLabs/submarine/workflows/build/main/submarine-x86_64.zip)
- Extract the zip file using your OS files app.
- Write the  `submarine.kpart` file to the 16MB partition you created earlier by running the following, replacing `sdXn` with the partition:
```shell
sudo dd if=/path/to/submarine.kpart of=/dev/sdXn bs=4M status=progress
```
- Set the partition flags (if you don't have the cgpt command, install `vboot-utils` with your systems package manager) by running the following command, replacing `<partition-number>` with the number of the 16MB partition you created earlier, and `/dev/sdX` with the USB disk assignment:
```shell
cgpt add -i <partition-number> -t kernel -P 15 -T 1 -S 1 /dev/sdX
```
- With the USB drive mounted, navigate to `/etc/fstab` and delete the line containing `/efi/boot`

## Preparing the Chrombook
There are a few steps you will need to follow to get the Chromebook ready.

### Enable Developer Mode
*NB: these steps worked on the Acer Chromebook Spin 13 I tested this on, YMMV!*
**WARNING: THIS WILL DELETE ALL LOCAL DATA**
- Press Esc+Refresh+Power to reach the recovery screen.
- Press Ctrl+D
- You should see the following message, press Enter to continue:
> To turn OS verification OFF, press ENTER. Your system will reboot and local data will be cleared. To go back , press ESC
- Your Chromebook will reboot, after which, press Ctrl+D and it will reboot yet again.

### Enable USB boot
*NB: these steps worked on the Acer Chromebook Spin 13 I tested this on, YMMV!*
- Press Ctrl+Alt+F2 (->)
- Enter username: `chronos`
- Run `sudo -i`
- Run `enable_dev_usb_boot`
- You should see the following:
> SUCCESS: Booting any self-signed kernel from SSD/USB/SDCard slot is enabled.
- Press Esc+Refresh+Power to reach the recovery screen.

## Boot to Linux
- At the recovery screen, press Ctrl+U.
- Choose the default `01` option.
- You should see an Ultramarine splash screen before it eventually boots into a DE, this may take a while depending on your flash media.
- I chose the Gnome DE, and on boot I had to go through the user setup process, again YMMV!
- Open the Terminal, and run the following to flash the contents of the USB to the internal storage, replacing `<usb-stick` (likely `/dev/sda`) and `<internal-drive` (likely `/dev/mmcblk0` if your CB has eMMC storage) - this may take a while depending on the size of your internal storage:
```shell
sudo dd if=/dev/<usb-stick> of=/dev/<internal-drive> bs=4M status=progress
```
- Reboot, when you reach the Chrome OS recovery screen from now on, press Ctrl+D.

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. This is a living document and any contributions you can make are **greatly appreciated**. Just pop a comment below.
