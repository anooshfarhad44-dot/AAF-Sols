import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  category: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  accent?: 'amber' | 'purple' | 'cyan';
}

const ServiceCard = ({ title, category, description, features, icon, accent = 'amber' }: ServiceCardProps) => {
  const accentClasses = {
    amber: {
      border: 'hover:border-amber-500/50',
      badge: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      iconBg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
      btn: 'hover:bg-amber-500 hover:text-zinc-950 text-amber-400 border-amber-500/30'
    },
    purple: {
      border: 'hover:border-purple-500/50',
      badge: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      iconBg: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
      btn: 'hover:bg-purple-500 hover:text-zinc-950 text-purple-400 border-purple-500/30'
    },
    cyan: {
      border: 'hover:border-cyan-500/50',
      badge: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      iconBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
      btn: 'hover:bg-cyan-500 hover:text-zinc-950 text-cyan-400 border-cyan-500/30'
    }
  }[accent];

  return (
    <div className={`flex flex-col h-full rounded-3xl p-6 sm:p-8 bg-zinc-900/40 border border-zinc-800 transition-all duration-300 ${accentClasses.border} hover:shadow-2xl hover:shadow-amber-500/5 group`}>
      <div className="flex items-center justify-between mb-6">
        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${accentClasses.iconBg}`}>
          {icon}
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${accentClasses.badge}`}>
          {category}
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">
        {title}
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <ul className="mb-8 space-y-2.5 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-xs sm:text-sm text-zinc-300">
            <CheckCircle2 size={16} className="mr-2.5 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contactUs"
        className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border flex items-center justify-center gap-2 transition-all ${accentClasses.btn}`}
      >
        <span>Get Custom Quote</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  );
};

export default ServiceCard;
