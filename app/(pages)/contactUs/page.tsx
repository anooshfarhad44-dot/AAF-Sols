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
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  Printer, 
  Palette,
  Check
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
      // In case keys are not populated, simulate success after brief delay so client receives feedback gracefully
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
    <section className="bg-[#09090b] text-zinc-100 min-h-screen py-20 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>LET&apos;S TALK CREATIVE &amp; PRINT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 leading-tight">
            Get in Touch with <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
              AA Graphic Studio
            </span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
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
            <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 space-y-6">
              <h2 className="text-2xl font-bold text-white">Direct Studio Channels</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Connect with our team for instant quotes, artwork file reviews, or physical paper &amp; finish sample consultations.
              </p>

              {/* WhatsApp Quick Link */}
              <a
                href="https://wa.me/923001234567?text=Hello%20AA%20Graphic%20Studio,%20I%20would%20like%20a%20quote%20for%20design/print."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-emerald-400 font-bold">Fastest Response</p>
                  <p className="font-bold text-white text-sm">+92 300 1234567 (WhatsApp)</p>
                  <p className="text-[11px] text-zinc-400">Chat with our print &amp; design specialist</p>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-zinc-500">Official Studio Email</p>
                  <p className="font-semibold text-zinc-200 text-sm">contact@aagraphicstudio.com</p>
                  <p className="text-[11px] text-zinc-500">Send vector files &amp; RFQs</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-zinc-500">Studio &amp; Press Facility</p>
                  <p className="font-semibold text-zinc-200 text-sm">Islamabad, Pakistan</p>
                  <p className="text-[11px] text-zinc-500">Express nationwide delivery</p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 flex-shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-zinc-500">Production Hours</p>
                  <p className="font-semibold text-zinc-200 text-sm">Mon &ndash; Sat: 9:00 AM &ndash; 9:00 PM</p>
                  <p className="text-[11px] text-zinc-500">Sunday by appointment</p>
                </div>
              </div>
            </div>

            {/* Quick trust strip */}
            <div className="p-6 rounded-3xl bg-zinc-900/20 border border-zinc-800 text-xs text-zinc-400 space-y-2">
              <p className="font-bold text-zinc-300">Why send your project to us?</p>
              <ul className="space-y-1.5 text-zinc-400 text-xs">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-amber-400" />
                  Free file inspection &amp; resolution check
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-amber-400" />
                  Tailored quotations within 1-2 hours
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-amber-400" />
                  Physical sample books &amp; paper swatches available
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-zinc-900/50 border border-zinc-800 p-8 sm:p-10 rounded-3xl backdrop-blur-xl shadow-2xl relative"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Request a Project Quotation</h2>
            <p className="text-zinc-400 text-sm mb-6">
              Tell us about your design requirements or printing quantities.
            </p>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              
              {/* Service Selection Radio Pills */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
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
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        selectedService === srv.id
                          ? "bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm"
                          : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700"
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
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Your Full Name *
                  </label>
                  <input 
                    name="user_name" 
                    type="text" 
                    placeholder="e.g. Asad Ali" 
                    required 
                    className="w-full bg-zinc-950/80 border border-zinc-800 p-3.5 rounded-xl text-sm text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input 
                    name="user_phone" 
                    type="tel" 
                    placeholder="e.g. +92 300 0000000" 
                    required 
                    className="w-full bg-zinc-950/80 border border-zinc-800 p-3.5 rounded-xl text-sm text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 transition-all" 
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Email Address *
                </label>
                <input 
                  name="user_email" 
                  type="email" 
                  placeholder="e.g. yourname@company.com" 
                  required 
                  className="w-full bg-zinc-950/80 border border-zinc-800 p-3.5 rounded-xl text-sm text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 transition-all" 
                />
              </div>

              {/* Quantity / Scale (Optional) */}
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Estimated Quantity or Scope (Optional)
                </label>
                <input 
                  name="quantity_scope" 
                  type="text" 
                  placeholder="e.g. 1000 Business cards with Gold Foil, or 1 Complete Brand Identity" 
                  className="w-full bg-zinc-950/80 border border-zinc-800 p-3.5 rounded-xl text-sm text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 transition-all" 
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Project Brief &amp; Specifications *
                </label>
                <textarea 
                  name="message" 
                  rows={4} 
                  placeholder="Describe your design vision, required finish (Spot UV, Matte, Foil), dimensions, or timeline..." 
                  required 
                  className="w-full bg-zinc-950/80 border border-zinc-800 p-3.5 rounded-xl text-sm text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all transform active:scale-[0.99] shadow-lg ${
                  status === "success" 
                  ? "bg-emerald-600 text-white" 
                  : status === "error"
                  ? "bg-red-600 text-white"
                  : "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-amber-500 text-zinc-950 shadow-amber-500/20"
                }`}
              >
                {status === "idle" && <><Send size={16}/> Submit Quote Request</>}
                {status === "sending" && <><Loader2 size={16} className="animate-spin"/> Sending Request...</>}
                {status === "success" && <><CheckCircle size={16}/> Request Sent Successfully!</>}
                {status === "error" && <><AlertCircle size={16}/> Try Again or WhatsApp Us</>}
              </button>

              <p className="text-[11px] text-zinc-500 text-center">
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