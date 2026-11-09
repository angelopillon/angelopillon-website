---
slug: mix-bus-compression
group: compressione-bus-mix
title: "Mix bus compression: a tutorial for gluing the track together"
h1: "Mix bus compression, step by step"
seo_title: "Mix bus compression: step-by-step tutorial"
description: "How to set up a mix bus compressor: ratio, attack, release, sidechain filter and how much gain reduction it takes to glue a track without squashing it."
dek: "One compressor on the mix bus doing 1 to 2 dB is what makes separate tracks sound like one song. The trick is to put it on early and let it work gently."
date: 2026-11-09
category: tutorial
tutorial: true
howto:
  time: PT20M
  tools: ["DAW", "VCA-style bus compressor", "Loudness meter"]
order: 29
---

<div class="howto-meta"><span><b>Time</b>20 minutes</span><span><b>Level</b>Intermediate</span><span><b>You need</b>A bus compressor and a loudness meter</span></div>

Mix bus compression is not about loudness: that is mastering's job. It is about making the tracks move together, as if they were playing in the same room. In my studio the bus goes through an SSL-style VCA compressor; in the DAW any well-designed bus compressor works.

## The procedure

<ol class="steps-list">
<li><div><h3>Put it on early, not at the end</h3><p>Insert the compressor once the rough balance is in place. If you add it to a finished mix, it shifts every balance you built and you will redo half the work.</p></div></li>
<li><div><h3>Low ratio</h3><p>Start at 2:1. At 4:1 the compression is more audible and useful in aggressive music, but 2:1 is almost always enough to glue.</p></div></li>
<li><div><h3>Slow attack to let transients through</h3><p>Between 10 and 30 ms. With an attack that is too fast, kick and snare lose their snap and the mix flattens.</p></div></li>
<li><div><h3>Timed or auto release</h3><p>Between 100 and 300 ms, or auto. The needle should return to zero between hits, in time with the song: if it stays down all the time, the release is too long.</p></div></li>
<li><div><h3>Filter the sidechain</h3><p>If the compressor allows it, high-pass the sidechain at 80 to 100 Hz. The low end then stops driving the whole compression and the mix does not pump on every kick.</p></div></li>
<li><div><h3>Threshold for 1 to 2 dB of gain reduction</h3><p>Lower the threshold until the needle moves 1 to 2 dB on the loudest parts. Dense electronic music can take 3 dB, rarely more.</p></div></li>
<li><div><h3>Compare at matched loudness</h3><p>Compensate the output gain and bypass. Without the compressor the mix should feel a little looser, not louder. If it sounds better in bypass, reduce the gain reduction.</p></div></li>
</ol>

## Starting values

| Parameter | Value |
|---|---|
| Ratio | 2:1, up to 4:1 for aggressive music |
| Attack | 10 to 30 ms |
| Release | 100 to 300 ms or auto |
| Sidechain filter | high-pass at 80 to 100 Hz |
| Gain reduction | 1 to 2 dB, 3 at most |

<blockquote class="pull">A bus compressor should move with the song, not against it. If it sits at −4 dB all the time, it is just turning the mix down.</blockquote>

## Mixing for mastering

If the track is going to a mastering engineer, keep the bus compressor only if it is part of the sound you want. What should not stay is a limiter pushing the mix to 0 dBFS: it takes away the room mastering needs. You will find the full list in [premaster mistakes](/premaster-mistakes).

<div class="callout"><p><strong>Does your mix sound like separate tracks?</strong> Mix and master from $110, with the bus running through the analog chain.</p><a class="cta" href="/#contact">Start a project</a></div>
