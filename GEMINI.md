# GEMINI Context: Frankentimer

A feature-rich, multi-theme Pomodoro-style web application designed for task focus with alternating work and break sessions. **Frankentimer** is a "living" project—a digital canvas that grows and evolves through continuous experimentation and negotiation between the user and **Gemini**.

## Project Overview

- **Purpose:** A customizable "Timer" for productivity, exploring the boundaries of "vibe coding" prototypes.
- **Technology Stack:** Dual-architecture supporting both Vanilla HTML5/CSS3/JS and Astro (SSG).
- **Transparency:** Features a **Live AID Log** that tracks AI contributions and "Accumulated Energy" (token usage) in real-time.
- **Deployment:** [https://perlsdiver.github.io/timer/](https://perlsdiver.github.io/timer/)
- **Repository Location:** `/Users/ian/Google Drive/CUNY GC/CUNY AI Lab/Projects/prototype`

**AID Statement:** Artificial Intelligence Tool: Gemini 2.0 Flash (via Gemini CLI); Execution: Implemented deterministic "Seeded Randomizer" in theme.js and updated index.html with seed input UI; Writing—Review & Editing: Generated strategic roadmap for future enhancements in possible-improvements.MD. Finalized session updates.

## Directory Structure

- `index.html`: Entry point for the Vanilla version.
- `astro-timer/`: Source code for the Astro framework version.
- `dist/`: Locally cached build artifacts (ignored by git, standardized from old `astro/` folder).
- `aid-history.json`: Single source of truth for the project's AI disclosure history and token tracking.
- `css/` & `js/`: Core logic and styles (Vanilla version).
- `assets/`: Shared audio and icons.

## Key Features

- **Hybrid Deployment:** Simultaneously serves the **Classic** version at the root and the **Astro** version at `/astro/`.
- **Dynamic Timer:** Supports Pomodoro, Short Break, and Long Break with customizable durations and local persistence.
- **Multi-Theme System:** 
    - **Aesthetics:** Dark Minimalist, Brutalist Light, Brutalist Dark, Indieweb Cat Town.
    - **Randomizer:** Dynamically generates unique color, font, and background combinations.
- **Live AID Log:** A themed disclosure drawer displaying the latest AID Statement and accumulated token counts.

## Attribution & Ethical Mandates (CRITICAL)

All versions of the application MUST maintain the following in the footer:
- **Workshop:** [CUNY AI Lab workshop](https://ailab.gc.cuny.edu/)
- **AI Disclosure:** [AI Use Disclosure Guide (AID Framework)](https://crln.acrl.org/index.php/crlnews/article/view/26548/34482)
- **Features:** [Pomofocus.io](https://pomofocus.io/)
- **Audio:** ["Bell" by HerbertBoland](https://freesound.org/people/HerbertBoland/sounds/30153/) via Freesound.org.
- **Images:** [PlaceCats.com](https://placecats.com/) and [Picsum Photos](https://picsum.photos/).

## Project Evolution (Changelog)

- **March 22, 2026 (v1.5.0):** Relocated project to **CUNY AI Lab/Projects** in Google Drive. Fixed deployment module errors by implementing a **Manual Assembly CI** that preserves both Classic and Astro versions at their respective paths.
- **March 22, 2026 (v1.4.0):** Implemented **PhD Sprint** mode (30 min), persistent randomizer logic, and initial GitHub deployment automation.
- **March 13, 2026 (v1.3.1):** Repositioned AID LOG button to clear "STYLE" label overlap. Fixed relative fetch paths for Astro deployment.
- **March 10, 2026 (v1.0.0):** Initial prototype creation at the CUNY AI Lab workshop.

## Development Conventions

- **AID Compliance:** ALL future updates MUST follow the AID Framework protocol. Update `aid-history.json` and the `AID Statement` in all documentation.
- **Dual Deployment:** Maintain the `deploy.yml` assembly logic to ensure both versions are served correctly.
- **Git:** Never stage or commit changes unless explicitly requested.
