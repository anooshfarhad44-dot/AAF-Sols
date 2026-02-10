"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, Mail, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    // Environment Variables se keys uthayi ja rahi hain (SECURE)
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;


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
    <section className="bg-[#0a0a0a] text-white min-h-screen py-24 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Info Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-white to-purple-500 bg-clip-text text-transparent">
                Ready to Start?
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Whether it's Web Development, Design, or Printing—we are here to bring your vision to life from the heart of Islamabad.
              </p>
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <Mail size={20} />
                    </div>
                    <p className="font-medium text-gray-300">anooshdev25@gmail.com</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                        <MessageCircle size={20} />
                    </div>
                    <p className="font-medium text-gray-300">WhatsApp: +92 3XX XXXXXXX</p>
                </div>
            </div>
          </motion.div>

          {/* Right Form Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[3rem] backdrop-blur-xl shadow-2xl relative"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-2">
                <input name="user_name" type="text" placeholder="Full Name" required className="w-full bg-black/40 border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all" />
              </div>
              <div className="space-y-2">
                <input name="user_email" type="email" placeholder="Email Address" required className="w-full bg-black/40 border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all" />
              </div>
              <div className="space-y-2">
                <textarea name="message" rows={5} placeholder="Tell us about your project..." required className="w-full bg-black/40 border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] ${
                  status === "success" 
                  ? "bg-green-600 text-white" 
                  : status === "error"
                  ? "bg-red-600 text-white"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] text-white"
                }`}
              >
                {status === "idle" && <><Send size={18}/> Send Message</>}
                {status === "sending" && <><Loader2 size={18} className="animate-spin"/> Sending...</>}
                {status === "success" && <><CheckCircle size={18}/> Inquiry Received!</>}
                {status === "error" && <><AlertCircle size={18}/> Try Again Later</>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;

// kbhg pdbq epdx fofq = app password
// service_u92a94r = email js service key