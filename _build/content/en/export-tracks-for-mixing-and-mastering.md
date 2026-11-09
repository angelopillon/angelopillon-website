---
slug: export-tracks-for-mixing-and-mastering
group: esportare-tracce-mix-mastering
title: "How to export tracks for mixing and mastering: Ableton, FL Studio, Logic, Pro Tools and Cubase"
h1: "Exporting tracks for mixing and mastering, DAW by DAW"
seo_title: "Export tracks for mixing and mastering, DAW by DAW"
description: "How to prepare and export tracks, stems and premasters: formats, start point, effect tails, naming. For Ableton, FL Studio, Logic, Pro Tools and Cubase."
dek: "Half of a mix’s problems start before the mix: files that do not start from the same point, cut-off reverbs, limiters forgotten on the master. Here is how to avoid them."
date: 2026-11-05
category: tutorial
tutorial: true
howto:
  time: PT45M
  tools: ["DAW", "File transfer service"]
order: 6
---

<div class="howto-meta"><span><b>Time</b>20 to 45 minutes</span><span><b>Level</b>Beginner</span><span><b>You need</b>The project open in your DAW and a service such as WeTransfer, Google Drive or Dropbox</span></div>

When I open a new session, the first few minutes tell me how smoothly the work will go. If the files all start from the same point, have clear names and come with a note on tempo and key, mixing starts straight away. If not, it starts with questions. This tutorial takes you from the finished session to a folder ready to send.

## The method, valid for every DAW

<ol class="steps-list">
<li><div><h3>Save a copy of the project</h3><p>Work on a copy called, for example, “Title_export”. That way you can remove plugins and automation without risking the original version.</p></div></li>
<li><div><h3>Clear the master</h3><p>Turn off limiters, maximizers, clippers and compressors on the master. If your balance depends on that chain, export a version with the processed master anyway: I will use it as a reference, not as material to work on.</p></div></li>
<li><div><h3>Decide what to print and what not to</h3><p>Leave on the effects that are part of the sound: the distortion on the synth, the automated filter, the chorus on the guitar. Remove generic balancing treatment, such as corrective “mix” EQs or bus compression. If a reverb or delay is part of the idea, export it as a separate track so I can dose it.</p></div></li>
<li><div><h3>Start everything from the same point</h3><p>Every file must start at the same instant, usually bar 1 or the session’s zero point, even if the instrument comes in after a minute. This is the most important rule: if the files are aligned, the mix rebuilds itself.</p></div></li>
<li><div><h3>Keep the tails</h3><p>Extend the export range a few seconds past the last note, so reverbs and delays can die away. A cut-off tail cannot be recovered.</p></div></li>
<li><div><h3>Set format and resolution</h3><p>WAV, at the project sample rate, 24 bit or 32-bit float. No normalization, no dither if you export at 32-bit float, no MP3. If the session is at 44.1 kHz, export at 44.1: converting adds no quality.</p></div></li>
<li><div><h3>Use clear names</h3><p>Number, instrument, detail: “01_Kick”, “02_Snare_Top”, “14_Vocal_Lead”, “15_Vocal_Doubles”. Avoid “Audio 12” and “Untitled track”. If a track already has its processing printed, say so in the name: “08_Synth_Lead_FX”.</p></div></li>
<li><div><h3>Check, zip and send</h3><p>Re-import the files into an empty project and check they play back aligned as in the original. Add a bounce of your mix as a reference and a note with BPM, key, reference tracks and deadline. Zip the folder and send it with WeTransfer, Google Drive or Dropbox.</p></div></li>
</ol>

## Instructions DAW by DAW

Menu names change a little from one version to the next, but the path stays the same.

### Ableton Live

Open **File › Export Audio/Video** (Cmd/Ctrl + Shift + R). Under “Rendered Track” choose **All Individual Tracks**: Live exports one file per track and per return track. Set the start to 1.1.1 and a length that includes the tails. Turn off “Normalize”, “Render as Loop” and “Convert to Mono”. If you want the files without return and master effects, leave “Include Return and Master Effects” off. Format WAV, 24 or 32 bit.

### FL Studio

First, make sure every instrument is routed to its own mixer channel: FL exports per mixer channel, not per Channel rack channel. Then **File › Export › Wave file** (Ctrl + R). Mode “Full song”, tail set to “Leave remainder” so reverbs and delays are not cut, format 24 bit or 32-bit float. Enable **Split mixer tracks** to get one file per mixer channel, and leave the master effects off.

### Logic Pro

Use **File › Export › All Tracks as Audio Files** (Shift + Cmd + E). Format WAVE, 24 bit or 32-bit float, “Normalize” set to Off. Leave “Bypass Effect Plug-ins” off if you want to print the processing, and enable “Include Audio Tail”. Logic exports every file from the start of the project, so they stay aligned.

### Pro Tools

Select the whole song in the timeline, from the session start to the end of the tails. Select the tracks, right-click the name of one of them and choose **Bounce** (Track Bounce). Set WAV, interleaved, 24 bit or 32-bit float at the session sample rate, and use offline bounce to save time. In versions without Track Bounce, you can bounce one track at a time by soloing it, or use Commit.

### Cubase

Set the locators from the start of the song to the end of the tails, then open **File › Export › Audio Mixdown**. In the channel list on the left, select all the channels to export: Cubase creates one file for each. Exporting several channels at once is available in the larger editions, such as Cubase Pro; in the others you export one channel at a time. Format Wave, 24 bit or 32-bit float, project sample rate. Leave mono downmix and real-time export off, unless you use external hardware.

## And for mastering?

For stereo mastering a single file is enough: your mix exported as above, with no limiter on the master. Peaks between −6 and −3 dBFS are comfortable; what matters is that there is no clipping. If you want me to hear it the way you imagine it at full volume, add the version with your limiter and call it “reference”.

For **stem mastering** you usually need four to eight groups (I accept up to 40), for example drums, bass, vocals, music and effects, exported with the same method. Before sending them, run a test: summed in an empty project, they must sound exactly like your mix. If they sound different, there was probably a compressor on the master bus working on the whole.

<div class="box"><span class="box__title">Checklist before sending</span>
<ul>
<li>All files start from the same point and have the same length.</li>
<li>WAV, project sample rate, 24 bit or 32-bit float, no normalization.</li>
<li>No limiter or maximizer on the master.</li>
<li>Reverb and delay tails intact.</li>
<li>Clear, numbered names.</li>
<li>A bounce of your mix as a reference.</li>
<li>A note with BPM, key, references and deadline.</li>
</ul></div>

If you do not know the BPM and key of the track, the [LUFS meter](/loudness-meter) estimates them from the file, together with loudness and true peak. And if you want to understand how to set levels before exporting, start from the [gain staging tutorial](/gain-staging-in-your-daw).

<div class="callout"><p><strong>Folder ready?</strong> Send me the link through the contact form: I usually reply within a few hours.</p><a class="cta" href="/#contact">Start a project</a></div>
