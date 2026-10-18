import React, { useState, useMemo } from 'react';
import { Search, Phone, Printer, Utensils, AlertCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const MenuPage: React.FC = () => {
  const { settings, categories, menuItems } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const publishedCategories = useMemo(
    () => categories.filter((c) => c.is_published).sort((a, b) => a.sort_order - b.sort_order),
    [categories]
  );

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      if (!item.is_published) return false;

      // Category filter
      if (selectedCategory !== 'all' && item.category_id !== selectedCategory) {
        return false;
      }

      // Diet filter
      if (dietFilter !== 'all' && item.diet_type !== dietFilter) {
        return false;
      }

      // Search query filter (search across Devanagari name & description)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name_mr.toLowerCase().includes(query);
        const matchesDesc = item.description_mr?.toLowerCase().includes(query) ?? false;
        return matchesName || matchesDesc;
      }

      return true;
    });
  }, [menuItems, selectedCategory, dietFilter, searchQuery]);

  // Group items by category for printable / structured view
  const categorizedItems = useMemo(() => {
    const map = new Map<string, typeof menuItems>();
    for (const item of filteredItems) {
      const list = map.get(item.category_id) || [];
      list.push(item);
      map.set(item.category_id, list);
    }
    return map;
  }, [filteredItems]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A74600]">
          <span>डिजिटल मेनू</span>
          <span aria-hidden="true">·</span>
          <span>हॉटेल ओम गार्डन</span>
        </div>
        <h1 className="font-serif-mr text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C130D]">
          खाद्यपदार्थांची यादी
        </h1>
        <p className="text-sm sm:text-base text-[#57473D] leading-relaxed">
          गावरान चवीचे रुचकर शाकाहारी आणि मांसाहारी भोजनाचे प्रकार. ताजे अन्न आणि पारंपारिक मसाल्यांचा संगम.
        </p>

        {/* Disclaimer Note */}
        <div className="inline-flex items-center gap-2 p-3 rounded-lg bg-[#FFF0E0] border border-[#F2DAC0] text-xs text-[#1C130D] mt-2">
          <AlertCircle className="w-4 h-4 text-[#FF9933] shrink-0" />
          <span>{settings.disclaimer_mr}</span>
        </div>
      </div>

      {/* Controls Bar: Search, Category, Diet Filters, Print */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#EEDCC8] shadow-xs space-y-4 no-print">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Marathi Live Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#57473D]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="पदार्थाचे नाव शोधा (उदा. भाकरी, चिकन, पिठलं...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-[#EEDCC8] focus:outline-hidden focus:ring-2 focus:ring-[#FF9933]/30 focus:border-[#FF9933] bg-[#FFF9F2]/60"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#57473D] hover:text-[#1C130D] absolute right-3 top-1/2 -translate-y-1/2"
              >
                साफ करा
              </button>
            )}
          </div>

          {/* Diet Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#FFF9F2] rounded-lg border border-[#EEDCC8] shrink-0">
            <button
              onClick={() => setDietFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                dietFilter === 'all'
                  ? 'bg-[#1C130D] text-[#FF9933] shadow-xs'
                  : 'text-[#57473D] hover:text-[#1C130D]'
              }`}
            >
              सर्व पदार्थ
            </button>
            <button
              onClick={() => setDietFilter('veg')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                dietFilter === 'veg'
                  ? 'bg-green-700 text-white shadow-xs'
                  : 'text-green-800 hover:bg-green-50'
              }`}
            >
              शाकाहारी
            </button>
            <button
              onClick={() => setDietFilter('non-veg')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                dietFilter === 'non-veg'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'text-red-800 hover:bg-red-50'
              }`}
            >
              मांसाहारी
            </button>
          </div>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-semibold text-[#1C130D] bg-[#FFF9F2] hover:bg-[#F5E8D4] border border-[#EEDCC8] rounded-lg inline-flex items-center justify-center gap-2 transition-colors shrink-0"
            title="मेनू प्रिंट करा"
          >
            <Printer className="w-3.5 h-3.5 text-[#FF9933]" />
            <span>प्रिंट मेनू</span>
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-[#FF9933] text-[#1C130D] font-bold shadow-xs'
                : 'bg-[#FFF9F2] text-[#57473D] hover:bg-[#F5E8D4] border border-[#EEDCC8]'
            }`}
          >
            सर्व वर्गवारी ({menuItems.filter((i) => i.is_published).length})
          </button>
          {publishedCategories.map((cat) => {
            const count = menuItems.filter(
              (i) => i.is_published && i.category_id === cat.id
            ).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#FF9933] text-[#1C130D] font-bold shadow-xs'
                    : 'bg-[#FFF9F2] text-[#57473D] hover:bg-[#F5E8D4] border border-[#EEDCC8]'
                }`}
              >
                {cat.name_mr} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Print-Only Header */}
      <div className="hidden print-only text-center mb-8 pb-4 border-b border-black">
        <h1 className="text-2xl font-bold">{settings.name_mr}</h1>
        <p className="text-sm">{settings.address_mr}, {settings.taluka_mr}, {settings.district_mr}</p>
        <p className="text-xs">संपर्क: {settings.primary_phone} / {settings.secondary_phone}</p>
      </div>

      {/* Menu Content Display */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#EEDCC8] p-12 text-center max-w-xl mx-auto space-y-3">
          <Utensils className="w-10 h-10 text-[#FF9933] mx-auto opacity-75" />
          <h3 className="font-serif-mr text-lg font-bold text-[#1C130D]">
            सध्या खाद्यपदार्थांची यादी उपलब्ध नाही.
          </h3>
          <p className="text-xs text-[#57473D]">
            आपण निवडलेल्या निकषानुसार कोणतेही पदार्थ आढळले नाहीत. कृपया इतर पर्याय निवडा किंवा फोनवर चौकशी करा.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setDietFilter('all');
              }}
              className="text-xs font-semibold text-[#A74600] underline underline-offset-4"
            >
              सर्व फिल्टर्स रीसेट करा
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          {publishedCategories.map((category) => {
            const items = categorizedItems.get(category.id);
            if (!items || items.length === 0) return null;

            return (
              <div key={category.id} className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-[#EEDCC8]">
                  <h2 className="font-serif-mr text-xl sm:text-2xl font-bold text-[#1C130D]">
                    {category.name_mr}
                  </h2>
                  <span className="text-xs text-[#57473D] font-medium">
                    ({items.length} पदार्थ)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className={`bg-white rounded-xl border p-5 flex flex-col justify-between transition-all ${
                        item.is_available
                          ? 'border-[#EEDCC8] shadow-2xs hover:shadow-sm'
                          : 'border-slate-200 opacity-60 bg-slate-50'
                      }`}
                    >
                      <div>
                        {/* Unboxed Metadata Line */}
                        <div className="flex items-center gap-2 text-xs text-[#57473D] mb-2">
                          <span
                            className={`font-semibold ${
                              item.diet_type === 'veg' ? 'text-green-700' : 'text-red-700'
                            }`}
                          >
                            {item.diet_type === 'veg' ? 'शाकाहारी' : 'मांसाहारी'}
                          </span>
                          {item.spice_level && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span>
                                {item.spice_level === 'spicy'
                                  ? 'झणझणीत'
                                  : item.spice_level === 'medium'
                                  ? 'मध्यम'
                                  : 'सौम्य'}
                              </span>
                            </>
                          )}
                          {item.serving_note_mr && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span>{item.serving_note_mr}</span>
                            </>
                          )}
                        </div>

                        {/* Item Name */}
                        <h3 className="font-serif-mr text-lg font-bold text-[#1C130D] mb-1.5 flex items-center justify-between">
                          <span>{item.name_mr}</span>
                        </h3>

                        {/* Description */}
                        {item.description_mr && (
                          <p className="text-xs text-[#57473D] leading-relaxed mb-4">
                            {item.description_mr}
                          </p>
                        )}
                      </div>

                      {/* Pricing & Availability Bottom Row */}
                      <div className="pt-3 border-t border-[#EEDCC8]/60 flex items-center justify-between">
                        <div>
                          {item.is_available ? (
                            item.price_inr !== null ? (
                              <span className="text-base font-bold text-[#943C00] font-mono tabular-nums">
                                ₹{item.price_inr}
                              </span>
                            ) : (
                              <span className="text-xs text-[#57473D] italic">
                                किंमत जाणून घेण्यासाठी संपर्क साधा
                              </span>
                            )
                          ) : (
                            <span className="text-xs font-semibold text-amber-800">
                              सध्या उपलब्ध नाही
                            </span>
                          )}

                          {item.price_note_mr && (
                            <span className="text-[11px] text-[#57473D]/80 block">
                              {item.price_note_mr}
                            </span>
                          )}
                        </div>

                        {item.is_available && (
                          <a
                            href={`tel:+91${settings.primary_phone}`}
                            className="text-xs font-semibold text-[#A74600] hover:text-[#FF9933] inline-flex items-center gap-1 transition-colors"
                          >
                            <Phone className="w-3 h-3 text-[#FF9933]" />
                            कॉल करा
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Inquiry Call to Action Box */}
      <div className="bg-[#1C130D] text-[#FFF9F2] p-6 sm:p-8 rounded-2xl border border-[#382619] flex flex-col md:flex-row items-center justify-between gap-6 no-print">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="font-serif-mr text-xl font-bold text-[#FF9933]">
            मोठ्या समूहासाठी किंवा विशेष जेवणासाठी चौकशी?
          </h3>
          <p className="text-xs sm:text-sm text-[#FFF9F2]/80">
            कौटुंबिक कार्यक्रम, प्रवासातील समूह अथवा पूर्वतयारीसाठी थेट फोनवर संपर्क साधा.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`tel:+91${settings.primary_phone}`}
            className="px-5 py-2.5 rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] font-bold text-sm transition-colors inline-flex items-center gap-2 shadow-xs active:scale-98"
          >
            <Phone className="w-4 h-4 fill-current" />
            +91 {settings.primary_phone}
          </a>
          <a
            href={`tel:+91${settings.secondary_phone}`}
            className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-colors"
          >
            +91 {settings.secondary_phone}
          </a>
        </div>
      </div>
    </div>
  );
};
