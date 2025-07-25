"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { UserDropdown } from "./user-dropdown";

const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Courses",
    href: "/admin/courses",
  },
  {
    name: "Dashboard",
    href: "/admin",
  },
];

export function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60">
      <div className="container flex min-h-16 items-center mx-auto px-4 md:px-6 lg:px-8">
        <Link href={"/"} className="flex items-center space-x-2 mr-4">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={30}
            height={30}
          />
          <span>WizzyLMS.</span>
        </Link>

        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {isPending ? null : session ? (
              <UserDropdown
                name={session.user.name}
                email={session.user.email}
                image={session.user.image || ""}
              />
            ) : (
              <>
                <Button variant={"secondary"} asChild>
                  <Link href={"/login"}>Login</Link>
                </Button>
                <Button asChild>
                  <Link href={"/login"}>Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
