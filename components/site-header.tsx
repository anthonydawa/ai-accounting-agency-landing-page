"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { assetBasePath, bookingUrl, services } from "@/lib/site";
import { productPages } from "@/lib/product-pages";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [directory, setDirectory] = useState<string | null>(null);
  const path = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const productButton = useRef<HTMLButtonElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) setDirectory(null);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (directory === "product") productButton.current?.focus();
        if (directory === "services") servicesButton.current?.focus();
        setDirectory(null);
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [directory]);
  function close() {
    setOpen(false);
    setDirectory(null);
  }
  function isCurrent(href: string) {
    return path === href || (href !== "/" && path === href.slice(0, -1));
  }
  const serviceCurrent =
    path === "/services" ||
    path === "/services/" ||
    services.some((service) => path.replace(/\/$/, "") === `/${service.slug}`);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="AI Accounting Agency home"
          onClick={close}
        >
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
          onClick={() => {
            setOpen(!open);
            setDirectory(null);
          }}
          aria-expanded={open}
          aria-controls="main-nav"
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
        <nav
          ref={navRef}
          id="main-nav"
          aria-label="Main navigation"
          className={open ? "nav-open" : ""}
        >
          <Link
            href="/"
            aria-current={isCurrent("/") ? "page" : undefined}
            onClick={close}
          >
            Home
          </Link>
          <div className="nav-directory">
            <button
              ref={productButton}
              className={
                path.startsWith("/sales-commission") ? "directory-current" : ""
              }
              aria-expanded={directory === "product"}
              aria-controls="product-directory"
              onClick={() =>
                setDirectory(directory === "product" ? null : "product")
              }
            >
              Sales Commission <span aria-hidden="true">⌄</span>
            </button>
            <div
              id="product-directory"
              className="directory-dropdown"
              hidden={directory !== "product"}
            >
              <p>Our first product</p>
              {productPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  aria-current={isCurrent(page.href) ? "page" : undefined}
                  onClick={close}
                >
                  <strong>{page.label}</strong>
                  <span>{page.description}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="nav-directory">
            <button
              ref={servicesButton}
              className={serviceCurrent ? "directory-current" : ""}
              aria-expanded={directory === "services"}
              aria-controls="services-directory"
              onClick={() =>
                setDirectory(directory === "services" ? null : "services")
              }
            >
              Services <span aria-hidden="true">⌄</span>
            </button>
            <div
              id="services-directory"
              className="directory-dropdown"
              hidden={directory !== "services"}
            >
              <p>The broader practice</p>
              <Link
                href="/services/"
                onClick={close}
                aria-current={isCurrent("/services/") ? "page" : undefined}
              >
                <strong>All services</strong>
                <span>Find the area that needs attention.</span>
              </Link>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}/`}
                  aria-current={
                    isCurrent(`/${service.slug}/`) ? "page" : undefined
                  }
                  onClick={close}
                >
                  <strong>{service.title}</strong>
                </Link>
              ))}
            </div>
          </div>
          {[
            { href: "/about-us/", label: "About us" },
            { href: "/blog/", label: "Articles" },
            { href: "/contact/", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              onClick={close}
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
            Book a walkthrough <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
