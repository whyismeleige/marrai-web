# Section Name
FAQ Section

## Purpose
The purpose of the FAQ Section is to answer common questions visitors may have about Marrai, AEO audits, AI visibility, citations, tracking, and platform coverage.

For now, Codex should only implement the FAQ structure and interaction using dummy placeholder questions and answers. The final FAQ content will be added later manually.

This section should make the website feel more complete and trustworthy by giving visitors a clear place to understand the product before taking action.

## Screenshots

- Desktop: `desktop.png`
- Tablet: `tablet.png`
- Mobile: `mobile.png`

## Content

Section Heading: Frequently Asked Questions

Description: Find out all the essential details about our platform and how it can serve your needs.

FAQ Items:
- Use dummy placeholder FAQ content for now.
- Codex should not finalize the real FAQ copy.
- The final questions and answers will be replaced later.

Dummy FAQ structure:

Question 1: Placeholder FAQ question goes here?
Answer 1: Placeholder FAQ answer text goes here. This should be a short paragraph explaining the answer.

Question 2: Placeholder FAQ question goes here?
Answer 2: Placeholder FAQ answer text goes here.

Question 3: Placeholder FAQ question goes here?
Answer 3: Placeholder FAQ answer text goes here.

Question 4: Placeholder FAQ question goes here?
Answer 4: Placeholder FAQ answer text goes here.

Question 5: Placeholder FAQ question goes here?
Answer 5: Placeholder FAQ answer text goes here.

Question 6: Placeholder FAQ question goes here?
Answer 6: Placeholder FAQ answer text goes here.

Question 7: Placeholder FAQ question goes here?
Answer 7: Placeholder FAQ answer text goes here.

Bottom Support Heading: Still have questions?

Bottom Support Description: We're here to provide clarity and assist with any queries you may have.

Support Link: Contact Support

## Layout Notes

We essentially have 3 parts in this section:

1. Section Header
   - Contains the main FAQ heading and description.
   - Heading: `Frequently Asked Questions`
   - Description sits below the heading.
   - On desktop and tablet, this content is left aligned.
   - On mobile, this content remains left aligned and wraps naturally.

2. FAQ Accordion List
   - Contains multiple FAQ accordion items.
   - Each FAQ item has:
     - Question text
     - Expand/collapse icon
     - Answer text when opened
   - Only dummy placeholder content is needed for now.
   - First FAQ item can be open by default.
   - Other FAQ items should be closed by default.
   - Each item should have enough vertical spacing so it feels clean and readable.
   - Use subtle separators or spacing between FAQ items.

3. Bottom Support Block
   - Contains a divider line above it.
   - Includes:
     - Heading: `Still have questions?`
     - Description
     - Contact Support link
   - On desktop, the support text is on the left and the Contact Support link is on the right.
   - On tablet, the support block can stack vertically if needed.
   - On mobile, the support block should stack vertically with the Contact Support link below the description.

Desktop Layout:
- Section uses a wide container.
- Header is placed at the top left.
- FAQ accordion list spans the main content width.
- First FAQ item is open and shows the answer.
- Support block sits below the FAQ list with a divider line above it.
- The Contact Support link is aligned toward the right side.
- Keep generous padding around the section.

Tablet Layout:
- Section uses a narrower container.
- Header remains left aligned.
- FAQ list takes full available width.
- Support block can stack if horizontal spacing is limited.
- Maintain clear spacing between FAQ list and support block.

Mobile Layout:
- Section becomes a single-column layout.
- Heading wraps into multiple lines if needed:
  - Frequently
  - Asked
  - Questions
- Description sits below the heading.
- FAQ items take full mobile width.
- Accordion answers should remain readable and not too compressed.
- Support block stacks vertically.
- Contact Support link appears below the support description.
- Add enough vertical spacing between the FAQ list and support block.

## Assets Used

Visual elements:
- Accordion chevron/down arrow icon
- Divider line
- Contact Support link arrow icon

No custom images are required for this section.

## Interaction

The FAQ list should use accordion behavior.

Accordion behavior:
- Clicking a question expands its answer.
- Clicking an open question collapses it.
- The first item can be open by default.
- It is acceptable for only one FAQ item to be open at a time.
- It is also acceptable for multiple FAQ items to be open at once if that matches the existing shadcn accordion pattern.

Contact Support Link:
- Text: `Contact Support`
- Should route to the support/contact section or contact page.
- If the contact page is not ready, temporarily link it to the main CTA/audit section or leave as a placeholder route.

## Animation

Suggested animations:

1. Accordion Animation
   - FAQ answer expands and collapses smoothly.
   - Use height/opacity animation if available.
   - Chevron icon should rotate when the item opens.

2. Section Entrance
   - Heading and description can fade in subtly.
   - FAQ items can fade in with a small upward movement.
   - Keep animations minimal and clean.

3. Link Hover
   - Contact Support link can underline or slightly brighten on hover.
   - Arrow icon can move 2–4px to the right on hover.

## Implementation Notes

- Codex should use dummy placeholder FAQ content only.
- Do not hardcode final FAQ copy yet.
- The final FAQ questions and answers will be added manually later.
- Build this as a reusable FAQ accordion component.
- Use real text and semantic HTML for accessibility.
- Use button elements for accordion triggers.
- Use proper keyboard accessibility for accordion interactions.
- Use the existing Marrai dark background token.
- Use existing typography tokens for heading, body, FAQ question, and FAQ answer text.
- Use existing muted text color for descriptions and answers.
- Use the existing primary/accent color for the Contact Support link.
- Keep the design minimal and consistent with the rest of the Marrai landing page.
- Do not add extra cards, borders, or heavy UI unless already present in the design system.
- Maintain responsive spacing across desktop, tablet, and mobile.
