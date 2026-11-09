---
slug: mastering-limiter-settings
group: limiter-mastering
title: "The mastering limiter: a tutorial for loudness without distortion"
h1: "Setting the mastering limiter, step by step"
seo_title: "Mastering limiter settings: step-by-step tutorial"
description: "How to set a mastering limiter: true peak ceiling at −0.3/−0.2 dBTP, oversampling, attack and release, how much gain reduction is safe and how to check the result."
dek: "The limiter is the last link in the chain and the one that decides whether a master is loud and clean or loud and tiring. The settings matter less than how much work you ask of it."
date: 2026-11-09
category: tutorial
tutorial: true
howto:
  time: PT20M
  tools: ["DAW", "True peak limiter with oversampling", "LUFS and true peak meter"]
order: 31
---

<div class="howto-meta"><span><b>Time</b>20 minutes</span><span><b>Level</b>Intermediate</span><span><b>You need</b>A true peak limiter and a loudness meter</span></div>

A limiter does one thing: it stops the signal from crossing a ceiling. The catch is that it does so by pulling peaks down, and when the peaks are many and loud it starts squashing the music. A good loud master is built before the limiter: a balanced mix, with compression and saturation that have already shaved the sharpest peaks.

## The procedure

<ol class="steps-list">
<li><div><h3>Set the ceiling to −0.3/−0.2 dBTP</h3><p>With a true peak limiter using oversampling, a ceiling of −0.3 or −0.2 dBTP keeps the file safe from distortion after encoding without giving away loudness. I explain why in the article on <a href="/true-peak-minus-1-dbtp">true peak</a>.</p></div></li>
<li><div><h3>Turn on oversampling and true peak</h3><p>Without oversampling the limiter only watches the samples, and the peaks between samples slip through. 4x is a good starting point.</p></div></li>
<li><div><h3>Attack and lookahead</h3><p>A lookahead between 1 and 5 ms lets the limiter prepare for the peak. Shorter keeps transients, longer is cleaner on the low end.</p></div></li>
<li><div><h3>Release</h3><p>Start with auto release. Too short distorts the bass, too long makes the track pump after every kick.</p></div></li>
<li><div><h3>Raise the gain in small steps</h3><p>Watch the gain reduction on the loudest passages. Up to 2 or 3 dB is almost always transparent; past 4 or 5 dB you hear the kick lose its punch and the mix close in. If you need more, work before the limiter.</p></div></li>
<li><div><h3>Measure the loudness</h3><p>Check integrated and short-term LUFS and true peak across the whole track. The site's <a href="/loudness-meter">LUFS meter</a> does it in your browser.</p></div></li>
<li><div><h3>Compare at matched loudness</h3><p>Turn the master's output down to match the loudness of the original mix and compare. If the master sounds smaller than the mix at the same level, the limiter is working too hard.</p></div></li>
</ol>

## Starting values

| Parameter | Value |
|---|---|
| Ceiling | −0.3 / −0.2 dBTP |
| Oversampling | 4x or more |
| Lookahead | 1 to 5 ms |
| Release | auto, then by ear |
| Gain reduction on peaks | 2 to 3 dB, rarely over 4 |

<blockquote class="pull">The limiter does not create loudness. It protects it. Loudness is built earlier, in the mix and the mastering chain.</blockquote>

## Two limiters in series

On very loud tracks I sometimes use two stages: a clipper or gentle limiter that takes 1 to 2 dB off the fastest peaks, then the final limiter. Each works lightly, and the result is cleaner than one limiter doing 5 dB.

<div class="callout"><p><strong>Loud but tiring master?</strong> Analog mastering gets the level where it needs to be without squashing the track. From $60.</p><a class="cta" href="/#contact">Get it mastered</a></div>
