"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import { NAV_LINKS } from "@/constants";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container relative z-30 grid items-center justify-between grid-cols-2 py-5 mx-auto md:grid-cols-none md:grid-flow-col">
      <Link href="/">
        <Image src="/assets/img/hilink-logo.svg" alt="Logo" width={74} height={30} className="w-auto h-auto" />
      </Link>

      <Image src="/assets/img/menu.svg" alt="menu" width={24} height={24} className="grid justify-self-end md:hidden" onClick={() => setIsOpen(!isOpen)} />

      <ul className={`h-full w-full col-span-2 gap-4 py-8 md:gap-8 lg:gap-12 md:flex md:col-span-1 ${isOpen ? "grid" : "hidden"}`}>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="flex items-center justify-center transition-all cursor-pointer text-gray-50 hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex">
        <Button href="#" title="Login" icon="/assets/img/user.svg" variant="btn_dark_green" />
      </div>
    </nav>
  );
};
