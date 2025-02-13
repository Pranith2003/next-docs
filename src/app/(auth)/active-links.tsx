"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinks {
  id: number;
  name: string;
  link: string;
}

const navLinks: NavLinks[] = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Register", link: "/register" },
  { id: 3, name: "Login", link: "/login" },
  { id: 4, name: "Forgot Password", link: "/forgot-password" },
];

export const ActiveLinks = () => {
  const pathname = usePathname(); // Get current URL path

  return (
    <div className="flex flex-row gap-12 justify-center">
      {navLinks.map((element) => {
        const isActive =
          pathname === element.link ||
          (pathname.startsWith(element.link) && element.link !== "/");

        return (
          <p key={element.id}>
            <Link
              href={element.link}
              style={{
                color: isActive ? "blue" : "black",
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              }}
            >
              {element.name}
            </Link>
          </p>
        );
      })}
    </div>
  );
};
