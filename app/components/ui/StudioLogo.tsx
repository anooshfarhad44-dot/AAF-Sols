import React from 'react';
import Image from 'next/image';

interface StudioLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const StudioLogo: React.FC<StudioLogoProps> = ({ 
  size = 'md',
  showSubtitle = true 
}) => {
  const imgSizes = {
    sm: { w: 38, h: 38, text: 'text-lg', sub: 'text-[9px]' },
    md: { w: 46, h: 46, text: 'text-xl', sub: 'text-[10px]' },
    lg: { w: 60, h: 60, text: 'text-2xl', sub: 'text-xs' }
  }[size];

  return (
    <div className="flex items-center gap-3 select-none">
      <div className="relative rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(217,119,6,0.18)] border border-amber-200 group-hover:border-amber-400 transition-colors">
        <Image
          src="/aa-studio-logo.jpg"
          alt="AA Graphic Studio Logo"
          width={imgSizes.w}
          height={imgSizes.h}
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-tight text-stone-900 ${imgSizes.text}`}>
            AA <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">GRAPHIC</span>
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 border border-amber-200 font-bold hidden sm:inline-block">
            STUDIO
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-stone-500 font-medium tracking-widest uppercase ${imgSizes.sub}`}>
            Design &bull; Print &bull; Branding
          </span>
        )}
      </div>
    </div>
  );
};

export default StudioLogo;
