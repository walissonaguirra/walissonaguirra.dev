---
title: "8-Bit CPU from Scratch"
date: 2026-03-24T12:37:36+00:00
translationKey: "8bit-cpu"
draft: true
tags:
  - cpu-8bit
---

The idea is to build an 8-bit CPU from logic gates. Starting with transistors, moving through 74xx family ICs, assembling on breadboard and then on PCB. There will also be a simulated version available online for anyone who wants to experiment without having the components at hand.

## The study foundation

While researching the complexity of building a CPU, I found [UBL — Universidade Brasileira Livre](https://ulivre.dev/). A national open source project with the full curriculum for self-taught Computer Science education. Free, in Portuguese, with real quality.

I decided to use this material as a foundation. You could say this project is the equivalent of a thesis from a UBL graduate.

But when analyzing the curriculum, I realized I needed to review some mathematical fundamentals before moving forward. This led me to another national open source project: [Elementary Mathematics for Computing](https://matematica.pgdinamica.com/) — a complete review of high school mathematics focused on practical applications in computing. It fit perfectly with what I needed.

The plan is to start here before advancing through UBL. Being at least at Stage 3 of UBL would be enough to start thinking about the CPU architecture.

## Initial project roadmap

> This plan is a starting point. It will be updated as the project progresses.

**Phase 1 — Fundamentals**
- 1.1 Elementary Mathematics for Computing
- 1.2 UBL — Stages 1 to 3

**Phase 2 — Basic components**
- 2.1 Logic gates with transistors
- 2.2 Flip-flops, registers and adders

**Phase 3 — CPU Architecture**
- 3.1 ISA design (instruction set)
- 3.2 Arithmetic Logic Unit (ALU)
- 3.3 Control unit
- 3.4 Memory and bus

**Phase 4 — Physical hardware**
- 4.1 Breadboard assembly with 74xx ICs
- 4.2 PCB design and manufacturing

## Where to follow the project

All development will be documented in posts on my blog [walissonaguirra.dev](https://walissonaguirra.dev) and in video on [@walissonaguirra](https://www.youtube.com/@walissonaguirra). The idea is to maintain a weekly cadence — initially every Monday — with updates, decisions made and plan refinements.

Throughout the week, smaller decisions and notes go to my Mastodon [@walissonaguirra@mastodon.social](https://mastodon.social/@walissonaguirra), where you can follow along and send suggestions. I'll also show up at the [Go Lang Study Group](https://t.me/grupoDeEstudosGolang) meetings by [César](https://crg.eti.br/pt-br/cesar-gimenes/), every Saturday at 2 PM via Discord.

## Next steps

The next steps will be to start studying and reviewing the fundamentals of mathematics, publish study videos and post the materials on the blog. I'll document progress weekly, sharing exercises, notes and practical demonstrations.
