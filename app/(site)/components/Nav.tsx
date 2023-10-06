"use client"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu} from "@nextui-org/react";
import {ThemeSwitcher} from "@/app/(site)/components/ThemeSwitcher";
import NextLink from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";

export const Nav = () => {
  const pathname = usePathname();
  const [isMenuOpen] = useState(false);

  const isHome = pathname === "/"
  const isAbout = pathname === "/about"
  const isProjects = pathname === "/projects"
  const isContact = pathname === "/contact"

  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50" isBordered shouldHideOnScroll>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <p className="font-bold text-inherit">DEValeron</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem isActive={isHome}>
          <Link isBlock color={isHome ? "primary" : "foreground"} href="/" as={NextLink}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isAbout}>
          <Link isBlock color={isAbout ? "primary" : "foreground"} href="/about" as={NextLink}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isProjects}>
          <Link isBlock color={isProjects ? "primary" : "foreground"} href="/projects" as={NextLink}>
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isContact}>
          <Link isBlock color={isContact ? "primary" : "foreground"} href="/contact" as={NextLink}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher/>
      </NavbarContent>

      <NavbarMenu className="overflow-y-hidden">
        <NavbarItem isActive={isHome}>
          <Link isBlock color={isHome ? "primary" : "foreground"} href="/" as={NextLink}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isAbout}>
          <Link isBlock color={isAbout ? "primary" : "foreground"} href="/about" as={NextLink}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isProjects}>
          <Link isBlock color={isProjects ? "primary" : "foreground"} href="/projects" as={NextLink}>
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isContact}>
          <Link isBlock color={isContact ? "primary" : "foreground"} href="/contact" as={NextLink}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};