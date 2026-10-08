"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { assetBasePath, bookingUrl, services } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const path = usePathname().replace(/\/$/, "") || "/";
  useEffect(() => {
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, [open]);
  const links = [
    { href: "/", label: "Home", active: path === "/" },
    {
      href: "/sales-commission/",
      label: "Sales Commission",
      active: path.startsWith("/sales-commission"),
    },
    {
      href: "/services/",
      label: "Accounting services",
      active:
        path === "/services" || services.some((s) => path === `/${s.slug}`),
    },
    { href: "/about-us/", label: "About us", active: path === "/about-us" },
    { href: "/blog/", label: "Articles", active: path.startsWith("/blog") },
    { href: "/contact/", label: "Contact", active: path === "/contact" },
  ];
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="AI Accounting Agency home"
          onClick={() => setOpen(false)}
        >
          <Image
            src={`${assetBasePath}/brand-logo.png`}
            width={45}
            height={45}
            alt=""
          />
          <span>
            AI Accounting<span className="brand-sub">Agency</span>
          </span>
        </Link>
        <button
          ref={menuButton}
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-nav"
        >
          {open ? "Close menu ×" : "Menu ☰"}
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
              className={link.active ? "nav-active" : ""}
              aria-current={
                link.active
                  ? path === link.href.replace(/\/$/, "") || path === link.href
                    ? "page"
                    : "true"
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
            Book a demo <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
