# Section Name
Scroll Highlight Statement Section

## Purpose
The purpose of this section is to create a strong transition moment in the landing page.

This section communicates that search behavior is changing and that Marrai is being built for the new era of AI discovery. It should feel calm, cinematic, and intentional.

The key experience is scroll-based text highlighting. When the user reaches this section, the page should temporarily hold/pin this section while each word in the statement lights up one by one as the user scrolls. After the full statement is highlighted, the page continues to the next section.

## Screenshots

- Desktop: `desktop.png`
- Tablet: `tablet.png`
- Mobile: `mobile.png`

## Content

Main Statement:
The future of search is changing. Marrai is being built for the new era of AI discovery.

## Layout Notes

This section has one main content element:

1. Scroll Highlight Statement
   - Large centered text block.
   - Text should start in a muted/dim state.
   - Words should gradually become brighter as the user scrolls through the section.
   - The statement should feel like a focused pause in the landing page.
   - No buttons, icons, forms, cards, or extra graphics are needed.

Desktop Layout:
- Full-width section.
- Text is centered horizontally and vertically.
- Statement should sit around the visual center of the section.
- Text can break into 2–3 lines:
  - The future of search is changing.
  - Marrai is being built for the new era of AI
  - discovery.
- Keep generous empty space around the text.
- Section should feel like a dramatic pause between content sections.

Tablet Layout:
- Text remains centered.
- Text can wrap into 3 lines.
- Keep the same scroll-highlight behavior.
- Maintain enough vertical height so the pinned scroll interaction feels intentional.

Mobile Layout:
- Text remains centered.
- Text stacks into more lines:
  - The future of
  - search is
  - changing.
  - Marrai is being
  - built for the
  - new era of AI
  - discovery.
- Font size should reduce but still feel bold and important.
- Scroll highlight should still happen word by word.
- Avoid making the text too small or too tightly spaced.

## Assets Used

No image assets are required.

Visual elements:
- Large statement text
- Dark background
- Muted-to-bright word highlight animation

## Interaction

This section does not have clickable interaction.

The main interaction is scroll-driven:

- When the user reaches this section, the section should become pinned/sticky.
- The page should not immediately move to the next section.
- As the user continues scrolling, each word should gradually lighten up one by one.
- Once all words are highlighted, the pinned section releases.
- The user then continues scrolling to the next section of the landing page.

Important:
- This should feel like the content is paused while the user reveals the statement.
- It should not feel like the page is frozen.
- The scroll should still move, but the visual section remains fixed until the animation completes.

## Animation

Main Scroll Highlight Animation:
- Initial state:
  - All words are dim/muted.
  - Text is visible but low contrast.
- Scroll progress:
  - Words brighten one by one as the user scrolls.
  - Each word should transition smoothly from muted to bright.
  - The animation should be tied to scroll progress, not just time.
- Final state:
  - All words are fully highlighted.
  - Section then unpins/releases and the user moves to the next section.

Suggested animation behavior:
- Use scroll progress to map each word to a highlight stage.
- Words should not all light up at once.
- The highlight should move naturally from the first word to the last word.
- The transition can slightly overlap between words for smoothness.
- Use a scrubbed animation so the user controls the pace with scrolling.

Suggested timing:
- Pinned scroll duration should feel intentional but not too long.
- Around `150vh` to `250vh` of scroll distance is enough.
- Desktop can use a longer scroll distance.
- Mobile can use a slightly shorter scroll distance so it does not feel tiring.

Optional subtle effects:
- The full text block can fade in softly when the section enters.
- Words can brighten from muted gray to foreground white.
- Avoid bouncy or flashy animations.
- This should feel premium and cinematic.

## Implementation Notes

- Build the statement as real text, not as an image.
- Split the sentence into individual word spans for animation.
- Keep the text accessible.
- Use a proper heading element, such as an `h2`.
- If splitting words into spans, make sure screen readers can still read the sentence naturally.
- One approach:
  - Render an accessible full sentence for screen readers.
  - Use the animated split-word version visually.
- Use existing Marrai typography tokens.
- Use existing dark background token.
- Use muted text color for the inactive words.
- Use foreground/white text color for active highlighted words.
- Do not add extra copy to this section.
- Do not add CTA buttons here.
- This section should only focus on the scroll-highlight statement.

Recommended technical approach:
- Use `position: sticky` or a scroll animation library.
- GSAP ScrollTrigger, Framer Motion `useScroll`, or a custom IntersectionObserver + scroll progress approach are acceptable.
- The section should pin while the animation runs.
- The next section should only become visible after the full text highlight finishes.
- Respect `prefers-reduced-motion`.
- For reduced motion users:
  - Do not pin the section for a long scroll.
  - Show the full highlighted statement normally.
- Make sure the pinned scroll behavior does not break mobile scrolling.
- Test carefully on desktop, tablet, and mobile.
- Avoid layout shift when the section pins and unpins.
- Keep the implementation isolated in a dedicated component, for example:
  - `ScrollHighlightStatement`
  - `PinnedTextRevealSection`
