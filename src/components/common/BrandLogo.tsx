import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'sm',
  showSubtitle = false,
  className = '',
}) => {
  // Dimensions
  const iconDimensions = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }[size];

  const titleSizes = {
    sm: 'text-lg sm:text-xl font-bold',
    md: 'text-xl sm:text-2xl font-bold',
    lg: 'text-2xl sm:text-3xl font-bold',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Professional Om Garden Bespoke Icon */}
      <div
        className={`relative ${iconDimensions} rounded-xl bg-gradient-to-br from-[#382214] to-[#1A0E08] border border-[#FF9933]/50 flex items-center justify-center shrink-0 shadow-xs group-hover:border-[#FF9933] transition-colors`}
      >
        {/* Subtle leaf ring & Om */}
        <svg
          viewBox="0 0 40 40"
          className="w-full h-full p-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Ring */}
          <circle
            cx="20"
            cy="20"
            r="16.5"
            stroke="#FF9933"
            strokeWidth="1.2"
            strokeDasharray="45 5"
            strokeOpacity="0.85"
          />
          <circle
            cx="20"
            cy="20"
            r="14.5"
            stroke="#FFA84D"
            strokeWidth="0.5"
            strokeOpacity="0.35"
          />

          {/* Lower Garden Leaf Flourish */}
          <path
            d="M12 28 C15 31, 18 30.5, 20 29 C22 30.5, 25 31, 28 28 C25 29.5, 21.5 29.5, 20 28 C18.5 29.5, 15 29.5, 12 28 Z"
            fill="#FF9933"
          />

          {/* Central Sacred Om Glyph */}
          <text
            x="20"
            y="24.5"
            textAnchor="middle"
            fontFamily="'Noto Serif Devanagari', 'Noto Sans Devanagari', serif"
            fontSize="18"
            fontWeight="bold"
            fill="#FF9933"
          >
            ॐ
          </text>
        </svg>
      </div>

      {/* Reduced & Refined Wordmark */}
      <div className="flex flex-col">
        <span
          className={`font-serif-mr ${titleSizes} tracking-normal text-[#FFF9F2] group-hover:text-[#FF9933] transition-colors whitespace-nowrap leading-tight`}
        >
          हॉटेल ओम गार्डन
        </span>
        {showSubtitle && (
          <span className="text-[10px] text-[#FF9933] font-medium tracking-wider uppercase leading-none mt-0.5">
            फॅमिली रेस्टॉरंट · मांदळी
          </span>
        )}
      </div>
    </div>
  );
};
