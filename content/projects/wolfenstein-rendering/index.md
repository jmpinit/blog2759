---
title: "Wolfenstein-like Rendering"
cover: "./images/game-like-wolfenstein.gif"
description: ""
date: "2011-06-20"
---
<!-- NOTE: Date is a random guess -->
![](./images/game-like-wolfenstein.gif)

This is a tiny rendering experiment from when I was in high school. I was fascinated by ray casting
\- the method of building up an image by shooting rays from the camera and seeing what they hit. I
had read about the game [Wolfenstein 3D](https://en.wikipedia.org/wiki/Wolfenstein_3D), which used a
very simple implementation of two-dimensional raycasting, and wanted to give it a try for myself.
This is my rather poor implementation in Processing. The walls aren't smooth because of quantization
I failed to account for, and the color sampling code that would have let the image defining the map
to also specify the color of the walls was unfinished. I remember that when I was writing the code I
was waiting for a ride home from school. So I was trying to finish it as quickly as possible,
frantically typing on the tiny keyboard of my beloved EEE PC, sitting on the school's steps.

You can check out [the code on GitHub](https://github.com/jmptable/rendering-like-wolfenstein).
