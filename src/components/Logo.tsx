import React from 'react';
import { cn } from '@/src/utils/cn';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, size = 'md' }: LogoProps) {
  const sizes = {
    sm: {
      source: 'text-lg',
      studio: 'text-lg',
      symbol: 'w-1.5 h-4',
      gap: 'gap-1',
      container: 'gap-0'
    },
    md: {
      source: 'text-2xl',
      studio: 'text-2xl',
      symbol: 'w-2 h-6',
      gap: 'gap-1.5',
      container: 'gap-0'
    },
    lg: {
      source: 'text-4xl',
      studio: 'text-4xl',
      symbol: 'w-3 h-10',
      gap: 'gap-2',
      container: 'gap-0'
    }
  };

  const currentSize = sizes[size];

  return (
    <div className={cn("flex flex-col leading-none tracking-tighter font-display font-bold", currentSize.container, className)}>
      <span className={cn("text-white uppercase", currentSize.source)}>
        SOURCE
      </span>
      <div className={cn("flex items-center", currentSize.gap)}>
        <div className="flex gap-[2px] items-center">
          {/* Stylized II symbol based on the image */}
          <div className="relative">
            <div className={cn("bg-[#148282]", currentSize.symbol)} />
            <div className="w-1.5 h-[2px] bg-[#148282] absolute bottom-0 -left-[2px]" />
          </div>
          <div className="relative">
            <div className={cn("bg-[#148282]", currentSize.symbol)} />
            <div className="w-1.5 h-[2px] bg-[#148282] absolute top-0 -right-[2px]" />
          </div>
        </div>
        <span className={cn("text-white uppercase", currentSize.studio)}>
          STUDIO
        </span>
      </div>
    </div>
  );
}
