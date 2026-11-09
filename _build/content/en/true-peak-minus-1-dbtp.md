---
slug: true-peak-minus-1-dbtp
group: true-peak-1-dbtp
title: "True peak: why −1 dBTP is not a rule, and what I check instead"
seo_title: "True peak: why −1 dBTP is not a rule"
description: "What true peak is, where the −1 dBTP advice comes from, why I deliver at −0.3/−0.2 dBTP with a true peak limiter and how to check the file after encoding."
dek: "The −1 dB margin exists to protect the track from lossy encoding. It is cautious advice, not a law: with the right limiter and a check after encoding, it often just gives away loudness and punch."
date: 2026-11-05
category: loudness
order: 5
---

<div class="tldr"><span class="box__title">In short</span>
<ul>
<li>True peak is the peak of the reconstructed waveform, between one sample and the next. A file can stay below 0 dBFS on every sample and exceed it once converted to analog.</li>
<li>Spotify recommends −1 dBTP, and −2 dBTP for masters louder than −14 LUFS, to guard against distortion in lossy formats.</li>
<li>I deliver with the ceiling at −0.3/−0.2 dBTP, using an oversampled true peak limiter, and I check the encoded file. What matters is that the encoded version does not distort, not the number on the meter.</li>
</ul></div>

Few numbers in mastering are repeated with as much conviction as “−1 dBTP”. You find it in platform guides, on forums, in limiter presets. It is not a wrong number: it is a safety margin designed for a specific problem. The point is to understand which problem, and whether it really exists in your case.

## Samples and the real waveform

Digital audio is a sequence of samples. On playback, the converter does not join the dots with straight lines: it reconstructs a continuous waveform that passes through every sample. Between one sample and the next, that waveform can rise higher than the samples themselves.

The classic example is a sine wave at a quarter of the sample rate, sampled halfway between zero and the peak: every sample reads about −3 dBFS, but the reconstructed wave reaches 0 dBFS. A sample peak meter reads −3. A true peak meter, which oversamples the signal (four times, per ITU-R BS.1770), reads 0.

With real music it happens all the time, especially on heavily limited masters: the samples are pressed against the ceiling and the waveform between them goes over it.

## Where −1 dBTP comes from

Lossy formats such as AAC, Ogg Vorbis and MP3 throw information away to make the file smaller. The decoded signal is not identical to the original and the peaks can grow a little. If the decoded version goes over full scale and the playback chain has no headroom, the result is distortion.

The 1 dB margin is there to cover that growth in almost every situation: very bright material, low bitrates, different codecs. Spotify recommends it in its documentation, and asks for 2 dB of margin on masters louder than −14 LUFS, because the denser a master is, the more it tends to grow when encoded. The same value appears in the AES technical recommendations for streaming.

## Why I do not apply it blindly

**How much the peak grows depends on the material.** On a master limited well with an oversampled true peak limiter, encoded at the bitrates of paid subscriptions, the growth is often a few tenths of a dB, not a full dB. On a master with harsh highs and aggressive clipping it can be much more. A fixed rule treats two opposite cases the same way.

**The dB you leave has a cost.** At the same integrated loudness, lowering the ceiling by 0.7 dB means asking the limiter for 0.7 dB more reduction on the peaks. On a dance or rap track that means slightly softer transients, a kick that hits a little less. Where there is no normalization, as on Beatport, in clubs or in DJ files, it is also less volume.

**Part of the listening is no longer lossy.** Since 2025 Spotify offers lossless to Premium subscribers, and Apple Music, Tidal and Amazon Music have offered it for years. Anyone listening in FLAC or ALAC receives the master without lossy encoding, and there the problem of growing peaks does not exist.

<blockquote class="pull">The margin is there to protect the encoded version. So the right thing is to check the encoded version, not to pick the margin by eye.</blockquote>

## What I check instead

1. **Oversampled true peak limiter, ceiling at −0.3/−0.2 dBTP.** The limiter has to detect the peaks between samples, not just the samples.
2. **Measure the master with a true peak meter.** The [LUFS meter](/loudness-meter) oversamples four times, as BS.1770 requires, and flags peaks above the threshold.
3. **Test encode.** I encode the master to AAC at 256 kbps, the Apple Music format, and to a high-quality lossy format, then measure the peaks of the decoded version. The tools Apple provides for Apple Digital Masters exist precisely to check clipping after AAC encoding.
4. **If the encoded version clips, I fix the cause.** Often it is overly aggressive highs or a clipping stage pushed too hard. I correct that, or lower the ceiling by a few tenths, until the encoded version is clean.
5. **I listen to the encoded version against the master.** That is the final word: if I hear no difference in distortion, the master is ready.

## The exceptions I respect

If a label or distributor specifies an exact ceiling in its delivery specs, that is what gets delivered: it is a client requirement, not a mastering choice. The same goes for contexts with their own standards, such as broadcast deliveries.

And if your master already sits at −1 dBTP and sounds the way you want, there is nothing to fix: the point of this article is not that −1 dBTP is a mistake, but that it is not the only right answer.

## How to check your master

Drop the file into the [LUFS meter](/loudness-meter) and look at the true peak together with the integrated loudness. Then open the [streaming loudness calculator](/tools/streaming-loudness-calculator): it shows you where the peaks end up after each platform’s normalization. For the full picture on levels, the article on [LUFS and streaming in 2026](/lufs-streaming-targets-2026) starts from here.

<div class="callout"><p><strong>A loud master that stays clean after encoding.</strong> Mastering from $60, with the encoded-file check included.</p><a class="cta" href="/#contact">Start a project</a></div>
