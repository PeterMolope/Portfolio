import React from "react";

const codeSnippet = `import { useMemo } from "react";

function useChartData(raw) {
  return useMemo(() => parse(raw), [raw]);
}

export default function Chart({ data }) {
  return (
    <canvas width={400} height={220} />
  );
}
`;

export function MonitorScene() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative flex items-end gap-10">
        <div className="relative w-[360px] min-w-[360px] rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-white/60">
            <span className="rounded-full bg-white/10 px-3 py-1">index.tsx</span>
            <span className="text-[10px]">80%</span>
          </div>
          <div className="p-4">
            <pre className="code-surface">{codeSnippet}</pre>
          </div>
        </div>

        <div className="relative w-[300px] min-w-[300px] translate-y-8 rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-white/60">
            <span className="rounded-full bg-white/10 px-3 py-1">components</span>
            <span className="text-[10px]">92%</span>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-2">
              {['App', 'Nav', 'Card', 'Editor'].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white/5 px-3 py-2 text-[11px] text-slate-200/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 right-0 hidden h-[260px] w-[200px] translate-x-2 translate-y-4 rounded-2xl border border-white/15 bg-white/5 shadow-[0_30px_70px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:block">
        <div className="absolute inset-4 rounded-xl border border-white/10 bg-white/10" />
        <div className="absolute top-7 left-6 h-4 w-4 rounded-full bg-[#22d3ee]/60 shadow-[0_0_18px_rgba(34,211,238,0.6)]" />
        <div className="absolute top-7 left-16 h-4 w-4 rounded-full bg-[#3b82f6]/60 shadow-[0_0_18px_rgba(59,130,246,0.6)]" />
        <div className="absolute bottom-10 left-6 h-1 w-14 rounded-full bg-white/15" />
        <div className="absolute bottom-10 right-6 h-1 w-10 rounded-full bg-white/15" />
        <div className="absolute inset-6 grid grid-cols-2 gap-2">
          <div className="h-8 rounded bg-white/10" />
          <div className="h-8 rounded bg-white/10" />
          <div className="h-8 rounded bg-white/10" />
          <div className="h-8 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}
