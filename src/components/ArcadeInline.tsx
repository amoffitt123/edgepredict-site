"use client";

import { useState } from "react";
import { PlayCircle, ChevronUp } from "lucide-react";

interface ArcadeInlineProps {
  src: string;
  title: string;
  label?: string;
}

export default function ArcadeInline({
  src,
  title,
  label = "See it in action",
}: ArcadeInlineProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#7655d6] hover:text-[#5d3db8] transition-colors group"
      >
        {open ? (
          <>
            <ChevronUp className="w-4 h-4" />
            Hide demo
          </>
        ) : (
          <>
            <PlayCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            {label}
          </>
        )}
      </button>

      {open && (
        <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 shadow-lg">
          <div
            style={{
              position: "relative",
              paddingBottom: "calc(46.31578947368421% + 41px)",
              height: 0,
              width: "100%",
            }}
          >
            <iframe
              src={src}
              title={title}
              frameBorder="0"
              loading="lazy"
              allowFullScreen
              allow="clipboard-write"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                colorScheme: "light",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
