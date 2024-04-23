---
title: 'Diplomacy Chess'
date: '2024-01-13T01:32:35-04:00'
summary: 'A chess variant with simultaneous turns'
cover:
    image: images/games/diplomacy-chess/setup.png
    hidden: true
    hiddenInList: false
---

Play online with a friend [here](https://chrisjuchem.dev/diplomacy-chess)!

<!--- not using https://github.com/adityatelange/hugo-PaperMod/wiki/FAQs#centering-image-in-markdown
so that images can be next to each other-->
<p class="centered">
  <img src="/images/games/diplomacy-chess/setup.png" width="200"/> 
  <img src="/images/games/diplomacy-chess/before.png" width="200"/> 
  <img src="/images/games/diplomacy-chess/after.png" width="200"/> 
</p>

Diplomacy Chess was inspired (as you may have guessed) by the strategy game
[*Diplomacy*](https://en.wikipedia.org/wiki/Diplomacy_(game)). The main focus 
of *Diplomacy* is on making and breaking alliances, but what I found the most
interesting when I played it was the movement/combat system where players all
secretly submit moves for the turn, and then those moves are revealed and 
resolved all together. It is very difficult to effectively counter everything
your opponents might do, so making your moves forces you to decide when to
play conservatively, when to take a calculated risk, and when to try and
predict exactly what your opponents are thinking. 

I was curious how simultaneous turns might affect other strategy games, so I
created a chess variant to test it out with some friends. Originally, my variant 
followed the movement rules of diplomacy much more closely, allowing pieces
to move away from attempted captures. That variant was fun, but very punishing,
since one mistake could allow the queen to go on a rampage unchecked.

I eventually changed the rules to the ones explained on the game page linked
above, which I think this much better captures the spirit of *Diplomacy* combat.
Since a successful combat in *Diplomacy* usually forces your opponent to 
retreat rather than removing their unit, it's fine to allow a player to choose
to retreat outright, but because removing pieces is a normal part of chess
gameplay, it makes sense for that to be the default in *Diplomacy Chess*.


