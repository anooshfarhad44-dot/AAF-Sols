"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Eye, 
  ArrowUpRight, 
  FileText, 
  ExternalLink, 
  Download, 
  X,
  FolderOpen,
  RefreshCw
} from 'lucide-react';
import type { WorkItem, CategoryTab } from '@/lib/getStudioWorks';

interface PortfolioShowcaseProps {
  initialWorks?: WorkItem[];
  initialTabs?: CategoryTab[];
}

const PortfolioShowcase = ({ initialWorks = [], initialTabs = [] }: PortfolioShowcaseProps) => {
  const [works, setWorks] = useState<WorkItem[]>(initialWorks);
  const [tabs, setTabs] = useState<CategoryTab[]>(initialTabs);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPdf, setSelectedPdf] = useState<WorkItem | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Client-side fetch to keep real-time sync with files added to public/Web Site Data
  const refreshWorks = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch('/api/portfolio?t=' + Date.now());
      if (res.ok) {
        const data = await res.json();
        if (data.works && data.works.length > 0) {
          setWorks(data.works);
          setTabs(data.tabs);
        }
      }
    } catch (e) {
      console.error('Failed to refresh portfolio items:', e);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    // If no initialWorks provided or to ensure freshest list on client
    refreshWorks();
  }, []);

  const filteredProjects = activeFilter === 'all'
    ? works
    : works.filter(p => p.category === activeFilter);

  return (
    <section id="our-work" className="py-24 bg-stone-50 text-stone-900 relative overflow-hidden border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              <span>OUR WORK &bull; DYNAMIC PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900">
              Real Studio{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Projects &amp; Designs
              </span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Explore authentic vector print files, book jackets, luxury cards, menus, and certificates. Any PDF added to the studio directory automatically renders here live!
            </p>
          </div>

          {/* Quick Count Badge & Refresh Button */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-stone-200 shadow-sm">
              <FolderOpen className="text-amber-600 w-5 h-5" />
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider font-mono text-stone-400">Live Deliverables</p>
                <p className="text-sm font-bold text-stone-900">{works.length} Verified PDFs</p>
              </div>
            </div>
            <button
              onClick={refreshWorks}
              disabled={isRefreshing}
              title="Scan folder for new PDFs"
              className="p-2.5 rounded-2xl bg-white border border-stone-200 hover:border-amber-300 hover:bg-amber-50 text-stone-600 hover:text-amber-700 transition-all shadow-sm active:scale-95 disabled:opacity-50"
            >
              <RefreshCw size={17} className={isRefreshing ? "animate-spin text-amber-600" : ""} />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {tabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-500 text-white font-bold shadow-md shadow-amber-500/25'
                    : 'bg-white hover:bg-amber-50 text-stone-600 hover:text-stone-900 border border-stone-200/90 shadow-sm'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? 'bg-amber-600 text-white' : 'bg-stone-100 text-stone-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden border border-stone-200/90 bg-white hover:border-amber-300 transition-all duration-300 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              {/* PDF Preview Frame Container */}
              <div 
                onClick={() => setSelectedPdf(item)}
                className="relative h-64 w-full overflow-hidden bg-stone-100 cursor-pointer border-b border-stone-100 group/frame"
              >
                {/* Embedded PDF Thumbnail Viewer */}
                <iframe
                  src={`${item.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                  title={item.title}
                  className="w-full h-full pointer-events-none scale-100 transform origin-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-black/10 pointer-events-none" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border shadow-sm ${item.badgeClass}`}>
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Dimensions / Spec tag */}
                {item.dimensions && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-stone-900/80 text-white backdrop-blur-md">
                      {item.dimensions}
                    </span>
                  </div>
                )}

                {/* Hover Quick View Button */}
                <div className="absolute inset-0 bg-amber-600/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPdf(item);
                    }}
                    className="px-4 py-2.5 rounded-full bg-white text-stone-900 font-bold text-xs shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:bg-amber-500 hover:text-white"
                  >
                    <Eye size={15} />
                    <span>Quick Preview</span>
                  </button>
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-full bg-stone-900 text-white hover:bg-stone-800 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                    title="Open in New Tab"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Bottom filename strip */}
                <div className="absolute bottom-2 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-white/90 drop-shadow pointer-events-none">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] truncate max-w-[200px]">
                    <FileText size={12} className="text-amber-400 flex-shrink-0" />
                    {item.fileName}
                  </span>
                  <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full font-bold">
                    Vector PDF
                  </span>
                </div>
              </div>

              {/* Text Info & Actions */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => setSelectedPdf(item)}
                    className="font-bold text-base sm:text-lg text-stone-900 mb-2 group-hover:text-amber-700 transition-colors cursor-pointer"
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Action Footer */}
                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedPdf(item)}
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 transition-colors"
                  >
                    <Eye size={14} />
                    <span>View Interactive PDF</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                      title="Open full PDF in new tab"
                    >
                      <ExternalLink size={15} />
                    </a>
                    <a
                      href={item.pdfUrl}
                      download={item.fileName}
                      className="p-2 rounded-xl text-stone-500 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                      title="Download PDF"
                    >
                      <Download size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / Contact CTA */}
        <div className="mt-16 text-center bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-sm max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 mb-2 inline-block">
            NEED BESPOKE GRAPHIC DESIGN OR PRINT PRODUCTION?
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-3">
            Let&apos;s Create Your Brand Artwork Together
          </h3>
          <p className="text-stone-600 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            All files are produced to exact print press specifications with high DPI, CMYK color profiles, and razor-sharp vector precision.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contactUs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all shadow-md shadow-amber-500/20"
            >
              <Sparkles size={15} />
              <span>Request Custom Design / Print</span>
            </Link>
            <a
              href="https://wa.me/923485152978?text=Hello%20AA%20Graphic%20Studio,%20I%20saw%20your%20PDF%20work%20and%20need%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-all shadow-sm"
            >
              <span>WhatsApp (0348 5152978)</span>
            </a>
          </div>
        </div>

      </div>

      {/* PDF Modal Viewer */}
      {selectedPdf && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPdf(null)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-5xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-stone-200 relative"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-stone-50 border-b border-stone-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <FileText size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg text-stone-900 truncate">
                    {selectedPdf.title}
                  </h3>
                  <p className="text-xs text-stone-500 flex items-center gap-2 truncate">
                    <span className="font-mono text-amber-700 font-semibold">{selectedPdf.folderName}/{selectedPdf.fileName}</span>
                    <span>&bull;</span>
                    <span>{selectedPdf.categoryLabel}</span>
                  </p>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={selectedPdf.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-stone-200 hover:bg-stone-100 text-stone-700 flex items-center gap-1.5 transition-colors shadow-sm"
                  title="Open in new window"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">New Tab</span>
                </a>
                <a
                  href={selectedPdf.pdfUrl}
                  download={selectedPdf.fileName}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-1.5 transition-colors shadow-sm"
                  title="Download this PDF"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors ml-1"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body / PDF Frame */}
            <div className="flex-1 w-full h-full bg-stone-100 relative">
              <iframe
                src={`${selectedPdf.pdfUrl}#view=Fit`}
                title={selectedPdf.title}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default PortfolioShowcase;
