import { ButtonVariant } from "@/components/ui/button";
import { Boxes, FileText, LucideIcon, Network, ScanSearch, ShoppingCart } from "lucide-react";

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
  icon: LucideIcon;
  disabled?: boolean;
};

export type AuthNavItem = {
  label: string;
  href: string;
  variant: ButtonVariant;
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
    icon: Boxes,
  },
  {
    label: "AEO Audit Tool",
    href: "/audit",
    description: "AEO Audit Tool Description about",
    status: "available",
    icon: ScanSearch
  },
  {
    label: "Citation Intelligence",
    href: "#citation-intelligence",
    description: "Coming Soon.",
    status: "coming-soon",
    icon: Network,
    disabled: true,
  },
  {
    label: "Agentic Commerce",
    href: "#agentic-commerce",
    description: "Coming Soon.",
    status: "coming-soon",
    icon: ShoppingCart,
    disabled: true,
  },
  {
    label: "Report Generation",
    href: "#report-generation",
    description: "Coming Soon.",
    status: "coming-soon",
    icon: FileText,
    disabled: true,
  },
] as const satisfies readonly ProductNavItem[];

export const authNavItems = [
  {
    label: "Join Waitlist",
    href: "#waitlist",
    variant: "default",
  },
] as const satisfies readonly AuthNavItem[];

