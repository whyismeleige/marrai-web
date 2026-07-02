# Section Name
Footer Section

## Purpose
The purpose of the Footer Section is to provide final navigation, support access, legal links, social links, waitlist signup, and brand reinforcement.

The footer should feel like a strong closing moment for the Marrai landing page. The oversized `marrai` wordmark at the bottom is the key visual element. It should create a memorable brand ending and make the page feel premium and complete.

A key animation in this section is that the large `marrai` wordmark should rise up from below into the footer when the user reaches the footer for the first time.

## Screenshots

- Desktop: `desktop.png`
- Tablet: `tablet.png`
- Mobile: `mobile.png`

## Content

Footer Heading: Talk to Us

Support Text:
Get support:  
support@marrai.tech

Waitlist Text:
Join Our Waitlist.

Email Input Placeholder:
EMAIL*

Navigation Links:
- Home
- Blog
- Products
- Login

Social Links:
- LinkedIn
- Twitter

Location:
Hyderabad  
India, Asia

Legal Links:
- Terms & Conditions
- Privacy Policy

Large Brand Wordmark:
marrai

## Layout Notes

We essentially have 5 parts in this section:

1. Contact Block
   - Contains the main footer heading: `Talk to Us`
   - Contains support text and support email.
   - This should be placed toward the top-left of the footer on desktop.
   - On tablet and mobile, it remains at the top and left aligned.

2. Navigation + Social Links
   - Contains primary navigation links:
     - Home
     - Blog
     - Products
     - Login
   - Contains social links:
     - LinkedIn
     - Twitter
   - On desktop, these links sit toward the upper-right area.
   - On tablet and mobile, they appear below the contact block in a two-column style where possible.

3. Waitlist Signup
   - Contains the text: `Join Our Waitlist.`
   - Contains an email input with placeholder: `EMAIL*`
   - Contains a right arrow submit icon.
   - On desktop, this sits below the contact block on the left.
   - On tablet/mobile, it appears below the navigation/social links.
   - The input should be minimal, using only an underline/bottom border style.

4. Location + Legal Links
   - Contains the location:
     - Hyderabad
     - India, Asia
   - Contains legal links:
     - Terms & Conditions
     - Privacy Policy
   - On desktop, this sits in the mid-right/lower-right area.
   - On tablet/mobile, it appears below the waitlist input.
   - Legal links should be visibly underlined or styled as links.

5. Large Marrai Wordmark
   - The `marrai` wordmark is the main visual element of the footer.
   - It should be very large on desktop.
   - On tablet, it should still be large and placed near the bottom.
   - On mobile, it should scale down but still remain visually dominant.
   - It should sit at the bottom of the footer and may be slightly cropped or close to the bottom edge if needed.

Desktop Layout:
- Footer uses a spacious horizontal layout.
- Left side contains:
  - Talk to Us
  - Support email
  - Join Our Waitlist
  - Email input
- Right side contains:
  - Navigation links
  - Social links
  - Location
  - Legal links
- Large `marrai` wordmark spans the bottom width.
- The wordmark should be the strongest visual element.
- Keep the footer balanced and minimal.

Tablet Layout:
- Layout becomes more stacked but still uses multiple columns where space allows.
- Contact block stays at the top.
- Navigation and social links sit below or to the side depending on available width.
- Waitlist input stays full-width or medium-width.
- Location and legal links appear below the waitlist.
- Large wordmark sits at the bottom and remains prominent.

Mobile Layout:
- Layout becomes a single-column stacked footer.
- Order should be:
  1. Talk to Us
  2. Support email
  3. Navigation/social links
  4. Join Our Waitlist
  5. Email input
  6. Location and legal links
  7. Large `marrai` wordmark
- Keep everything left aligned.
- Wordmark should be large but should not overflow horizontally.
- Footer height can be taller on mobile to keep spacing clean.

## Assets Used

Visual elements:
- Large Marrai wordmark text
- Email input arrow icon
- External link arrow icon for LinkedIn
- External link arrow icon for Twitter

No complex image assets are required unless the Marrai wordmark is implemented as an SVG/logo asset.

## Interaction

Footer links:
- Home should route to the homepage.
- Blog should route to the blog page.
- Products should route to the products page or product section.
- Login should route to the login/app page.
- LinkedIn should open the Marrai LinkedIn page.
- Twitter should open the Marrai Twitter/X page.
- Terms & Conditions should route to the terms page.
- Privacy Policy should route to the privacy page.

Support email:
- `support@marrai.tech` should be clickable using a `mailto:` link.

Waitlist form:
- User enters email.
- Arrow submit button submits the waitlist form.
- If waitlist backend is not ready, keep it as a placeholder form for now.
- Show validation if email is empty or invalid.
- Pressing Enter should submit the form.

## Animation

The large `marrai` wordmark animation is the key footer animation.

Main Wordmark Animation:
- When the user reaches the footer for the first time, the large `marrai` wordmark should animate upward from below the footer.
- Initial state:
  - Wordmark starts below the visible footer area.
  - It can have slight opacity reduction.
- Final state:
  - Wordmark moves into its final bottom position.
  - Opacity becomes fully visible.
- Trigger:
  - Animation should trigger only once when the footer enters the viewport.
  - Use an intersection observer or scroll-triggered animation.
- Feel:
  - Smooth, premium, and slightly dramatic.
  - It should feel like the brand is rising into view.
- Suggested timing:
  - Duration: 700ms–1000ms
  - Easing: ease-out or a soft spring easing
  - Delay: small delay after footer content appears

Additional subtle animations:
1. Footer Content Entrance
   - Footer heading, links, waitlist form, and support text can fade in softly.
   - Keep this secondary to the wordmark animation.

2. Link Hover
   - Links can slightly brighten or underline on hover.
   - External arrow icons can move 2–3px diagonally on hover.

3. Waitlist Input
   - Input underline can brighten on focus.
   - Arrow submit icon can move slightly to the right on hover.

## Implementation Notes

- Build footer text and links as real HTML text, not as a static image.
- The large `marrai` wordmark can be real text or an SVG logo.
- If using text, use the Marrai brand typeface and exact font weight from the design system.
- If using SVG, make sure it scales cleanly across desktop, tablet, and mobile.
- The wordmark animation should happen only once per page load.
- Do not continuously animate the wordmark after it appears.
- Use `overflow: hidden` on the footer or wordmark wrapper so the wordmark can start below the footer and slide up cleanly.
- Use the existing Marrai dark background token.
- Use existing typography, spacing, and color tokens.
- Use muted text color for secondary text.
- Use white/foreground color for the large wordmark.
- Ensure all links are keyboard accessible.
- Ensure the waitlist input has an accessible label even if the visible label is hidden.
- Keep footer spacing responsive and intentional.
- Do not add extra footer columns beyond what is shown in the design.
- The footer should feel like a strong brand closing moment, not just a utility section.
