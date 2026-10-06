"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { assetBasePath, bookingUrl } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/sales-commission/", label: "Sales Commission" },
    { href: "/#services", label: "Services" },
    { href: "/about-us/", label: "About us" },
    { href: "/blog/", label: "Articles" },
  ];
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="AI Accounting Agency home">
          <Image
            src={`${assetBasePath}/brand-logo.png`}
            width={44}
            height={44}
            alt=""
          />
          <span>
            AI Accounting<span className="brand-sub">Agency</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-nav"
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={open ? "nav-open" : ""}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                path === link.href || path === link.href.slice(0, -1)
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            className="button button-small"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Let’s talk <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
