---
title: 'bevy_mod_index'
date: '2023-03-06T18:30:00-05:00'
summary: 'Open-source plugin for the Rust game engine, Bevy'
---

**bevy_mod_index** is an open-source Rust crate that I maintain. It implements
lookup-by-value for components in the Rust ECS game engine [*Bevy*](https://bevyengine.org/),
which had been [discussed in depth](https://github.com/bevyengine/bevy/discussions/1205)
for over 2 years without any published solutions by the time I began working on it.

You can find the crate on [GitHub](https://github.com/chrisjuchem/bevy_mod_index) or 
[crates.io](https://crates.io/crates/bevy_mod_index).

Unfortunately, my benchmarking has shown that this approach is currently less
performant than naively iterating over all components, although I do believe
that there is some room for improvement and that it could already improve
some extreme use cases. Even without improved performance, the crate can still
provide a nicer API than iteration if performance is not critical, such as
during prototyping. Additionally, the reduced performance when using indexes
should not be too surprising because fast iteration is the primary motivation
for using an ECS architecture in the first place. 

During my time working on the crate, I have contributed a few small improvements
to *Bevy* itself including a [fix for a bug I discovered](https://github.com/bevyengine/bevy/pull/13762)
in the version `0.14` release candidate. 

In the future, I'd like to extend the crate with support for ordered indexes,
which would allow for sorted iteration of components as well as lookup of
"nearby" values.
