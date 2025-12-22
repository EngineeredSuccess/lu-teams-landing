# Roadmap 2026 Implementation Plan

Add an interactive, visually appealing roadmap for 2026 to the LU Teams landing page, based on the requirements in `todo.md`.

## Proposed Changes

### [Component] Landing Page Enhancements

#### [NEW] [Roadmap.tsx](file:///Users/nwn/LU_app_cnt/lu-teams-landing/client/src/components/Roadmap.tsx)
- Create a new component that displays the 2026 roadmap.
- **UI Design**:
    - A horizontal timeline (on desktop) and vertical (on mobile).
    - Four interactive tiles (Q1-Q4) connected by a dashed neon line.
    - Each tile shows the quarter name and a high-level goal.
    - Clicking a tile opens a `Dialog` (shadcn) with the detailed sub-points for that quarter.
- **Content**:
    - **Q1**: Monetization & Core Features (Tiered Pricing, AI safety, RAG, First Enterprise Clients).
    - **Q2**: Expansion & Consultancy (AI/ML Advisory, Jira/Slack/Teams integrations, Case Studies).
    - **Q3**: Growth & Infrastructure (Team Scaling, Hardware/LLM selection, 10-15 Enterprise Clients).
    - **Q4**: Independence & Advanced Capabilities (Local LLM/Mistral, multi-agent systems, Global rollout).

#### [MODIFY] [Home.tsx](file:///Users/nwn/LU_app_cnt/lu-teams-landing/client/src/pages/Home.tsx)
- Import the new `Roadmap` component.
- Add a new section for the Roadmap before the "Join the Waitlist" section (around line 207).

## Verification Plan

### Automated Tests
- Run `npm run dev` to verify the UI renders correctly.
- Check responsiveness on mobile (using browser tool if needed).

### Manual Verification
- Click on each quarter tile to ensure the dialog/modal opens with the correct content.
- Verify the "road/arrow" visual connects the tiles as intended.
- Ensure the neon styling matches the rest of the landing page.
