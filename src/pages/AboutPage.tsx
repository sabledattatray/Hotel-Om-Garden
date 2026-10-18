import React, { useState } from 'react';
import {
  ShieldCheck,
  Utensils,
  Phone,
  Users,
  MessageCircle,
  Quote,
  SlidersHorizontal,
  Upload,
  RotateCcw,
  Check,
  Award,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  X,
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { GraphicCard } from '../components/common/GraphicCard';

export const AboutPage: React.FC = () => {
  const { settings, updateSettings } = useStore();
  const [isAdjustModalOpen, setIsAdjustModalOpen] = useState(false);

  // Local draft state for image adjustments
  const [draftScale, setDraftScale] = useState(settings.owner_image_scale ?? 100);
  const [draftBrightness, setDraftBrightness] = useState(settings.owner_image_brightness ?? 100);
  const [draftContrast, setDraftContrast] = useState(settings.owner_image_contrast ?? 100);
  const [draftSaturation, setDraftSaturation] = useState(settings.owner_image_saturation ?? 100);
  const [draftPosY, setDraftPosY] = useState(settings.owner_image_pos_y ?? 50);
  const [draftImageUrl, setDraftImageUrl] = useState(settings.owner_image_url || '/owner.png');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Open modal and sync draft with current settings
  const handleOpenAdjustModal = () => {
    setDraftScale(settings.owner_image_scale ?? 100);
    setDraftBrightness(settings.owner_image_brightness ?? 100);
    setDraftContrast(settings.owner_image_contrast ?? 100);
    setDraftSaturation(settings.owner_image_saturation ?? 100);
    setDraftPosY(settings.owner_image_pos_y ?? 50);
    setDraftImageUrl(settings.owner_image_url || '/owner.png');
    setSaveSuccess(false);
    setIsAdjustModalOpen(true);
  };

  // Handle local file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('कृपया ५ MB पेक्षा लहान आकाराचा फोटो निवडा.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setDraftImageUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Reset adjustments
  const handleResetAdjustments = () => {
    setDraftScale(100);
    setDraftBrightness(100);
    setDraftContrast(100);
    setDraftSaturation(100);
    setDraftPosY(50);
    setDraftImageUrl('/owner.png');
  };

  // Save changes to store
  const handleSaveAdjustments = () => {
    updateSettings({
      owner_image_scale: draftScale,
      owner_image_brightness: draftBrightness,
      owner_image_contrast: draftContrast,
      owner_image_saturation: draftSaturation,
      owner_image_pos_y: draftPosY,
      owner_image_url: draftImageUrl,
    });
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setIsAdjustModalOpen(false);
    }, 800);
  };

  // Active filter styles for the owner image
  const activeImageStyle: React.CSSProperties = {
    filter: `brightness(${settings.owner_image_brightness ?? 100}%) contrast(${settings.owner_image_contrast ?? 100}%) saturate(${settings.owner_image_saturation ?? 100}%)`,
    transform: `scale(${(settings.owner_image_scale ?? 100) / 100})`,
    objectPosition: `center ${settings.owner_image_pos_y ?? 50}%`,
  };

  // Draft filter styles for the preview inside modal
  const draftImageStyle: React.CSSProperties = {
    filter: `brightness(${draftBrightness}%) contrast(${draftContrast}%) saturate(${draftSaturation}%)`,
    transform: `scale(${draftScale / 100})`,
    objectPosition: `center ${draftPosY}%`,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A74600]">
          <span>आमच्याविषयी</span>
          <span aria-hidden="true">·</span>
          <span>हॉटेल ओम गार्डन</span>
        </div>
        <h1 className="font-serif-mr text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C130D]">
          आतिथ्य, विश्वास आणि रुचकर गावरान चव
        </h1>
        <p className="text-base text-[#57473D] leading-relaxed">
          {settings.tagline_mr}
        </p>
      </div>

      {/* ==================================================== */}
      {/* HOTEL OWNER & FOUNDER PROFILE CARD (हॉटेल मालक व संस्थापक) */}
      {/* ==================================================== */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#201309] via-[#2A180C] to-[#140A04] border-2 border-[#D98A1E]/40 p-6 sm:p-10 lg:p-12 text-[#FFF9F2] shadow-xl">
        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF9933]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C97B1A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Owner Portrait Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer Golden Glow & Border Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#FF9933] via-[#FFE2A4] to-[#C97B1A] opacity-75 blur-xs group-hover:opacity-100 transition-opacity duration-300" />

              {/* Portrait Container with Image Adjustment Filters */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/5 bg-[#170B04] border-2 border-[#FFD285]/50 shadow-2xl">
                <img
                  src={settings.owner_image_url || '/owner.png'}
                  alt={settings.owner_name_mr || 'श्री. शोभाचंद शिंदे - संस्थापक, हॉटेल ओम गार्डन'}
                  className="w-full h-full object-cover transition-all duration-300"
                  style={activeImageStyle}
                  referrerPolicy="no-referrer"
                />

                {/* Saffron Watermark Crest Badge */}
                <div className="absolute top-3 left-3 bg-[#170B04]/80 backdrop-blur-md border border-[#FF9933]/60 px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold text-[#FFB066] shadow-sm">
                  <span className="text-sm">🚩</span>
                  <span>{settings.owner_title_mr ? settings.owner_title_mr.split(',')[0] : 'संस्थापक व संचालक'}</span>
                </div>

                {/* Adjust Image Quick Action Button (Hover or Always Visible) */}
                <button
                  type="button"
                  onClick={handleOpenAdjustModal}
                  className="absolute bottom-3 right-3 bg-[#1C1008]/90 hover:bg-[#FF9933] text-[#FFE2A4] hover:text-[#1C1008] border border-[#FF9933]/70 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all active:scale-95 cursor-pointer"
                  title="प्रतिमा दुरुस्ती व ॲडजस्टमेंट"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>फोटो ॲडजस्ट करा</span>
                </button>
              </div>

              {/* Verified Owner Label Strip */}
              <div className="mt-3.5 flex items-center justify-center gap-2 text-xs text-[#FFC785] bg-[#1A0E06]/90 border border-[#D98A1E]/30 py-1.5 px-3 rounded-full">
                <Award className="w-3.5 h-3.5 text-[#FF9933]" />
                <span>अधिकृत हॉटेल मालक व व्यवस्थापक</span>
              </div>
            </div>
          </div>

          {/* Owner Narrative & Vision Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9933]/20 border border-[#FF9933]/40 text-[#FFB066] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FF9933]" />
                <span>हॉटेलचे मालक व संस्थापक परिचय</span>
              </div>
              <h2 className="font-serif-mr text-3xl sm:text-4xl font-extrabold text-[#FFF9F2] tracking-wide">
                {settings.owner_name_mr || 'श्री. शोभाचंद शिंदे'}
              </h2>
              <p className="text-sm sm:text-base text-[#FFB066] font-medium">
                {settings.owner_title_mr || 'संस्थापक व संचालक · हॉटेल ओम गार्डन, मांदळी'}
              </p>
            </div>

            {/* Owner Quote Box */}
            <div className="relative bg-[#170C05]/85 border-l-4 border-[#FF9933] rounded-r-2xl p-5 sm:p-6 shadow-inner space-y-2.5">
              <Quote className="w-7 h-7 text-[#FF9933]/60 mb-1" />
              <p className="font-serif-mr text-base sm:text-lg text-[#FFF0DE] italic leading-relaxed">
                "{settings.owner_message_mr || 'आमच्याकडे येणाऱ्या प्रत्येक पाहुण्याला घरगुती मायेने, स्वच्छता आणि अस्सल महाराष्ट्रीयन गावरान चवीचे रुचकर भोजन देणे, हेच आमचे कर्तव्य आणि परंपरा आहे. आपल्या कुटुंबासह अथवा मित्रपरिवारासह मांदळी येथून जाताना हॉटेल ओम गार्डनला अवश्य भेट द्या.'}"
              </p>
              <div className="pt-2 text-right">
                <span className="text-xs font-semibold text-[#FFB066]">
                  — {settings.owner_name_mr || 'श्री. शोभाचंद शिंदे'}, संस्थापक
                </span>
              </div>
            </div>

            {/* Guiding Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="bg-[#1C1008]/80 border border-[#3E2514] rounded-xl p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#FF9933] font-bold text-xs">
                  <Utensils className="w-4 h-4" />
                  <span>अस्सल गावरान चव</span>
                </div>
                <p className="text-xs text-[#FFF9F2]/75 leading-relaxed">
                  स्वतःच्या देखरेखीखाली मसाले, ताजी चुलीवरची भाकरी आणि अस्सल मटण-चिकन.
                </p>
              </div>

              <div className="bg-[#1C1008]/80 border border-[#3E2514] rounded-xl p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#FF9933] font-bold text-xs">
                  <Users className="w-4 h-4" />
                  <span>कौटुंबिक आदर</span>
                </div>
                <p className="text-xs text-[#FFF9F2]/75 leading-relaxed">
                  कुटुंब आणि महिलांसाठी स्वतंत्र, सुरक्षित व मोकळी डायनिंग बैठक व्यवस्था.
                </p>
              </div>

              <div className="bg-[#1C1008]/80 border border-[#3E2514] rounded-xl p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#FF9933] font-bold text-xs">
                  <HeartHandshake className="w-4 h-4" />
                  <span>आपुलकीचे आतिथ्य</span>
                </div>
                <p className="text-xs text-[#FFF9F2]/75 leading-relaxed">
                  प्रत्येक पाहुण्याचे हसतमुखाने स्वागत आणि तत्पर ग्राहक सेवा.
                </p>
              </div>
            </div>

            {/* Contact Owner Directly Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3 items-center">
              <a
                href={`tel:+91${settings.primary_phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF9933] to-[#E67E17] hover:from-[#FFA84D] hover:to-[#F58B24] text-[#1C1008] font-bold text-sm shadow-md transition-all active:scale-98"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>मालकांशी थेट बोला (+91 {settings.primary_phone})</span>
              </a>

              <a
                href={`https://wa.me/91${settings.primary_phone}?text=${encodeURIComponent(
                  'नमस्कार, मी हॉटेल ओम गार्डनविषयी अधिक माहितीसाठी संपर्क करत आहे.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-sm shadow-md transition-all active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp द्वारे संपर्क</span>
              </a>

              <button
                type="button"
                onClick={handleOpenAdjustModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#1C1008] hover:bg-[#2A180C] text-[#FFB066] border border-[#FF9933]/40 font-semibold text-xs transition-all cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>फोटो दुरुस्ती / ॲडजस्टमेंट</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative Card */}
      <div className="bg-white rounded-2xl border border-[#EEDCC8] p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-serif-mr text-2xl sm:text-3xl font-bold text-[#1C130D]">
              हॉटेल ओम गार्डनची संकल्पना
            </h2>
            <div className="space-y-3.5 text-sm sm:text-base text-[#57473D] leading-relaxed">
              <p>
                अहमदनगर–सोलापूर महामार्गावरून प्रवास करणाऱ्या अनेक प्रवाशांना, स्थानिकांना व कुटुंबीयांना एका शांत, निसर्गरम्य आणि दर्जेदार भोजनाच्या जागेची गरज असते. याच विचारातून मांदळी (ता. कर्जत) येथे <strong className="text-[#1C130D]">हॉटेल ओम गार्डन</strong> ची सुरुवात झाली.
              </p>
              <p>
                आम्ही ग्राहकांना केवळ जेवण न देता एक सुखद व तृप्त करणारा अनुभव देण्याचा प्रयत्न करतो. आमच्याकडे स्वच्छता, ताज्या साहित्याचा वापर आणि घरगुती गावरान चव यावर विशेष भर दिला जातो.
              </p>
              <p>
                कुटुंबासाठी सुरक्षित आणि मोकळे वातावरण राखणे हे आमचे प्रथम कर्तव्य मानले जाते. फॅमिली डायनिंग कक्ष स्वतंत्र असून, परवानाधारक परमिट रूमची सुविधा कायद्याच्या सर्व नियमांनुसार स्वतंत्र विभागात कार्यरत आहे.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <GraphicCard type="garden" title="निसर्गरम्य वातावरण" className="h-72 w-full" />
          </div>
        </div>
      </div>

      {/* Core Values Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-[#EEDCC8] shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#281B12] text-[#FF9933] flex items-center justify-center">
            <Utensils className="w-5 h-5" />
          </div>
          <h3 className="font-serif-mr text-lg font-bold text-[#1C130D]">
            ताजे आणि अस्सल जेवण
          </h3>
          <p className="text-xs sm:text-sm text-[#57473D] leading-relaxed">
            गावरान मसाल्यांचा वापर, ताजी थापलेली चुलीवरची भाकरी आणि शाकाहारी-मांसाहारी पदार्थांची पारंपरिक चव.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#EEDCC8] shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#281B12] text-[#FF9933] flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-serif-mr text-lg font-bold text-[#1C130D]">
            कौटुंबिक आदर आणि आतिथ्य
          </h3>
          <p className="text-xs sm:text-sm text-[#57473D] leading-relaxed">
            प्रत्येक ग्राहकाचे आणि त्यांच्या कुटुंबीयांचे आदरपूर्वक स्वागत, आरामदायी बैठक आणि त्वरित सेवा.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#EEDCC8] shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#281B12] text-[#FF9933] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-serif-mr text-lg font-bold text-[#1C130D]">
            स्वच्छता आणि पारदर्शकता
          </h3>
          <p className="text-xs sm:text-sm text-[#57473D] leading-relaxed">
            किचन आणि डायनिंग परिसराची नियमित स्वच्छता, पारदर्शक दर आणि सुरक्षित वाहनतळ व्यवस्था.
          </p>
        </div>
      </div>

      {/* Location & Hospitality Assurance */}
      <div className="bg-[#1C130D] text-[#FFF9F2] rounded-2xl p-8 sm:p-10 border border-[#382619] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-serif-mr text-2xl font-bold text-[#FF9933]">
            आपल्या सेवेसाठी तत्पर
          </h3>
          <p className="text-xs sm:text-sm text-[#FFF9F2]/80 leading-relaxed">
            {settings.address_mr}, {settings.taluka_mr}, {settings.district_mr}. महामार्गाने प्रवास करताना आवर्जून भेट द्या.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:+91${settings.primary_phone}`}
            className="px-5 py-2.5 rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] font-bold text-sm transition-colors inline-flex items-center gap-2 shadow-xs active:scale-98"
          >
            <Phone className="w-4 h-4 fill-current" />
            +91 {settings.primary_phone}
          </a>
        </div>
      </div>

      {/* ==================================================== */}
      {/* IMAGE ADJUSTMENT & CORRECTION MODAL (प्रतिमा दुरुस्ती पॅनेल) */}
      {/* ==================================================== */}
      {isAdjustModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-[#1C1209] border-2 border-[#D98A1E]/60 rounded-3xl p-6 sm:p-8 text-[#FFF9F2] shadow-2xl space-y-6 my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#3E2514] pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#FF9933] text-xs font-bold uppercase tracking-wider">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>मालक फोटो दुरुस्ती व ॲडजस्टमेंट</span>
                </div>
                <h3 className="font-serif-mr text-xl sm:text-2xl font-bold text-[#FFF9F2]">
                  मालक फोटो दुरुस्ती व ॲडजस्टमेंट
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAdjustModalOpen(false)}
                className="w-9 h-9 rounded-full bg-[#2A180C] hover:bg-[#3D2211] text-[#FFF9F2]/70 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Interactive Preview + Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Live Preview Box */}
              <div className="sm:col-span-5 flex flex-col items-center">
                <span className="text-xs text-[#FFC785] font-semibold mb-2">थेट प्रिव्ह्यू (Live Preview)</span>
                <div className="w-44 h-56 rounded-2xl overflow-hidden bg-[#120803] border-2 border-[#FF9933] shadow-lg relative">
                  <img
                    src={draftImageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    style={draftImageStyle}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-1 left-1 right-1 text-center bg-black/60 rounded px-1 text-[10px] text-[#FFC785]">
                    {draftScale}% · B:{draftBrightness}% · C:{draftContrast}%
                  </div>
                </div>
              </div>

              {/* Sliders & Controls */}
              <div className="sm:col-span-7 space-y-4">
                {/* Scale / Zoom Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#FFF9F2]/90 font-medium">झूम / आकार (Zoom / Scale):</span>
                    <span className="text-[#FF9933] font-bold">{draftScale}%</span>
                  </div>
                  <input
                    type="range"
                    min="60"
                    max="150"
                    step="5"
                    value={draftScale}
                    onChange={(e) => setDraftScale(Number(e.target.value))}
                    className="w-full accent-[#FF9933] cursor-pointer"
                  />
                </div>

                {/* Brightness Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#FFF9F2]/90 font-medium">प्रकाशन / ब्राईटनेस (Brightness):</span>
                    <span className="text-[#FF9933] font-bold">{draftBrightness}%</span>
                  </div>
                  <input
                    type="range"
                    min="70"
                    max="140"
                    step="5"
                    value={draftBrightness}
                    onChange={(e) => setDraftBrightness(Number(e.target.value))}
                    className="w-full accent-[#FF9933] cursor-pointer"
                  />
                </div>

                {/* Contrast Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#FFF9F2]/90 font-medium">कॉन्ट्रास्ट / स्पष्टता (Contrast):</span>
                    <span className="text-[#FF9933] font-bold">{draftContrast}%</span>
                  </div>
                  <input
                    type="range"
                    min="70"
                    max="140"
                    step="5"
                    value={draftContrast}
                    onChange={(e) => setDraftContrast(Number(e.target.value))}
                    className="w-full accent-[#FF9933] cursor-pointer"
                  />
                </div>

                {/* Saturation Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#FFF9F2]/90 font-medium">रंग छटा / सॅच्युरेशन (Saturation):</span>
                    <span className="text-[#FF9933] font-bold">{draftSaturation}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="150"
                    step="5"
                    value={draftSaturation}
                    onChange={(e) => setDraftSaturation(Number(e.target.value))}
                    className="w-full accent-[#FF9933] cursor-pointer"
                  />
                </div>

                {/* Vertical Position Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#FFF9F2]/90 font-medium">उभी स्थिती / सेंटरिंग (Vertical Position):</span>
                    <span className="text-[#FF9933] font-bold">{draftPosY}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={draftPosY}
                    onChange={(e) => setDraftPosY(Number(e.target.value))}
                    className="w-full accent-[#FF9933] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Upload or Custom Image URL */}
            <div className="border-t border-[#3E2514] pt-4 space-y-3">
              <span className="text-xs text-[#FFC785] font-semibold block">नवीन फोटो अपलोड करा (किंवा वेब लिंक जोडा):</span>
              <div className="flex flex-col sm:flex-row gap-3">
                <label className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2A180C] hover:bg-[#3D2211] border border-[#FF9933]/50 text-xs font-bold text-[#FFF9F2] cursor-pointer transition-colors">
                  <Upload className="w-4 h-4 text-[#FF9933]" />
                  <span>डिव्हाइसमधून नवीन फोटो निवडा</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                <input
                  type="text"
                  placeholder="किंवा फोटोची लिंक पेस्ट करा (/owner.png, https://...)"
                  value={draftImageUrl}
                  onChange={(e) => setDraftImageUrl(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs rounded-xl bg-[#120803] border border-[#3E2514] text-[#FFF9F2] placeholder-[#FFF9F2]/40 focus:border-[#FF9933] focus:outline-none"
                />
              </div>
            </div>

            {/* Modal Actions */}
            <div className="border-t border-[#3E2514] pt-4 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleResetAdjustments}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25150B] hover:bg-[#341C0F] text-[#FFF9F2]/80 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>मूळ स्थितीत आणा (Reset)</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsAdjustModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-transparent hover:bg-white/5 text-[#FFF9F2]/70 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  रद्द करा (Cancel)
                </button>

                <button
                  type="button"
                  onClick={handleSaveAdjustments}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#FF9933] hover:bg-[#E67E17] text-[#1C1008] text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  {saveSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#1C1008]" />
                      <span>बदल सेव्ह झाले!</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      <span>बदल लागू करा (Save Adjustments)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
