---
slug: de-essing-vocals
group: de-esser-sibilanti
title: "De-essing vocals: a tutorial for clear vocals without harsh esses"
h1: "Taming sibilance in vocals, step by step"
seo_title: "De-essing vocals: step-by-step tutorial"
description: "How to find the sibilance frequency, set the de-esser, when to use split-band or wideband mode, and how to fix the harshest esses by hand."
dek: "Loud esses tire the listener and get worse after compression and streaming encoding. The right de-esser pulls them down without dulling the vocal."
date: 2026-11-09
category: tutorial
tutorial: true
howto:
  time: PT15M
  tools: ["DAW", "De-esser", "Equalizer"]
order: 30
---

<div class="howto-meta"><span><b>Time</b>15 minutes per vocal</span><span><b>Level</b>Beginner</span><span><b>You need</b>A de-esser and an equalizer</span></div>

Sibilants are the s, z and sh sounds: bursts of energy between 4 and 10 kHz. Compression, saturation and presence EQ make them grow, and lossy encoding on streaming platforms makes them harsher still. That is why the de-esser goes after compression and before the reverb.

## The procedure

<ol class="steps-list">
<li><div><h3>Find the frequency</h3><p>Boost a narrow bell by 8 to 10 dB and sweep it between 4 and 10 kHz on a line full of esses. Where the s stings your ear, that is the frequency. Male vocals often sit between 4 and 7 kHz, female vocals between 6 and 9 kHz.</p></div></li>
<li><div><h3>Set the de-esser to that frequency</h3><p>Use the sidechain listen function, if there is one, to hear only what the de-esser detects. You should hear only the sibilants, not the vowels.</p></div></li>
<li><div><h3>Choose the mode</h3><p>Split-band mode lowers only the sibilance zone: it is the most transparent choice. Wideband mode turns the whole vocal down for an instant: fine for very harsh esses, but on dense vocals it can make the phrase stumble.</p></div></li>
<li><div><h3>3 to 6 dB of reduction</h3><p>Lower the threshold until the loudest esses drop by 3 to 6 dB. If the singer starts to sound like they have a lisp, you went too far.</p></div></li>
<li><div><h3>Listen in the mix</h3><p>A de-essed vocal always sounds a bit dull in solo. In the mix, with cymbals and synths around it, it should come across clear and smooth.</p></div></li>
<li><div><h3>Fix the worst esses by hand</h3><p>The two or three sibilants the de-esser cannot tame get lowered with clip gain, syllable by syllable. It is the most precise and least audible method.</p></div></li>
<li><div><h3>De-ess the reverb too</h3><p>Sibilants in the reverb hang in the air after the word. A de-esser on the reverb send, or a low-pass on the return, removes them.</p></div></li>
</ol>

## Starting values

| Vocal | Frequency | Reduction |
|---|---|---|
| Male | 4 to 7 kHz | 3 to 5 dB |
| Female | 6 to 9 kHz | 3 to 6 dB |
| Rap with hard consonants | 5 to 8 kHz | 4 to 6 dB |

<blockquote class="pull">The right de-esser is never audible. What you hear is a vocal that stays clear even when it is loud.</blockquote>

## When the problem is upstream

If you need more than 8 dB of reduction, the problem starts earlier: a microphone that is too bright, a singer too close, too much presence EQ. In the [vocal compression](/vocal-compression) chain you will see where the de-esser sits relative to the other stages.

<div class="callout"><p><strong>Harsh or hissy vocal?</strong> Mix and master from $110, tuning included: the vocal comes out clear on every system.</p><a class="cta" href="/#contact">Start a project</a></div>
