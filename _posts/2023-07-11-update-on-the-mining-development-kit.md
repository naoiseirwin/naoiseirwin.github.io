---
layout: post
title: "Update on the Mining Development Kit"
date: 2023-07-11 12:00:00 +0000
source: proto
original_url: https://proto.xyz/blog/posts/update-on-the-mining-development-kit
featured_image: /images/proto/d5c8b2b6b8c226d7bbd186d2d828c0664df9cecb-2400x2400.jpg
authors:
  - "Naoise Irwin"
---

A few months back we [announced](https://www.mining.build/blog/the-mining-development-kit-unlocking-innovation-in-bitcoin-mining/) our intention to build a package of tools to help developers build new and innovative uses for bitcoin mining hardware - the mining development kit (MDK). We outlined our initial view on what the MDK would consist of, and invited developers and the broader bitcoin community to collaborate and engage with us to help define it.

It was great to see a strongly positive reaction to the announcement from the community. Responses came from a wide variety of bitcoin community members, including independent developers and mining operators from around the world - from New Zealand, Nigeria, Germany, the U.S. Midwest and elsewhere. In addition to many expressions of support for the effort and excitement at the announcement, we received a large number of helpful suggestions and feature requests for the MDK. We also learned more about potential uses for bitcoin mining hardware, with developers indicating interest in using the MDK to build heating applications, smart home integrations, and solar power solutions, amongst other uses. Many of these uses are aligned with our commitment to clean and efficient energy usage for bitcoin mining, aligned with our [Clean Energy Investment Initiative](https://bitcoin.energy?ref=proto.xyz) and existing [partnership with Gridless](https://block.xyz/inside/press-release-gridless-investment?ref=proto.xyz). This is exciting as it is consistent with our long term vision of broadening the use cases for, and further decentralizing, bitcoin mining. The feedback we received helped to validate our initial view that there is an urgent need for more openness and development support in bitcoin mining.

Since the announcement, we have continued work on the MDK. This has included further requirements gathering and definition, as well as engineering of the hashboard, controller board, firmware and API, and work on a single-board system reference design. While this work is still in the early stages, we are excited to share our current view on what the MDK package will consist of, as follows:

**Q:** What are your thoughts on the hashboard power and dimensions?

**A:** 100-chip hashboard of our own design, using Intel BZM2 ASICs, with an attached heatsink and power consumption in the 1kW range. Uniquely, the hashboard will include an embedded controller, supporting safe operation of the hashboard, rapid startup and shutdown of the hashboard, and other features. The hashboard dimensions will be 290mm high by 195mm wide, similar to other hashboards used in the industry.

**Q:** Do you have any specific requirements for the controller board?

**A:** A custom-built controller board, with USB connection to the hashboard. This means the hashboard can also be driven by any computer with a USB port, including Raspberry Pi controller boards, laptops, etc.

**Q:** What are your thoughts on this feature set? Are there any other features you’d be interested in seeing?

**A:** Miner firmware. Employing an embedded Linux OS, the firmware will enable communication with mining pools and operation of the hashboard. Developers will be able to interact with the miner via a graphical user interface (GUI). We intend the firmware to support overclocking, underclocking, rapid startup and shutdown of hashing, and disablement of fans - all requested features.

**Q:** Do you have any specific requests for the API?

**A:** RESTful software API based on the OpenAPI and implemented in Rust that allows flexible management of the hashboard, including the above-mentioned frequently requested features.

**Q:** What are your thoughts on the reference design as described? What about the reference power supply?

**A:** Single-board system reference design, with a suite of recommended components including chassis, fans, power supply, connection cables, and 3D-printable components. This package will allow developers to get up and running quickly. We will sell the hashboard and controller board, while the other reference design components (fan, PSU, etc.) will be readily sourceable from third party vendors. The reference design will include support for 110-240v power supply voltage range.

**Q:** Do you have any specific requests on reference or support documentation?

**A:** Support documentation for the hashboard, controller board, firmware, API and reference design, likely encompassing product specifications, product briefs, data sheets, design files, and a code repository.

**Q:** Do you have any preferences on open source licenses?

**A:** Open source licenses for hashboard and controller board designs, and the firmware.

Note that this initial version of the MDK is primarily intended as a toolset for use by technically proficient developers. Over time, we may introduce products for wider audiences, depending on interest from the market. It is also our intention to make the hashboard and controller board available for sale on a standalone, a-la-carte basis, to support development of applications requiring multiple hashboards, and easy sourcing of replacement parts.

Development continues to progress and we expect to be in a position to launch the product early next year. We’d love to hear your thoughts on the direction we are headed in. What do you think of the MDK as described above?

Please reach out to us at [mining@block.xyz](mailto:mining@block.xyz) to get in touch, ask questions, and share your thoughts. We will continue to share updates and listen to feedback as we continue to define and develop the MDK. More to follow on our mining hardware program in the coming weeks and months.
