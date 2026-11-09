---
slug: premaster-mistakes
group: errori-premaster
title: "Premaster mistakes that make mastering worse, and how to avoid them"
seo_title: "Premaster mistakes to avoid before mastering"
description: "A limiter on the master, clipping, normalization, MP3s, cut-off tails, wideners on the bus: the most common mistakes in files sent for mastering and how to fix them."
dek: "Mastering starts from what I receive. These are the mistakes I see most often in premasters, and what to do before you press “export”."
date: 2026-11-05
category: mastering
order: 13
---

<div class="tldr"><span class="box__title">In short</span>
<ul>
<li>The premaster is the stereo mix you send for mastering: WAV at the project sample rate, 24 bit or 32-bit float, no limiter, no clipping, no normalization.</li>
<li>Level and format mistakes take five minutes to fix. Mix mistakes, such as harsh sibilance or wide lows, get amplified by mastering.</li>
<li>A note with references and the destination of the track is worth as much as a perfect file.</li>
</ul></div>

Every week I receive premasters of every kind. Most are perfectly fine. Some arrive with problems that cost the final result more than whoever exported them imagines, and they could almost always have been avoided in a few minutes. I have collected them here, grouped by type.

## Level mistakes

**A limiter on the master.** It is the most frequent mistake. A limiter on the premaster has already used up the headroom I need to work: the peaks are flattened and I can no longer decide how, and how much, to make the track loud. Remove it before exporting. If your balance depends on it, send me both versions: the one without to work on, the one with as a reference for how you imagine it.

**Clipping on export.** A 24-bit WAV stops at 0 dBFS: everything above is cut off, and the cut cannot be recovered. Check the peaks of the exported file with the [LUFS meter](/loudness-meter), which also flags clipped samples.

**Normalization switched on.** It raises the file to 0 dBFS and wipes out the headroom you left. Always keep it off.

**Fear of delivering “quiet”.** A premaster with peaks between −6 and −3 dBFS is perfect. Mastering decides the final level: a louder premaster does not make a better master.

## Format mistakes

**MP3 or AAC instead of WAV.** A lossy format has already lost information, and mastering amplifies the encoding artifacts. You need a WAV, or an AIFF.

**A changed sample rate.** Export at the project sample rate. Converting a 44.1 kHz project to 96 kHz adds no quality, only file size.

**Unnecessary or double dither.** If you export at 32-bit float, you do not need dither. If you export at 24 bit, applying it once is fine. Never at 16 bit: I do the final reduction.

**Cut-off start and end.** Leave a few tenths of a second of silence before the first sound and the whole tail at the end. If you want a fade, do not do it in the premaster: tell me, and I will do it after the limiter, where it sounds better.

<blockquote class="pull">Level and format mistakes take five minutes to fix. Mix mistakes, mastering makes more obvious.</blockquote>

## Mix mistakes that mastering amplifies

**Harsh sibilance and cymbals.** The limiter and the extra level make them even harder. A de-esser on the vocal and some control of the highs on the cymbals, in the mix, are worth far more than any correction in mastering.

**Lows too loud or too wide.** An oversized sub makes the limiter work on the low end and the track “pumps” with the kick. A wide bass weakens in mono and on club systems. Check the lows with the [stereo phase analyzer](/tools/stereo-phase-analyzer).

**Stereo wideners on the master bus.** They make the mix seem bigger, but they can create phase problems that surface in mono and after encoding. If you need width, look for it on individual elements.

**Too much bus compression.** A compressor pushed hard on the mix bus takes away transients that mastering cannot give back. If you like the sound, fine: but it should be working for just a few dB.

**A vocal out of place.** If the vocal is too low or too high, mastering can do little without touching everything else. Here the solution is a revised mix or [stem mastering](/mixing-vs-mastering).

## Communication mistakes

**No references.** Two or three tracks that sound the way you would like yours to sound tell me more than ten lines of description.

**No destination.** Streaming, club, both? Is the track coming out as a single or on an EP? Loudness choices change. If in doubt, read [what platforms do to your master](/lufs-streaming-targets-2026).

**Confusingly named versions.** “Final_mix_v3_ok_DEF.wav” helps nobody. One name, one date, one version.

<div class="box"><span class="box__title">Premaster checklist</span>
<ul>
<li>WAV or AIFF, at the project sample rate, 24 bit or 32-bit float.</li>
<li>No limiter, maximizer or clipper on the master.</li>
<li>No clipping, normalization off.</li>
<li>Peaks between −6 and −3 dBFS, but above all no clipping.</li>
<li>Silence at the start, full tail at the end, no fade.</li>
<li>A version with your limiter as a reference, if the mix depends on it.</li>
<li>Two or three reference tracks and the destination of the track.</li>
</ul></div>

For the complete procedure in your DAW, follow the [tutorial on exporting your tracks](/export-tracks-for-mixing-and-mastering).

<div class="callout"><p><strong>Premaster ready?</strong> Mastering from $60, delivered in 48 hours. If something in the file is off, I will tell you before I start.</p><a class="cta" href="/#contact">Start a project</a></div>
