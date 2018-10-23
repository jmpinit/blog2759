webpackJsonp([71919092647943],{381:function(e,t){e.exports={data:{markdownRemark:{html:'<h1>Lineworld</h1>\n<p><img src="/lineworld-223cb80b069f70beedf2123fbe47ea8e.gif"></p>\n<p>Find the code <a href="https://github.com/jmptable/lineworld" target="_blank" rel="nofollow noopener noreferrer">on GitHub here</a>.</p>\n<p>In high school I created this generative art program I call Lineworld. It was written in Java for an independent study course in computer science. A “bird” flies down a console window, leaving a trail. At random intervals different entities are launched into the 2D little world (1 space dimension and 1 time dimension). Some of the entities bounce back and forth between the walls, accompanying the bird on its journey, but they all eventually explode into a shower of ASCII characters. The bird keeps flying through it all.</p>\n<p>The genesis of this game came out of a want to create a game in Java, but extreme disdain for how Java works with images. Instead of going through the trouble of making a form to draw a game onto I decided to do it in the style of old microcomputer games, directly on the console output. The disadvantage of this is that the console cannot be written to in 2 dimensions, even with carefully crafted print statements (<em>author note:</em> this was long before I learned about ANSI escape codes). This means that a game written to use it has to settle for only a one dimensional string of text. To utilize this to the fullest I created a top-down perspective simulation where all the objects are flying. This makes sense because as new lines of text are printed to the console the old lines trail upwards, creating an animation that appears to be a trail of the characters that are at the lowest line.</p>\n<p>Sound was easy to add but difficult to get right. All sound effects were generated using an open source program called <a href="http://www.drpetter.se/project_sfxr.html" target="_blank" rel="nofollow noopener noreferrer">sfxr</a>. Information on the Internet pointed to implementations that were not well suited for short clips being played many times. The first couple of implementations resulted in all physical memory being tied up within a few seconds because no resources were being relinquished. The final implementation is ugly and imperfect (it will read from disk in the middle of the simulation, resulting in lengthy freezes) but it works well enough for what is being attempted. The addition of sound does amazing things for the feel of the experience, making the bird\'s lonely adventure feel much more dramatic.</p>\n<h1>The Code</h1>\n<p>(<em>author note:</em> I\'m going to let high school me take over here. At the time I was learning OOP, Java, and a lot of other computer science concepts in projects like this one and wanted to show it off.)</p>\n<p>An abstract class is used to define the base entity. This is an advantageous approach because entities have several functions that must be implemented but will not be implemented the same way. An abstract class creates the roadmap that is needed so that other objects know exactly how to interact with the objects created from the entity class.</p>\n<p>A flag is used to handle the death of entities. If an entity is killed it sets this flag to true rather than removing itself from the world\'s list of entities. This ensures that while the entity vector is being read through by the update function in the world the contents of the vector are not changed, as this would give unexpected behavior. A similar approach is used when adding entities to the world, they are added to a vector of "babies" so that the world can add them to the main entity vector when it is safe to do so. It would have been possible and more "clean" to use an iterator to get this behavior, but for the purposes of this program it would be slightly inefficient because of the number of virtual cycles (by the JVM) that are involved in the removal method of the iterators.</p>\n<h1>Limitations / Bugs</h1>\n<p>The collision detection is imperfect. An entity with a velocity of 2 can move through another entity without colliding because the space that is moved through each frame is not taken into account, just the final position. This could be resolved by relating the number of spaces checked for collision to the speed of the entity, but it is a minor bug that does not affect the overall feel of the program too much so it can be overlooked.</p>\n<p>Sound playing is handled very inefficiently in terms of memory. Streams are opened up to play sounds but are not explicitly disposed of when no longer needed. Instead they are dereferenced and left for the garbage collector to destroy, but they are created so quickly that much memory is used inefficiently. A relatively easy fix for this would be to run a new thread for every sound played so that the thread can monitor the open streams and release their resources when they are no longer in use.</p>',frontmatter:{title:"Lineworld",date:"09.11.2010",description:"One bird's journey through two dimensions",cover:{publicURL:"/static/one-dimensional-flying-bird-4a8cc6a2521f792fb917fc7f199ae45c.png",childImageSharp:{resize:{src:"/static/one-dimensional-flying-bird-4a8cc6a2521f792fb917fc7f199ae45c-f6604.png"}}}},fields:{slug:"/lineworld"},excerpt:"Lineworld Find the code  on GitHub here . In high school I created this generative art program I call Lineworld. It was written in Java for…"}},pathContext:{slug:"/lineworld"}}}});
//# sourceMappingURL=path---lineworld-321909f53030169a00bb.js.map