import React, { useState } from 'react';
import { Megaphone, X } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const DevanagariBanner: React.FC = () => {
  const { settings } = useStore();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !settings.announcement_enabled || !settings.active_announcement) {
    return null;
  }

  return (
    <div className="bg-[#FF9933] text-[#1C130D] text-xs sm:text-sm font-semibold py-1.5 px-4 text-center border-b border-[#E67E17] flex items-center justify-center relative shadow-xs">
      <div className="flex items-center gap-2 max-w-4xl mx-auto truncate pr-6">
        <Megaphone className="w-4 h-4 shrink-0 text-[#1C130D]" />
        <span className="truncate">{settings.active_announcement}</span>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-[#E67E17]/40 rounded transition-colors text-[#1C130D]"
        aria-label="सूचना बंद करा"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
