"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
export function RouteFocus() {
  const path = usePathname();
  const previous = useRef(path);
  useEffect(() => {
    if (previous.current === path) return;
    previous.current = path;
    const heading = document.querySelector<HTMLElement>("main h1");
    heading?.setAttribute("tabindex", "-1");
    heading?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [path]);
  return null;
}
