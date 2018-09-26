webpackJsonp([969637220773],{383:function(e,t){e.exports={data:{markdownRemark:{html:'<h1>Circuit Stickers</h1>\n<p>My friend Jie invented electronic stickers that can be put down on a surface and connected with copper tape to make blinky, crafty things that respond to the world in various ways. She sells them under the <a href="http://chibitronics.com/" target="_blank" rel="nofollow noopener noreferrer">Chibitronics</a> name but they are also part of the research that she has done at the MIT Media Lab in the <a href="https://www.media.mit.edu/research/groups/responsive-environments" target="_blank" rel="nofollow noopener noreferrer">Responsive Environments group</a>. In December of 2015 she gave me and a few other artists the stickers and asked us to see what interesting things we could make with them.</p>\n<h1>Charlieplexing</h1>\n<p>I started to explore what can be done with the stickers by implementing some basic microcontroller projects. One of the first designs I tried was a Charlieplexed array of white LED stickers. <a href="https://en.wikipedia.org/wiki/Charlieplexing" target="_blank" rel="nofollow noopener noreferrer">Charlieplexing</a> is a technique for driving lots of LEDs from just a few wires. It relies upon the fact that LEDs behave like one-way electrical valves. When lighting a particular LED many others see a voltage but only the one gets it from the correct side to illuminate.</p>\n<p>It was satisfying to use the stickers for this project because they let me lay out the actual circuit on top of the schematic that I initially drew with pen on paper. It was just a matter of putting copper tape down on top of the lines I drew for the wires, putting bits of electrical tape where they needed to cross over, and plopping LED stickers in-between. A little code for the microcontroller sticker was the last part.</p>\n<p>There were a few quirks in the implementation. Only one LED should light up at a time, but if you look carefully you will see that extra ones light up a little bit around the LED that is really bright. I believe this was because the LEDs on the stickers are especially efficient and can make use of the tiny currents that the digital IO lines still sink and source when they are in high impedance mode (the mode they are in when set to be inputs).</p>\n<p>I also noticed that after leaving the circuit alone for a day and then turning it back on, things did not work quite right. The adhesive on the copper tape is conductive but is not perfectly so and pieces must be pressed together strongly to establish a good connection. Over time the taped connections can fail as they relax. Jie’s recommendation is to solder connections on circuits that you want to keep around for a long time so that was the solution I used when it came to the final piece.</p>\n<p><img src="/circuit-sticker-charlieplexing-63cd64759418399a105a1f7279bc4311.gif"></p>\n<p>It was satisfying to use the stickers for this project because they let me lay out the actual circuit on top of the schematic that I initially drew with pen on paper. It was just a matter of putting copper tape down on top of the lines I drew for the wires, putting bits of electrical tape where they needed to cross over, and plopping LED stickers in-between. A little code for the microcontroller sticker was the last part. I wish I had had stickers\nlike these for my electrical engineering notes when I was in school. It would have been so cool to embed\nthe actual circuits I was writing about next to their descriptions.</p>\n<p>There were a few quirks in my Charlieplexing implementation. Only one LED should light up at a time, but if you look carefully you will see that extra ones light up a little bit around the LED that is really bright. I believe this was because the LEDs on the stickers are especially efficient and can make use of the tiny currents that the digital IO lines still sink and source when they are in high impedance mode (the mode they are in when set to be inputs).</p>\n<p>I also noticed that after leaving the circuit alone for a day and then turning it back on, things did not work quite right. The adhesive on the copper tape is conductive but is not perfectly so and pieces must be pressed together strongly to establish a good connection. Over time the taped connections can fail as they relax. Jie’s recommendation is to solder connections on circuits that you want to keep around for a long time so that was the solution I used when it came to the final piece.</p>\n<h1>Trying Algorithmic Design</h1>\n<p>From the beginning I was convinced that this project would be an ideal opportunity for playing with algorithmic approaches to design. Sadly, I spun my wheels on several false starts and experiments that led nowhere. The work did not reach the final artwork directly, but at least it resulted in some interesting artifacts.</p>\n<p>I mostly used the wonderful <a href="https://processing.org/" target="_blank" rel="nofollow noopener noreferrer">Processing environment</a> to do the prototyping. My first attempt was a very simple program that assumed the resulting artwork would be made of only vertical or horizontal copper strips, because it seemed like that would optimize the fabrication difficulty and code complexity. The program stored a grid of cells where each cell knew whether it contained a vertical or horizontal portion of tape. I calculated the size of the grid by measuring how many strips of tape could sit next to one-another on the 12" x 12" canvas that the final piece would use.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 726px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 103.03030303030303%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAACXBIWXMAAAsSAAALEgHS3X78AAAD0UlEQVQ4y5WTy08bVxTGr0ndVUsCxLBo1VdUERQlPAsEA14EFCBRJBKkVCFtKSFN3HaRTaWE0BZoVPADj+0ZPwi2Q9Som8avsbHxA0hR1E13LTPjMZHwEypVahf9B/rdMc2+1tHV8fX93Xu+8x2TO19Nj41PduiG32r6oP7EGc17zfUnEC0aGs1vNLa/farrndNndZfGW/tGWvuGLo5dH7/20e0L5+98PE7wUalU5H9+gJw8dYa0Nb3rndezdz9x3JtYntU77k+ydycc05+6v7nl+nqKuzfhmplyztx0zdxw3p/kpm/4vtN/eXUQfGNjE7mka/v7l9XCur2Udu5vefY3l4sJtpx2HjzzlDfcxSRb3lg++NlbSnGlJFtMu//59cmPC58Dfr/xJBnRdeRS7p3gkshbM2ucHHcJIQvNo2wmygmhJSnKShE7QgwzYoQtbfm8c7cAd/doyZC2uZBelnA6YpOj9gzPYEVk1zgpZJZCS9kYR3PekuEtOFbeXPHNTgHu0faSoZ7Te3GbGDKLQSNIMWDY+ekBsEzUjk3h6feZCCOFl3ALNlFIIcF6Z28CPlZ7nAz3thQ2Vnb8ixLejHFyxIYXMhGrvMZiBYadbMxB7w0aIae8teKb/wzw8foGcqG/HTLEoBmnd9fdcpQWvxt3vkg+RF5RkY05ZdoCm8gzfzz/wadorgM8rG3Zi6NCWhXkKTrNUtgiQ6dSLS6V1+yQQx8PW/afeb1ztymsaSBDvRQW/AaqM0LbJvgXqH7UjEYEDLgCmBQ0CgEDGl5MOX1ztOxaTT3g1nzSJQRNOA1tMlwJmVFwNu5QNP+nn2foFRFraeMh5oTCdRpyUdcBqxRXbdCcVYqsWEULppsuREU8BuFge/XRvF7ptoaM9LXkEhy6neGtIKWQiUqlmlnaXhom5FLQRHOUnXZVrDpaU0fhfMJB9VDNNhgGzbR5AMLUfOqWAgv+RQxfKe3yKHD10Roy0t+eT7lBylQzR3vG02cPcyrYLis5DBd52/72o0rDXq8+hpfb8nQ8GYjcjbteDgmsVnImiwSNhOcRJhNzHmw/Xn2gP4Rh1Yso8/vTRSFghNtKWGjOW3f8BiFgoiMA/1B2wPib35hPOjzfTh3C6Paf2569mDWf4PCPK6ScezEGJ4qbK7kYk4tb80mukHIXko7cuj2XdP/13Pdk4YtD+M2G2qvnz44Ndl4Z6Lwy2IV19Fwl77480HlZSRBjg12j57pGB7o/HNb2tzUBfg2wWv0qqXoFoTqiVlWpK/nLr1iJ6gghVcqqJKRKhR/U6uqa2n8Bsax/Yd9H+VsAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="circuit tape simulation"\n        title=""\n        src="/static/circuit-tape-simulation-56c73eeb52e00330b8160e3d4fc89713-49162.png"\n        srcset="/static/circuit-tape-simulation-56c73eeb52e00330b8160e3d4fc89713-f01e0.png 400w,\n/static/circuit-tape-simulation-56c73eeb52e00330b8160e3d4fc89713-49162.png 726w"\n        sizes="(max-width: 726px) 100vw, 726px"\n      />\n    </span>\n  </span>\n  </p>\n<p>After running the program the for the first time with the cells in random states I saw a complex maze-like pattern that would have to take days to fabricate by hand. To make it work I would need to tell the code to optimize for ease-of-fabrication while wrapping an interesting circuit into the pattern. At the time that seemed like too much work so I started thinking about where I could find code that already knows how to do circuit layout. Then it hit me that CAD software for designing PCBs almost always includes automatic routing of a circuit given a layout of its parts and maybe I could just hack on that to get what I wanted.</p>\n<p><img src="/generative-eagle-layout-e0a9fff0b2b7c4972acb78ec02b88dda.gif"></p>\n<p>I am most familiar with Eagle so I chose it as the CAD program I would target. As the first step I made the schematic for the 4x5 Charlieplexed LED array. Then I designed a rough footprint for the microcontroller sticker and switched to the PCB layout view. In Processing I used <em>java.awt.Robot</em> to send keypresses telling Eagle to move a random LED to a random location. Then I sent control-s to save the board file. After parsing the board file (which is pretty easy because the format is based on XML) I scored the design by counting the number of times that airwires overlapped. The more overlaps there were the worse I considered the design, because every one of them would mean a piece of electrical tape to prevent short-circuiting.</p>\n<p>It was neat to watch the computer use Eagle on its own but after spending a long time handling timing problems (losing keypresses because they were too close together) and trying to deal with other frustrating edge cases I lost steam. So I went back to Processing and worked on a slightly more manual algorithmic layout program.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 816px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 102.69607843137254%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAACXBIWXMAAAsSAAALEgHS3X78AAADLklEQVQ4y2VT2ZLbNhDU/7/Fri07yUMSr/bWLZESRZEEiIPA4Cal3ayd2JU/CUjtxnbchVKB4DQb09MavR9Pr5f5b9Ps57vdu/v04nZzcbN+M178dDl7d7f5ZZq+v0/ejOdxvb1avr1aXdysfn3Y/DFLLxfZqGaNlIIxSuua1ITWmJJ+879VU0ooI3h4RQhjLJaPtHNGa2OtDcG23s5TmVHXBWtMv5yLb4z3LSGhwib4/nCAMWbknFORDKAPyFqtJCxSrUBra5V3Rsq4bHAoQWRT2dbqKPWKF7IDQa+T3cGcWrvDTYJVh3H8nM6rZrqDYG4PXLedjRXzRHunlXolR8TLtH51EKtCdN5clTUryX6BsFJpoVcc7erGGHW/FYKAc98rxy+pRh69mVX1smT7hjxgvGHioUJbSu5KJDT8fiiaxrjOkfXBLtOo35PB2BC9/rCYFqCVnuByhkjUKI3NrS2NyTncooI0UAK5OtTpQRsBPdn2LvXa0clS8HF1SDDfKdg5vRUt439T+IQfYdvwKUaziiowx9bI2Ghe9uShZS2naZLLjDRrQFQ9FzpEl7V8pJ2Gf5pC2w2mW6gmGE0QWe5lM9mOzFnZxiuWTIglRWumkDp1/mM0BpQ8tcfuU0ueYEbxvpKIM8yljnLx2pHcW805SsmilHOMCgWZCuoUbIyPMv4Ynp+fWWcXnGfzbdhk9jwqpUYxQyrKEmpXKXdhS5pJjeujbb7w09Pjn09PzWfGT37P3W0VPeMhTsb7l1FFsh6aNsegpmm2ozsq1pKEj93pr655NFXrUoA5QXsmPqAqwcyW6JyzQXmYc/zxGAupr8sqZ2yKaemarW4SKlcUzyt2yLBjfFtJfb+MuY9DHcgDs+885ukmFVrNa54QOq/qVV0nAt/lmLWBLnJfHFzw+jViL6Pqt3FcQoT93kjA4xlTMsaLNXqVU8pNOV6G2N+5+Fz/X7ZfwmoGM0B1MXAc7nFhwMDlxALYrNAS9Pd4MezrAfQPLrgEmQyEt/FhMCd4/QP6OQOA+hYAxlu8yGGdKWfjP/x8qH7AqOs6H4IfEAacd52ETgjftl8Pv6k5418pk83K249NFQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="sticker circle sim"\n        title=""\n        src="/static/sticker-circle-sim-9631686a049aa1570da74fecc5ba15e3-ad939.png"\n        srcset="/static/sticker-circle-sim-9631686a049aa1570da74fecc5ba15e3-5bd0a.png 400w,\n/static/sticker-circle-sim-9631686a049aa1570da74fecc5ba15e3-66e9d.png 800w,\n/static/sticker-circle-sim-9631686a049aa1570da74fecc5ba15e3-ad939.png 816w"\n        sizes="(max-width: 816px) 100vw, 816px"\n      />\n    </span>\n  </span>\n  </p>\n<p>This one was still based on Charlieplexing LEDs, but it added a bus to the middle to help simplify the problem of circuit layout. I was hoping that by randomizing the distance of the LEDs from the bus I could find pleasing patterns with almost uniform distribution of the LEDs across the canvas. Unfortunately it seemed that 20 LEDs in the array (the most I could have using the 5 I/O available on the microcontroller) was just too few to make the eye see noise instead of look for geometric patterns.</p>\n<p>I made a stab at manually laying out a more pleasing circular-bus-based design in Eagle but quickly became frustrated because it was so painful to get concentric circles with the arc tool.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1600px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 60.8125%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsSAAALEgHS3X78AAAB5UlEQVQoz31R7W4SQRSdZWdndma67C5bqNaK0aRocDHqG6gUtl0gIfqDHyAJsQlGk0baJiWhPEF9C97CGpJ+hBoQqFQabeKzeJe1KTSNJ5OTm5l75py5g7qDs97wZ29w9v103B+ej37/OT3qDzrD7ujiW398Mjg/7o6Ouz86vVH74OTL14P99tF++/Cw07sY/0J7n/eeP3vqOOl0OpVaSTpOKv3ipZNMuu7q6zf5XC6by2XctVVY2YybzUC9lnHdleSrd+vr6OOH9wghjDGahoREZG4uIrAa4CGmanTmUJKAY7EYqtU2oSKEBCbACrYWLTNsPF60npi6HdIXgjwSDYcWTO8UY59BYts2qm3Wpp1VTgkntxVyn1BFkgxZfsSYZQUJpwHJux16fI7H42jj08Y/sZcFge3Sg7CtCTzJBogSshwxhCl0S/MDX4l3dramnalQzflgTGXKpRgiROd185YhNHbdeXe3MRObUW7we4Q85FwnZElVl5nKGGEaEzoPyLPiRmNGDAOTCQZTS1HuCnGHUjpp9Yd83bnZbHppKZVlGa4AhiZgNBm+5C3ZB5axoihQAIMkkUiger0+7SxdPvU/uPrnVquVz+fL5XKxWCyVStVqtVKpQPH2JsC+31YoFLa3t/4C+nR0SPfXLQIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="manual eagle layout"\n        title=""\n        src="/static/manual-eagle-layout-635812b15bf3276347f72529b1ba39c5-fe1b4.png"\n        srcset="/static/manual-eagle-layout-635812b15bf3276347f72529b1ba39c5-7e39b.png 400w,\n/static/manual-eagle-layout-635812b15bf3276347f72529b1ba39c5-e636c.png 800w,\n/static/manual-eagle-layout-635812b15bf3276347f72529b1ba39c5-fe1b4.png 1600w"\n        sizes="(max-width: 1600px) 100vw, 1600px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Running out of time before the final deadline I made the decision to simplify further. With some cardboard covered in painters tape as a background I played with the arrangement of the actual stickers until I found something interesting.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1600px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 33.5625%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAABtklEQVQY0wGrAVT+AG9IGXNJFF9DKzVMkTxTmD5WnUNaoEVcoltpn0tiq2BuolpsqmFyq1RstVlxuWNuoEosFTIhFEozGlw5EQB+Thl2ShNfRC84TpU/VZw8VaFUY5pRYp5WZ6NQZapYa6hZbKpecKxZb7RfdblmcqZ7USdzTiaKc1hnTTEAflEfd0oTYUc2OVCZQ1icUGCZSl6fT2KfVGahVGemWmqlaHSkV22wcXumYna3aHWqflQtc1Mui3tgjH5fAINSHHhKE1RFOjpSm0VZm01emVZlmlFkoVhonmBqmFxroFttqmBxq15ys2F2t2t4rXlTMoFgOqWUcMuyhwCIVR17TRZJPzw7U5o+VJtNXphRYZxPYZ5QYqSZiX5ocpxTaKljcadndatsea5odauAWjh3VTC1o37Ns4wAilgfdUsUQDo7OVGcR1iTWGKQRVmZT2CbSF2vhn6QbHOdWmqfXm2pXW6sXnGvYm+me1c4d1s/lXxWwKuDAIFSHXVJE0I7QD1UnUJVlkZZmFxlkkNZoUleqHl4kExirlVorFhrrm13pF9xsGVzrWZIMY97X6+Ma76WbChnsHL6+giHAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="layout on tape"\n        title=""\n        src="/static/layout-on-tape-ee8ab5332e8d34695e5f1d591de3d788-fe1b4.png"\n        srcset="/static/layout-on-tape-ee8ab5332e8d34695e5f1d591de3d788-7e39b.png 400w,\n/static/layout-on-tape-ee8ab5332e8d34695e5f1d591de3d788-e636c.png 800w,\n/static/layout-on-tape-ee8ab5332e8d34695e5f1d591de3d788-fe1b4.png 1600w"\n        sizes="(max-width: 1600px) 100vw, 1600px"\n      />\n    </span>\n  </span>\n  </p>\n<p>I straightened the bus and settled on a symmetric layout of LEDs. The symmetry looked nicer than the noise-based layouts I had played with earlier and it helped make the design easier to fabricate correctly. On paper I worked out how each LED should connect to the bus based on the schematic I previously made in Eagle.</p>\n<p>Intimidated by the immaculate 12x12 white canvas I intended to use as the artwork’s final substrate I set out to make a one-to-one draft of my design before transferring it in final form onto the canvas. I grabbed an unused desk drawer, an old laptop, a utility knife, markers, and a roll of painter’s tape.</p>\n<p>Using the back of the laptop as a cutting surface (after adding “actual cutting mats” to my shopping list) I laid out painters tape and cut it into strips roughly the width of the copper tape that Jie gave me. I did not want to use the actual copper tape for the draft because I doubted I could peel it off cleanly, my supply was not very large, and it is pretty expensive stuff. Took an hour of painstaking work with the knife but at the end I had a good stand-in for the copper.</p>\n<p>I put down the 5 lines of the bus, an outline of the microcontroller sticker, and an outline of the light sensor sticker. Then I measured a one inch grid and marked it on the surface of the drawer. Laying LED stickers on the grid I tried out many different arrangements. Noisy designs didn’t work because the straight lines of the grid force the eye to try to find patterns. Lots of obvious symmetric designs looked silly by being too simplistic, like profiles of sine, sawtooth, or triangle waves. I tried to chop up the profile and as a result got a sort of interlaced pine tree.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1600px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 58.375%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsSAAALEgHS3X78AAACoklEQVQozyWR20/acBTH+w/sbU97XtzLljnjBGfUTIk3RDfDvRVsoRfaUmipqCCIiAi0pVyKiIoxglykwDTx/9vPLfnm5JyHzznffA80qNL9ckCvskMtOKoF9WpY14RRLTKu8eNLAWhU4//U+Zer0EsDiBvXg+M611LwUswG9VR/W8YeJbRf9PVV/EGi+mqgr9Idhe4VmUGZ1iv/KzHSyFGN0qukrlG3GTgnWKCOgjUzcDPt7ilYW8LlOHGbxbtFoi1TUozqFskHiRxVybFG9RS0r2KDMgH4u+xujt+AOjLWVXwdyQfg+5xPihPFYzwt4g8FIh6m0yKV2SeHFVwvE08lP3AHYGBWOdzOhtYhMFynXO082lN8rYIvyZPHYTIWok4j1CHHRhh2n2WKCapXxAclwL9tqZ8jHsf3DLcGnXGW61N3u/B2/1H2Yx7CtEatbNDmLWZzm9v8xVl+c6tmxmEjdEBWyNdGUDuDvS7DGxzZMz2VyEcJ68j+J9WfCFOYhwoSNOphOZLDUTbB00ccnTsgnmuBroxmWVM+ZsWQuVNmHcoJ2yDkf5f9fdWvJsi7CwJEpRxTpRMmKbD3eQoE9nxJAdK+/CnmW9LOEB5fTjFr0IVo1asBkCrghxVSSbItOdC8CAw1+vyQU0+4QYUZa8zrNWeen1iY/vh6A97ONtJwIrAGVePWq5TzMmEvhDevkraM4C7HXDdppJlBspHdZhq+y7haud0Uvfrh/bu8YLnPwo2UUxK3YvgKFLR/DdonOcc31joJmpBzmnNOhVyGsHs26jFGEKOIGAS30Wv+7DBNxPe+i/AU75okd77wnnmIdcyE3MYw/ENA5vY984xzUfQuRtGfonc5ipqADlDQLB35FqLeWQE2RBBDyD1D7EyRNsNft0JMCfWfTvMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="design mockup in drawer"\n        title=""\n        src="/static/design-mockup-in-drawer-b25757f521dbf3fb0daa68251c8488a7-fe1b4.png"\n        srcset="/static/design-mockup-in-drawer-b25757f521dbf3fb0daa68251c8488a7-7e39b.png 400w,\n/static/design-mockup-in-drawer-b25757f521dbf3fb0daa68251c8488a7-e636c.png 800w,\n/static/design-mockup-in-drawer-b25757f521dbf3fb0daa68251c8488a7-fe1b4.png 1600w"\n        sizes="(max-width: 1600px) 100vw, 1600px"\n      />\n    </span>\n  </span>\n  </p>\n<p>After getting comfortable with the draft of the design I set out to transfer it over to the canvas. In the recent past I have played with projection mapping, so every problem must be solved with projection mapping. I built a rig over the table to hold a laser pico projector in place. Then I hooked it up to my tablet and opened a drawing app. I traced the key points of the design in light and then removed the drawer.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1600px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 68.375%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAABt0lEQVQoz2NgGFyAkZGRmYWVmZWdmY0NyGBiYiZWG5DkFRThF5EWkVEWk1UWFJcRlpABCjMxQgAhI1i4+BgYmPj5hYVFJFjZuBhYOAhYKCosKCMlZaKlVpadPn/GlP6m6oWLFs1fumzmrNmzZ80sTo52MtZSU5CREBVCWA5hCPLxKUpLiokKq8pIrF+25MD65bOqsw6tmnt887JDaxcc27h8cX+bvb6ahqKspqIsDxcnis3qivL8fNws7CxA9pRZM1OTE50tjTLCPMsSAksTg3NTYgqKioBSnJzs4sL8ilIS8NBh4OXmVlWQZ2VlZmZh5uDiWLlps7qWppWVeUhokF+Aj6uj9dQpE+s6+4Equbk5Bfi4tZXlmZmYoNZKi4oI8PFADJKUk9uy94CYpHhAkH9wsL+tvb2KuqpvWGhD90QOdjZWNhYODjY1eWlebpjLIcZAPM/Nw21sasbNzaWsLC8hKigtLiorKa6urGikb8DCAvIUExMjGwswDWCLeU5uXjYg4uJmZGVl5OAAIgY2NgZmZqKSh5S8ir6Nq5KRiZSGhoS6uoSmpoi6Op+CAisPDyOFaRZNBADLKkrbUX3VjwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="projection mapped design"\n        title=""\n        src="/static/projection-mapped-design-f3848a248cc66aaac3c91b5a2d5d1030-fe1b4.png"\n        srcset="/static/projection-mapped-design-f3848a248cc66aaac3c91b5a2d5d1030-7e39b.png 400w,\n/static/projection-mapped-design-f3848a248cc66aaac3c91b5a2d5d1030-e636c.png 800w,\n/static/projection-mapped-design-f3848a248cc66aaac3c91b5a2d5d1030-fe1b4.png 1600w"\n        sizes="(max-width: 1600px) 100vw, 1600px"\n      />\n    </span>\n  </span>\n  </p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1600px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 137.125%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,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\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="projection mapping setup"\n        title=""\n        src="/static/projection-mapping-setup-28441d3e532a19680b9fba21af19bf66-fe1b4.png"\n        srcset="/static/projection-mapping-setup-28441d3e532a19680b9fba21af19bf66-7e39b.png 400w,\n/static/projection-mapping-setup-28441d3e532a19680b9fba21af19bf66-e636c.png 800w,\n/static/projection-mapping-setup-28441d3e532a19680b9fba21af19bf66-fe1b4.png 1600w"\n        sizes="(max-width: 1600px) 100vw, 1600px"\n      />\n    </span>\n  </span>\n  </p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1600px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 68.9375%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBAv/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAABrxJmsBv/xAAbEAACAQUAAAAAAAAAAAAAAAABAgADEBESMv/aAAgBAQABBQLkFlstVTNwTmf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAEAAwAAAAAAAAAAAAAAAAAQADFB/9oACAEBAAY/ApRr/8QAGhAAAwADAQAAAAAAAAAAAAAAAAERITGBof/aAAgBAQABPyFTThDa0XBows8lGJ1Dp0//2gAMAwEAAgADAAAAEK//AP/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAgBAwEBPxDaj//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQIBAT8QMDtrf//EABoQAQEBAAMBAAAAAAAAAAAAAAERACExQWH/2gAIAQEAAT8Qi0o+l0UuenhlGSfMSql9o3qAdhMzLt3/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="projection mapping in progress"\n        title=""\n        src="/static/projection-mapping-in-progress-097bf8b355abf831f01f68ce213a6bbb-ee623.jpeg"\n        srcset="/static/projection-mapping-in-progress-097bf8b355abf831f01f68ce213a6bbb-51a12.jpeg 400w,\n/static/projection-mapping-in-progress-097bf8b355abf831f01f68ce213a6bbb-b1745.jpeg 800w,\n/static/projection-mapping-in-progress-097bf8b355abf831f01f68ce213a6bbb-ee623.jpeg 1600w"\n        sizes="(max-width: 1600px) 100vw, 1600px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Once I had the canvas at the right location, orientation, and height I started tracing under the light with copper and circuit stickers.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1600px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.1875%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAADBUlEQVQozw2RaU8TURhGrwaM1iCilcVG2lKRRYNoUKPRuCNLlAoCKg0lbVlKAYnGsii2pbRM17kz006XWTp3psuUDhTjEqP+AH+Wkzwf3i8n5yQvuHXr4erSgs3mcNhtno0Vj3vx4+r8+2XHvHVywjwybh5dtE+vr9g239m+uJ1f1hYtr/rv3ejtvqjXHD8GHj0a+jT7et5mZXn050flUOaVIqeuzJLQ7UxuuhSOkhmizEJFTFVLHBnxT5iH7G/H6us0YOT56Na7adfcTEWpVktMkYMoHROzMAd34JyZWBjj4z4+5kFkUExFZAa+X14Yenx/ZuLlieMaMDwwvL405V1b/f3n72GJqSC6yFFSFkdkIOEaT32wInJHpHYlOiTSoX2BGh97dRTUdpiaW5pOA41GazC2XevtxSHxtcQWGLzEJ/IMoQKplTfMukOkMAR38qmoSIcVnnBY39QeAX09uvY2LWjW6Q2NZ7ou6l0u136By6WhmImrUzuzq1O5z071QNCfV82pSIUjYsHt/rt957UNp05qwPU7N3uNLa/NzwK+T0qB4ZMRgY5KDCFAv7Q+W/CsFLNQJAJSEhPIYCkdZeik9e2EqVXXfK4R9Ny8cc3UOjkyGA768izBJcJCKppnKTX1wLd8gLnFZFhKhCQ6zOPbciZCkaTFYrnc3takbQLX79292m6YGn0Ww3woHVfNYpZAajm+/Su28ZPaEchADlezI3x8u8zgu37vwJOHnSZj41ktuP30cbdB36Jt8Gy6xQzkaVzlc+kYivuqgY+HMa9AYSqm+tmob19IztmsNQBoT5+pO3kKXOnsuGLUXTC0BP1bKpYlMY4KC+qfo94KtrUX9fIwwON+lU9jnw/ElHPWUXO0dvjpg8GBftBj0l/SaY2X2kk8VhRYIU2iDCWxtAixwsZyedeXgxgiw4gI8TD0rSzarTN1mvqlObtlaQ30dXZ0teq7++5QVKKIkJyXFFmu7pX3CvLe4b+DfFXmOEWUKkiQMpnvStk+bWuoPz/5YsRqd/4HFG9hN/Qey6cAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="projection mapping adjustments"\n        title=""\n        src="/static/projection-mapping-adjustments-edf6652539912f7a7b89ff8eda0324f0-fe1b4.png"\n        srcset="/static/projection-mapping-adjustments-edf6652539912f7a7b89ff8eda0324f0-7e39b.png 400w,\n/static/projection-mapping-adjustments-edf6652539912f7a7b89ff8eda0324f0-e636c.png 800w,\n/static/projection-mapping-adjustments-edf6652539912f7a7b89ff8eda0324f0-fe1b4.png 1600w"\n        sizes="(max-width: 1600px) 100vw, 1600px"\n      />\n    </span>\n  </span>\n  </p>\n<p>The process was not completely smooth because the canvas was easily nudged out of alignment with the projector, but the basic principle was sound.</p>\n<p>Final changes included adding the light sensor on the side opposite the microcontroller, trimming the tape for neatness, soldering the tape connections to make them permanent, and, of course, writing the firmware to make it actually do something.</p>\n<p>The website Jie put together for all the art and her awesome thesis is <a href="http://papercuriosities.media.mit.edu/" target="_blank" rel="nofollow noopener noreferrer">here on the Media Lab website</a>.</p>\n<h1>Behavior</h1>\n<p>Yellow and red LEDs flash more or less sporadically depending on the amount of light. I sampled the light sensor from one of the microcontroller pins already used by the LEDs by setting all IO pins to be inputs and then reading the analog voltage on the pin with the internal ADC. That value then determined how rapidly a basic pseudo-random number generator was sampled. The random values determined whether each LED was on or off in a particular moment of time, resulting in a flickering effect. Most other patterns would not work very well because the light sensor was capable of driving some of the LEDs a bit, so even with Charlieplexing the LEDs could not be set to perfect arbitrary patterns.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1600px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.625%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABKs2RDYk//8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAxMEIjP/2gAIAQEAAQUCQdznLvVbyEPMljaP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHBAAAQQDAQAAAAAAAAAAAAAAAAECETEhMqEz/9oACAEBAAY/Akxg04OihGxR59FdUn//xAAbEAEAAgIDAAAAAAAAAAAAAAARAAEhQVFhof/aAAgBAQABPyFVS4ltayaKaUQVyz7NYjCvRP/aAAwDAQACAAMAAAAQI8//xAAWEQEBAQAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8QENn/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBGf//EABsQAQEAAwADAAAAAAAAAAAAAAERACFBMVHB/9oACAEBAAE/ECvkI2hxxx+blkHYdCEOZfKe6iyspu4PXvnrGSKRo2QnzP/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="frayed bus exhibited"\n        title=""\n        src="/static/frayed-bus-exhibited-039661a024c7a722101b2b54e793a913-ee623.jpeg"\n        srcset="/static/frayed-bus-exhibited-039661a024c7a722101b2b54e793a913-51a12.jpeg 400w,\n/static/frayed-bus-exhibited-039661a024c7a722101b2b54e793a913-b1745.jpeg 800w,\n/static/frayed-bus-exhibited-039661a024c7a722101b2b54e793a913-ee623.jpeg 1600w"\n        sizes="(max-width: 1600px) 100vw, 1600px"\n      />\n    </span>\n  </span>\n  </p>',
frontmatter:{title:"Playing with Circuit Stickers",date:"30.12.2015",description:"Lots of process and a little art with circuit stickers",cover:{publicURL:"/static/circuit-sticker-charlieplexing-63cd64759418399a105a1f7279bc4311.gif",childImageSharp:null}},fields:{slug:"/playing-with-circuit-stickers"},excerpt:"Circuit Stickers My friend Jie invented electronic stickers that can be put down on a surface and connected with copper tape to make blinky…"}},pathContext:{slug:"/playing-with-circuit-stickers"}}}});
//# sourceMappingURL=path---playing-with-circuit-stickers-1702aba8dd564e11b7f5.js.map