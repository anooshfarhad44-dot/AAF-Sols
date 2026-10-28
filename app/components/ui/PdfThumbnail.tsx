"use client";
import React, { useEffect, useRef, useState } from "react";
import { FileText, Loader2, Sparkles } from "lucide-react";

interface PdfThumbnailProps {
  pdfUrl: string;
  title: string;
  categoryLabel?: string;
}

// Global script loader to ensure PDF.js CDN script is fetched only once
let pdfjsPromise: Promise<any> | null = null;

function loadPdfJs(): Promise<any> {
  if (typeof window === "undefined") {
    return Promise.reject("Window is undefined (SSR)");
  }

  // Already available on window
  if ((window as any).pdfjsLib) {
    return Promise.resolve((window as any).pdfjsLib);
  }

  // Promise already in flight
  if (pdfjsPromise) {
    return pdfjsPromise;
  }

  pdfjsPromise = new Promise((resolve, reject) => {
    // Check if script element already exists
    const existingScript = document.getElementById("pdfjs-cdn-script");
    if (existingScript) {
      existingScript.addEventListener("load", () => {
        const pdfjs = (window as any).pdfjsLib;
        if (pdfjs) {
          pdfjs.GlobalWorkerOptions.workerSrc =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
          resolve(pdfjs);
        } else {
          reject(new Error("pdfjsLib not found after script load"));
        }
      });
      return;
    }

    const script = document.createElement("script");
    script.id = "pdfjs-cdn-script";
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.onload = () => {
      const pdfjs = (window as any).pdfjsLib;
      if (pdfjs) {
        pdfjs.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        resolve(pdfjs);
      } else {
        reject(new Error("pdfjsLib not defined on window"));
      }
    };

    script.onerror = (err) => {
      pdfjsPromise = null;
      reject(err);
    };

    document.head.appendChild(script);
  });

  return pdfjsPromise;
}

export default function PdfThumbnail({
  pdfUrl,
  title,
  categoryLabel,
}: PdfThumbnailProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [status, setStatus] = useState<"loading" | "rendered" | "error">("loading");

  useEffect(() => {
    let isCancelled = false;

    async function renderThumbnail() {
      try {
        setStatus("loading");
        const pdfjs = await loadPdfJs();
        if (isCancelled) return;

        // Load document
        const loadingTask = pdfjs.getDocument({
          url: pdfUrl,
          cMapUrl: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/",
          cMapPacked: true,
        });

        const pdf = await loadingTask.promise;
        if (isCancelled) return;

        // Render Page 1 (The front face of the design)
        const page = await pdf.getPage(1);
        if (isCancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        // Render at 2x resolution so it looks razor-sharp on mobile Retina screens
        const unscaledViewport = page.getViewport({ scale: 1 });
        const targetWidth = 480;
        const scale = (targetWidth / unscaledViewport.width) * 1.5;
        const viewport = page.getViewport({ scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const context = canvas.getContext("2d", { alpha: false });
        if (!context) return;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;

        if (!isCancelled) {
          setStatus("rendered");
        }
      } catch (err) {
        console.warn(`PDF.js render fallback for ${pdfUrl}:`, err);
        if (!isCancelled) {
          setStatus("error");
        }
      }
    }

    renderThumbnail();

    return () => {
      isCancelled = true;
    };
  }, [pdfUrl]);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-stone-100 overflow-hidden select-none">
      {/* High-Resolution HTML5 Canvas for Mobile & Desktop rendering */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-contain md:object-cover transition-opacity duration-500 ${
          status === "rendered" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Loading Skeleton */}
      {status === "loading" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-stone-100 via-amber-50/40 to-stone-200 text-stone-500 animate-pulse gap-2.5 p-4">
          <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center">
            <Loader2 className="w-5 h-5 animate-spin text-amber-600" />
          </div>
          <div className="text-center">
            <p className="text-[11px] font-bold text-stone-700 tracking-wide">
              Loading Vector Design...
            </p>
            <p className="text-[9px] text-stone-400 font-mono mt-0.5">
              Generating Mobile Preview
            </p>
          </div>
        </div>
      )}

      {/* Graceful Fallback (if CDN is unavailable) */}
      {status === "error" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-amber-500/10 via-stone-100 to-orange-500/10 p-5 text-center">
          <div className="w-14 h-14 rounded-2xl bg-white border border-amber-200 text-amber-700 flex items-center justify-center mb-3 shadow-md">
            <FileText size={28} />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 font-bold mb-1">
            {categoryLabel || "Design Deliverable"}
          </span>
          <p className="font-extrabold text-xs sm:text-sm text-stone-900 line-clamp-2 px-2">
            {title}
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold shadow-sm">
            <Sparkles size={11} />
            <span>Tap to View Vector Artwork</span>
          </div>
        </div>
      )}
    </div>
  );
}
