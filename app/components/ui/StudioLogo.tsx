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
      <div className="relative rounded-xl overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.25)] border border-amber-500/30 group-hover:border-amber-400 transition-colors">
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
          <span className={`font-black tracking-tight text-white ${imgSizes.text}`}>
            AA <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">GRAPHIC</span>
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold hidden sm:inline-block">
            STUDIO
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-zinc-400 font-medium tracking-widest uppercase ${imgSizes.sub}`}>
            Design &bull; Print &bull; Branding
          </span>
        )}
      </div>
    </div>
  );
};

export default StudioLogo;
