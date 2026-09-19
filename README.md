# DEAD COUNTY

**Isometric survival sandbox** inspired by *Project Zomboid* — fully procedural world, sprites, and audio. Zero external game assets.

[![Play](https://img.shields.io/badge/play-in%20browser-e8453c?style=for-the-badge)](https://josefk-thetrial.github.io/dead-county/)
[![License](https://img.shields.io/badge/license-MIT-f0c14b?style=flat-square)](LICENSE)

> Scavenge. Barricade. Survive. Death is permanent.

## Play

Open [`index.html`](index.html) in any modern browser, or use GitHub Pages after enabling it on this repo.

**Headphones recommended** — sound is synthesized live with the Web Audio API.

## Controls

| Key | Action |
|-----|--------|
| WASD / Arrows | Move |
| Mouse | Aim |
| LMB | Attack / Shoot / Use |
| RMB | Context menu |
| E | Interact / Search / Enter vehicle |
| TAB / I | Inventory |
| K | Crafting |
| C | Character & skills |
| B | Build mode |
| M | Map |
| SHIFT | Sprint (loud) |
| CTRL | Sneak (quiet) |
| SPACE | Shove zombies |
| 1–9 | Quick-use slots |
| R | Reload |
| F | Flashlight |
| Q | Swap last weapon |
| Z | Sleep |
| G | Shout (lure) |
| ESC | Pause / volume |

## Features

- 320×320 procedural town (roads, lakes, forests, buildings)
- Day/night cycle, seasons, weather (rain, fog, snow)
- Needs: hunger, thirst, fatigue, stress, temperature
- Infection from bites, bleeding, fractures
- Crafting, building, farming, fishing, foraging
- Vehicles, generators, barricades, traps
- Trait-based character creation
- Local save / continue (permadeath)

## Tech

Single-file HTML5 game:

- Canvas 2D pixel art (all sprites painted at runtime)
- Procedural world generation
- Web Audio synthesis (no sound files)
- Chunk-based spatial index for performance

## License

MIT — do whatever you want, just survive.
