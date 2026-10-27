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
      border: 'hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10',
      badge: 'text-amber-800 bg-amber-50 border-amber-200',
      iconBg: 'bg-amber-50 border-amber-200 text-amber-600',
      btn: 'bg-stone-50 hover:bg-amber-500 hover:text-white text-stone-700 hover:border-amber-500 border-stone-200'
    },
    purple: {
      border: 'hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10',
      badge: 'text-purple-800 bg-purple-50 border-purple-200',
      iconBg: 'bg-purple-50 border-purple-200 text-purple-600',
      btn: 'bg-stone-50 hover:bg-purple-600 hover:text-white text-stone-700 hover:border-purple-600 border-stone-200'
    },
    cyan: {
      border: 'hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10',
      badge: 'text-cyan-800 bg-cyan-50 border-cyan-200',
      iconBg: 'bg-cyan-50 border-cyan-200 text-cyan-600',
      btn: 'bg-stone-50 hover:bg-cyan-600 hover:text-white text-stone-700 hover:border-cyan-600 border-stone-200'
    }
  }[accent];

  return (
    <div className={`flex flex-col h-full rounded-3xl p-6 sm:p-8 bg-white border border-stone-200 shadow-sm transition-all duration-300 ${accentClasses.border} group`}>
      <div className="flex items-center justify-between mb-6">
        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-sm ${accentClasses.iconBg}`}>
          {icon}
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${accentClasses.badge}`}>
          {category}
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-stone-900 group-hover:text-amber-600 transition-colors">
        {title}
      </h3>
      <p className="text-stone-600 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <ul className="mb-8 space-y-2.5 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-xs sm:text-sm text-stone-700">
            <CheckCircle2 size={16} className="mr-2.5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contactUs"
        className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border flex items-center justify-center gap-2 transition-all duration-200 shadow-sm ${accentClasses.btn}`}
      >
        <span>Get Custom Quote</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  );
};

export default ServiceCard;
