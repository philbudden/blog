---
title: "Create a Containerised Samba share on Fedora Atomic"
date: 2024-09-09
summary: "Container-first Samba setup on Fedora Atomic, with practical notes on mounts, permissions, and homelab backup workflows."
tags:
  - linux
  - fedora
  - homelab
  - samba
  - storage
draft: false
layout: article
---

Rather than layering the Samba service on Fedora Atomic, shares can be run in a Container. In order to provide relevant examples, this document will imagine a scenario where a backup drive attached to a Fedora IOT device is being shared over the network so that a Fedora Silverblue desktop can use it to store backups taken with a local utility such as Pika Backup, however this should work with for other distros (Atomic or otherwise) as well. The container engine is assumed to be Podman as this comes with Fedora Atomic, but should also work with Docker.

## Prepping the host system
1. Create a location on your host system for your Samba share, you may want to create a sub-directory for the actual share, so that the config files can be stored in the parent. You may need `sudo` depending on where the share is mounted and who the owner is. In this example, our backup drive is mounted in `/mnt/backup` and the owner is `root`, our Samba share will be `archive` as this will store our Pika Backup archive:
```shell
sudo mkdir -p /mnt/backup/archive
```

2. Ensure the directory has the correct permissions to be mounted in the container:
```shell
sudo chmod -R 0777 /mnt/backup/archives
```

3. Run the following to set the correct SELinux context:
```shell
sudo chcon -Rt svirt_sandbox_file_t /mnt/backup/archives
```

4. Navigate to the parent directory, and create a file called `smb.conf`, which should like this (amended the `path` variable as necerssary):
>\# See smb.conf.example for a more detailed config file or </br>
>\# read the smb.conf manpage. </br>
>\# Run 'testparm' to verify the config is correct after </br>
>\# you modified it. </br>
>  </br>
>[global] </br>
>workgroup = HOME </br>
>security = user </br>
>map to guest = Bad Password </br>
>passdb backend = tdbsam </br>
>load printers = No </br>
>disable spoolss = yes </br>
>printcap name = /dev/null </br>
>  </br>
>[volume] </br>
>comment = <description-of-share> </br>
>path = /mnt/backup/archive </br>
>browsable = yes </br>
>writable = yes </br>
>guest ok = yes </br>
>read only = no </br>
>force user = root </br>
>inherit acls = yes </br>

5. In the same directory, create a file called `Containerfile` (if using Docker instead create a `Dockerfile`), this should look like the following, amending the directories as necerssary:
>FROM registry.fedoraproject.org/fedora-minimal:latest </br>
>RUN microdnf -y update; microdnf -y install samba; microdnf -y install passwd; microdnf clean all; systemctl enable smb </br>
>RUN mkdir -m 777 /mnt/backup </br>
>RUN mkdir -m 777 /mnt/backup/archive </br>
>  </br>
>EXPOSE 445 139 137/udp 138/udp </br>
>  </br>
>CMD [ "/sbin/init" ] </br>

6. Tell SELinux it is ok to allow systemd to manipulate its Cgroups configuration:
```shell
sudo setsebool -P container_manage_cgroup true
```

7. Open the firewall:
```shell
firewall-cmd --permanent --zone=trusted --add-interface=cni-podman0
sudo firewall-cmd --add-service=samba --permanent
sudo firewall-cmd --reload
```

## Creating and Running the Container:

8. Build the container by running the following command, replacing `backup` with the name you'd like to give your image:
```shell
sudo podman build -t backup .
```
 
9. Run the container, again amending the directories as necerssary (note, the `smb.conf` must be mounted at `/etc/samba/smb.conf` inside the container):
```shell
sudo podman run \
   -m 512m \
   -u 0 \
   -d \
   -p 445:445 \
   --name backup \
   -v /mnt/backup/smb.conf:/etc/samba/smb.conf:Z \
   -v /mnt/backup/archives:/home \
   backup
```

## Connecting to Samba Share

### From a file manager
10. The exact method of connecting to a Samba share will differ depending on the file manager, but the command should be the same. Using Nautilus, you would navivate to `Other Locations` and in the `Enter server address` box, enter the following, replacing `<address-of-samba-share-host>` with either the DNS name or the IP address of the host, in our example this is the Fedora IOT server:
```shell
smb://<address-of-samba-share-host>/volume
```

### From the command line
11. If you don't have `cifs-utils` installed, do so with your systems pacakge manager. For a Fedora Atomic system run the following to layer it, or install it in a container (which is beyond the scope of this document). If you are using a Universal Blue image, this is provided OOTB and you can skip this step:
```shell
rpm-ostree install cifs-utils
systemctl reboot
```

12. Create a location to mount the drive, such as `/mnt/backup`:
```shell
sudo mkdir /mnt/backup
```

13. Create a credentials file, `/etc/samba-creds`, in our example the credentials are for our Fedora IOT user:
>username=user</br>
>password=password</br>

14. Secure the file by running:
```shell
sudo chown root: /etc/samba-creds
sudo chmod 600 /etc/samba-creds
```

15: To mount the drive enter the following, replacing `<address-of-samba-share-host>` with either the DNS name or the IP address of the host, in our example this is the Fedora IOT server:
```shell
sudo mount -t cifs -o credentials=/etc/samba-creds,dir_mode=0755,file_mode=0755 //<address-of-samba-share-host>/volume /mnt/backup
```

### In the fstab file

16. Follow steps 11 through 14 as with running from the command line.

17. Update `/etc/fsab` with the following line, replacing `<address-of-samba-share-host>` with either the DNS name or the IP address of the host, in our example this is the Fedora IOT server:
> //<address-of-samba-share-host>/volume  /mnt/backup  cifs  credentials=/etc/samba-creds,file_mode=0755,dir_mode=0755 0       0

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. This is a living document and any contributions you can make are greatly appreciated. Just pop a comment below.

## Acknowledgments
- [Source Document](https://241931348f64b1d1.wordpress.com/2020/12/27/samba-container-on-fedora-iot/)
