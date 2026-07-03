export type HomepageSectionId =
  | "navbar"
  | "hero"
  | "ai-discovery"
  | "scroll-feature"
  | "tracking-feature"
  | "cta"
  | "faq"
  | "waitlist"
  | "footer";

export type HomepageSection = {
  id: HomepageSectionId;
  label: string;
};

export const brandAssets = {
  logoPrimaryLight: "/brand/logo-primary-light.svg",
  logoPrimaryDark: "/brand/logo-primary-dark.svg",
  iconMarkLight: "/brand/icon-mark-light.svg",
  iconMarkDark: "/brand/icon-mark-dark.svg",
} as const;

export const homepageSections = [
  {
    id: "navbar",
    label: "Navbar",
  },
  {
    id: "hero",
    label: "Hero Section",
  },
  {
    id: "ai-discovery",
    label: "AI Discovery Section",
  },
  {
    id: "scroll-feature",
    label: "Scroll Feature Section",
  },
  {
    id: "tracking-feature",
    label: "Tracking Feature Section",
  },
  {
    id: "cta",
    label: "CTA Section",
  },
  {
    id: "faq",
    label: "FAQ Section",
  },
  {
    id: "waitlist",
    label: "Waitlist Section",
  },
  {
    id: "footer",
    label: "Footer Section",
  },
] as const satisfies readonly HomepageSection[];

export const siteCopy = {
  brandName: "Marrai",
  logoAlt: "Marrai logo",
  auth: {
    login: "Login",
    signUp: "Sign Up",
  },
  mobileNav: {
    rootLabel: "Menu",
    productsLabel: "Products",
    backLabel: "Back",
  },
} as const;

