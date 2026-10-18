import React, { useState } from 'react';
import { Image, X, ChevronRight, Eye, Camera } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { GraphicCard } from '../components/common/GraphicCard';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const { gallery } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'सर्व छायाचित्रे' },
    { id: 'family', label: 'बैठक व्यवस्था' },
    { id: 'food', label: 'खाद्यपदार्थ' },
    { id: 'exterior', label: 'परिसर व इमारत' },
    { id: 'ambience', label: 'वातावरण' },
  ];

  const filteredGallery = gallery.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const getGraphicType = (category: string, index: number): 'thali' | 'garden' | 'family' | 'curry' | 'exterior' => {
    if (category === 'food') return index % 2 === 0 ? 'thali' : 'curry';
    if (category === 'family') return 'family';
    return index % 2 === 0 ? 'garden' : 'exterior';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A74600]">
          <span>छायाचित्रे</span>
          <span aria-hidden="true">·</span>
          <span>हॉटेल ओम गार्डन</span>
        </div>
        <h1 className="font-serif-mr text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C130D]">
          छायाचित्र दालन
        </h1>
        <p className="text-sm sm:text-base text-[#57473D] leading-relaxed">
          हॉटेल ओम गार्डनचा निसर्गरम्य परिसर, बैठक व्यवस्था आणि ताजे खाद्यपदार्थ यांची दृश्य झलक.
        </p>

        {/* Authentic Photos Notice */}
        <div className="inline-flex items-center gap-2 p-3 rounded-lg bg-[#FFF0E0] border border-[#F2DAC0] text-xs text-[#1C130D]">
          <Camera className="w-4 h-4 text-[#FF9933] shrink-0" />
          <span>
            सध्या ही प्रात्यक्षिक मांडणी असून मालकांकडून मूळ आणि खरी छायाचित्रे व्यवस्थापन पॅनेलमधून जोडली जात आहेत.
          </span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-[#FF9933] text-[#1C130D] font-bold shadow-xs'
                : 'bg-white text-[#57473D] hover:bg-[#FFF9F2] border border-[#EEDCC8]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {filteredGallery.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#EEDCC8] p-12 text-center max-w-xl mx-auto space-y-3">
          <Image className="w-10 h-10 text-[#FF9933] mx-auto opacity-75" />
          <h3 className="font-serif-mr text-lg font-bold text-[#1C130D]">
            छायाचित्रे लवकरच उपलब्ध होतील.
          </h3>
          <p className="text-xs text-[#57473D]">
            या वर्गातील छायाचित्रे लवकरच जोडली जातील.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => {
            const graphicType = getGraphicType(item.category, index);
            return (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="bg-white rounded-xl border border-[#EEDCC8] overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <GraphicCard
                    type={graphicType}
                    title={item.title_mr}
                    className="h-56 w-full group-hover:scale-102 transition-transform duration-300"
                    showBadge={item.is_placeholder}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="p-2.5 rounded-full bg-white/90 text-[#1C130D] shadow-sm">
                      <Eye className="w-5 h-5 text-[#FF9933]" />
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-mr text-base font-bold text-[#1C130D] mb-1">
                      {item.title_mr}
                    </h3>
                    {item.caption_mr && (
                      <p className="text-xs text-[#57473D] leading-relaxed">
                        {item.caption_mr}
                      </p>
                    )}
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#EEDCC8]/60 flex items-center justify-between text-[11px] text-[#57473D]">
                    <span>हॉटेल ओम गार्डन</span>
                    <span className="text-[#A74600] font-semibold flex items-center gap-0.5">
                      पहा <ChevronRight className="w-3 h-3 text-[#FF9933]" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFF9F2] rounded-2xl max-w-2xl w-full overflow-hidden border border-[#FF9933]/30 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="p-4 bg-[#1C130D] text-white flex items-center justify-between">
              <h3 className="font-serif-mr text-lg font-bold text-[#FF9933]">
                {activeModalItem.title_mr}
              </h3>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="बंद करा"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <GraphicCard
                type={getGraphicType(activeModalItem.category, 0)}
                title={activeModalItem.title_mr}
                className="h-72 w-full"
                showBadge={activeModalItem.is_placeholder}
              />
              {activeModalItem.caption_mr && (
                <p className="text-sm text-[#57473D] leading-relaxed text-center">
                  {activeModalItem.caption_mr}
                </p>
              )}
              {activeModalItem.is_placeholder && (
                <p className="text-xs text-[#57473D]/60 text-center italic">
                  * मालकांकडून प्रत्यक्ष छायाचित्रे प्राप्त होताच या जागेवर जोडली जातील.
                </p>
              )}
            </div>

            <div className="p-4 bg-[#FAF2E6] border-t border-[#EEDCC8] flex justify-end">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2 rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] text-xs font-bold transition-colors shadow-xs"
              >
                बंद करा
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
