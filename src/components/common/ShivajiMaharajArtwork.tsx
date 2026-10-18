import React from 'react';

interface ShivajiMaharajArtworkProps {
  className?: string;
  variant?: 'silhouette' | 'medallion' | 'backdrop';
}

export const ShivajiMaharajArtwork: React.FC<ShivajiMaharajArtworkProps> = ({
  className = '',
  variant = 'medallion',
}) => {
  if (variant === 'backdrop') {
    // Subtle, majestic artistic backdrop of Shivaji Maharaj on horse with Bhagwa Dhwaj
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none select-none overflow-hidden ${className}`}
      >
        <svg
          viewBox="0 0 500 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-18 drop-shadow-[0_0_40px_rgba(255,153,51,0.25)]"
        >
          <defs>
            <linearGradient id="horseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFB366" />
              <stop offset="50%" stop-color="#FF9933" />
              <stop offset="100%" stop-color="#B34700" />
            </linearGradient>
            <linearGradient id="auraGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stop-color="#FF9933" stop-opacity="0.35" />
              <stop offset="100%" stop-color="#1C130D" stop-opacity="0" />
            </linearGradient>
          </defs>

          {/* Majestic Royal Sun Halo behind Maharaj */}
          <circle cx="280" cy="180" r="140" fill="url(#auraGrad)" />
          <circle cx="280" cy="180" r="130" stroke="#FF9933" strokeWidth="1" strokeDasharray="6 4" strokeOpacity="0.4" />

          {/* Fluttering Bhagwa Dhwaj behind Horse and Maharaj */}
          <g transform="translate(190, 40)">
            <line x1="0" y1="0" x2="0" y2="180" stroke="#FFB366" strokeWidth="4" strokeLinecap="round" />
            <path
              d="M0 10 
                 C40 5, 80 20, 150 10 
                 C120 40, 100 48, 80 50 
                 C115 54, 140 62, 160 75 
                 C100 85, 60 70, 0 85 
                 Z"
              fill="#FF9933"
              fillOpacity="0.75"
              stroke="#FFE0B2"
              strokeWidth="1.5"
            />
          </g>

          {/* Equestrian Silhouette of Chhatrapati Shivaji Maharaj */}
          <g fill="url(#horseGrad)">
            {/* Sword raised high in hand */}
            <path d="M260 70 L340 18 L345 22 L266 74 Z" fill="#FFE2B8" />
            <path d="M258 68 L266 76 L254 78 Z" fill="#FF9933" />

            {/* Maharaj - Royal Jiretop (जिरेटोप) & Face Profile */}
            {/* Jiretop with Tura */}
            <path d="M242 75 C246 64, 256 60, 264 68 C270 74, 268 85, 260 88 C250 88, 244 82, 242 75 Z" />
            <path d="M262 62 C265 52, 272 50, 274 54 C270 58, 266 60, 262 62 Z" fill="#FFE4B5" /> {/* Tura */}

            {/* Beard and Royal Face */}
            <path d="M260 84 C268 86, 272 92, 268 98 C262 102, 255 100, 252 96 Z" />
            {/* Royal Angarkha / Torso */}
            <path d="M245 92 C240 105, 235 125, 238 145 C250 150, 265 145, 275 138 C280 120, 272 100, 260 92 Z" />
            {/* Arm brandishing sword */}
            <path d="M255 95 C265 85, 275 80, 280 72 C275 70, 265 72, 255 78 Z" />
            {/* Royal Scarf / Shela billowing backward */}
            <path d="M236 105 C210 115, 185 110, 160 120 C180 125, 210 128, 235 125 Z" fillOpacity="0.85" />

            {/* Galloping Warhorse Body */}
            {/* Horse Head & Ears */}
            <path d="M340 160 C355 148, 365 130, 360 115 C355 120, 350 128, 345 130 C340 120, 335 115, 330 125 C320 145, 305 160, 290 170 Z" />
            {/* Horse Mane (अश्वाची आयाळ) */}
            <path d="M325 135 C320 150, 310 162, 295 172 C305 168, 315 158, 320 145 Z" fill="#FFE4B5" />
            {/* Horse Neck & Chest (विशाल छाती) */}
            <path d="M340 165 C325 185, 315 210, 310 235 C285 245, 260 240, 240 220 C250 185, 280 170, 325 160 Z" />
            {/* Horse Back & Flanks */}
            <path d="M260 185 C220 190, 180 205, 150 230 C175 255, 220 260, 265 245 C285 235, 280 200, 260 185 Z" />

            {/* Forelegs Raised in Gallop (पुढील उचललेले पाय) */}
            <path d="M315 220 C340 235, 365 240, 385 250 C375 258, 350 252, 330 242 C320 250, 305 245, 300 235 Z" />
            <path d="M305 235 C325 255, 350 275, 370 295 C360 300, 340 285, 320 268 C310 260, 300 245, 305 235 Z" />

            {/* Hind Legs in Gallop (मागील पाय) */}
            <path d="M165 230 C150 255, 135 285, 120 320 C130 325, 145 305, 160 280 C175 260, 185 245, 165 230 Z" />
            <path d="M185 235 C175 265, 165 300, 155 340 C165 342, 180 320, 195 290 C205 270, 205 250, 185 235 Z" />

            {/* Horse Flowing Tail (अश्वाची झुलणारी शेपटी) */}
            <path d="M150 220 C120 235, 90 265, 70 310 C85 300, 110 270, 135 245 C145 235, 150 225, 150 220 Z" fillOpacity="0.9" />
          </g>
        </svg>
      </div>
    );
  }

  // Medallion Badge Variant (for header/hero greeting)
  return (
    <div
      className={`relative rounded-2xl bg-gradient-to-br from-[#2E180B] via-[#1C1008] to-[#120803] p-3.5 border border-[#FF9933]/40 shadow-lg flex items-center gap-3.5 ${className}`}
    >
      {/* Saffron Glow Accent */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF9933] to-[#B34700] p-0.5 shadow-md shrink-0 flex items-center justify-center">
        <div className="w-full h-full rounded-[10px] bg-[#1A0E07] flex items-center justify-center p-1 relative overflow-hidden">
          {/* Miniature Silhouette */}
          <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
            {/* Bhagwa Dhwaj */}
            <path d="M8 6 L8 42" stroke="#FF9933" strokeWidth="1.5" strokeLinecap="round" />
            <path
              d="M8 8 C14 6, 20 10, 28 7 C24 13, 20 15, 17 16 C22 17, 26 19, 29 22 C20 24, 15 20, 8 23 Z"
              fill="#FF9933"
            />
            {/* Raised Sword */}
            <line x1="26" y1="12" x2="38" y2="4" stroke="#FFE4A0" strokeWidth="1.5" strokeLinecap="round" />
            {/* Maharaj Silhouette */}
            <circle cx="25" cy="14" r="3.5" fill="#FFA34D" />
            <path d="M22 18 C22 22, 27 24, 30 22 C31 19, 28 17, 24 17 Z" fill="#FFA34D" />
            {/* Galloping Horse Silhouette */}
            <path
              d="M36 24 C34 20, 31 19, 28 22 C24 24, 20 25, 16 28 C18 31, 23 32, 28 30 C32 29, 34 26, 36 24 Z"
              fill="#FF9933"
            />
            <path d="M30 29 L38 35" stroke="#FF9933" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 29 L12 40" stroke="#FF9933" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-[#FF9933] font-serif-mr text-xs sm:text-sm font-bold">
          <span>॥ जय शिवराय ॥</span>
        </div>
        <span className="text-[11px] text-[#FFF9F2]/75 font-medium leading-tight mt-0.5">
          छत्रपती शिवाजी महाराजांच्या प्रेरणेने सेवा
        </span>
      </div>
    </div>
  );
};
