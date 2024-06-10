---
title: 'Eternal2D'
date: '2018-04-18T20:16:00-04:00'
summary: 'Simple 2D game engine'
---

*Eternal2D* is a 2D game engine written in C++ by myself, Trevor Day, and
Alex Zilbersher for a school project at Northeastern University.

<!--- not using https://github.com/adityatelange/hugo-PaperMod/wiki/FAQs#centering-image-in-markdown
so that images can be next to each other-->
<p class="centered">
  <img src="https://zilby.github.io/GameBuildingEngine/Website_Media/Screenshots/shot2.png" width="225"/>
  <img src="https://zilby.github.io/GameBuildingEngine/Website_Media/Screenshots/shot1.png" width="225"/>
  <img src="https://zilby.github.io/GameBuildingEngine/Website_Media/Screenshots/shot3.png" width="225"/>
</p>

The engine is designed around **Game Objects** and **Components**, similar to [*Unity*](https://unity.com).
The base engine includes components for cameras, buttons, physics simulations,
sprites, text, and more that can be used out-of-the-box, but it also provides
python bindings that can be used to create custom components.

*Eternal2D* ships with a basic graphical level editor that can be used to configure
the Game Objects in a level and save them in the engine's custom level format.

Under the hood, our engine uses [*Box2D*](https://github.com/erincatto/Box2D) as a
physics engine and [SDL2](https://www.libsdl.org/) for input and rendering.

Check out the [source code](https://github.com/trevday/eternal2d-engine)
and [documentation with a tutorial video](https://zilby.github.io/GameBuildingEngine/).

[//]: # (private repo: https://github.com/Spring18GameEngine/final-project-ctja-final)
