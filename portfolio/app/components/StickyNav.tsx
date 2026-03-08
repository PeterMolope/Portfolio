"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Top", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function scrollToAnchor(href: string) {
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function StickyNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between bg-black/50 px-4 backdrop-blur-xl transition-shadow lg:hidden ${
          scrolled ? "shadow-[0_15px_50px_rgba(0,0,0,0.55)]" : ""
        }`}
      >
        <a
          href="#"
          className="text-sm font-semibold text-white"
          onClick={(event) => {
            event.preventDefault();
            scrollToAnchor("#");
            setMenuOpen(false);
          }}
        >
          Cyber Desk
        </a>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="hidden rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 lg:inline-flex"
          >
            Resume
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white shadow-sm ring-1 ring-white/10 transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform ${
                  menuOpen ? "-translate-y-1.5 rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full bg-current transition-opacity ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform ${
                  menuOpen ? "translate-y-1.5 -rotate-45" : "translate-y-2"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex h-full max-w-md flex-col justify-center gap-6 px-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-left text-lg font-semibold text-white transition hover:bg-white/10"
                onClick={() => {
                  scrollToAnchor(item.href);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <aside className="hidden lg:sticky lg:top-24 lg:block lg:w-60">
        <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <p className="text-sm font-semibold text-white/80">Explore</p>
          {navItems.slice(1).map((item) => (
            <button
              key={item.href}
              className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              onClick={() => scrollToAnchor(item.href)}
            >
              {item.label}
            </button>
          ))}

          <a
            href="/resume.pdf"
            download
            className="mt-4 inline-flex items-center justify-center rounded-full bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
          >
            Download resume
          </a>
        </div>
      </aside>
    </>
  );
}
