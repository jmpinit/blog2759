---
title: "Streaming WebGL to a Calculator"
cover: "./images/streaming-webgl-to-a-calculator.gif"
description: "Cheating at 3D rendering the hard way"
date: "2012-06-14"
---

<!-- FIXME when was this? -->

<iframe src="https://player.vimeo.com/video/137216358" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/137216358">Streaming WebGL to a TI-83 Plus Calculator</a> from <a href="https://vimeo.com/owentrueblood">Owen Trueblood</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

Off-screen there is an Arduino Nano plugged into the communication port of the TI-83 which is converting a stream of video data (96x64 monochrome frames) into the TI port protocol. An assembly program on the calculator very rapidly transfers the video data to screen memory.

A 3D scan of me sitting in a chair rotates in WebGL in Chrome on a laptop. A simple shader converts the scene to black and white. Some JavaScript takes each frame off of the HTML5 Canvas and pipes it over a WebSocket to some code running in Processing which sends it over a serial port to the Arduino Nano to be displayed on the calculator.

I originally did this to let me create an augmented reality art piece where the calculator could reveal the internal structure of objects if you looked through it. Never finished that.
