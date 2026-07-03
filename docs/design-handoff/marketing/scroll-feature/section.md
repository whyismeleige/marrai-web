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

## Final Scroll Animation Requirements

This section must behave like a pinned scroll-reveal statement.

When the user reaches this section:

1. The section occupies the full viewport.
2. The statement stays fixed/sticky in the center of the screen.
3. The page should not visually move to the next section immediately.
4. As the user continues scrolling, the words highlight one by one.
5. After the final word is fully highlighted, the section releases and normal page scrolling continues.

The effect should feel like the user is pausing on the message while the sentence is revealed through scroll.

## Required Scroll Behavior

- Use a tall wrapper section to create scroll distance.
- Inside that wrapper, use a sticky viewport-height container.
- The sticky container should keep the text centered while scroll progress advances.
- The scroll progress should be mapped from the start of the section to the end of the section.
- Each word should have its own scroll-progress range.
- Words should brighten from first to last.
- Previously highlighted words should remain bright.
- Future words should remain dim.
- The transition between words can overlap slightly for smoothness.

## Visual Requirements

Initial state:
- Full sentence is visible.
- All words are dim/muted.
- Text is low contrast but readable enough to understand that something is there.

During scroll:
- Words become bright one by one from left to right.
- Highlighted words should use the main foreground color.
- Non-highlighted words should remain muted/dim.
- The text block should remain centered.

Final state:
- Every word is highlighted.
- The section releases after the final word is highlighted.

## Important Implementation Constraint

Do not animate the CSS `color` value directly using `hsl(var(--token))`.

Because this project uses shadcn/Tailwind tokens that may be stored as OKLCH or other CSS color formats, directly interpolating token colors can fail or produce inconsistent results.

Preferred implementation:
- Render a dim base version of each word.
- Render a foreground overlay version of each word on top.
- Animate only the overlay opacity from `0` to `1`.
- This keeps token usage stable and avoids invalid color interpolation.

Example concept:

```tsx
<span className="relative inline-block text-muted-foreground/25">
  <span aria-hidden="true">word</span>
  <motion.span
    aria-hidden="true"
    className="absolute inset-0 text-foreground"
    style={{ opacity: animatedOpacity }}
  >
    word
  </motion.span>
</span>

## Final Implementation Correction

If the Framer Motion `useScroll({ target })` implementation does not reliably update the word highlight, replace it with a deterministic manual scroll progress calculation.

The animation must not rely on guessing whether `useScroll` is working. The implementation should calculate progress from the scroll wrapper's actual viewport position.

Preferred robust approach:

1. Attach a ref to the tall scroll wrapper.
2. On scroll and resize, read the wrapper's `getBoundingClientRect()`.
3. Calculate progress using:

```ts
const scrollableDistance = wrapper.offsetHeight - window.innerHeight
const progress = clamp(-wrapperRect.top / scrollableDistance, 0, 1)
Store the progress in React state.
Use that numeric progress to calculate each word's highlight opacity.
Use requestAnimationFrame to avoid excessive state updates.
Remove the scroll listener on cleanup.

This gives full control and avoids cases where Framer Motion target offsets do not behave as expected with sticky containers.

Required Word Highlight Logic

Each word should calculate its own opacity from numeric progress:

const start = index / totalWords
const end = (index + 1) / totalWords
const opacity = clamp((progress - start) / (end - start), 0, 1)

To make it smoother, a small overlap is allowed:

const segment = 1 / totalWords
const start = index * segment * 0.85
const end = start + segment * 1.6

Requirements:

Highlighted words remain bright.
Future words remain dim.
The first word should begin highlighting shortly after the section becomes sticky.
The final word must be fully highlighted before the sticky section releases.
The text must remain centered while this happens.
Important

Do not animate token colors directly.

Use:

dim base word: text-muted-foreground/20
foreground overlay word: text-foreground
animated opacity number from React state
Debugging Requirement

During implementation, verify that progress changes from 0 to 1 while scrolling through the section.

Do not leave debug UI or console logs in the final code.
