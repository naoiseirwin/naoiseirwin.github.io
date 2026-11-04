---
layout: post
title: "Update on our bitcoin mining ASIC program"
date: 2023-04-28 12:00:00 +0000
source: proto
original_url: https://proto.xyz/blog/posts/update-on-our-bitcoin-mining-asic-program
featured_image: /images/proto/801295f57ff255c4b9347265a92cc002e2eba776-2400x2400.jpg
authors:
  - "Thomas Templeton"
  - "Naoise Irwin"
---

When [we announced](https://twitter.com/jack/status/1449110239442345995?s=20?ref=proto.xyz) that we were exploring making our own bitcoin mining hardware, we noted that bitcoin mining - the fundamental transaction processing and validation process that underpins the bitcoin network - faced a number of challenges, including the excessive concentration of custom bitcoin mining silicon in the hands of just a few companies. So, [when we decided](https://twitter.com/TempletonThomas/status/1481728131668987904?s=20?ref=proto.xyz) to move forward with the mining hardware project, developing our own custom silicon was a core focus. In this blog post, we want to provide an update on our silicon development, and the path forward from here.

In the early days of bitcoin, it was possible to mine bitcoin using general purpose semiconductors, such as the central processing units (CPUs), or graphics processing units (GPUs) found in personal computing devices. However, as more computers joined the bitcoin network, mining difficulty increased, and miners sought ever more powerful and efficient ways to perform the hashing computations that underlie bitcoin mining. Eventually, bitcoin mining chips designed specifically for the sole purpose of mining bitcoin were introduced. These application specific integrated circuits (ASICs) have since come to dominate bitcoin mining.

However, developing bitcoin mining ASICs is a very challenging endeavor, both technically and in terms of the investment required. Prioritizing a bitcoin mining ASIC development program requires technical expertise, capital availability, and a long term commitment. Thus, the barriers to entry for bitcoin mining ASIC development are high. This has led to a high level of centralization of the supply of bitcoin mining ASICs, to the detriment of bitcoin miners and the bitcoin network’s resiliency.

We are uniquely well positioned to help address this problem by introducing new bitcoin mining ASIC and hardware solutions. Block has longstanding ASIC design experience, having made ASICs for our Square point of sale solutions for years. We also have deep expertise and a proven track record of building compelling, vertically integrated customer experiences in hardware and software. And perhaps most importantly, our primary motivation for this initiative is to increase the decentralization, transparency, and resiliency of the bitcoin network.

Pursuant to this last point, we plan to make our bitcoin mining technology open source where we can. In other words, we intend to make it possible for third parties to use our hardware and software solutions for their own further development, by selling standalone ASICs and hardware components, and providing extensive support and reference resources. In taking this approach, we seek to optimize for innovation and maximize the size of the bitcoin mining hardware ecosystem.

Since kicking off the project, we have made significant progress in the development of our ASIC. This has included assembling a team of ASIC designers and developing initial designs that are testing competitively with the best ASICs on the market.

Semiconductor manufacturing is an expensive endeavor, requiring large investments first in design, then in the masks used to imprint the design onto silicon wafers, and finally in the production and packaging of the chips. Once a design is complete, it is sent to the foundry (or “taped out”) for manufacturing of the masks.

The state of the art is constantly advancing, with a relentless focus on reducing the size of features in the integrated circuits. Smaller features result in less power consumption and more efficient use of limited wafer real estate for the same computational output, lowering cost. The latest technology is the three nanometer (three billionths of a meter) “node”, which only recently reached mass production and to which only a few companies globally have access.

Most bitcoin mining ASICs on the market today are produced using five nanometer technology. It is on this node that we focused our initial development efforts. In the past year, we completed the design of a high performing bitcoin mining ASIC on the five nanometer semiconductor node. Our original plan had been to do a full tape out of this design this quarter.

However, as we were planning this tape out, we learned of an opportunity to acquire a large volume of bitcoin mining ASICs from Intel, and just completed a purchase agreement with Intel. This immediate access to production ASICs accelerates our mining system development, enabling us to get to market more quickly. Additionally, we can now focus our design team exclusively on cutting edge three nanometer ASIC development.

In support of our three nanometer ASIC development, this month we moved forward with manufacturing a prototype of our completed five nanometer design. This is an exciting milestone which will allow us to experiment with design variants, validate our design work, and calibrate our testing on real silicon. We expect to receive the prototypes back this fall. They will be a valuable input into our three nanometer ASIC development work.

## What's next?

If this sound exciting to you, we are hiring! Currently open roles include:

[Senior Embedded Software Engineer/Developer](https://jobs.smartrecruiters.com/Square/743999902169273-senior-embedded-software-engineer-developer?ref=proto.xyz)

[Embedded Software Engineer, Bitcoin Mining](https://jobs.smartrecruiters.com/Square/743999902155475-embedded-software-engineer-bitcoin-mining?ref=proto.xyz)

[Embedded Software Engineer, Bitcoin Mining](https://jobs.smartrecruiters.com/Square/743999902156643-embedded-software-engineer-bitcoin-mining?ref=proto.xyz)

Otherwise, please feel free to reach out to us at [email address obfuscated on source page; not recoverable] (or on twitter) to get in touch, ask questions, and share your thoughts. Stay tuned for further updates on our ASIC and mining hardware program more broadly in the coming weeks and months.
