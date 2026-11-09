---
slug: gain-staging-in-your-daw
group: gain-staging-daw
title: "Gain staging in your DAW: a step-by-step tutorial for a clean mix"
h1: "Gain staging in your DAW, step by step"
seo_title: "Gain staging in your DAW: step-by-step tutorial"
description: "How to set levels in your DAW from recording to the master bus: clip gain, plugins calibrated to −18 dBFS, headroom for mastering. A tutorial with practical values."
dek: "A 32-bit float DAW does not clip internally, but plugins and your ears react to level. Here is the method I use, in eight steps."
date: 2026-11-05
category: tutorial
tutorial: true
howto:
  time: PT30M
  tools: ["DAW", "Peak meter", "VU or RMS meter", "LUFS meter"]
order: 2
---

<div class="howto-meta"><span><b>Time</b>30 minutes on one session</span><span><b>Level</b>Beginner</span><span><b>You need</b>Your DAW, a peak meter and a VU or RMS meter</span></div>

Gain staging means controlling level at every point in the chain: from the recording to the first plugin, from one plugin to the next, from the channels to the buses and on to the master. The goal is simple. Every processor should work in the range it was designed for, the faders should sit in a comfortable position and the mix should reach mastering with headroom.

When I receive a session with tidy levels, the mix starts faster and sounds better. When I receive tracks hitting the plugins 15 dB hotter than expected, I spend the first hour working out which distortion is intended and which is not.

## Why it still matters, even at 32-bit float

The mix engine of a modern DAW works in floating point: a channel can go above 0 dBFS without clipping internally. That is true, but it does not settle the matter, for four reasons.

- **Plugins that emulate hardware react to level.** Compressors, saturators and EQs modelled on analog gear are calibrated to a reference level, often 0 VU = −18 dBFS. Hit them 12 dB harder and you get compression and distortion you did not choose.
- **Some plugins clip anyway.** Not all of them run in floating point internally, and many limiters and clippers have a fixed ceiling.
- **The final file clips.** A 24-bit WAV stops at 0 dBFS: everything above it is cut off on export.
- **Loudness fools the ear.** Louder always seems better. If a plugin raises the level by 3 dB, it will seem to improve the sound even when it makes it worse.

## The method in eight steps

<ol class="steps-list">
<li><div><h3>Set up the session and record with headroom</h3><p>Work at 24 bit or 32-bit float, at the project sample rate, with no limiter on the master. When recording, aim for peaks between −12 and −6 dBFS and an average level around −18 dBFS. At 24 bit the converter noise is far lower than the noise of the microphone and the room: recording “hot” improves nothing and risks clipping.</p></div></li>
<li><div><h3>Bring every source to a similar level with clip gain</h3><p>Before inserting any plugin, use clip gain (or region gain) to bring each audio track to an average level of about −18 dBFS RMS, with the faders at 0. Drum samples often arrive peaking at 0 dBFS: turn them down here, not with the fader.</p></div></li>
<li><div><h3>Put a trim at the top of virtual instruments</h3><p>Synths and samplers have no clip gain. Lower the instrument’s output volume or insert a gain utility as the first plugin, and bring these tracks to around −18 dBFS average as well. Many presets are designed to impress in the store, not to sit in a mix.</p></div></li>
<li><div><h3>Respect the calibration of analog-modelled plugins</h3><p>Check the manual for the level that corresponds to 0 VU: usually −18 dBFS, sometimes −20 or −14. Insert a VU meter before the plugin and set the input so the needle swings around 0 VU in the loudest parts. If you want more saturation, push the input knowing what you are doing.</p></div></li>
<li><div><h3>Match the input and output of every plugin</h3><p>After each processor, set the output so the perceived level is the same with the plugin active and bypassed. Many plugins have an auto gain or gain match function: use it. Only then does bypass tell you whether the processor improves the sound or just makes it louder.</p></div></li>
<li><div><h3>Balance with the faders, starting from a lead element</h3><p>Pick the element that carries the track (often the kick in electronic music, the vocal in pop and rap) and set it around −18 dBFS average. Build everything else around it. If a fader ends up below −20 dB, go back to clip gain: in that range the fader travel is too sensitive for fine adjustments.</p></div></li>
<li><div><h3>Check the buses and the master</h3><p>No bus should clip, especially if you use fixed-ceiling plugins. On the master, before any processor, the mix peaks should sit around −6 dBFS. If you are too hot, lower all the channels together (with a VCA or by selecting them all), not the master fader: in Ableton, Logic and FL Studio the master inserts are pre-fader, so lowering the master does not change the level going into the plugins. Pro Tools is the exception: on the Master Fader the inserts are post-fader.</p></div></li>
<li><div><h3>Export for mastering and check</h3><p>Remove limiters and maximizers from the master and export a 24-bit or 32-bit float WAV at the project sample rate, without normalization. Peaks between −6 and −3 dBFS are comfortable, but what really matters is that there is no clipping. Drop the file into the <a href="/loudness-meter">LUFS meter</a> to check peaks and true peak.</p></div></li>
</ol>

## The mistakes I see most often

**A limiter on the master “to hear how it will sound”.** It is understandable, but if the balance depends on the limiter, the mix changes when you remove it. If you want to work into it, fine: send me two versions, with and without.

**Pulling the master fader down to avoid clipping.** In most DAWs it lowers the output but not the level reaching the inserts: the compressor on the mix bus keeps working too hard.

**Comparing plugins at different volumes.** It is the reason so many mixes end up with too much top end and too much compression: every choice seemed better because it was a little louder.

**Normalizing on export.** It raises the file to 0 dBFS and removes the headroom you left. Always keep it off for files meant for mixing or mastering.

<blockquote class="pull">Gain staging is not a level rule. It is how you make every plugin work the way it was designed and judge with your ears, not with volume.</blockquote>

## What about purely digital plugins?

A clean digital EQ or a compressor without analog modelling does not change character with input level: there, gain staging is mostly about keeping the faders comfortable and comparing at equal volume. The method stays the same; only how strict you are with input levels changes.

When the mix is ready, prepare the tracks or the premaster following [the tutorial on exporting for mixing and mastering](/export-tracks-for-mixing-and-mastering), and have a look at the [most common premaster mistakes](/premaster-mistakes).

<div class="callout"><p><strong>Rather have me sort out the levels?</strong> Mix and master from $110: you send me the tracks, I send back a master ready for every platform.</p><a class="cta" href="/#contact">Start a project</a></div>
