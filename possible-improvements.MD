# Frankentimer: Possible Improvements & Additional Features

This document outlines strategic suggestions for the evolution of **Frankentimer**, based on an architectural and UX analysis performed on May 15, 2026.

## 1. Technical: Accuracy via Web Workers
*   **Rationale:** Currently, the timer uses `setInterval`. In most modern browsers, when a tab is in the background or the computer sleeps, `setInterval` is throttled or paused, causing the timer to drift or stop entirely.
*   **Advantage:** Guaranteed timing accuracy even if the user switches tabs.
*   **Disadvantage:** Adds a layer of complexity; requires message-passing between the worker and `timer.js`.

## 2. UX: "Deep Work" Auto-Theme Shift
*   **Rationale:** Uses environmental cues to prime the user's brain for different types of cognitive load.
*   **Feature:** Allow users to "Lock" a theme to a specific mode (e.g., PhD Sprint automatically triggers Brutalist Dark; Short Break triggers Cat Town).
*   **Advantage:** Enhances focus through visual signaling.
*   **Disadvantage:** Might be jarring for some users.

## 3. Feature: The "Energy" Budget Visualizer
*   **Rationale:** The project already tracks "Accumulated Energy" (tokens) in the AID Log. 
*   **Feature:** Turn this into a visual "Battery" or "Energy Bar" that depletes as the session progresses.
*   **Advantage:** Bridges the gap between AI Disclosure (AID) and UI.
*   **Disadvantage:** Potential to increase user stress.

## 4. Technical: Enhanced Randomizer "Seeds" (IMPLEMENTED)
*   **Rationale:** Deterministic randomness allows users to return to favorite "vibes" or share them.
*   **Feature:** User-inputted strings generate specific theme parameters (hue, font, cursor).
*   **Status:** Active.

## 5. UX: Browser Notifications & Site Icon Badges
*   **Rationale:** Users work across multiple tabs and applications.
*   **Feature:** Implement `Notification API` and dynamic favicon updates.
*   **Advantage:** Keeps the user informed without requiring the tab to be active.
*   **Disadvantage:** Permission overhead and slight resource usage.

---
**AID Statement:** Artificial Intelligence Tool: Gemini 2.0 Flash (via Gemini CLI); Execution: Documented improvement roadmap based on codebase analysis.

## 6. Research-Driven Additions (May 15, 2026)

### User Inquiry: Competitive Analysis
*   **Prompt:** "search github for similar personal timer projects, analyze them, and suggest possible features to implement. include direct links to projects. explain advantages and disadvantages, including any risks from the code you find on other repositories."

### Findings & Recommendations

#### A. Flowtime Mode (Inspired by [Pomoru](https://github.com/ngntrgduc/pomodoro))
*   **Feature:** Count-up timer that automatically calculates break duration based on work time (e.g., 1/5th ratio).
*   **Rationale:** Adapts to the user's natural focus rhythm rather than forcing a 25-minute block.
*   **Advantage:** Maximizes deep work; high "vibe" flexibility.
*   **Disadvantage:** Requires complex break calculation logic and UI shifts.

#### B. Overflow Mode (Inspired by [JustLockIn](https://github.com/Groundbreaking-Mud79/JustLockIn))
*   **Feature:** Transition to count-up when the timer hits zero to track "extra" focus time without a jarring interruption.
*   **Rationale:** Perfect for the "PhD Sprint" when you're close to finishing a thought.
*   **Advantage:** Less stressful than immediate alarms; provides accurate total work data.
*   **Disadvantage:** Reduces the urgency of the Pomodoro technique.

#### C. Developer Palette Integration (Inspired by [Pomotroid](https://github.com/zidoro/pomotroid))
*   **Feature:** Native support for Nord, Dracula, and Gruvbox color schemes.
*   **Rationale:** Broadens appeal to the developer community by using familiar high-contrast palettes.
*   **Advantage:** Immediate "professional" aesthetic appeal.
*   **Disadvantage:** CSS bloat if not using a centralized theme engine.

### Risk Assessment for External Implementations
*   **Logic Porting:** Porting mathematical ratios (Flowtime) is safe.
*   **State Transitions:** Transitioning from countdown to count-up (Overflow) requires robust state management to avoid event double-firing.
*   **Assets:** Always verify licenses (MIT/GPL) for SVG icons or audio clips sourced from external repositories.

---
**AID Statement:** Artificial Intelligence Tool: Gemini 2.0 Flash (via Gemini CLI); Execution: Performed competitive GitHub research and expanded the improvement roadmap with high-impact feature analysis.
