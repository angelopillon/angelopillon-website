=== hub ===
## Why these tools exist

I take measurements every day: loudness before and after mastering, correlation on a wide mix, the tempo of a delay, the pitch of a kick. These are the versions of those checks I wanted to be able to hand to clients: free, with no sign-up, and without uploading anyone’s unreleased music anywhere.

## How they work

Every tool runs in your browser. Audio files are decoded and analyzed on your computer with the Web Audio API and are never sent to a server. After your first visit, the tools also work offline.

## What they don’t replace

A meter tells you where a track stands, not whether it sounds good. Use the numbers to check your ears, then trust your ears. When the numbers and your ears disagree and you can’t tell why, that is exactly the kind of problem I solve in mixing and mastering.

=== meter ===
## What the numbers mean

- **Integrated** is the loudness of the whole track, gated so that silence and quiet intros don’t drag it down. It is the number streaming platforms use to set your playback level.
- **Short-term max** is the loudest 3-second stretch, usually the drop or the chorus. **Momentary max** is the loudest 400 ms.
- **True peak** is the highest point of the reconstructed waveform, measured with 4× oversampling as BS.1770 specifies. **Sample peak** is the highest sample value. When true peak reads higher, the waveform overshoots between samples.
- **LRA**, the loudness range, is the spread between the quieter and the louder parts: the 10th to the 95th percentile of short-term loudness, as in EBU Tech 3342.
- **Width (S/M)** compares the side signal with the mid. Lower means narrower.
- **Key** and **tempo** are estimates, with a confidence level for the key. Treat them as a starting point.

## Targets are references, not goals

The target buttons (Streaming −14, Apple −16, Club −9 or a custom value) only set what the readout compares against. A streaming platform plays a −9 LUFS master at −14; it doesn’t reward a master that gets there on its own. The platform table shows what each service does to your file: the gain it applies, the level it plays at and where the peaks end up.

## Checks and comparison

The checks flag clipping, DC offset, phase and mono problems, an unusual peak-to-loudness ratio and a true peak above the ceiling. I master with a true peak ceiling of −0.3 to −0.2 dBTP and a true peak limiter; [How loud should your master be](/how-loud-should-your-master-be) explains why.

Drop a commercial reference in the comparison panel to see both tracks side by side. Matching the short-term loudness of your drop to the reference tells you more than matching the integrated.

## Accuracy and privacy

The meter decodes your file in the browser, resamples it to 48 kHz and applies the K-weighting, gating and true peak oversampling of ITU-R BS.1770-4. A stereo 997 Hz sine at −20 dBFS reads −20.0 LUFS, as it should. Your audio never leaves your computer.

=== stereo ===
## What it measures

- **Average and lowest correlation:** how alike the left and right channels are, from +1 (mono) through 0 (unrelated) to −1 (opposite polarity).
- **Time below zero:** the share of the track with negative correlation. Those moments lose level, or vanish, in mono.
- **Balance:** whether one channel is louder than the other.
- **Width (S/M):** side energy relative to mid energy.
- **Mono fold-down:** how much quieter the track gets when summed to mono, in LU. Fully uncorrelated material loses 3 LU; a bigger loss means out-of-phase content.
- **Per band:** correlation, width and share of energy in six bands, from sub to air.
- **Correlation over time** and a **vectorscope** of the loudest eight seconds, to find exactly where the image falls apart.

## How to read it

A healthy mix sits mostly between about +0.3 and +0.9. Short dips towards zero in reverb tails are normal. Below 200 Hz, correlation should stay above +0.7: club systems sum the sub to mono, and a wide low end gets weaker on exactly the systems where it matters most. The analyzer flags negative correlation for more than 5% of the track and a mono loss above 3.5 LU.

## Listen to what disappears

Switch between **Stereo**, **Mono** and **Side** while the track plays. The side signal is exactly what cancels when the track is summed to mono: if you hear the kick, the bass or the lead vocal there, something is out of phase.

Analysis and playback happen in your browser. Nothing is uploaded.

=== ab ===
## Why loudness matching matters

A track that plays 1 dB louder sounds fuller, brighter and more exciting, even when it isn’t better. Comparing your mix with a mastered reference without matching loudness is the most common way to make the wrong decisions. This player measures the integrated loudness of both tracks and applies the gain that makes them equal before you hear them.

## How to use it

1. Load your track as A and a reference as B. WAV, AIFF, FLAC and MP3 all work.
2. Keep **Match loudness** on. The gain applied to each track appears under its name.
3. Press play and switch with the buttons or the keyboard: space plays and pauses, A and B select, X switches. Both tracks keep the same position, so you compare the same moment.
4. Turn on **Blind mode** to hide which is which. Listen, decide, then press **Reveal**.

## What to listen for

Start with the low end: at the same level, is your kick as clear and your bass as solid as the reference? Then the voice: does it sit in front in the same way? Then the top: is the reference smoother, or more open? A difference you still hear at matched loudness is a real difference.

Pick recent references in your genre. Everything runs locally; the files are never uploaded.

=== delay ===
## The delay table

Each row is a note value at your tempo, in milliseconds, in three versions: straight, dotted (one and a half times longer) and triplet (two thirds). The last column gives the same value as a rate in hertz, for LFOs, tremolo and auto-pan. Click any value to copy it.

Quarter-note delays sit with the groove. Dotted eighths create the rolling pattern of so many pop and dance records. Triplets swing against straight drums. On a vocal, an eighth or a quarter, filtered so that only the mids repeat, stays out of the way of the next phrase.

## Reverb and dynamics

The reverb table gives a pre-delay and a decay for four room sizes, so that the tail ends on the beat instead of smearing the next hit. A longer pre-delay keeps the source close while giving it space.

The dynamics table suggests release ranges for compressors, sidechain ducking and gates, locked to the tempo. A release that recovers just before the next beat makes a compressor breathe with the groove instead of against it.

## Tap tempo

If you don’t know the BPM, tap the big button, or the space bar, along with the track. A few taps give a stable reading. Use half and double to move between half-time and double-time feels.

These values are starting points: a busy arrangement often wants shorter tails than the arithmetic suggests.

=== tuning ===
## The chart

Choose the root and the mode of your track. The chart lists the low notes of that key, from the deep sub to the low mids, with their frequency and their role: root, third or fifth. Those are the pitches a kick body or an 808 can sit on without fighting the harmony. Play any of them to hear it against your track, starting with the volume low: they are pure sine waves.

## Hz to note

Type a frequency, for example the fundamental of your kick read on a spectrum analyzer, and the converter shows the nearest note and how many cents sharp or flat it is. Retune the sample by that amount in your sampler.

## Reference pitch and notation

The default is A = 440 Hz. If a project was tuned to 432 or 442 Hz, change it and every frequency follows.

The chart uses scientific notation, where middle C is C4. Ableton, Logic, Pro Tools and Cubase usually call that note C3, FL Studio calls it C5. If your DAW shows a different octave number, trust the frequency.

=== streaming ===
## How the calculation works

Enter the integrated loudness and the true peak of your master, or drop the file and let the page measure it. For each platform, the table shows its reference level, the gain it applies, the level your track plays at and where the true peak ends up after that gain.

- **Louder than the reference:** the platform turns the track down. Nothing else changes.
- **Quieter than the reference:** Spotify and Apple Music raise it only as far as the peaks allow; YouTube, Tidal, Amazon Music and Deezer don’t raise it.
- **Spotify Loud**, at −11 LUFS, raises quieter tracks into a limiter that engages at −1 dB.
- **Beatport and club playback** apply no normalization: what you deliver is what plays.

## Where the values come from

Spotify documents its normalization in detail: −14 LUFS in Normal, the default, −11 in Loud, −19 in Quiet, keeping 1 dB of true peak headroom when it raises a track. Apple Music Sound Check works at −16. The figures for YouTube, Tidal and Amazon Music (around −14) and Deezer (around −15) come from shorter documentation and measurements. They are reliable references, and they can change over time.

## What to do with it

A master that is turned down 5 dB isn’t penalized: it plays at the same level as everything else, with whatever density it has. The useful question isn’t how to hit −14, but how your track sounds next to the others once they all play at −14. To hear that, compare it with a reference at matched loudness in the [A/B reference player](/tools/ab-reference-player).

=== camelot ===
## How the wheel works

The Camelot system gives every key a code from 1 to 12, with A for minor and B for major. Neighbouring codes share almost all their notes, so mixing between them sounds natural. Click a key on the wheel and the compatible ones light up, with the kind of move:

- **Same code:** the same key, the smoothest mix.
- **One step either way**, for example from 8A to 7A or 9A: the safest change.
- **Same number, other letter**, from 8A to 8B: the relative major or minor, a change of mood.
- **Two steps up:** an energy boost that works over a few bars.
- **Up a semitone:** a dramatic lift, best on a breakdown.

## Finding the key of a track

If you don’t know the key, the [LUFS meter](/loudness-meter) estimates it from the file, with a confidence level. Key detection on dense electronic music is good, not perfect: confirm it by ear against the bass line.

## For producers too

The wheel isn’t only for DJs. Writing in a key that sits next to the keys your favourite DJs play makes your track easier to mix, and the wheel helps you choose the key of a remix or an edit. More in [The Camelot wheel and harmonic mixing](/camelot-wheel-harmonic-mixing).
