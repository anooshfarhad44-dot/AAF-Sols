"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Package, 
  Sparkles, 
  Eye, 
  Download, 
  MessageCircle, 
  Phone, 
  RotateCw, 
  Search, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  X,
  Maximize2,
  FileText
} from "lucide-react";
import PdfThumbnail from "@/app/components/ui/PdfThumbnail";
import { FancyBoxItem, BoxCategoryTab } from "@/lib/getFancyBoxes";

export default function FancyBoxesPage() {
  const [items, setItems] = useState<FancyBoxItem[]>([]);
  const [tabs, setTabs] = useState<BoxCategoryTab[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [previewItem, setPreviewItem] = useState<FancyBoxItem | null>(null);

  const fetchItems = async () => {
    try {
      setIsRefreshing(true);
      const res = await fetch("/api/fancy-boxes", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setItems(data.items || []);
        setTabs(data.tabs || []);
      }
    } catch (err) {
      console.error("Failed to fetch fancy boxes:", err);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems = items.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.material && item.material.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.finish && item.finish.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#fafaf9] min-h-screen text-stone-900 pb-24">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-[#fafaf9] text-stone-900 pt-14 pb-16 border-b border-stone-200/80">
        {/* Soft background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-amber-400/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 text-amber-800 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Sparkles size={14} className="text-amber-600" />
            <span>LUXURY PACKAGING &bull; RIGID BOX PRESS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-stone-900 max-w-4xl mx-auto leading-[1.15]">
            Custom Printed{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent">
              Fancy Boxes
            </span>{" "}
            &amp; Rigid Packaging
          </h1>

          <p className="text-stone-600 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            High-precision luxury rigid boxes, magnetic closure gift packs, perfume cartons, and gold foil sweet boxes. Handcrafted with heavy kappa board and millimeter-accurate dies.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://wa.me/923485152978?text=Hello%20AA%20Graphic%20Studio%2C%20I%20want%20to%20order%20Custom%20Fancy%20Boxes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-extrabold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={16} />
              <span>Order on WhatsApp (0348 5152978)</span>
            </a>

            <Link
              href="/contactUs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md shadow-amber-500/25 transition-all hover:scale-105"
            >
              <Sparkles size={15} />
              <span>Get Custom Box Quote</span>
            </Link>

            <button
              onClick={fetchItems}
              disabled={isRefreshing}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full font-semibold text-xs text-stone-700 bg-white hover:bg-stone-50 border border-stone-200 shadow-sm transition-all hover:text-stone-900"
              title="Refresh files from folder"
            >
              <RotateCw size={14} className={isRefreshing ? "animate-spin text-amber-600" : ""} />
              <span>{isRefreshing ? "Scanning..." : "Live Refresh"}</span>
            </button>
          </div>

          {/* Packaging Features Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
              <p className="text-[11px] text-amber-700 uppercase font-mono font-bold">Rigid Board</p>
              <p className="text-sm font-bold text-stone-900">1000 &ndash; 1800 GSM</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
              <p className="text-[11px] text-orange-700 uppercase font-mono font-bold">Foil Stamping</p>
              <p className="text-sm font-bold text-stone-900">Gold, Silver, Copper</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
              <p className="text-[11px] text-purple-700 uppercase font-mono font-bold">Lamination</p>
              <p className="text-sm font-bold text-stone-900">Soft-Touch &amp; Spot UV</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
              <p className="text-[11px] text-emerald-700 uppercase font-mono font-bold">Delivery</p>
              <p className="text-sm font-bold text-stone-900">Nationwide Shipping</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-stone-200">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-stone-900 text-white shadow-md"
                      : "bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`ml-2 px-1.5 py-0.5 rounded-full text-[10px] ${
                    isActive ? "bg-amber-500 text-stone-900 font-extrabold" : "bg-stone-100 text-stone-500"
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search boxes, finish, material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-stone-200 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 shadow-sm"
            />
          </div>
        </div>

        {/* Studio Folder Guide Note */}
        <div className="mt-6 mb-8 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-amber-900">
          <div className="flex items-center gap-2.5">
            <Package size={18} className="text-amber-600 flex-shrink-0" />
            <span>
              <strong>Studio Live Directory:</strong> Apne print kiye hue Fancy Boxes ki photos (<code>.jpg</code>, <code>.png</code>) ya vector design files (<code>.pdf</code>) 
              folder <code>/public/Fancy_Boxes</code> mein add karein, wo foran yahan live show hongi!
            </span>
          </div>
          <button
            onClick={fetchItems}
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold bg-amber-600 hover:bg-amber-500 text-white transition-colors"
          >
            <RotateCw size={12} className={isRefreshing ? "animate-spin" : ""} />
            <span>Refresh Files</span>
          </button>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8">
            <Package size={48} className="mx-auto text-stone-300 mb-3" />
            <h3 className="text-lg font-bold text-stone-800">No Fancy Boxes Found</h3>
            <p className="text-stone-500 text-sm mt-1 max-w-md mx-auto">
              No boxes matched your search or category filter. Try clearing your search query or uploading new box files.
            </p>
            <button
              onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
              className="mt-4 px-5 py-2 rounded-full bg-amber-600 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Media Preview Box */}
              <div 
                onClick={() => setPreviewItem(item)}
                className="relative aspect-[4/3] bg-stone-100 overflow-hidden cursor-pointer"
              >
                {item.type === "pdf" ? (
                  <div className="w-full h-full relative">
                    <PdfThumbnail 
                      pdfUrl={item.fileUrl} 
                      title={item.title} 
                      categoryLabel={item.categoryLabel} 
                    />
                  </div>
                ) : (
                  <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-[#fbfaf8] to-[#f2efea] flex items-center justify-center p-3">
                    <img
                      src={item.fileUrl}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Overlay hover badge */}
                <div className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 text-stone-900 font-bold text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 size={13} />
                    <span>View Specifications</span>
                  </span>
                </div>

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border shadow-sm ${item.badgeClass}`}>
                    {item.categoryLabel}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-stone-900/85 text-white backdrop-blur-sm">
                    {item.type === "pdf" ? "PDF Vector" : "Studio Photo"}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-stone-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Box Specifications */}
                <div className="space-y-1.5 pt-2 border-t border-stone-100 text-xs">
                  {item.dimensions && (
                    <div className="flex items-center justify-between text-stone-600">
                      <span className="text-stone-400 font-mono text-[11px]">Size:</span>
                      <span className="font-bold text-stone-800">{item.dimensions}</span>
                    </div>
                  )}
                  {item.material && (
                    <div className="flex items-center justify-between text-stone-600">
                      <span className="text-stone-400 font-mono text-[11px]">Board:</span>
                      <span className="font-medium text-stone-800 text-right truncate max-w-[200px]" title={item.material}>
                        {item.material}
                      </span>
                    </div>
                  )}
                  {item.finish && (
                    <div className="flex items-center justify-between text-stone-600">
                      <span className="text-stone-400 font-mono text-[11px]">Finish:</span>
                      <span className="font-medium text-amber-700 text-right truncate max-w-[200px]" title={item.finish}>
                        {item.finish}
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <a
                    href={`https://wa.me/923485152978?text=Hello%20AA%20Graphic%20Studio%2C%20I%20want%20to%20order%20or%20inquire%20about%20this%20Fancy%20Box%3A%20${encodeURIComponent(item.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <MessageCircle size={14} />
                    <span>Inquire / Order</span>
                  </a>

                  {item.type === "pdf" ? (
                    <a
                      href={item.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 p-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 transition-colors"
                      title="Open full PDF file"
                    >
                      <Download size={15} />
                    </a>
                  ) : (
                    <button
                      onClick={() => setPreviewItem(item)}
                      className="inline-flex items-center justify-center gap-1 p-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 transition-colors"
                      title="View full-size photo"
                    >
                      <Eye size={15} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox / Modal */}
      {previewItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setPreviewItem(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Media Preview */}
            <div className="md:w-1/2 bg-stone-900 relative flex items-center justify-center min-h-[300px] md:min-h-[460px]">
              {previewItem.type === "pdf" ? (
                <div className="w-full h-full min-h-[380px] p-2">
                  <iframe 
                    src={previewItem.fileUrl} 
                    className="w-full h-full min-h-[380px] border-0 rounded-2xl"
                    title={previewItem.title}
                  />
                </div>
              ) : (
                <div className="w-full h-full p-4 flex items-center justify-center bg-stone-950">
                  <img
                    src={previewItem.fileUrl}
                    alt={previewItem.title}
                    className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl drop-shadow-2xl"
                  />
                </div>
              )}
            </div>

            {/* Right Information & Inquiry Panel */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${previewItem.badgeClass}`}>
                    {previewItem.categoryLabel}
                  </span>
                  <button
                    onClick={() => setPreviewItem(null)}
                    className="p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-stone-900 leading-snug">
                  {previewItem.title}
                </h2>

                <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                  {previewItem.description}
                </p>

                {/* Detailed Spec Sheet */}
                <div className="mt-6 p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2.5 text-xs">
                  <p className="font-bold text-stone-900 uppercase tracking-wider text-[11px] mb-2">Production Specs</p>
                  
                  {previewItem.dimensions && (
                    <div className="flex justify-between py-1 border-b border-stone-200/60">
                      <span className="text-stone-500">Box Dimensions</span>
                      <span className="font-bold text-stone-800">{previewItem.dimensions}</span>
                    </div>
                  )}

                  {previewItem.material && (
                    <div className="flex justify-between py-1 border-b border-stone-200/60">
                      <span className="text-stone-500">Board Weight / Core</span>
                      <span className="font-bold text-stone-800 text-right">{previewItem.material}</span>
                    </div>
                  )}

                  {previewItem.finish && (
                    <div className="flex justify-between py-1">
                      <span className="text-stone-500">Surface Finish</span>
                      <span className="font-bold text-amber-700 text-right">{previewItem.finish}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Inquiry Action Buttons */}
              <div className="pt-6 space-y-2.5">
                <a
                  href={`https://wa.me/923485152978?text=Hello%20AA%20Graphic%20Studio%2C%20I%20am%20interested%20in%20custom%20ordering%20this%20Fancy%20Box%3A%20${encodeURIComponent(previewItem.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-extrabold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
                >
                  <MessageCircle size={16} />
                  <span>Order on WhatsApp (0348 5152978)</span>
                </a>

                <div className="flex gap-2">
                  <a
                    href="tel:+923099634495"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl font-bold text-xs bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
                  >
                    <Phone size={13} className="text-amber-600" />
                    <span>Call: 0309 9634495</span>
                  </a>

                  {previewItem.type === "pdf" && (
                    <a
                      href={previewItem.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-2xl font-bold text-xs bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 transition-colors"
                    >
                      <Download size={13} />
                      <span>Download PDF</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

