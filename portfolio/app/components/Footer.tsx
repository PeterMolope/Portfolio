import React from "react";

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-20 max-w-[1140px] pb-16 text-center text-sm text-slate-400">
      <div className="border-t border-white/10 pt-10">
        <p>
          Made with Next.js, React, and a touch of neon. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
