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

The hero orbit animation must look like AI platform logos are travelling through a live discovery network, not just floating in place.

The icons should move along the actual orbit paths. They should enter from one side of the visible hero area, travel across the curved path, leave the cropped area, and then loop/re-enter again. Some icons should move left-to-right and some should move right-to-left so the motion feels orbital and alive.

The motion should be slightly fast paced compared to a slow decorative animation, but it should still feel premium and calm. It should not feel like a loading spinner.

### Required Hero Animation Behavior

1. Heading Entrance
   - Eyebrow fades in first.
   - Heading fades in and moves up slightly.
   - The entrance should be smooth and premium.
   - Avoid bouncy or playful easing.

2. Orbit Line Animation
   - Orbit lines should fade in softly.
   - Orbit lines may draw in using SVG path animation.
   - Alternate the draw direction where possible:
     - first orbit can draw left-to-right
     - second orbit can draw right-to-left
     - third orbit can draw left-to-right
     - fourth orbit can draw right-to-left
   - The line animation should happen once on entrance.

3. Platform Icon Orbit Movement
   - Platform icons must travel along the actual SVG orbit paths.
   - Icons should not be positioned near the paths using unrelated absolute x/y animation.
   - The same SVG path geometry used to draw the orbit line should be used to animate the icon movement.
   - Icons should appear to enter from outside the visible hero crop, move across the arc, and leave the crop.
   - Icons should then loop/re-enter again.
   - Some icons should move left-to-right.
   - Some icons should move right-to-left.
   - Icons should be staggered so they are already distributed across the visual on page load.
   - Icons should stay upright. Do not rotate platform logos along the path tangent.
   - Multiple icons can share the same orbit track with different delays.
   - The icons should not be perfectly symmetrical. Distribution should feel natural.

4. CTA Animation
   - CTA button fades in after the heading and orbit visual.
   - On hover, the button may slightly lift or scale.
   - CTA motion should be subtle.
   - CTA must remain a real clickable HTML link/button, not part of the SVG animation.

### Motion Timing

Suggested timing:

- Heading entrance: 0.5s to 0.8s
- Orbit line draw/fade: 1.0s to 1.5s
- Icon orbit loop: 12s to 20s depending on track
- Stagger icon start positions using negative delays or equivalent offsets
- Avoid all icons starting from the same side at the same time

### Reduced Motion

If the user prefers reduced motion:

- Disable continuous icon orbit movement.
- Show icons statically placed on the orbit paths.
- Keep the orbit lines visible.
- Keep simple fade-in animation only if already implemented.
- Do not leave animated infinite movement enabled.

### Mobile Motion

On mobile:

- Reduce visual complexity if needed.
- Fewer icons visible at once is acceptable.
- Keep icons large enough to recognize.
- Maintain the cropped orbit feeling.
- Avoid fast motion that distracts from the headline and CTA.

## Implementation Notes

- Do not use the whole hero visual as a static image.
- Build the section with real text for SEO and accessibility.
- Use actual icon assets from `/public/ai-platform-icons`.
- Orbit lines should be implemented as SVG paths.
- The orbit icon animation should be tied to the actual SVG paths.
- Do not use separate arbitrary absolute icon positions as the main animation system.
- Do not animate icons with unrelated x/y floating arrays if the goal is orbit movement.
- The line path and the motion path should share the same geometry or be deliberately reversed versions of the same geometry.
- Use SVG `<animateMotion>` or a path-based motion approach so logos stay on the orbit tracks.
- Icons should remain upright while moving. Do not use tangent rotation for logos.
- The orbit visual should be inside a wrapper with `overflow: hidden` so icons can leave and re-enter the cropped area naturally.
- Do not use `preserveAspectRatio="none"` on the main orbit SVG because it distorts the orbit geometry.
- Use an aspect ratio strategy that preserves the orbit shape, such as `preserveAspectRatio="xMidYMid slice"` or an oversized SVG wrapper with controlled cropping.
- The orbit paths may extend beyond the visible SVG/container bounds so icons can enter and leave naturally.
- The CTA button should remain an HTML button/link over the visual, not an SVG element.
- Maintain the dark background color from the Marrai theme.
- The heading, eyebrow, and CTA should use the existing typography and color tokens.
- The CTA should use the existing primary button styling.
- The layout should be responsive using the project’s existing Tailwind/shadcn setup.
- Avoid hardcoding random pixel values everywhere. Use structured orbit track data and reusable values where possible.
- Mobile should not simply shrink the full desktop orbit. It should crop and recompose the visual so it still feels intentional.
- Keep the section premium, minimal, and focused.
