import React from 'react';
import { Phone, MapPin, MessageSquareText } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

interface MobileActionBarProps {
  onNavigate: (path: string) => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onNavigate }) => {
  const { settings } = useStore();

  return (
    <div
      id="mobile-action-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#140D09]/95 backdrop-blur-md border-t border-[#382619] py-2 px-3 shadow-lg"
      style={{ maxHeight: '68px' }}
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:+91${settings.primary_phone}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] font-bold text-sm transition-colors active:scale-98 shadow-sm"
          aria-label={`कॉल करा ${settings.primary_phone}`}
        >
          <Phone className="w-4 h-4 fill-current shrink-0" />
          <span className="truncate">आता कॉल करा</span>
        </a>

        <button
          onClick={() => {
            onNavigate('/sampark');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#281B12] text-[#FFF9F2] hover:bg-[#342217] border border-[#3D281B] font-semibold text-sm transition-colors active:scale-98"
          aria-label="पत्ता व चौकशी"
        >
          <MapPin className="w-4 h-4 text-[#FF9933] shrink-0" />
          <span className="truncate">पत्ता व चौकशी</span>
        </button>
      </div>
    </div>
  );
};
