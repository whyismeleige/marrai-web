# Section Name
AI Platforms Marquee Section

## Purpose
The purpose of this section is to show that Marrai tracks brand visibility across multiple AI platforms, AI answer engines, AI search experiences, and discovery platforms.

This section should visually communicate platform coverage. The repeated moving platform chips should make the visitor feel that Marrai is continuously scanning across many AI systems, not just one platform.

The key idea is: Marrai helps you understand how your brand appears across the full AI discovery ecosystem.

## Screenshots

- Desktop: `desktop.png`
- Tablet: `tablet.png`
- Mobile: `mobile.png`

## Content

Section Heading: Track Multiple AI Platforms

Description: See how your brand appears across AI answer engines, search experiences, and discovery platforms.

Platform Chips:
- ChatGPT
- Claude
- Perplexity
- Gemini
- Grok
- Microsoft Copilot
- Google AI Overviews
- Deepseek

Use the same platform set repeatedly across the marquee rows.

## Layout Notes

We essentially have 3 parts in this section:

1. Section Header
   - Contains the heading and description.
   - Heading: `Track Multiple AI Platforms`
   - Description sits below the heading.
   - Both should be center aligned.
   - This content should sit above the moving platform rows.

2. Platform Marquee Area
   - Contains 3 horizontal rows of platform chips.
   - Each chip includes:
     - Platform icon
     - Platform name
   - Chips should use rounded pill styling.
   - Chips should feel like clean product/platform tags.
   - All platform icons should come from the `public/ai-platform-icons` directory.

3. Moving Rows
   - There are 3 primary moving lines/rows.
   - Row 1 and Row 3 should be bounded inside the main content/container width.
   - Row 2, the center row, should run across the full width of the device/viewport.
   - All 3 rows should loop infinitely.
   - The animation should feel circular/seamless, where the chips continuously move around and repeat without visible jumps.

Desktop Layout:
- Header is centered at the top.
- Marquee rows sit below the description.
- Row 1 and Row 3 stay within the section container width.
- Row 2 breaks out and spans the full viewport width.
- Rows should overlap visually with the wide layout, but should not cover the heading or description.
- Keep enough vertical spacing between rows so the chips remain readable.

Tablet Layout:
- Header remains centered.
- Text width should be reduced slightly.
- Row 1 and Row 3 stay bounded within the tablet container.
- Row 2 still runs full viewport width.
- Chips should remain readable and should not become too small.

Mobile Layout:
- Header stacks naturally:
  - Track Multiple
  - AI Platforms
- Description wraps into multiple lines.
- The 3 marquee rows remain visible.
- Row 1 and Row 3 are bounded within the mobile content width.
- Row 2 still runs edge-to-edge across the full device width.
- Use fewer visible chips at a time because of the narrow screen.
- Do not shrink icons too aggressively.

## Assets Used

AI platform icons should be loaded from:

`public/ai-platform-icons`

Expected icon assets:
- `chatgpt.svg`
- `claude.svg`
- `perplexity.svg`
- `gemini.svg`
- `grok.svg`
- `microsoft-copilot.svg`
- `google.svg` or Google AI Overviews icon asset
- `deepseek.svg`

Visual elements:
- Platform pill/chip components
- Platform SVG icons
- Infinite marquee rows
- Dark section background

## Interaction

This section does not require click interaction.

Platform chips:
- Chips can be non-clickable for now.
- If product/platform pages are added later, chips can become links.
- For the current implementation, focus on the layout and marquee animation.

Hover behavior:
- Optional subtle hover state on desktop:
  - Slight brightness increase
  - Slight background change
  - No major scaling needed

## Animation

This section depends heavily on continuous marquee animation.

Main Marquee Animation:
- All 3 rows should animate infinitely.
- The animation should loop seamlessly.
- There should be no visible jump when the row restarts.
- Duplicate the platform chip list inside each row to create a seamless loop.

Row behavior:
- Row 1:
  - Bounded inside the main section container.
  - Moves continuously.
  - Same platform chips repeated.
- Row 2:
  - Full viewport width.
  - Moves continuously across the entire device width.
  - Should feel wider and more expansive than the other rows.
- Row 3:
  - Bounded inside the main section container.
  - Moves continuously.
  - Same platform chips repeated.

Direction:
- Row 1 and Row 3 should move in the same direction.
- Row 2 can move in the opposite direction for more visual depth, unless the design requires all rows to move the same way.
- Keep the speed slow enough that the text remains readable.

Suggested timing:
- Row 1: 25s–35s loop
- Row 2: 30s–40s loop
- Row 3: 25s–35s loop

Animation feel:
- Smooth
- Linear
- Infinite
- No bounce
- No pause between loops

Reduced Motion:
- Respect `prefers-reduced-motion`.
- For reduced motion users, stop the marquee animation and show static rows of platform chips.

## Implementation Notes

- Build this section as a dedicated component, for example:
  - `AIPlatformsMarquee`
  - `PlatformMarqueeSection`
- Build each platform pill as a reusable component, for example:
  - `PlatformChip`
- Use actual SVG icons from `public/ai-platform-icons`.
- Do not embed the icons as screenshots.
- Do not use the section screenshot as the implementation.
- Use real text for the heading, description, and chip labels.
- Use the existing Marrai dark background token.
- Use existing typography tokens.
- Use existing muted text color for the description.
- Platform chips should use a slightly elevated dark surface color.
- Icons should be consistently sized across chips.
- Keep chip padding consistent.
- Use `overflow: hidden` on each marquee row wrapper.
- For Row 2, allow the marquee wrapper to break out to `100vw`.
- For Row 1 and Row 3, keep the wrapper inside the normal container width.
- Duplicate the platform list at least twice per row for a seamless loop.
- Avoid layout shift caused by icon loading.
- Add `aria-hidden="true"` to duplicated marquee content so screen readers do not read repeated platform names multiple times.
- Provide one accessible hidden text summary for screen readers, such as:
  - `Marrai tracks AI visibility across ChatGPT, Claude, Perplexity, Gemini, Grok, Microsoft Copilot, Google AI Overviews, and Deepseek.`
- Keep the section focused. Do not add extra CTA buttons here.
