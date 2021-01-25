--vars
title: "How to run nodejs on android?",
description: "running nodejs on the go in android",
date: "Jan 25, 2021",
image: "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg",
--

# NodeJS in android ? 😱

Follow the steps below:

- Obviously , you need an android phone
- Download [Termux](https://play.google.com/store/apps/details?id=com.termux.app) on playstore

Type

```bash
$ apt update && pkg upgrade
```

type Y if there is **[y/n]** choices

After updating the packages.

```bash
$ pkg install nodejs-lts
```

> I recommend the latest version cause its far more stable

After NodeJS will Successfully installed

Check the version of node to validate if the nodejs succesfullyt installed

```bash
$ node -v
v12.13.1
```
