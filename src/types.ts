import { Icons } from "@/components/Icons";

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface DocsConfig {
  mainNav: MainNavItem[];
}

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

export type Category = {
  id: number;
  title: string;
  image: string;
};
