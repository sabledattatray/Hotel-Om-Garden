import React from 'react';
import {
  Phone,
  ArrowRight,
  MapPin,
  Utensils,
  Users,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { GraphicCard } from '../components/common/GraphicCard';
import { BhagwaZenda } from '../components/common/BhagwaZenda';
import { ShivajiMaharajArtwork } from '../components/common/ShivajiMaharajArtwork';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { settings, menuItems, facilities, gallery } = useStore();

  const featuredItems = menuItems
    .filter((item) => item.is_published && item.is_featured)
    .slice(0, 6);

  const verifiedFacilities = facilities.filter(
    (item) => item.is_published && item.is_verified
  );

  const featuredGallery = gallery.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* Hero Section */}
      <section className="relative bg-[#1C130D] text-[#FFF9F2] overflow-hidden pt-10 pb-16 lg:py-24 border-b border-[#382619]">
        {/* Saffron warm decorative glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,153,51,0.15),transparent_70%)] pointer-events-none" />

        {/* Artistic Watermark Backdrop: Equestrian Chhatrapati Shivaji Maharaj with Bhagwa Dhwaj */}
        <ShivajiMaharajArtwork
          variant="backdrop"
          className="absolute -right-8 lg:right-4 top-2 bottom-0 w-[420px] sm:w-[540px] lg:w-[640px] pointer-events-none z-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow with Bhagwa Zenda & Jai Shivray Salute */}
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wider text-[#FF9933] flex-wrap">
                <BhagwaZenda size="sm" />
                <span className="font-serif-mr text-xs sm:text-sm text-[#FFE4A0] font-bold">
                  ॥ जय शिवराय ॥
                </span>
                <span aria-hidden="true" className="opacity-60">·</span>
                <span>आपले मनःपूर्वक स्वागत!</span>
                <span aria-hidden="true" className="opacity-60">·</span>
                <span>मांदळी, कर्जत</span>
              </div>

              {/* Main Heading with Special Radiant Glow, Shimmer & Traditional Flourish */}
              <div className="relative inline-block space-y-3">
                {/* Ambient Warm Halo Glow behind text */}
                <div
                  aria-hidden="true"
                  className="hero-glow-effect absolute -inset-x-6 -inset-y-3 bg-[radial-gradient(ellipse_at_center,rgba(255,153,51,0.28),transparent_70%)] blur-2xl pointer-events-none -z-10 rounded-full"
                />

                <h1 className="font-serif-mr text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-balance leading-[1.12] drop-shadow-[0_4px_28px_rgba(255,153,51,0.38)]">
                  <span className="hero-shimmer-text">
                    हॉटेल ओम गार्डन
                  </span>
                </h1>

                {/* Traditional Devanagari Saffron Flourish Divider */}
                <div className="flex items-center gap-2.5 max-w-xs sm:max-w-sm pt-1">
                  <div className="h-[1.5px] flex-1 bg-gradient-to-r from-[#FF9933]/0 via-[#FF9933] to-[#FF9933]/50" />
                  <span className="text-[#FF9933] text-xs font-serif-mr tracking-widest select-none font-semibold">
                    ✦ ॐ ✦
                  </span>
                  <div className="h-[1.5px] flex-1 bg-gradient-to-l from-[#FF9933]/0 via-[#FF9933] to-[#FF9933]/50" />
                </div>
              </div>

              {/* Supporting Lines */}
              <div className="space-y-2 text-[#FFF9F2]/90 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl">
                <p className="text-[#FF9933] font-serif-mr text-xl sm:text-2xl font-semibold">
                  {settings.tagline_mr}
                </p>
                <p className="text-base text-[#FFF9F2]/80 font-normal">
                  अहमदनगर–सोलापूर रोड, मांदळी येथे आपले स्वागत आहे. महामार्गाने प्रवास करताना किंवा कुटुंबासोबत निवांत स्नेहभोजनासाठी उत्तम आतिथ्य.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('/khadyapadarth')}
                  className="px-6 py-3 rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] font-bold text-sm sm:text-base transition-colors shadow-sm inline-flex items-center gap-2 whitespace-nowrap active:scale-98"
                >
                  <Utensils className="w-4 h-4" />
                  खाद्यपदार्थ पाहा
                </button>

                <a
                  href={`tel:+91${settings.primary_phone}`}
                  className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm sm:text-base transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-[#FF9933] fill-current" />
                  आता कॉल करा
                </a>

                <button
                  onClick={() => onNavigate('/sampark')}
                  className="px-5 py-3 rounded-lg text-[#FFF9F2]/80 hover:text-white hover:bg-white/5 text-sm transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4 text-[#FF9933]" />
                  येण्याचा मार्ग पाहा
                </button>
              </div>

              {/* Verified Contact Details Quick Row */}
              <div className="pt-4 border-t border-[#382619] flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#FFF9F2]/70">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#FF9933]" />
                  <span>प्राथमिक: +91 {settings.primary_phone}</span>
                </div>
                <span aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#FF9933]" />
                  <span>दुय्यम: +91 {settings.secondary_phone}</span>
                </div>
              </div>
            </div>

            {/* Right Graphic/Showcase Card with Shivaji Maharaj Medallion */}
            <div className="lg:col-span-5 space-y-3.5">
              {/* Royal Medallion of Chhatrapati Shivaji Maharaj */}
              <ShivajiMaharajArtwork variant="medallion" />

              <div className="relative rounded-2xl p-2 bg-[#281B12] border border-[#382619] shadow-xl">
                <GraphicCard
                  type="thali"
                  title="अस्सल गावरान चव व आतिथ्य"
                  className="h-72 sm:h-80 w-full rounded-xl"
                  showBadge={true}
                />
                <div className="p-3 text-center flex items-center justify-center gap-2">
                  <BhagwaZenda size="sm" />
                  <p className="text-xs text-[#FF9933] font-semibold">
                    उत्तम जेवण आणि उत्तम सुविधा हेच आमचे ध्येय
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Column Feature Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-[#EEDCC8] shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#281B12] text-[#FF9933] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#1C130D]">महामार्गालगत सोय</h4>
              <p className="text-xs text-[#57473D] mt-0.5">
                अहमदनगर–सोलापूर मुख्य रस्त्यावर, प्रवासात थांबण्यासाठी उत्तम जागा.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#EEDCC8] shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#281B12] text-[#FF9933] flex items-center justify-center shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#1C130D]">ताजे व रुचकर भोजन</h4>
              <p className="text-xs text-[#57473D] mt-0.5">
                गावरान मसाले, ताजी चुलीवरची भाकरी आणि शाकाहारी-मांसाहारी पदार्थ.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#EEDCC8] shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#281B12] text-[#FF9933] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#1C130D]">कुटुंबासाठी आसन सोय</h4>
              <p className="text-xs text-[#57473D] mt-0.5">
                मोकळी, स्वच्छ व कौटुंबिक वातावरणातील स्वतंत्र आसनव्यवस्था.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#EEDCC8] shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#281B12] text-[#FF9933] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#1C130D]">स्वतंत्र परमिट रूम</h4>
              <p className="text-xs text-[#57473D] mt-0.5">
                परवानाधारक व स्वतंत्र कक्ष (फॅमिली रेस्टॉरंटपासून वेगळा).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: आमची ओळख (About the Restaurant) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#EEDCC8] p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A74600]">
                <span>हॉटेल ओम गार्डन परिचय</span>
                <span aria-hidden="true">·</span>
                <span>मांदळी</span>
              </div>
              <h2 className="font-serif-mr text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C130D] text-balance">
                आमची ओळख आणि आतिथ्याची परंपरा
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#57473D] leading-relaxed">
                <p>
                  अहमदनगर आणि सोलापूर या महत्त्वाच्या महामार्गावर मांदळी (ता. कर्जत, जि. अहिल्यानगर) येथे वसलेले <strong className="text-[#1C130D]">हॉटेल ओम गार्डन</strong> हे प्रवाशांसाठी व स्थानिक कुटुंबीयांसाठी एक विश्वासार्ह भोजनाचे ठिकाण आहे.
                </p>
                <p>
                  ग्राहकांना ताजे, चवदार आणि स्वच्छ वातावरणात बनवलेले भोजन उपलब्ध करून देणे हे आमचे मूळ ध्येय आहे. चुलीवरची गरमागरम बाजरी व ज्वारीची भाकरी, गावरान पिठलं, चिकन व मटण थाळी, आणि विविध शाकाहारी पदार्थांची चव येथे अनुभवता येते.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/amchyavishayi')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#A74600] hover:text-[#FF9933] transition-colors"
                >
                  आमच्याबद्दल सविस्तर वाचा
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <GraphicCard type="garden" title="निसर्गरम्य परिसर" className="h-44" />
              <GraphicCard type="curry" title="गावरान चव" className="h-44" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: खाद्यपदार्थांची झलक (Featured Dishes) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A74600]">
              <span>खाद्यपदार्थांची झलक</span>
              <span aria-hidden="true">·</span>
              <span>लोकप्रिय निवडी</span>
            </div>
            <h2 className="font-serif-mr text-2xl sm:text-3xl font-bold text-[#1C130D] mt-1">
              आमचे काही वैशिष्ट्यपूर्ण पदार्थ
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/khadyapadarth')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A74600] hover:text-[#FF9933] transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            संपूर्ण खाद्यपदार्थ यादी पाहा
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3-Column Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#EEDCC8] p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Clean unboxed metadata with separators */}
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
                          ? 'मध्यम तिखट'
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

                <h3 className="font-serif-mr text-lg font-bold text-[#1C130D] mb-1.5">
                  {item.name_mr}
                </h3>

                {item.description_mr && (
                  <p className="text-xs text-[#57473D] leading-relaxed mb-4">
                    {item.description_mr}
                  </p>
                )}
              </div>

              {/* Price and Action Row */}
              <div className="pt-3 border-t border-[#EEDCC8]/60 flex items-center justify-between">
                <div>
                  {item.price_inr !== null ? (
                    <span className="text-base font-bold text-[#943C00] font-mono tabular-nums">
                      ₹{item.price_inr}
                    </span>
                  ) : (
                    <span className="text-xs text-[#57473D] italic">
                      किंमत जाणून घेण्यासाठी संपर्क साधा
                    </span>
                  )}
                  {item.price_note_mr && (
                    <span className="text-[11px] text-[#57473D]/80 block">
                      {item.price_note_mr}
                    </span>
                  )}
                </div>
                <a
                  href={`tel:+91${settings.primary_phone}`}
                  className="text-xs font-semibold text-[#A74600] hover:text-[#FF9933] inline-flex items-center gap-1 transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#FF9933]" />
                  मागणी नोंदवा
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing & Availability Disclaimer */}
        <p className="text-xs text-[#57473D] text-center mt-6">
          * {settings.disclaimer_mr}
        </p>
      </section>

      {/* Section 3: कुटुंबासाठी सुविधा (Family Facilities) */}
      <section className="bg-[#1C130D] text-[#FFF9F2] py-14 border-y border-[#382619]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF9933] mb-2">
              <span>सुविधा व व्यवस्था</span>
              <span aria-hidden="true">·</span>
              <span>कुटुंबासाठी अनुकूल</span>
            </div>
            <h2 className="font-serif-mr text-2xl sm:text-3xl font-bold text-white">
              कुटुंबासोबत भोजनासाठी उपलब्ध सुविधा
            </h2>
            <p className="text-sm text-[#FFF9F2]/80 mt-2">
              मालकांकडून तपासलेल्या व खात्रीशीर सुविधा येथे दर्शविल्या आहेत.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verifiedFacilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-[#281B12] rounded-xl p-5 border border-[#382619] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#382619] text-[#FF9933] flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF9933]" />
                  </div>
                  <h3 className="font-serif-mr text-base font-bold text-white mb-1.5">
                    {facility.name_mr}
                  </h3>
                  <p className="text-xs text-[#FFF9F2]/75 leading-relaxed">
                    {facility.description_mr}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#382619] text-[11px] text-[#FF9933] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>तपासलेली सुविधा</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('/kutumbasathi-suvidha')}
              className="text-xs font-semibold text-[#FF9933] hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              सर्व सुविधांची सविस्तर माहिती पाहा
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: आमच्या हॉटेलची झलक (Gallery Teaser) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A74600]">
              <span>छायाचित्रे</span>
              <span aria-hidden="true">·</span>
              <span>हॉटेलची झलक</span>
            </div>
            <h2 className="font-serif-mr text-2xl sm:text-3xl font-bold text-[#1C130D] mt-1">
              परिसर आणि वातावरणाची झलक
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/photo-gallery')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A74600] hover:text-[#FF9933] transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            सर्व छायाचित्रे पाहा
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredGallery.map((item, index) => {
            const types: ('thali' | 'garden' | 'family' | 'curry')[] = [
              'garden',
              'exterior',
              'thali',
              'family',
            ] as any;
            return (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden border border-[#EEDCC8] bg-white shadow-xs group"
              >
                <GraphicCard
                  type={types[index % types.length]}
                  title={item.title_mr}
                  className="h-48 w-full group-hover:scale-102 transition-transform duration-200"
                />
                <div className="p-3">
                  <h4 className="font-semibold text-xs text-[#1C130D]">
                    {item.title_mr}
                  </h4>
                  {item.caption_mr && (
                    <p className="text-[11px] text-[#57473D] truncate mt-0.5">
                      {item.caption_mr}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 5: परमिट रूम (Permit Room - Strictly Informational & Compliant) */}
      {settings.permit_room_visible && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFF0E0] rounded-2xl p-6 sm:p-8 border border-[#F2DAC0] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#A74600] uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>स्वतंत्र परमिट रूम माहिती (परवानाधारक)</span>
              </div>
              <h3 className="font-serif-mr text-xl sm:text-2xl font-bold text-[#1C130D]">
                स्वतंत्र परमिट रूम कक्ष उपलब्ध
              </h3>
              <p className="text-xs sm:text-sm text-[#57473D] leading-relaxed">
                {settings.permit_room_note_mr} फॅमिली डायनिंग हॉलपासून वेगळी व्यवस्था असून शासनाच्या सर्व कायदेशीर नियमांचे पालन केले जाते.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/permit-room')}
              className="px-5 py-2.5 rounded-lg bg-[#1C130D] hover:bg-[#281B12] text-[#FFF9F2] text-sm font-semibold whitespace-nowrap transition-colors"
            >
              कायदेशीर माहिती पाहा
            </button>
          </div>
        </section>
      )}

      {/* Section 6: संपर्क व मार्गदर्शन (Contact and Location) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#EEDCC8] p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A74600]">
                <span>संपर्क आणि पत्ता</span>
                <span aria-hidden="true">·</span>
                <span>मांदळी</span>
              </div>
              <h2 className="font-serif-mr text-2xl sm:text-3xl font-bold text-[#1C130D]">
                आम्हाला कधीही संपर्क करा
              </h2>
              <p className="text-sm text-[#57473D] leading-relaxed">
                टेबल उपलब्धता, समूहाचे भोजन किंवा रस्त्यावरून येताना मार्गदर्शनासाठी थेट फोनवर संपर्क साधा.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF9933] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-sm text-[#1C130D] block">पत्ता:</span>
                    <span className="text-sm text-[#57473D]">
                      {settings.address_mr}, {settings.taluka_mr}, {settings.district_mr}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FF9933] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-sm text-[#1C130D] block">फोन संपर्क:</span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
                      <a
                        href={`tel:+91${settings.primary_phone}`}
                        className="text-[#943C00] hover:text-[#FF9933] tabular-nums font-semibold"
                      >
                        +91 {settings.primary_phone}
                      </a>
                      <span className="text-[#57473D]/40">·</span>
                      <a
                        href={`tel:+91${settings.secondary_phone}`}
                        className="text-[#943C00] hover:text-[#FF9933] tabular-nums font-semibold"
                      >
                        +91 {settings.secondary_phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FF9933] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-sm text-[#1C130D] block">भोजन वेळ:</span>
                    <span className="text-sm text-[#57473D]">
                      सकाळी ११:०० ते रात्री ११:०० (सर्व दिवस)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${settings.primary_phone}`}
                  className="px-5 py-2.5 rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] font-bold text-sm inline-flex items-center gap-2 transition-colors shadow-xs active:scale-98"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  फोनवर बोला
                </a>
                <button
                  onClick={() => onNavigate('/sampark')}
                  className="px-5 py-2.5 rounded-lg bg-[#1C130D] hover:bg-[#281B12] text-white font-semibold text-sm inline-flex items-center gap-2 transition-colors"
                >
                  टेबलसाठी चौकशी करा
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FFF9F2] p-6 rounded-xl border border-[#EEDCC8] flex flex-col justify-between">
              <div>
                <h3 className="font-serif-mr text-lg font-bold text-[#1C130D] mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF9933]" />
                  मार्गदर्शन व लोकेशन
                </h3>
                <p className="text-xs text-[#57473D] leading-relaxed mb-4">
                  हॉटेल अहमदनगर आणि सोलापूर या दोन्ही शहरांना जोडणाऱ्या मुख्य महामार्गावर स्थित आहे. प्रवासादरम्यान थांबून जेवणासाठी हे आदर्श ठिकाण आहे.
                </p>

                {/* Google Maps Status */}
                {settings.is_maps_verified && settings.google_maps_url ? (
                  <a
                    href={settings.google_maps_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-lg bg-[#1C130D] text-white text-center font-medium text-xs sm:text-sm hover:bg-[#281B12] transition-colors flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-[#FF9933]" />
                    गुगल मॅप्सवर रस्ता पाहा (Directions)
                  </a>
                ) : (
                  <div className="p-4 rounded-lg bg-white border border-[#EEDCC8] text-center space-y-2">
                    <p className="text-xs text-[#57473D]">
                      थेट लोकेशनसाठी किंवा रस्त्याची माहिती हवी असल्यास कृपया संपर्क क्रमांकावर फोन करा.
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        'हॉटेल ओम गार्डन मांदळी कर्जत अहमदनगर'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A74600] hover:text-[#FF9933] underline underline-offset-4"
                    >
                      गुगल मॅप्सवर शोधा
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#EEDCC8] text-center text-xs text-[#57473D]">
                मांदळी, ता. कर्जत, जि. अहिल्यानगर
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
