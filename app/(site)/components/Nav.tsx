"use client"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import {ThemeSwitcher} from "@/app/(site)/components/ThemeSwitcher";
import NextLink from "next/link";
import {usePathname} from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();

  const isHome = pathname === "/"
  const isAbout = pathname === "/about"
  const isProjects = pathname === "/projects"

  return (
    <Navbar className="fixed top-0 left-0 right-0 z-10" isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
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
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher/>
      </NavbarContent>
    </Navbar>
  );
};