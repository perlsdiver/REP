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
