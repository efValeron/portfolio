"use client"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu} from "@nextui-org/react";
import {ThemeSwitcher} from "@/app/(site)/components/ThemeSwitcher";
import NextLink from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";

interface MenuItemsI {
  path: string
  label: string
}

export const Nav = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItemsI[] = [
    {path: "/", label: "Home"},
    {path: "/about", label: "About"},
    {path: "/projects", label: "Projects"},
    {path: "/contact", label: "Contact"},
  ];

  const renderMenuItems = (item: MenuItemsI) => (
    <NavbarItem isActive={pathname === item.path} key={item.path} className="max-sm:mt-2">
      <Link
        isBlock
        color={pathname === item.path ? "primary" : "foreground"}
        href={item.path}
        as={NextLink}
        size="lg"
        className="max-sm:w-full"
      >
        {item.label}
      </Link>
    </NavbarItem>
  )

  return (
    <Navbar
      className="fixed top-0 left-0 right-0 z-50"
      isBordered
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <p className="font-bold text-inherit">DEValeron</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map(renderMenuItems)}
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher/>
      </NavbarContent>

      <NavbarMenu className="overflow-y-hidden">
        {menuItems.map(renderMenuItems)}
      </NavbarMenu>
    </Navbar>
  );
};