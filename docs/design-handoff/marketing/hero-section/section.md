# Section Name

Hero Section

## Purpose

The purpose of the Hero Section is to immediately communicate what Marrai helps brands do: become visible, understood, and cited across AI discovery platforms.

This section should create the feeling that Marrai is tracking how brands appear across AI search, AI assistants, and answer engines. The orbit-style visual represents different AI platforms and discovery channels surrounding the brand visibility layer.

The main message is simple: brands now need to be understood by AI systems, not just indexed by search engines.

## Screenshots

- Desktop: `desktop.png`
- Tablet: `tablet.png`
- Mobile: `mobile.png`

## Content

Eyebrow: AI Visibility Intelligence

Main Heading: Be Understood. Get Cited.

CTA Button: Get a Free AEO Audit

## Layout Notes

We essentially have 3 parts in this section:

1. Eyebrow
   - Small supporting label above the main heading.
   - Text: `AI Visibility Intelligence`
   - Center aligned on desktop and tablet.
   - Center aligned on mobile as well.

2. Main Heading
   - Large bold headline.
   - Text: `Be Understood. Get Cited.`
   - This is the primary message of the hero.
   - Should be visually dominant.
   - On desktop and tablet, keep it in one line if enough width is available.
   - On mobile, allow the heading to break into multiple lines:
     - Be
     - Understood.
     - Get Cited

3. Orbit Visual
   - The main background visual contains 4 curved orbit lines.
   - AI platform icons are placed on different orbit paths.
   - The orbits should feel like AI discovery platforms surrounding a brand visibility system.
   - The icons should not feel perfectly symmetrical. They should feel naturally distributed.
   - The visual should sit below the heading.
   - CTA button should be placed inside or near the center-bottom area of the orbit visual.

Desktop Layout:

- Entire hero section is center aligned.
- Eyebrow at the top.
- Large heading below the eyebrow.
- Orbit visual takes most of the lower hero area.
- CTA button is centered inside the orbit area, near the lower middle.
- The orbit graphic can overflow slightly horizontally if needed, but should stay visually balanced.
- Section should feel spacious, premium, and focused.

Tablet Layout:

- Layout remains vertical and center aligned.
- Eyebrow and heading stay at the top.
- Orbit visual becomes slightly cropped on the left and right edges.
- Icons should still remain visible and balanced.
- CTA button stays centered within the orbit visual.
- The section should still feel like a full hero, not a smaller card.

Mobile Layout:

- Layout is compressed vertically.
- Eyebrow remains at the top.
- Heading becomes stacked across multiple lines.
- Orbit visual is cropped more aggressively.
- Only the important center portion of the orbit system should remain visible.
- CTA button should be placed near the bottom of the visible orbit area.
- Avoid making the icons too small on mobile.
- Maintain enough spacing between heading, orbit lines, and CTA.

## Assets Used

AI platform icons used inside the orbit visual:

- Google icon
- ChatGPT / OpenAI icon
- Perplexity icon
- Gemini icon
- Claude icon
- Microsoft Copilot icon
- Grok / xAI-style icon
- Other AI discovery platform icons if available in the design assets
- All the following assets will be available in the /public/ai-platform-icons directory and will be svg images

Visual elements:

- Curved orbit lines
- Small AI platform logo cards/icons
- Primary CTA button

## Interaction

There is one primary CTA button:

Button Text: Get a Free AEO Audit

Button behavior:

- The button should route to /audit page in the website.
- Button should have a subtle hover state.
- Hover can slightly brighten the button or raise it by 1–2px.

## Animation

The hero should feel alive but not distracting.

Suggested animations:

1. Heading Entrance
   - Eyebrow fades in first.
   - Heading fades in and moves up slightly.
   - Keep the animation smooth and premium.

2. Orbit Line Animation
   - Orbit lines can fade in softly.
   - Orbit lines have to draw in from left to right or right to left alternatively using SVG path animation.
   - Ex: The first orbit line has to be from left to right and then the next line will be right to left to have an    orbital animation properly.
   - The animation should be subtle, not too flashy.

3. Icon Animation
   - Icons have move along the orbital path like a Planet revolving from its orbital path
   - The icons have to be placed equally and not that far aprat but not that close along the orbital path. 
   - Avoid fast spinning. It should not feel like a loading animation.

4. CTA Animation
   - CTA button fades in after the heading and orbit visual.
   - On hover, button can slightly scale or lift.
   - Keep the CTA interaction clean and simple.

## Implementation Notes

- Do not use the whole hero visual as a static image.
- Build the section with real text for SEO and accessibility.
- Use actual icon assets from the design handoff folder.
- Orbit lines can be implemented using SVG paths or absolutely positioned curved borders.
- SVG is preferred for clean responsive scaling.
- The orbit visual should be inside a wrapper with `overflow: hidden` so it can crop cleanly on tablet and mobile.
- Maintain the dark background color from the Marrai theme.
- The heading, eyebrow, and CTA should use the existing typography and color tokens.
- The CTA should use the existing primary button styling.
- The layout should be responsive using the project’s existing Tailwind/shadcn setup.
- Avoid hardcoding random pixel values everywhere. Use reusable spacing tokens where possible.
- Icons should be positioned with responsive classes or CSS variables so they can be adjusted easily.
- Mobile should not simply shrink the full desktop orbit. It should crop and recompose the visual so it still feels intentional.
- Keep the section premium, minimal, and focused. Do not add extra text or extra buttons.
