"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  { id: 1, href: "/products", title: "Products" },
  { id: 2, href: "/blog", title: "Blog" },
  { id: 3, href: "/order-products", title: "Orders" },
  { id: 4, href: "/register", title: "Get Started" },
];

export const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-row gap-12 justify-center">
        {navLinks.map((nav) => {
          const isActive =
            pathname === nav.href ||
            (pathname.startsWith(nav.href) && nav.href !== "/");

          return (
            <Link
              className={`${
                isActive ? "text-blue-300 underline" : "text-black"
              }`}
              key={nav.id}
              href={nav.href}
            >
              {nav.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};
