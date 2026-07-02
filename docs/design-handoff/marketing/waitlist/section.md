# Section Name
Waitlist Section

## Purpose
The purpose of the Waitlist Section is to give visitors a simple way to join Marrai before the full product is publicly available.

This section should be minimal, focused, and easy to understand. It should not distract from the main landing page flow. The goal is only to collect the visitor’s email address.

## Screenshots

- Desktop: `desktop.png`
- Tablet: `tablet.png`
- Mobile: `mobile.png`

## Content

Heading: Join the Waitlist

Description: Be among the first to access Marrai.

Input Placeholder: Enter your Email

CTA Button:
- Desktop/Tablet: Join the Waitlist
- Mobile: Join

## Layout Notes

This section has 3 simple parts:

1. Section Heading
   - Large bold heading.
   - Text: `Join the Waitlist`
   - Center aligned on desktop and tablet.
   - On mobile, it can break into 2 lines:
     - Join the
     - Waitlist

2. Description
   - Short supporting text below the heading.
   - Text: `Be among the first to access Marrai.`
   - Center aligned.
   - Use muted text color.

3. Email Form
   - Contains one email input and one submit button.
   - Input placeholder: `Enter your Email`
   - Button text on desktop/tablet: `Join the Waitlist`
   - Button text on mobile: `Join`
   - Form should sit below the description.
   - Input and button should remain in one horizontal row if possible.

Desktop Layout:
- Full section is center aligned.
- Heading sits at the top of the content block.
- Description sits below the heading.
- Form sits below the description.
- Keep generous spacing around the content.
- Section should feel simple and focused.

Tablet Layout:
- Same layout as desktop.
- Reduce the max width slightly.
- Keep the form centered.

Mobile Layout:
- Content remains centered.
- Heading wraps into 2 lines.
- Description wraps naturally.
- Input takes most of the width.
- Button becomes compact with text: `Join`
- Form should not overflow horizontally.

## Assets Used

No image assets are required.

Visual elements:
- Email input field
- Primary CTA button

## Interaction

Waitlist form:
- User enters email.
- User clicks the CTA button to join the waitlist.
- Pressing `Enter` should also submit the form.
- If the email is empty, show a simple validation message.
- If the email format is invalid, ask the user to enter a valid email.
- If the waitlist backend is not ready, keep this as a placeholder form for now.

## Animation

This section does not need complex animation.

Optional subtle animations:
- Heading fades in slightly.
- Description fades in after the heading.
- Form fades in after the description.
- Button can slightly brighten or lift on hover.
- Button can show a loading state on submit.

## Implementation Notes

- This is a simple section.
- Final implementation will be handled manually.
- Build the heading, description, input, and button as real HTML elements.
- Do not use the screenshot as an image.
- Use the existing Marrai dark background token.
- Use existing typography tokens.
- Use muted color for the description.
- Use existing primary button styling.
- Use a real email input field with proper accessibility.
- Add a hidden or visible label for the email field.
- Keep the section minimal.
- Do not add extra copy, extra buttons, or decorative elements.
- Make sure the form is responsive across desktop, tablet, and mobile.
