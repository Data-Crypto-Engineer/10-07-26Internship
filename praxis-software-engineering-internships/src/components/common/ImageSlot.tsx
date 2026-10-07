import React, { useState } from 'react';
import { Image as ImageIcon, AlertCircle } from 'lucide-react';

interface ImageSlotProps {
  src: string;
  alt: string;
  aspectRatio?: '16:9' | '4:3' | '3:2' | '1:1' | '16:10';
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  developerSlotNote?: string;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  src,
  alt,
  aspectRatio = '16:9',
  className = '',
  imgClassName = '',
  developerSlotNote,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClasses = {
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '3:2': 'aspect-[3/2]',
    '1:1': 'aspect-square',
    '16:10': 'aspect-[16/10]',
  }[aspectRatio];

  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-[#0C0E18] border border-white/[0.08] ${aspectClasses} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      ) : (
        /* Fallback container when file is missing or replacing */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#0C0E18] border-2 border-dashed border-white/[0.15]">
          <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center text-cyan-400 mb-3">
            <AlertCircle className="w-6 h-6 stroke-[1.75]" />
          </div>
          <p className="text-sm font-medium text-white mb-1 font-heading">
            Static Image Slot: {alt}
          </p>
          <code className="text-xs font-mono text-cyan-300 bg-white/[0.06] px-2 py-1 rounded">
            {src}
          </code>
          {developerSlotNote && (
            <p className="text-xs text-slate-400 mt-2 max-w-xs">{developerSlotNote}</p>
          )}
        </div>
      )}

      {/* Subtle Dev Path Reference in footer corner during development inspection */}
      <div className="sr-only">
        Expected asset file path: {src}
      </div>
    </div>
  );
};
