---
slug: lufs-streaming-targets-2026
group: lufs-streaming-2026
title: "LUFS and streaming in 2026: what platforms do to your master"
seo_title: "LUFS and streaming in 2026: what platforms do"
description: "Spotify, Apple Music, YouTube, Tidal, Amazon Music and Deezer: the 2026 normalization levels and what they really mean for the loudness of your master."
dek: "Normalization turns loud masters down and barely lifts quiet ones. Here are the current values and how to use them without chasing a number."
date: 2026-11-05
category: loudness
order: 1
---

<div class="tldr"><span class="box__title">In short</span>
<ul>
<li>Spotify normalizes to −14 LUFS in Normal mode, −11 in Loud and −19 in Quiet. Apple Music works at −16, Deezer around −15, YouTube, Tidal and Amazon Music around −14.</li>
<li>A master louder than the reference gets turned down. A quieter one is turned up only if it has headroom on the peaks, and on several platforms it is not turned up at all.</li>
<li>The right loudness depends on the genre and the arrangement, not on the platform. Measure first, then decide.</li>
</ul></div>

Every week someone asks me “how many LUFS should I master to for Spotify?”. It is a fair question, but it starts from a wrong idea: that the platform rewards whoever hits an exact number. It does not. Normalization is an automatic volume control, and knowing its rules is useful for one thing only: knowing how loud your track will really sound next to everyone else’s.

## What LUFS measures

LUFS (Loudness Units relative to Full Scale) measures perceived loudness according to ITU-R BS.1770. It weights frequencies roughly the way the ear does, ignores silence and returns an average over the whole track: the integrated value. One LU equals one dB. If your master measures −9 LUFS and the platform works at −14, the player turns it down by 5 dB. That is all.

The rest of the measurement (short-term, momentary, loudness range) tells you how loudness moves over time, and it is very useful in mastering. Platforms, however, look at two numbers only: integrated loudness and true peak.

## Platform values in 2026

| Platform | Reference | Louder master | Quieter master |
|---|---|---|---|
| Spotify, Normal (default) | −14 LUFS | Turned down | Turned up, leaving 1 dB of true peak headroom |
| Spotify, Loud | −11 LUFS | Turned down | Turned up, with a limiter acting at −1 dB |
| Spotify, Quiet | −19 LUFS | Turned down | Turned up, leaving 1 dB of headroom |
| Apple Music (Sound Check) | −16 LUFS | Turned down | Turned up only as far as the peaks allow |
| YouTube | about −14 LUFS | Turned down | Not turned up |
| Tidal | about −14 LUFS | Turned down | Not turned up |
| Amazon Music | about −14 LUFS | Turned down | Not turned up |
| Deezer | about −15 LUFS | Turned down | Not turned up |

Spotify documents its values in detail, edge cases included. For the other platforms the numbers come from shorter documentation and from field measurements: treat them as a reliable reference, not as physical constants, and check them again now and then.

### Three Spotify details that matter

**Albums and playlists do not behave the same way.** When someone plays an album from start to finish, Spotify applies a single gain to the whole record: the most intimate track stays more intimate than the others, exactly as you decided in mastering. In shuffle and in playlists, every track is normalized on its own.

**A quiet master goes up less than you think.** Spotify raises tracks below −14 only as long as the true peak stays under −1 dBTP. In its official example, a track at −20 LUFS with peaks at −5 dBTP only reaches −16 LUFS.

**Lossless is here, and it changes what you should deliver.** Since September 2025 Premium subscribers can listen in FLAC up to 24 bit and 44.1 kHz. Normalization stays the same, but a file delivered at 24 bit reaches the listener with its full resolution. If your distributor accepts it, deliver the master at 24 bit.

## What happens to a loud master

Take a master at −8 LUFS with the true peak at −0.3 dBTP. On Spotify, in Normal mode, it is turned down by 6 dB: it plays at −14, with peaks at −6.3 dBTP. On Apple Music it drops by 8 dB. No platform punishes you: it turns you down, and that is it.

The real problem is something else. If you crushed the transients to reach −8 and the kick lost its attack, at the same volume your track will sound flatter than one mastered at −10 with more punch. Normalization evens out volume, not density or life. That is why the loudness war cannot be won on streaming: you win by making the track loud in the right way, with saturation and clipping dosed before the limiter, so the limiter only has to catch the peaks.

## What happens to a quiet master

Now a master at −16 LUFS, with peaks at −1.5 dBTP. Spotify would like to raise it by 2 dB, but the peaks would land at +0.5 dBTP: to keep 1 dB of headroom it raises it by only half a dB. It plays at −15.5, slightly quieter than the rest. YouTube and Tidal do not raise it at all.

A dynamic ballad can afford that, because its strength lies in contrast. A dance track cannot: in a playlist it follows full, dense tracks and sounds dull from the first bar.

## So, how loud?

The music decides the number, not the platform. As a guide, this is where most of the modern releases I master end up, always with the true peak between −0.3 and −0.2 dBTP:

- **Pop, rap, R&B, indie made for streaming:** between −11 and −8 LUFS integrated.
- **Techno, house and club electronic music:** between −11 and −9 LUFS, because there is no normalization on Beatport or on a DJ mixer, and a track much quieter than the others in a DJ’s folder sounds weak.
- **Acoustic, jazz, music for picture:** between −16 and −12 LUFS, because the impact lives in the dynamics.

Within these ranges, the right point is where one more dB of limiting stops adding density and starts taking punch away. It is different for every arrangement: a sparse track gets there early, a full production can go much further.

<blockquote class="pull">Normalization evens out volume. It cannot even out density: that is what you are mastering.</blockquote>

## The second number: true peak

True peak measures the peaks that form between one sample and the next when the signal is reconstructed. I work with an oversampled true peak limiter and a ceiling between −0.3 and −0.2 dBTP. Spotify recommends −1 dBTP, and −2 if the master is louder than −14 LUFS: in a separate article I explain [why I do not treat it as a rule](/true-peak-minus-1-dbtp) and what I check instead.

## How to check in one minute

1. Drop the master into the [LUFS meter](/loudness-meter): it returns integrated, short-term, true peak, loudness range and a platform-by-platform preview. The file never leaves your computer.
2. If you already know the numbers, the [streaming loudness calculator](/tools/streaming-loudness-calculator) shows how much each service raises or lowers the track and where the peaks end up.
3. Compare it with a reference track in your genre at matched loudness, using the [A/B reference player](/tools/ab-reference-player). That is the test that really tells you whether the master holds up.

<div class="callout"><p><strong>Want a master that holds up on every platform?</strong> Mastering from $60, delivered in 48 hours, with a club version if the track needs one.</p><a class="cta" href="/#contact">Start a project</a></div>
