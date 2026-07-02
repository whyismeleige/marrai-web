# Marrai Token Map

The source Figma token files are:

- `light-mode.tokens.json`
- `dark-mode.tokens.json`

Implementation rules:

- I have already added the figma tokens into the variables for both dark and light modes
- Map Figma color tokens to shadcn-compatible CSS variables in `app/globals.css` if there are any missing variables. 
- Do not create custom spacing tokens.
- Use default shadcn/ui spacing for primitives like buttons, inputs, cards, accordions, and forms.
- Use section screenshots as the source of truth for page-level spacing and padding.
- Do not hardcode hex colors inside React components.
- Use semantic tokens such as `background`, `foreground`, `card`, `muted`, `primary`, `border`, `input`, and `ring`.
