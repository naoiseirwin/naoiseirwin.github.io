---
layout: post
title: "MDK Beta Update: Early Feedback & Expanded Participation"
date: 2024-09-27 12:00:00 +0000
source: proto
original_url: https://proto.xyz/blog/posts/mdk-beta-update
featured_image: /images/proto/a40ce8a5ee8f840b88100199b52db99701c98ec4-2400x2400.jpg
authors:
  - "Naoise Irwin"
---

Following [our prior blog post](https://www.mining.build/blog/mdk-beta/) announcing the Mining Development Kit (MDK) beta, we received a large number of applications from a wide variety of applicants ranging from individuals mining at home to startups, and spanning locations across six continents. We were impressed to see so many interesting and exciting use cases for bitcoin mining, including everything from heat re-use and off-grid mining to intermittent energy mining and other novel applications. The applications gave us some valuable insights into the needs of developers who build novel bitcoin mining applications. Thank you to all those who applied for the beta.

Our goal with the beta is to get feedback on early iterations of our mining kit and create new partnerships with innovative developers and businesses. Specifically, we are looking to gain feedback on the MDK hardware setup, firmware onboarding and ongoing user experience. We hope this feedback will help inform not only future iterations of the MDK, but also our future mining system products.

Our first step with the beta was to select applicants who we felt could help us identify any major issues with the MDK package early on. For this, we selected [@skot9000](https://x.com/skot9000) from [Bitaxe](https://bitaxe.org?ref=proto.xyz), an open-source, energy-efficient Bitcoin ASIC miner for hobbyist miners, and the team at [ePIC Blockchain Technologies](https://x.com/ePICBlockchain?ref=proto.xyz), a Canadian engineering company specializing in efficient mining system innovation. Working with Skot and ePIC Blockchain, we got some great early feedback. In general, they felt the setup instructions were very clear and appreciated the firmware’s simplicity and clean look. We got a lot of helpful feedback on ways to improve the KPIs reported in the firmware’s dashboard, as well as the need for better API access, log access, and error notifications coupled with resolution procedures. Additionally, we were able to identify valuable learnings from a chip overheating on the hashboard which was traced to issues with the thermal interface material (TIM) application at the factory

With this initial step behind us, we decided to expand the beta to include additional participants who will continue to help us learn about a diverse set of mining use cases. Our new participants are:

- [SmithOffGrid](https://www.youtube.com/@SmithOffGrid?ref=proto.xyz), an engineer from Salt Lake City with a passion for energy independence. In 2024, he began powering his home with an impressive off-grid solar setup featuring 10kW solar panels and a 12kW inverter. He’s looking to use the MDK to maximize his energy efficiency by creating a seamless integration of Bitcoin mining into his solar system, switching to mining when his batteries are fully charged.
- [Wilson Mining](http://wilsonmining.io?ref=proto.xyz), run by two Iowa-based brothers with roots in agriculture, marketing, and mechanical repair, is another standout. Focused on supporting small-scale miners, they offer hosting, consulting, and automation software. Their goal is to provide affordable, accessible solutions that enable smaller mining operations to compete with industry giants. You can follow their journey on X [@WilsonMining](https://x.com/WilsonMining?ref=proto.xyz).
- Freerk, is a Berlin-based entrepreneur and Bitcoin enthusiast who previously built a Bitcoin-powered sauna using old miners and custom 3D-printed components, with a focus on heat reuse. Using the MDK beta kit, he's aiming to optimize heat output to improve his sauna efficiency while exploring voltage upgrades. Beyond mining, Freerk runs the ordinals service [Ordimint](http://ordimint.com?ref=proto.xyz) and co-hosts Berlin’s monthly [BitDevs Socratic Seminar](https://bitdevs.berlin/?ref=proto.xyz).

## Our MDK beta mining firmware and API

The MDK beta participants are testing out an early iteration of our mining firmware. As we’ve approached the design of the firmware, we have focused a lot on the user experience. This includes providing a clean, uncluttered user interface which helps users to clearly understand their miner’s status and performance.

In terms of core features, the current early version of our firmware includes a custom-built stratum V1 client, essential key performance indicators, and basic system health monitoring and protection.

We have also begun to build out an API to allow integration with third party miner management systems (MMS), as well as an early version of our documentation site, which can be found [here](https://www.mining.build/manuals/). The documentation site includes guides to hardware setup and firmware onboarding.

We plan to continue expanding the feature set of our mining software and API as we approach the launch of our full mining system next year. More to come on all of this in the future.

While we are working through the feedback of our beta program participants, we’d love to hear your thoughts and comments on what we’ve outlined in this post. Please reach out to us at [email address obfuscated on source page; not recoverable] with any comments or feedback.
