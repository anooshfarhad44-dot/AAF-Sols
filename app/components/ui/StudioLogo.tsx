import React from 'react';
import Image from 'next/image';

interface StudioLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const StudioLogo: React.FC<StudioLogoProps> = ({ 
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16'
  }[size];

  const dimensions = {
    sm: { w: 100, h: 40 },
    md: { w: 140, h: 56 },
    lg: { w: 180, h: 72 }
  }[size];

  return (
    <div className={`flex items-center select-none ${className}`}>
      <Image
        src="/aa-logoNew.png"
        alt="AA Graphic Studio Logo"
        width={dimensions.w}
        height={dimensions.h}
        className={`${sizeClasses} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]`}
        priority
      />
    </div>
  );
};

export default StudioLogo;

