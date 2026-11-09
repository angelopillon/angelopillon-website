---
slug: phase-and-mono-compatibility
group: fase-compatibilita-mono
title: "Phase and mono compatibility: a tutorial for a mix that holds up everywhere"
h1: "Phase and mono compatibility, step by step"
seo_title: "Phase and mono compatibility: mixing tutorial"
description: "How to check phase and mono compatibility in the mix: correlation, mic polarity, kick layers, wideners, mono lows and a band-by-band check."
dek: "Many people listen in mono without knowing it: phone speakers, Bluetooth speakers, venue systems. Here is how to make sure the mix does not lose pieces when the two channels are summed."
date: 2026-11-05
category: tutorial
tutorial: true
howto:
  time: PT30M
  tools: ["DAW", "Utility plugin with a mono button", "Phase correlation meter", "Stereo phase analyzer"]
order: 10
---

<div class="howto-meta"><span><b>Time</b>30 minutes</span><span><b>Level</b>Intermediate</span><span><b>You need</b>A utility plugin with a mono button, a correlation meter and the <a href="/tools/stereo-phase-analyzer">stereo phase analyzer</a></span></div>

A mix that sounds wide and spectacular on headphones can lose the kick, the vocal or half the synth when the two channels are summed. It happens more often than you think, because mono is everywhere: the phone speaker, many Bluetooth speakers, the systems in bars and shops, the subs in almost every club.

Phase is not an abstract concept. If two similar signals arrive with a small delay, or one is flipped relative to the other, some frequencies reinforce each other in the sum and others cancel. In stereo the ear often does not notice. In mono it does.

## How to read a correlation meter

The correlation meter measures how similar the left and right channels are:

- **+1**: the two channels are identical, the signal is mono.
- **0**: the two channels are unrelated, the sound is very wide.
- **Negative values**: the two channels are out of phase, and they cancel in the mono sum.

A healthy mix sits mostly between about +0.3 and +0.9. Short dips towards zero in reverb tails are normal. Prolonged negative values, or low correlation in the low frequencies, are a problem.

## The method, step by step

<ol class="steps-list">
<li><div><h3>Put a mono button on the master</h3><p>Insert a utility plugin with a mono button at the end of the master chain. Switch between stereo and mono often, at a moderate volume, throughout the mix. You do not need to mix in mono: you need to notice straight away what disappears.</p></div></li>
<li><div><h3>Check the polarity of multi-mic recordings</h3><p>Kick in and out, snare top and bottom, DI and amp mic: every pair needs checking. Flip the polarity of one of the two and keep the setting that gives more lows and more body. The bottom snare mic almost always needs flipping.</p></div></li>
<li><div><h3>Time-align DI and amp</h3><p>The mic in front of the amp arrives after the direct signal: sound travels about 34 cm in one millisecond. Shift the mic track earlier until the waveforms line up. The low end immediately gets fuller.</p></div></li>
<li><div><h3>Align kick layers and stacked samples</h3><p>Two layered kicks, or a kick with an 808, can cancel each other. Zoom in on the waveforms, line up the attacks and try flipping the polarity of one of them: if together they sound thinner than each one alone, there is cancellation.</p></div></li>
<li><div><h3>Make the lows mono</h3><p>Below 100–150 Hz the mix should be mono, or nearly. Use a mid/side EQ to remove the side channel in the lows, or a dedicated plugin. Many club systems sum the subs to mono, and a bass that is wide in the studio becomes a weak bass on the dance floor.</p></div></li>
<li><div><h3>Check wideners, chorus and the Haas effect</h3><p>A delay of 10 to 30 ms on one side makes a sound much wider, but in mono it creates a comb filter: the sound turns metallic or disappears. Use these effects sparingly, prefer real recorded doubles, and listen to every widened element in mono.</p></div></li>
<li><div><h3>Listen to the reverb and delay returns in mono</h3><p>Many stereo reverbs are deliberately low in correlation. That is fine, as long as the vocal does not lose its space or turn hollow in mono. If it does, narrow the return or use a different reverb.</p></div></li>
<li><div><h3>Check band by band</h3><p>Drop the mix into the <a href="/tools/stereo-phase-analyzer">stereo phase analyzer</a>. It shows overall and per-band correlation, the level loss when switching to mono, the time spent in negative correlation and the vectorscope. Listening to the side channel alone lets you hear exactly what disappears in mono.</p></div></li>
<li><div><h3>Do a final listen on a mono speaker</h3><p>A phone or a cheap Bluetooth speaker is the toughest test. The vocal, the kick and the rhythm must stay clear. If the kick disappears, go back to the lows and the layers.</p></div></li>
</ol>

## The values I check

| Measurement | Where it should sit | When to worry |
|---|---|---|
| Overall correlation | Between about +0.3 and +0.9 | Negative for more than 5% of the track |
| Correlation below 200 Hz | Above +0.7 | Below +0.7, or negative |
| Level loss in mono | One or two dB on a wide mix | More than 3.5 dB |

These are the same references the analyzer uses to flag problems.

<blockquote class="pull">Mono is not a format of the past. It is how your track sounds from someone’s phone, and on the subs of almost every club.</blockquote>

## Frequently asked questions

### Is a mix with +1 correlation perfect?

No: it is mono. It is perfectly compatible, but it has no width. The goal is a mix that is wide in the parts that should be wide and centred in the ones that carry the track: vocal, kick, bass, snare.

### Is negative correlation always a mistake?

No. Some effects produce it for an instant, and certain reverbs touch it in their tails. It becomes a mistake when it lasts, when it affects the lows, or when you hear something important disappear in mono.

### Can mastering fix phase?

Only partly. In mastering I can make the lows mono or narrow one band, but I cannot realign two microphones or two samples summed in the mix. Those problems are solved at the source, or with [stem mastering](/mixing-vs-mastering).

<div class="callout"><p><strong>Does your mix fall apart in mono?</strong> I fix it in the mix or, if the tracks are no longer available, with stem mastering. Mix and master from $110.</p><a class="cta" href="/#contact">Start a project</a></div>
