export type ProductNavStatus = "available" | "coming-soon";

export type NavItem = {
  label: string;
  href: string;
  menuId?: "products";
};

export type ProductNavItem = {
  label: string;
  href: string;
  description: string;
  status: ProductNavStatus;
  disabled?: boolean;
};

export type AuthNavItem = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export const primaryNavItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "#products",
    menuId: "products",
  },
  {
    label: "Blog",
    href: "/blog",
  },
] as const satisfies readonly NavItem[];

export const productNavItems = [
  {
    label: "Product Overview",
    href: "/products",
    description: "Product Overview Description",
    status: "available",
  },
  {
    label: "AEO Audit Tool",
    href: "/audit",
    description: "AEO Audit Tool Description about",
    status: "available",
  },
  {
    label: "Citation Intelligence",
    href: "#citation-intelligence",
    description: "Coming Soon.",
    status: "coming-soon",
    disabled: true,
  },
  {
    label: "Agentic Commerce",
    href: "#agentic-commerce",
    description: "Coming Soon.",
    status: "coming-soon",
    disabled: true,
  },
  {
    label: "Report Generation",
    href: "#report-generation",
    description: "Coming Soon.",
    status: "coming-soon",
    disabled: true,
  },
] as const satisfies readonly ProductNavItem[];

export const authNavItems = [
  {
    label: "Sign Up",
    href: "#waitlist",
    variant: "secondary",
  },
  {
    label: "Login",
    href: "/login",
    variant: "primary",
  },
] as const satisfies readonly AuthNavItem[];

