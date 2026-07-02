# Section Name
Navbar / Site Header

## Purpose
The purpose of the Navbar is to give users clear access to the main areas of the Marrai website while keeping the interface minimal, premium, and focused.

The navbar should support both desktop navigation and mobile/tablet navigation. On desktop, the Products item can show a product mega menu. On tablet and mobile, the navigation should use a full-screen menu with a tree-like drill-down structure for nested items.

The mobile navigation should not use normal dropdowns. Instead, submenus should behave like folders: when the user taps `Products`, they move deeper into a Products screen, and they can go back to the main menu.

## Screenshots

- Desktop: `desktop.png`
- Tablet Closed: `tablet-closed.png`
- Tablet Open: `tablet-open.png`
- Mobile Closed: `mobile-closed.png`
- Mobile Open: `mobile-open.png`

## Content

Logo:
- Marrai logo mark
- Marrai wordmark on desktop
- Logo mark only on tablet/mobile if space is limited

Primary Navigation:
- Home
- Products
- Blog

Auth Actions:
- Sign Up
- Login

Desktop Products Menu:
- Product Overview
- AEO Audit Tool
- Citation Intelligence
- Agentic Commerce
- Report Generation

Product Status Text:
- AEO Audit Tool Description about
- Product Overview Description
- Coming Soon.
- Coming Soon.
- Coming Soon.

Mobile / Tablet Menu Root Items:
- Home
- Products
- Blog

Mobile / Tablet Auth Buttons:
- Login
- Sign Up

## Layout Notes

We essentially have 4 navbar states:

1. Desktop Header
   - Logo is placed on the left.
   - Main navigation is centered or slightly right of center.
   - Auth actions are placed on the right.
   - `Sign Up` is a secondary/dark button.
   - `Login` is the primary green button.
   - Navbar should remain clean and compact.
   - Desktop background should match the Marrai dark theme.

2. Desktop Products Mega Menu
   - Opens when the user clicks or hovers on `Products`.
   - The Products nav item should show an active state while the menu is open.
   - Mega menu appears below the navbar.
   - Menu has a large card-style dropdown.
   - Left side contains a featured product card/preview.
   - Right side contains product links in a grid.
   - Product items can include small icons, title, and short description/status.
   - Current product content can use placeholders where needed.
   - Keep the mega menu minimal and do not overbuild functionality.

3. Tablet / Mobile Closed Header
   - Logo appears on the left.
   - Hamburger icon appears on the right.
   - Desktop nav links and auth buttons are hidden.
   - Header height should remain compact.
   - There should be a subtle bottom border/divider.
   - Background should match the dark theme.

4. Tablet / Mobile Open Menu
   - Menu opens as a full-screen or near-full-screen panel.
   - Top row contains logo on the left and close icon on the right.
   - Root menu items are shown as large tappable rows:
     - Home
     - Products
     - Blog
   - `Products` row should show a right arrow/chevron because it has children.
   - Login and Sign Up buttons sit at the bottom of the menu.
   - Menu should feel like a clean mobile app navigation drawer.

## Mobile Navigation Tree Structure

The mobile/tablet navigation must behave like a tree/folder structure, not like dropdown accordions.

Root Menu:
Home
Products >
Blog

When the user taps Products, the menu should navigate deeper into the Products submenu instead of expanding inline.

Products Submenu:

< Back
Products

Product Overview
AEO Audit Tool
Citation Intelligence
Agentic Commerce
Report Generation

Behavior:

Tapping Products opens the Products submenu screen.
The main menu items are replaced by the Products submenu items.
A back button appears at the top of the submenu.
Tapping back returns to the root menu.
This should feel like moving inside a folder.
Do not show Products children as an accordion under the Products row.
Do not open a small dropdown inside the mobile menu.
The submenu should use the same full menu area.

Suggested menu state model:

menuState = "root" | "products"

Root State:

Shows Home, Products, Blog
Products has a right arrow
Bottom shows Login and Sign Up buttons

Products State:

Shows Back button
Shows Products title
Shows product links
Bottom buttons can remain visible or be hidden depending on spacing

## Interaction

Desktop:
- Clicking `Home` routes to the homepage.
- Clicking `Blog` routes to the blog page.
- Clicking `Sign Up` routes to the signup page or waitlist flow.
- Clicking `Login` routes to the login/app page.
- Clicking or hovering `Products` opens the Products mega menu.
- Clicking outside the mega menu closes it.
- Pressing `Escape` closes the mega menu.
- Product links route to their respective pages when ready.
- Coming Soon product links can be disabled or route to placeholder pages.

Tablet / Mobile:
- Hamburger icon opens the mobile menu.
- Close icon closes the mobile menu.
- Tapping `Home` routes to homepage and closes the menu.
- Tapping `Blog` routes to blog and closes the menu.
- Tapping `Products` moves into the Products submenu.
- Tapping back returns to the root menu.
- Tapping a product item routes to that product page and closes the menu.
- Login and Sign Up buttons should be fixed or visually anchored near the bottom of the open menu.

## Animation

Suggested animations:

1. Desktop Mega Menu
   - Fade in and move down slightly when opened.
   - Fade out quickly when closed.
   - Keep it smooth and subtle.
   - Suggested duration: 150ms–250ms.

2. Mobile Menu Open
   - Menu panel fades/slides in.
   - Header close icon appears immediately.
   - Menu rows can fade in with slight stagger.

3. Mobile Tree Navigation
   - When moving from root menu to Products submenu, animate like a folder drill-down:
     - Root menu slides left and fades out.
     - Products submenu slides in from the right.
   - When pressing back:
     - Products submenu slides right and fades out.
     - Root menu slides back in from the left.
   - Keep this transition quick and clean.

4. Link Hover / Press States
   - Desktop nav items can slightly brighten on hover.
   - Mobile menu rows can use a subtle background highlight on tap/hover.
   - Buttons should use the existing hover/focus states from the design system.

## Assets Used

Logo assets:
- Marrai logo mark
- Marrai wordmark

Icons:
- Hamburger menu icon
- Close icon
- Chevron down icon for desktop Products nav item
- Chevron right icon for mobile Products row
- Back arrow icon for mobile submenu
- External/link icons only if required later
- Product placeholder icons

Desktop mega menu assets:
- Product preview placeholder image/card
- Small product icons

## Implementation Notes

- Use a dedicated `SiteHeader` component.
- Use a dedicated `DesktopNav` component.
- Use a dedicated `ProductsMegaMenu` component.
- Use a dedicated `MobileNav` component.
- Use a dedicated `MobileNavTree` or internal state for root/products screens.
- Mobile Products submenu should be drill-down navigation, not an accordion.
- Keep the navbar fixed or sticky only if the current website layout requires it. Otherwise keep it normal.
- Use real links and buttons for accessibility.
- Use semantic navigation markup with `<header>` and `<nav>`.
- Use proper keyboard support for desktop dropdown/mega menu.
- `Escape` should close menus.
- Clicking outside should close desktop mega menu.
- Mobile menu should trap focus while open if implemented as a full-screen dialog.
- Body scroll should be locked while mobile menu is open.
- Use existing Marrai dark background, border, typography, and button tokens.
- Do not overbuild product pages yet.
- Product items can use placeholder routes until final pages are ready.
- Keep desktop and mobile behavior separate enough that each stays clean.
- Avoid using one complicated dropdown component for both desktop and mobile.
- Desktop can use a mega menu.
- Mobile/tablet must use the tree/folder-style deeper navigation structure.
