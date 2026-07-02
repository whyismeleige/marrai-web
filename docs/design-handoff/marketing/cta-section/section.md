# Section Name
CTA Audit Section

## Purpose
The purpose of the CTA Audit Section is to convert visitors into users by asking them to run a free AEO audit for their brand.

This section should make the action feel simple, low-friction, and immediate. The visitor only needs to enter their website URL and start the audit. The supporting handwritten note reinforces that no signup is required, reducing hesitation and making the CTA feel friendly and easy.

The main message is: Marrai can show you how AI understands your brand right now.

## Screenshots

- Desktop: `desktop.png`
- Tablet: `tablet.png`
- Mobile: `mobile.png`

## Content

Main Heading: See How AI Understands Your Brand

Description: Run a free AEO audit and see where your brand is mentioned, cited, or missing in AI answers.

Input Placeholder: Enter your Website URL

CTA Button: Start Free Audit

Mobile CTA Button: Audit

Handwritten Note: No Signup Required Enjoy!!!!!

## Layout Notes

We essentially have 4 parts in this section:

1. Main Heading
   - Large bold heading.
   - Text: `See How AI Understands Your Brand`
   - Center aligned.
   - This is the main conversion message of the section.
   - On desktop and tablet, the heading can break into 2 lines:
     - See How AI Understands
     - Your Brand
   - On mobile, allow the heading to break into 3 lines:
     - See How AI
     - Understands
     - Your Brand

2. Description
   - Short supporting copy below the heading.
   - Center aligned.
   - Text should explain what the user gets after running the audit.
   - Keep the width limited so it does not feel too wide on desktop.

3. Audit Input Form
   - Contains one website URL input and one CTA button.
   - Input placeholder: `Enter your Website URL`
   - Button text on desktop/tablet: `Start Free Audit`
   - Button text on mobile: `Audit`
   - The input and button should be horizontally aligned on desktop and tablet.
   - On mobile, keep them in one row if possible, with the input taking most of the width and the button kept compact.

4. Handwritten Note
   - Positioned below the input form.
   - Contains a hand-drawn arrow pointing toward the input/form.
   - Text: `No Signup Required Enjoy!!!!!`
   - This should feel casual and human, not like standard UI text.
   - The note should sit slightly below and to the right of the input on desktop/tablet.
   - On mobile, the arrow and note can be repositioned below the form while still pointing toward the input.

Desktop Layout:
- Full section is center aligned.
- Heading is placed near the vertical center of the section.
- Description sits directly below the heading.
- Form is placed below the description.
- Handwritten arrow/note appears below the form, slightly offset.
- Keep generous empty space around the CTA to make it feel focused and important.
- Section should feel minimal, calm, and conversion-focused.

Tablet Layout:
- Same structure as desktop.
- Content remains center aligned.
- Heading is still large but slightly reduced from desktop.
- Form width should be slightly narrower.
- Handwritten note should remain visible and should not overlap the form.
- Maintain enough spacing so the section does not feel cramped.

Mobile Layout:
- Content remains center aligned.
- Heading becomes stacked and compressed.
- Description width should fit comfortably within the mobile frame.
- Form should stay readable and usable.
- Input should not become too short.
- CTA button can use shorter text: `Audit`.
- Handwritten note should move below the form and stay visible.
- Avoid overlapping the arrow/note with the button or input.

## Assets Used

Visual elements:
- Website URL input field
- Primary CTA button
- Hand-drawn arrow graphic
- Handwritten note text

Optional assets:
- Handwritten font or SVG text for the note
- Arrow SVG asset if it exists in the design handoff folder

## Interaction

There is one primary form interaction:

Input:
- User enters their website URL.

CTA Button:
- Button text: `Start Free Audit`
- On mobile: `Audit`

Expected behavior:
- The user has to be redirected to /audit?url="given url" the logic will be further continued in audit web page 

Button states:
- Default
- Hover

## Animation

The CTA section should feel simple and smooth.

Suggested animations:

1. Section Entrance
   - Heading fades in and moves up slightly.
   - Description fades in after the heading.
   - Form fades in after the description.

2. Form Animation
   - Input and button can appear together with a subtle upward motion.
   - On hover, the button can slightly brighten or lift by 1–2px.
   - On submit, the button can show a loading state.

3. Handwritten Note Animation
   - Arrow and note can fade in slightly after the form.
   - Optional: arrow can draw in using SVG path animation.
   - Keep this subtle so it feels delightful but not distracting.

## Implementation Notes

- Build the heading and description as real text, not as an image.
- The input must use a real HTML form field for accessibility.
- Use proper form label support, even if the visible label is hidden.
- Use the existing Marrai dark background token.
- Use the existing typography tokens for heading and body text.
- Use the existing primary button styling.
- The handwritten note can be an SVG/image asset or styled text, depending on what is easier to implement.
- If using the handwritten note as an image, make sure it scales properly on mobile.
- The form should be responsive and should not overflow on mobile.
- Do not add extra secondary buttons.
- Do not add extra copy beyond the provided content.
- Keep this section focused only on the audit conversion.
- The CTA section should visually feel like the final push after explaining the problem and benefits above.
