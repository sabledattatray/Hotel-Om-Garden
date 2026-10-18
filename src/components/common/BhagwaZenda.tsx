import React from 'react';

interface BhagwaZendaProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero-max';
  animate?: boolean;
}

export const BhagwaZenda: React.FC<BhagwaZendaProps> = ({
  className = '',
  size = 'md',
  animate = true,
}) => {
  // Dimension profiles
  const sizeStyles = {
    sm: {
      wrapper: 'w-8 h-8',
      viewBox: '0 0 100 100',
    },
    md: {
      wrapper: 'w-12 h-14',
      viewBox: '0 0 120 140',
    },
    lg: {
      wrapper: 'w-24 h-28',
      viewBox: '0 0 160 190',
    },
    xl: {
      wrapper: 'w-36 h-44 sm:w-44 sm:h-52',
      viewBox: '0 0 200 240',
    },
    'hero-max': {
      wrapper: 'w-56 h-64 sm:w-72 sm:h-84 lg:w-80 lg:h-96',
      viewBox: '0 0 240 280',
    },
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${sizeStyles.wrapper} ${className}`}
    >
      <svg
        viewBox="0 0 220 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-[0_8px_25px_rgba(255,153,51,0.45)]"
      >
        <defs>
          {/* Main Saffron Silk Fabric Gradient */}
          <linearGradient id="bhagwaSilk" x1="0%" y1="0%" x2="100%" y2="85%">
            <stop offset="0%" stopColor="#FFA64D" />
            <stop offset="25%" stopColor="#FF9933" />
            <stop offset="60%" stopColor="#E65500" />
            <stop offset="85%" stopColor="#CC4400" />
            <stop offset="100%" stopColor="#992E00" />
          </linearGradient>

          {/* Wind Wave Shadow Overlay */}
          <linearGradient id="waveShadow" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0" />
            <stop offset="25%" stopColor="#000000" stopOpacity="0.22" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.28" />
            <stop offset="70%" stopColor="#000000" stopOpacity="0.18" />
            <stop offset="90%" stopColor="#FFFFFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
          </linearGradient>

          {/* Brass / Golden Spear Pole (काठी) Gradient */}
          <linearGradient id="poleGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9C6B19" />
            <stop offset="35%" stopColor="#F5D075" />
            <stop offset="65%" stopColor="#FFECC0" />
            <stop offset="85%" stopColor="#DCA432" />
            <stop offset="100%" stopColor="#7A5210" />
          </linearGradient>

          {/* Spearhead Radiant Gradient */}
          <linearGradient id="spearTip" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="40%" stopColor="#FFD369" />
            <stop offset="100%" stopColor="#C4881C" />
          </linearGradient>

          {/* Golden Silk Fringe Border */}
          <linearGradient id="fringeGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF1B8" />
            <stop offset="50%" stopColor="#FFD15C" />
            <stop offset="100%" stopColor="#D49419" />
          </linearGradient>
        </defs>

        {/* ============================================================== */}
        {/* 1. TALL FLAG POLE / STICK (काठी / ध्वजस्तंभ)                     */}
        {/* ============================================================== */}
        <g id="flag-pole">
          {/* Main Pole Shaft (काठी) */}
          <rect
            x="20"
            y="28"
            width="6.5"
            height="228"
            rx="3"
            fill="url(#poleGold)"
            stroke="#5E3E07"
            strokeWidth="0.75"
          />

          {/* Brass Grip Rings along the pole */}
          <rect x="18.5" y="46" width="9.5" height="4" rx="1.5" fill="url(#poleGold)" stroke="#664408" strokeWidth="0.5" />
          <rect x="18.5" y="105" width="9.5" height="4" rx="1.5" fill="url(#poleGold)" stroke="#664408" strokeWidth="0.5" />
          <rect x="18.5" y="165" width="9.5" height="4" rx="1.5" fill="url(#poleGold)" stroke="#664408" strokeWidth="0.5" />

          {/* Royal Spearhead Finial (भाला - Spear Tip) */}
          {/* Base collar */}
          <ellipse cx="23.25" cy="27" rx="6" ry="3" fill="url(#poleGold)" stroke="#664408" strokeWidth="0.75" />
          <ellipse cx="23.25" cy="22" rx="4.5" ry="2.2" fill="url(#poleGold)" stroke="#664408" strokeWidth="0.5" />

          {/* Sharp Maratha Spearhead Blade */}
          <path
            d="M23.25 2 
               C25.5 10, 29 16, 29 22 
               C26 23.5, 20.5 23.5, 17.5 22 
               C17.5 16, 21 10, 23.25 2 Z"
            fill="url(#spearTip)"
            stroke="#664408"
            strokeWidth="0.8"
          />
          {/* Central blade ridge spine */}
          <line x1="23.25" y1="3" x2="23.25" y2="23" stroke="#FFFDF5" strokeWidth="1" strokeLinecap="round" />

          {/* Decorative Red/Saffron Tassel Collar (गोंडा) */}
          <circle cx="23.25" cy="28.5" r="3.2" fill="#D63A00" stroke="#FFD700" strokeWidth="0.75" />
          <path d="M22 30 C20 37, 18 42, 16 46" stroke="#FF9933" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M24 30 C25 38, 27 43, 29 47" stroke="#FF9933" strokeWidth="1.6" strokeLinecap="round" />
        </g>

        {/* ============================================================== */}
        {/* 2. WAVING SILK BHAGWA FLAG (डौलदार फडकणारा दुतोंडी भगवा ध्वज)     */}
        {/* ============================================================== */}
        <g
          id="waving-flag"
          className={animate ? 'animate-flag-wave' : ''}
          style={{ transformOrigin: '24px 50px' }}
        >
          {/* Fabric Tie Loops attaching flag to pole */}
          <path d="M21 48 C24 45, 27 45, 27 48" stroke="#FFE79A" strokeWidth="2" strokeLinecap="round" />
          <path d="M21 106 C24 103, 27 103, 27 106" stroke="#FFE79A" strokeWidth="2" strokeLinecap="round" />
          <path d="M21 164 C24 161, 27 161, 27 164" stroke="#FFE79A" strokeWidth="2" strokeLinecap="round" />

          {/* Group for fluttering flag tips */}
          <g className={animate ? 'animate-flag-tip' : ''}>
            {/* Back Fold Under-Shadow */}
            <path
              d="M26 48
                 C65 40, 110 65, 185 36
                 C160 85, 135 102, 115 106
                 C150 112, 185 125, 210 148
                 C140 168, 85 142, 26 166
                 Z"
              fill="#8A2700"
              opacity="0.35"
              transform="translate(2, 4)"
            />

            {/* Main Double Swallowtail Bhagwa Flag (दुतोंडी भगवा जरीपटका) */}
            <path
              d="M25 46
                 C70 38, 115 62, 186 35
                 C158 84, 132 100, 114 104
                 C148 110, 182 122, 208 144
                 C138 165, 84 140, 25 163
                 Z"
              fill="url(#bhagwaSilk)"
            />

            {/* Wind Wave Folds & Dynamic Silk Highlights */}
            <path
              d="M25 46
                 C70 38, 115 62, 186 35
                 C158 84, 132 100, 114 104
                 C148 110, 182 122, 208 144
                 C138 165, 84 140, 25 163
                 Z"
              fill="url(#waveShadow)"
              style={{ mixBlendMode: 'overlay' }}
            />

            {/* Golden Silk Fringe Border along Outer Rim */}
            <path
              d="M25 46
                 C70 38, 115 62, 186 35
                 C158 84, 132 100, 114 104
                 C148 110, 182 122, 208 144
                 C138 165, 84 140, 25 163"
              stroke="url(#fringeGold)"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeDasharray="180 4"
            />

            {/* Inner Silk Ripple Waves in Wind */}
            <path
              d="M45 56 C80 50, 105 75, 140 50"
              stroke="#FFF2C7"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.55"
            />
            <path
              d="M40 85 C85 80, 110 105, 148 85"
              stroke="#FFF2C7"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M45 116 C85 118, 115 130, 160 120"
              stroke="#FFF2C7"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              d="M40 145 C75 142, 105 152, 150 144"
              stroke="#FFF2C7"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.4"
            />

            {/* Traditional Royal Maratha Sun Emblem / Suryavanshi Ray inside Flag */}
            <g transform="translate(68, 88)" opacity="0.4">
              <circle cx="0" cy="0" r="14" stroke="#FFF7D6" strokeWidth="1.2" strokeDasharray="3 2" />
              <circle cx="0" cy="0" r="8" fill="#FFF7D6" />
              <line x1="0" y1="-18" x2="0" y2="-10" stroke="#FFF7D6" strokeWidth="1.2" />
              <line x1="0" y1="10" x2="0" y2="18" stroke="#FFF7D6" strokeWidth="1.2" />
              <line x1="-18" y1="0" x2="-10" y2="0" stroke="#FFF7D6" strokeWidth="1.2" />
              <line x1="10" y1="0" x2="18" y2="0" stroke="#FFF7D6" strokeWidth="1.2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
