---
layout: post
title: "Meet the MDK Hashboard"
date: 2023-10-17 12:00:00 +0000
source: proto
original_url: https://proto.xyz/blog/posts/meet-the-mdk-hashboard
featured_image: /images/proto/1315637515a4a4d534dd47f251b7c96b27a09205-2400x2400.jpg
authors:
  - "Naoise Irwin"
  - "Kevin Quinley"
---

Following our [initial announcement](https://www.mining.build/blog/the-mining-development-kit-unlocking-innovation-in-bitcoin-mining) of the Mining Development Kit (MDK) earlier this year, we have been heads down building out the key hardware and software components of the MDK. Building on the insightful community feedback from the initial announcement and our [recent progress update](https://www.mining.build/blog/update-on-the-mining-development-kit/), we have just completed the first prototype of the MDK’s hashboard, which sits at the heart of the mining system. In this blog post we provide an update on our hashboard development, some of its key features, and the path forward from here.

## What is a hashboard and what does it do?

The hashboard is a printed circuit board (PCB) that hosts an array of mining ASICs (Application Specific Integrated Circuits), which are the core components within bitcoin mining systems, as well as other supporting components and circuitry. The ASICs perform the complex computations that drive the bitcoin mining process - attempting to produce valid hashes that solve the SHA-256 algorithm and earn the miner the block reward.

Running mining ASICs requires significant electrical energy, which costs money. Thus, a key design objective for mining ASICs (and mining systems overall) is to maximize attempts to solve the SHA-256 algorithm (hashes) per unit of energy. This is known as power efficiency and is measured in joules per terahash (trillion hashes). To maximize power efficiency, mining ASICs must be kept cool while they perform their calculations. Thus, efficient thermal dissipation is a key design goal in hashboard design. Typically this is accomplished with a heatsink and a flowing thermal medium such as air or liquid.

Additionally, the hashboard must be cost-effective and meet available power budget and physical dimension constraints. It must also ideally support certain monitoring functions, such as chip temperature levels and chip failures. Typically, management of the hashboard is performed by a companion controller board. The controller board is a PCB (printed circuit board) containing a microcontroller unit which runs the firmware that manages ASIC frequencies, balances the ASIC array, manages the miner’s cooling system, communicates with mining pools and other functions.

## The MDK hashboard

The MDK hashboard uses 100x Intel Blockscale 1000 Series™ ASICs in a gridlike array. This ASIC count ensures the MDK board, in a standard three-board chassis format, will have a power footprint compatible with the widely available APW12 power supply. The hashboard is also sized to be compatible with popular miner chassis dimensions. It has thus been designed to allow easy use of aftermarket components. Some photos of our prototype hashboard are provided below.

**The MDK hashboard top side, showing the ASIC array**

**The MDK hashboard's bottom side**

In order to keep temperatures under control and maintain operational steady state, aluminum heatsinks are attached to the board and make contact with each ASIC using a highly conductive Thermal Interface Material (TIM). This extracts heat from each ASIC to keep them under a specific target operating temperature range, in order to maintain high power efficiency.

Thermal Interface Material (TIM) application on the heatsink

Heatsink installation on the top (ASIC) side

## Key features of the MDK hashboard

Given the primary intent to support development, we are including more features in the MDK hashboard than exist on most commercial mining hashboards and welcome all developer feedback regarding which are most valuable and should remain in our future mining systems. The most notable of these include:

- **Distributed controller architecture.** In typical miner architectures, all control functions are performed on the controller board. However, we opted to place a microcontroller on the hashboard itself, allowing local processing of certain functions, such as ASIC balancing, while leaving the higher level control functions to the controller board. This allows novel, flexible architectures to be supported. Specifically, a single controller board (or any computer running our open source firmware) could support tens or even hundreds of hashboards (limited only by the communication protocols between the controller and the hashboard).
- **Precision load control.** We have introduced components on the hashboard to support fine-grained modulation of the power consumption of the hashboard. This will allow rapid startup of hashing from miner power off or sleep mode, including in environments with low ambient temperatures.
- **Extended operating range.** Facilitated by our software, the board is capable of operating across a very wide range of power and efficiency, limited only by thermal dissipation capacity at the upper end and the ASIC minimum clock speeds at the lower end.

Additionally, the MDK hashboard will support on-chip temperature monitoring. A common failure mode for commercial mining hashboards is overheating resulting in chip failures. Because the Intel ASICs we use support on-chip temperature monitoring, we will be able to shut down hashing operations before the ASICs reach temperature levels that might damage them.

As described in our recent [update on the MDK](https://www.mining.build/blog/update-on-the-mining-development-kit/), our open source miner firmware will utilize the above hashboard features to support important capabilities including underclocking, overclocking, rapid startup and shutdown of hashing, and disablement of fans, among other features. These capabilities will be accessible via both a graphical user interface (GUI) and a RESTful software API allowing open, flexible management of the hashboard. This same API and firmware will be used in our future full mining system built on our proprietary ASIC, so any technology built using our MDK will be substantially compatible with that future system.

## Next steps

Once launched into the market next year, we hope to see the MDK hashboard employed in a variety of emerging mining use cases including heat re-use and stranded power applications, as well as in traditional industrial mining. As part of this, we'd love to see the MDK used to explore innovative, sustainable energy applications for mining. We also hope our transparent and open source approach offers a material practical improvement for developers looking to work on novel mining applications. We look forward to feedback from MDK users on how we can best serve their needs with our future mining system hardware and software offerings.

Please reach out to us at **[email address obfuscated on source page; not recoverable]** to learn more about the MDK, get in touch, ask questions, and share your thoughts. We will continue to share updates and listen to feedback as we continue to define and develop the MDK. Stay tuned for further updates on our mining hardware program in the coming weeks and months.
