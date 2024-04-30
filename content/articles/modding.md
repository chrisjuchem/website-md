---
title: 'Modding'
date: '2024-04-30T14:32:20-04:00'
draft: true
author: 'Chris Juchem'
summary: ''
---

The other day while playing *Balatro*, I realized that since the game was
written in *Lua*, an interpreted language, the source code would need to be
directly embedded in the executable file. I couldn't resist the temptation to
peek under the hood, so I started researching.

It turned out that with *7-zip*, you can extract all of the game's code and
assets in a single click, so I began poking through the code, looking for
clues about how the RNG is seeded and how all the different card zones work.

After a while, I realized that it probably wouldn't be too hard to modify
the code and repackage it. "In fact," I said to myself, "someone's definitely
done that already." I joined the official *Balatro* discord, and searched for
"mods". I found a forum channel where people had posted hundreds of different
mods they had made.

Instead of being excited as you might expect, I was actually disappointed. I
didn't actually want to mod the game, I was just curious if it was possible.
Even after 85 hours, I felt like I had so much more to explore in the base game
that I would miss out on if I started changing the balance of the game with
mods. The ratios of good and bad tarot cards, the ratios of all-purpose to
situational jokers, the nuances of the economy, everything was painstakingly
designed by the game's creator, *localthunk*.

Was everything in the game there because it served some deep purpose in the 
overall design? No, lots of things probably just happened to be easy to add
because of how *localthunk* happened to write the code.

Was it even all on purpose? No, there are probably many interactions that
*localthunk* never directly considered, and only work the way they do because
of how he happened to write the code.

Am I curious how adding x-chip jokers to the game might completely change the
game? Absolutely.

But something about the game, as it is, feels sacred to me. Whether each piece
was intentionally added or not, it all serves *localthunk*'s vision. If it
didn't he would have changed it. If he wanted x-chip jokers to exist, he would
have added some.

I don't believe that the existing version of *Balatro* is the perfect version.
As evidence, I think the upcoming 1.0.1 balance patch is a huge improvement
over the originally released version. But I think there is a great artistic
beauty in the fact that when I play *Balatro*, I am experiencing *exactly*
what someone designed for me.

Even in a game centered around randomness, I can still see that *localthunk*
set up all the pieces to ask me "Which of these cards is more valuable to
you?", "Do you think that's worth the money?", and "Are you sure you want to
take that risk?" I bring my own perception and my own biases, and by playing,
I answer those questions. We are communicating across time and space.

And here on the forum were all these people hacking away at this game that had
only been out for two months. Surely, they didn't feel like they'd answered 
all these questions already. They just didn't care, didn't see the same
artistic beauty in it as I do. So, what was the appeal then?

Balatro
 - I unzipped and read src.
 - Figured I could patch/mod it
 - Already done
 - Balatro discord has hundreds of tiny mods
   - everyone wants to be a game designer, thats great, this is a great way to start
 - but I was a little sad
 - so soon after release, people didnt want to experience the game as localthunk designed it
   - "Magic as garfield intended"
 - im still learning about the relative values of things after 85 hours

Skyrim/fallout
 - never saw the appeal over vanilla
 - research, installation, possible crashes, all to at best get an equally complex and well-designed experience,
   at worst get broken or clashing
 - akin to a sandbox mode/something interesting to do after playing a single player game for 100 hours, but thats
   not for me.
 - Not skyrim anymore
 - might as well play a different game without the risk it won't be well-designed

Factorio
 - types of mods
   - QOL
     - still in line with original vision
       - or at least there is something to make be believe this (e.g. FFF)
   - overhaul (bob's angels SE)
     - original systems + (different) cohesive design 
     - minecraft (tekkit?) mods

Isaac
 - Item descriptions mod ok but
 - miss the days of being paid off for knowledge
   - brimsnapping
   - brim + lump of coal
 - still expertise today


style of play knowing the context
 - Isaac nick going for angel deals over devil, playing sac rooms
 - balatrouniversity showing how consistently you can hit very specific cards/hands
   - can't keep getting away with it, but he never would if he didn't try