import { Metadata } from "next";
import "./global.css";
import Link from "next/link";
import { NavLinks } from "./navlinks";

export const metadata: Metadata = {
  title: {
    default: "Next.js Tutorial",
    template: "%s | Next.js",
    absolute: "",
  },
  description: "Generated by Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex bg-gray-200 p-4 justify-center">
          <p className="flex-1">
            <Link href="/">This is NavBar</Link>
          </p>
          <NavLinks />
        </header>
        <div className="min-h-screen border-2 border-black box-border">
          {children}
        </div>
        <footer className="bg-ghostwhite p-16">Footer</footer>
      </body>
    </html>
  );
}
