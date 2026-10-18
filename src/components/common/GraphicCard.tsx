import React from 'react';
import { Utensils, Users, TreePine, Sparkles } from 'lucide-react';

interface GraphicCardProps {
  type: 'thali' | 'garden' | 'family' | 'curry' | 'bhakri' | 'ambience' | 'exterior';
  title?: string;
  className?: string;
  showBadge?: boolean;
}

export const GraphicCard: React.FC<GraphicCardProps> = ({
  type,
  title,
  className = 'h-52 w-full',
  showBadge = true,
}) => {
  const getGraphic = () => {
    switch (type) {
      case 'thali':
        return {
          gradient: 'from-[#421E08] via-[#281306] to-[#170B04]',
          icon: Utensils,
          pattern: (
            <svg className="w-full h-full opacity-30" viewBox="0 0 200 140" fill="none">
              <circle cx="100" cy="70" r="48" stroke="#FF9933" strokeWidth="2.5" />
              <circle cx="100" cy="70" r="42" stroke="#FFF9F2" strokeWidth="1" strokeDasharray="3 3" />
              {/* Thali Bowls */}
              <circle cx="70" cy="50" r="14" fill="#FF9933" fillOpacity="0.35" stroke="#FF9933" />
              <circle cx="100" cy="42" r="14" fill="#FF9933" fillOpacity="0.35" stroke="#FF9933" />
              <circle cx="130" cy="50" r="14" fill="#FF9933" fillOpacity="0.35" stroke="#FF9933" />
              <circle cx="75" cy="85" r="13" fill="#FF9933" fillOpacity="0.35" stroke="#FF9933" />
              <circle cx="125" cy="85" r="13" fill="#FF9933" fillOpacity="0.35" stroke="#FF9933" />
              <circle cx="100" cy="78" r="16" fill="#FFF9F2" fillOpacity="0.25" stroke="#FFF9F2" />
            </svg>
          ),
          defaultTitle: 'गावरान रुचकर थाळी',
        };
      case 'garden':
      case 'exterior':
        return {
          gradient: 'from-[#4E240A] via-[#2E1607] to-[#1A0D04]',
          icon: TreePine,
          pattern: (
            <svg className="w-full h-full opacity-30" viewBox="0 0 200 140" fill="none">
              <path d="M20 120 Q50 60 80 120" stroke="#FF9933" strokeWidth="1.5" fill="none" />
              <path d="M120 120 Q150 50 180 120" stroke="#FF9933" strokeWidth="1.5" fill="none" />
              <path d="M70 120 L100 40 L130 120 Z" stroke="#FFF9F2" strokeWidth="1.5" fill="none" />
              <circle cx="100" cy="35" r="8" fill="#FF9933" fillOpacity="0.5" />
              <line x1="10" y1="120" x2="190" y2="120" stroke="#FF9933" strokeWidth="2" />
            </svg>
          ),
          defaultTitle: 'गार्डन रेस्टॉरंट परिसर',
        };
      case 'family':
        return {
          gradient: 'from-[#3A1B07] via-[#241105] to-[#140A03]',
          icon: Users,
          pattern: (
            <svg className="w-full h-full opacity-30" viewBox="0 0 200 140" fill="none">
              <rect x="50" y="55" width="100" height="40" rx="6" stroke="#FF9933" strokeWidth="2" />
              <circle cx="40" cy="75" r="10" stroke="#FFF9F2" strokeWidth="1.5" />
              <circle cx="160" cy="75" r="10" stroke="#FFF9F2" strokeWidth="1.5" />
              <circle cx="80" cy="40" r="10" stroke="#FFF9F2" strokeWidth="1.5" />
              <circle cx="120" cy="40" r="10" stroke="#FFF9F2" strokeWidth="1.5" />
              <circle cx="100" cy="75" r="6" fill="#FF9933" />
            </svg>
          ),
          defaultTitle: 'कुटुंबासाठी बैठक व्यवस्था',
        };
      case 'curry':
      default:
        return {
          gradient: 'from-[#472109] via-[#2A1406] to-[#160B04]',
          icon: Sparkles,
          pattern: (
            <svg className="w-full h-full opacity-30" viewBox="0 0 200 140" fill="none">
              <ellipse cx="100" cy="85" rx="55" ry="25" stroke="#FF9933" strokeWidth="2" />
              <path d="M45 85 Q100 120 155 85" stroke="#FF9933" strokeWidth="1.5" fill="none" />
              <path d="M85 55 Q95 40 90 30" stroke="#FFF9F2" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M100 55 Q110 38 105 25" stroke="#FFF9F2" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M115 55 Q125 42 120 32" stroke="#FFF9F2" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ),
          defaultTitle: 'अस्सल गावरान चव',
        };
    }
  };

  const { gradient, icon: Icon, pattern, defaultTitle } = getGraphic();

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${gradient} border border-[#4A2E1C] flex flex-col items-center justify-center p-4 text-center select-none shadow-sm ${className}`}
    >
      {/* Background vector geometry */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {pattern}
      </div>

      {/* Center visual emblem */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-[#FF9933]/20 border border-[#FF9933]/40 flex items-center justify-center text-[#FF9933] mb-2.5 shadow-sm">
          <Icon className="w-6 h-6 stroke-[1.75]" />
        </div>
        <span className="font-serif-mr text-sm sm:text-base font-semibold text-[#FFF9F2] tracking-wide">
          {title || defaultTitle}
        </span>
      </div>

      {/* Client notice tag */}
      {showBadge && (
        <div className="absolute bottom-2 left-2 right-2 text-center">
          <span className="text-[10px] text-[#FFF9F2]/70 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded">
            हॉटेल ओम गार्डन · प्रात्यक्षिक दृश्य
          </span>
        </div>
      )}
    </div>
  );
};
