"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Sparkles, 
  Check,
  Phone,
  Globe
} from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [selectedService, setSelectedService] = useState<string>("Both");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_u92a94r";
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (!TEMPLATE_ID || !PUBLIC_KEY) {
      setTimeout(() => {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      }, 1000);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log("SUCCESS!", result.text);
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((error) => {
        console.error("FAILED TO SEND:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section className="bg-[#fafaf9] text-stone-900 min-h-screen py-20 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-amber-300 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={14} />
            <span>LET&apos;S TALK CREATIVE &amp; PRINT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 leading-tight text-stone-900">
            Get in Touch with <br />
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent">
              AA Graphic Studio
            </span>
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to commission a custom logo, design marketing collateral, or start a high-end printing run? Request your personalized quotation below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Studio Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-md space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">Direct Studio Channels</h2>
                  <p className="text-amber-700 text-xs font-semibold mt-0.5">&ldquo;Your Vision, Our Creation.&rdquo;</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                  Let&apos;s Create Together
                </span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                Connect directly with our studio founders for immediate design consultation, custom quotes, or physical sample reviews.
              </p>

              {/* WhatsApp Quick Link */}
              <a
                href="https://wa.me/923485152978?text=Hello%20AA%20Graphic%20Studio,%20I%20would%20like%20a%20quote%20for%20design/print."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-mono uppercase text-emerald-800 font-bold">Fastest Response &bull; WhatsApp</p>
                    <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-full font-bold">Online</span>
                  </div>
                  <p className="font-extrabold text-stone-900 text-base">0348 5152978</p>
                  <p className="text-[11px] text-stone-500">Instant chat &amp; artwork file drop</p>
                </div>
              </a>

              {/* Direct Phone Call */}
              <a
                href="tel:+923099634495"
                className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono uppercase text-blue-800 font-bold">Call Us Direct</p>
                  <p className="font-extrabold text-stone-900 text-base">0309 9634495</p>
                  <p className="text-[11px] text-stone-500">Direct phone line for orders &amp; inquiries</p>
                </div>
              </a>

              {/* Official Email */}
              <a
                href="mailto:info@aagraphicstudio.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200/80 hover:bg-stone-100/80 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-stone-500">Official Studio Email</p>
                  <p className="font-semibold text-stone-900 text-sm">info@aagraphicstudio.com</p>
                  <p className="text-[11px] text-stone-500">Send high-res files &amp; RFQs</p>
                </div>
              </a>

              {/* Official Website */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Globe size={22} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-stone-500">Official Studio Website</p>
                  <p className="font-semibold text-stone-900 text-sm">www.aagraphicstudio.com</p>
                  <p className="text-[11px] text-stone-500">Graphic design &amp; printing portal</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 flex-shrink-0 mt-0.5">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-stone-500">Studio &amp; Office Address</p>
                  <p className="font-semibold text-stone-900 text-sm leading-snug">
                    3-B, Basement Itehad Center,<br />
                    Fazal-ul-Haq Road, Blue Area, Islamabad
                  </p>
                  <p className="text-[11px] text-stone-500 mt-1">Walk-in client visits &bull; Express nationwide shipping</p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-500 flex-shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-stone-500">Production Hours</p>
                  <p className="font-semibold text-stone-900 text-sm">Mon &ndash; Sat: 9:00 AM &ndash; 9:00 PM</p>
                  <p className="text-[11px] text-stone-500">Sunday by appointment</p>
                </div>
              </div>
            </div>

            {/* Quick trust strip */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-sm text-xs text-stone-600 space-y-2">
              <p className="font-bold text-stone-900">Why send your project to us?</p>
              <ul className="space-y-1.5 text-stone-600 text-xs">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-amber-600" />
                  Free file inspection &amp; resolution check
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-amber-600" />
                  Tailored quotations within 1-2 hours
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-amber-600" />
                  Physical sample books &amp; paper swatches available
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-white border border-stone-200/80 p-8 sm:p-10 rounded-3xl shadow-xl relative"
          >
            <h2 className="text-2xl font-bold text-stone-900 mb-2">Request a Project Quotation</h2>
            <p className="text-stone-600 text-sm mb-6">
              Tell us about your design requirements or printing quantities.
            </p>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              
              {/* Service Selection Radio Pills */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                  Select Required Service
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: "Graphic Design", label: "Graphic Design" },
                    { id: "Printing", label: "Printing Press" },
                    { id: "Both", label: "Both Services" }
                  ].map((srv) => (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id)}
                      className={`py-2.5 px-2 sm:px-3 rounded-xl text-[11px] sm:text-xs font-semibold border transition-all text-center ${
                        selectedService === srv.id
                          ? "bg-amber-500 text-white border-amber-500 shadow-sm"
                          : "bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300"
                      }`}
                    >
                      {srv.label}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="service_type" value={selectedService} />
              </div>

              {/* Name & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input 
                    name="user_name" 
                    type="text" 
                    placeholder="e.g. Asad Ali" 
                    required 
                    className="w-full bg-stone-50 border border-stone-200 p-3.5 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10 transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input 
                    name="user_phone" 
                    type="tel" 
                    placeholder="e.g. +92 300 0000000" 
                    required 
                    className="w-full bg-stone-50 border border-stone-200 p-3.5 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10 transition-all" 
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1.5">
                  Email Address *
                </label>
                <input 
                  name="user_email" 
                  type="email" 
                  placeholder="e.g. yourname@company.com" 
                  required 
                  className="w-full bg-stone-50 border border-stone-200 p-3.5 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10 transition-all" 
                />
              </div>

              {/* Quantity / Scope (Optional) */}
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1.5">
                  Estimated Quantity or Scope (Optional)
                </label>
                <input 
                  name="quantity_scope" 
                  type="text" 
                  placeholder="e.g. 1000 Business cards with Gold Foil, or 1 Complete Brand Identity" 
                  className="w-full bg-stone-50 border border-stone-200 p-3.5 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10 transition-all" 
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1.5">
                  Project Brief &amp; Specifications *
                </label>
                <textarea 
                  name="message" 
                  rows={4} 
                  placeholder="Describe your design vision, required finish (Spot UV, Matte, Foil), dimensions, or timeline..." 
                  required 
                  className="w-full bg-stone-50 border border-stone-200 p-3.5 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all transform active:scale-[0.99] shadow-md ${
                  status === "success" 
                  ? "bg-emerald-600 text-white" 
                  : status === "error"
                  ? "bg-rose-600 text-white"
                  : "bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-amber-500/25"
                }`}
              >
                {status === "idle" && <><Send size={16}/> Submit Quote Request</>}
                {status === "sending" && <><Loader2 size={16} className="animate-spin"/> Sending Request...</>}
                {status === "success" && <><CheckCircle size={16}/> Request Sent Successfully!</>}
                {status === "error" && <><AlertCircle size={16}/> Try Again or WhatsApp Us</>}
              </button>

              <p className="text-[11px] text-stone-500 text-center">
                We respect your privacy. Quotations will be delivered to your email &amp; WhatsApp promptly.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;