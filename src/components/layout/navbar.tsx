"use client";

import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaBolt, FaCat } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

export default function Navbar() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 h-16 border-b bg-background px-4">
      <div className="container flex h-full max-w-screen-2xl items-center">
        {/* Desktop */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center gap-2">
            <FaBolt />
            <span className="font-semibold">Foxynime</span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({
                      className: "bg-transparent mr-4",
                    })}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Anime
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/"
                          className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/10 to-blue-500/30 p-6 no-underline outline-none"
                        >
                          <FaCat className="size-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Foxynime
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Watch anime with fast updates and clean UI.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <ListItem href="/anime" title="Search Anime">
                      Find your favorite anime
                    </ListItem>
                    <ListItem href="/genres" title="Genres List">
                      Browse anime by genre
                    </ListItem>
                    <ListItem href="/schedules" title="Schedules">
                      Check today’s anime schedule
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="flex flex-1 items-center justify-between md:justify-end gap-2">
          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-4" />
            <Link href="/" className="flex items-center gap-2">
              <FaBolt />
              <span className="font-semibold">Foxynime</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/onepunya"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </Link>
            <Button variant="ghost" onClick={toggleTheme}>
              {theme === "light" ? <IoSunny /> : <FiMoon />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}