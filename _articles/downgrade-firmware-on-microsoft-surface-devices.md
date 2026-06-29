---
title: "Downgrade firmware on Microsoft Surface Devices"
date: 2024-08-11
summary: "A Linux-focused workaround for rolling back problematic Surface firmware when standard tooling falls short."
tags:
  - linux
  - microsoft-surface
  - firmware
  - hardware
draft: false
layout: article
---

Around June 2023, Microsoft shipped a firmware update which caused freezing when booting into certain Linux distributions, such as Fedora. You can read more about this [here](https://github.com/linux-surface/linux-surface/issues/1162), but the TLDR of it is: the firmware adds a security feature known as NX mode, which the Linux Kernel is not yet fully compatible with. Although applications can set a flag to indicate they aren't compatible with NX mode, Microsoft ignores this.

Until distributions such as Fedora are fully compatible with NX mode, the workaround to continue using Linux on our Microsoft Surface Device is to downgrade the firmware, which can be done using a Linux live CD and the [Ventoy](https://www.ventoy.net/en/index.html) imaging utility. For the purposes of this guide we are using the Fedora Workstation Live image.

## Prerequisites
1. A USB stick with at least 8GB capacity.
2. A copy of the Ventoy imaging utiltiy.
    - Follow the [getting-started](https://www.ventoy.net/en/doc_start.html) instructions to create a bootable USB stick.
3. A copy of the latest [Fedora Workstation Live](https://fedoraproject.org/en/workstation/download) ISO image for Intel and AMD x86_64 systems.
    - You can just copy the ISO file to the USB stick, once it's been imaged with Ventoy.

## Process

### Device Table

| linux surface supported devices | link to firmware                                                                                                                                                                   | firmware version | tested             |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------ |
| Surface Book                    |                                                                                                                                                                                    |                  | :x:                |
| Surface Book 2                  | [Download](https://catalog.s.download.windowsupdate.com/d/msdownload/update/driver/drvs/2022/09/44f91f85-8132-4e35-a401-f74f261e721c_488872dc06ff3711ec10b06eb24715407ebe3d44.cab) | 392.178.768.0    | :x:                |
| Surface Book 3                  |                                                                                                                                                                                    |                  | :x:                |
| Surface 3                       |                                                                                                                                                                                    |                  | :x:                |
| Surface Go                      |                                                                                                                                                                                    |                  | :x:                |
| Surface Go 2                    |                                                                                                                                                                                    |                  | :x:                |
| Surface Go 3                    | [Download](https://catalog.s.download.windowsupdate.com/d/msdownload/update/driver/drvs/2022/05/106cfe6f-e802-4299-9c78-f5c5c42ce01c_0e0ad1525a3f3eac908444672b0743f6ca3d9764.cab) | 9.103.143.0      | :white_check_mark: |
| Surface Laptop                  |                                                                                                                                                                                    |                  | :x:                |
| Surface Laptop 2                |                                                                                                                                                                                    |                  | :x:                |
| Surface Laptop 3                |                                                                                                                                                                                    |                  | :x:                |
| Surface Laptop 4                |                                                                                                                                                                                    |                  | :x:                |
| Surface Laptop 5                |                                                                                                                                                                                    |                  | :x:                |
| Surface Laptop Go               |                                                                                                                                                                                    |                  | :x:                |
| Surface Laptop Go 2             |                                                                                                                                                                                    |                  | :x:                |
| Surface Laptop Studio           |                                                                                                                                                                                    |                  | :x:                |
| Surface Pro 1                   |                                                                                                                                                                                    |                  | :x:                |
| Surface Pro 3                   |                                                                                                                                                                                    |                  | :x:                |
| Surface Pro 4                   |                                                                                                                                                                                    |                  | :x:                |
| Surface Pro 5                   | [Download](https://catalog.s.download.windowsupdate.com/d/msdownload/update/driver/drvs/2022/09/924763da-eb75-4e09-a86a-48ba884b9c66_3109603173e59788b31b3bdf9a84dd64b53c3972.cab) | 238.167.768.0    | :white_check_mark: |
| Surface Pro 6                   | [Download](SP5)                                                                                                                                                                    | 238.167.768.0    | :x:                |
| Surface Pro 7                   |                                                                                                                                                                                    |                  | :x:                |
| Surface Pro 7+                  |                                                                                                                                                                                    |                  | :x:                |
| Surface Pro 8                   |                                                                                                                                                                                    |                  | :x:                |
| Surface Pro 9                   |                                                                                                                                                                                    |                  | :x:                |
| Surface Studio                  |                                                                                                                                                                                    |                  | :x:                |

### Instructions

1. Boot into a Fedora Workstation Live image using Grub2 mode, make sure you are connected to either WiFi or using an ethernet cable.
2. Run: 
```shell
lsblk -f
```
3. Identify paritions with "vfat" files systems on the Surface device.
4. If there is more then one, run
```shell
sudo fdisk -l
```
5. Identify the one that is >100MB but <500MB, for example `nvme01p1`.
6. Run:
```shell
 sudo mkdir -p /boot/EFI
```
7. Run the following command, replacing `<vfat-partition>`  with the the partition you identifed in steps 2 or 4.
```shell
sudo mount /dev/<vfat-partition> /boot/EFI`
```
8. Verifiy by running the following command, there should be either an `EFI` or `Microsoft` directory.
```shell
ls /boot/EFI
```
9. Run:
```shell
git clone https://github.com/linux-surface/surface-uefi-firmware.git
```
10. Check the <a href="#device-table">Device Table</a> for your device, and click "Download".
11. Move the cab file you just downloaded to the surface-uefi-firmware directory created in step 9.
12. Run:
```shell
sudo dnf install msitools gcab dos2unix
```
13. Navigate to the surface-uefi-firmware directory you created in step 7, then run the folloiwng command, replacing `<cab-file>` with the name of the file you downloaded in step 10, and `<device-firmware>` with the firmware for your device, found in the <a href="#device-table">Device Table</a>.
```shell
./repack.sh -f <cab-file> -o <device-firmware>/out
```
14. Navigate into the sub-directory created in the last step, this will be:
```shell
cd <device-firmware>/out
```
15. Run `ls` to verify you see a `tmp.XXX` file.
16. Run the following command, replacing `OnlyTrusted=true` with `OnlyTrusted=false`, or just add it if the former line is missing.
```shell
sudo nano /etc/fwupd/fwupd.conf
```
17. Run the following command,  replacing `tmp.XXX` with the file name created in step 13:
```shell
sudo fwupdmgr install --allow-older --allow-reinstall --force tmp.XXX
```
18. Reboot your device, you should see a Surface logo and a blue progress bar.
19. **DO NOT BOOT BACK INTO WINDOWS**, there is a chance your devices firmware will be upgraded.
20. You should now be able to use your Ventoy stick to install Fedora, this time choosing Normal mode.

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. This is a living document and any contributions you can make are **greatly appreciated**. Just pop a comment below.

I'd be particularly interested in the anyones experiences with one of the untested devices (see <a href="#device-table">Device Table</a>), did it work, did it not work, did you have to do anything different from the existing instructions?

## Acknowledgments
- [source document](https://docs.google.com/document/d/1HxZmOYyqZc28vXW1nDai0VP44HoJ34suQU4cNyzylq4/edit?pli=1)
- Surface Pro 5 tested by [n3ddu8](https://github.com/n3ddu8)
- Surface Go 3 tested by [lenquan](https://github.com/lenquan)
