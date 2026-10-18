import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Users,
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const ContactPage: React.FC = () => {
  const { settings, addEnquiry } = useStore();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    party_size: '',
    message: '',
    consent: true,
    website_hp: '', // Honeypot anti-spam trap
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.website_hp) {
      setSubmitted(true);
      return;
    }

    // Validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('कृपया आपले नाव आणि मोबाईल नंबर अचूक भरा.');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('कृपया वैध १० अंकी मोबाईल नंबर प्रविष्ट करा.');
      return;
    }

    if (!formData.consent) {
      setErrorMsg('कृपया माहिती पाठवण्यासाठी संमती चेकबॉक्स निवडा.');
      return;
    }

    addEnquiry({
      name: formData.name.trim(),
      phone: cleanPhone,
      date: formData.date || undefined,
      time: formData.time || undefined,
      party_size: formData.party_size ? parseInt(formData.party_size, 10) : undefined,
      message: formData.message.trim(),
    });

    setSubmitted(true);
    setErrorMsg('');
  };

  const whatsappMessage = encodeURIComponent(
    `नमस्कार हॉटेल ओम गार्डन, मला जेवण व टेबलबाबत माहिती हवी आहे.`
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A74600]">
          <span>संपर्क व पत्ता</span>
          <span aria-hidden="true">·</span>
          <span>हॉटेल ओम गार्डन</span>
        </div>
        <h1 className="font-serif-mr text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C130D]">
          आमच्याशी संपर्क साधा
        </h1>
        <p className="text-sm sm:text-base text-[#57473D] leading-relaxed">
          टेबल चौकशी, जेवणाची पूर्वतयारी किंवा प्रवासात रस्त्याची माहिती हवी असल्यास आम्हाला कधीही कॉल अथवा संदेश पाठवा.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact & Location Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl border border-[#EEDCC8] p-6 sm:p-8 space-y-6 shadow-xs">
            <h2 className="font-serif-mr text-xl font-bold text-[#1C130D] border-b border-[#EEDCC8] pb-3">
              थेट संपर्क साधने
            </h2>

            {/* Click to Call Block */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-[#1C130D] uppercase tracking-wider block">
                फोन कॉल्स (Click to Call)
              </span>
              <a
                href={`tel:+91${settings.primary_phone}`}
                className="p-3.5 rounded-xl bg-[#FFF9F2] border border-[#EEDCC8] hover:bg-[#F5E8D4] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#281B12] text-[#FF9933] flex items-center justify-center">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs text-[#57473D] block">प्राथमिक क्रमांक</span>
                    <span className="text-base font-bold text-[#943C00] font-mono tabular-nums">
                      +91 {settings.primary_phone}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#A74600] group-hover:text-[#FF9933] transition-colors">
                  कॉल करा
                </span>
              </a>

              <a
                href={`tel:+91${settings.secondary_phone}`}
                className="p-3.5 rounded-xl bg-[#FFF9F2] border border-[#EEDCC8] hover:bg-[#F5E8D4] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#281B12] text-[#FF9933] flex items-center justify-center">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs text-[#57473D] block">दुय्यम क्रमांक</span>
                    <span className="text-base font-bold text-[#943C00] font-mono tabular-nums">
                      +91 {settings.secondary_phone}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#A74600] group-hover:text-[#FF9933] transition-colors">
                  कॉल करा
                </span>
              </a>
            </div>

            {/* WhatsApp Block */}
            {settings.whatsapp_enabled && settings.whatsapp_number && (
              <div className="pt-2">
                <a
                  href={`https://wa.me/91${settings.whatsapp_number}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#1C130D] text-[#FFF9F2] hover:bg-[#281B12] transition-colors font-semibold text-sm flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 text-[#FF9933]" />
                  <span>व्हॉट्सअ‍ॅपवर थेट मेसेज करा</span>
                </a>
              </div>
            )}

            {/* Address */}
            <div className="pt-4 border-t border-[#EEDCC8] space-y-2">
              <span className="text-xs font-semibold text-[#1C130D] uppercase tracking-wider block">
                हॉटेलचा पत्ता
              </span>
              <div className="flex items-start gap-3 text-sm text-[#57473D]">
                <MapPin className="w-5 h-5 text-[#FF9933] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1C130D]">{settings.name_mr}</p>
                  <p>{settings.address_mr}</p>
                  <p>{settings.taluka_mr}, {settings.district_mr}</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="pt-4 border-t border-[#EEDCC8] space-y-2">
              <span className="text-xs font-semibold text-[#1C130D] uppercase tracking-wider block">
                कामाच्या वेळा
              </span>
              <div className="flex items-start gap-3 text-sm text-[#57473D]">
                <Clock className="w-5 h-5 text-[#FF9933] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#1C130D]">सकाळी ११:०० ते रात्री ११:००</p>
                  <p className="text-xs text-[#57473D]">आठवड्यातील सर्व दिवस खुले</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Table Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-[#EEDCC8] p-6 sm:p-8 shadow-xs">
            <div className="border-b border-[#EEDCC8] pb-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#A74600] uppercase">
                <Users className="w-4 h-4 text-[#FF9933]" />
                <span>चौकशी अर्ज (Enquiry Only)</span>
              </div>
              <h2 className="font-serif-mr text-xl sm:text-2xl font-bold text-[#1C130D] mt-1">
                टेबलसाठी चौकशी करा
              </h2>
              <p className="text-xs text-[#57473D] mt-1">
                * ही पूर्व-चौकशी आहे. तात्काळ कन्फर्मेशनसाठी हॉटेलच्या व्यवस्थापकांकडून आपल्याला फोन केला जाईल.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#FFF9F2] border border-[#EEDCC8] text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif-mr text-xl font-bold text-[#1C130D]">
                    चौकशी यशस्वीरित्या नोंदवली गेली आहे!
                  </h3>
                  <p className="text-sm text-[#57473D]">
                    धन्यवाद <strong>{formData.name}</strong>, हॉटेल ओम गार्डनची टीम लवकरच आपल्याशी <strong>{formData.phone}</strong> या क्रमांकावर संपर्क साधेल.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        date: '',
                        time: '',
                        party_size: '',
                        message: '',
                        consent: true,
                        website_hp: '',
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-bold rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] transition-colors shadow-xs active:scale-98"
                  >
                    दुसरी चौकशी नोंदवा
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Honeypot field (hidden from genuine users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Leave this empty</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    tabIndex={-1}
                    value={formData.website_hp}
                    onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                      आपले नाव <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="उदा. राहुल कदम"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#EEDCC8] focus:ring-2 focus:ring-[#FF9933]/25 focus:border-[#FF9933] bg-[#FFF9F2]/50"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                      मोबाईल नंबर <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="उदा. 9822XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#EEDCC8] focus:ring-2 focus:ring-[#FF9933]/25 focus:border-[#FF9933] bg-[#FFF9F2]/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Date Field */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                      तारीख (ऐच्छिक)
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#EEDCC8] focus:ring-2 focus:ring-[#FF9933]/25 focus:border-[#FF9933] bg-[#FFF9F2]/50"
                    />
                  </div>

                  {/* Time Field */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                      अंदाजे वेळ (ऐच्छिक)
                    </label>
                    <input
                      type="text"
                      placeholder="उदा. संध्याकाळी ७:३०"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#EEDCC8] focus:ring-2 focus:ring-[#FF9933]/25 focus:border-[#FF9933] bg-[#FFF9F2]/50"
                    />
                  </div>

                  {/* Party Size */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                      व्यक्ती संख्या (ऐच्छिक)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      placeholder="उदा. ४"
                      value={formData.party_size}
                      onChange={(e) => setFormData({ ...formData, party_size: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#EEDCC8] focus:ring-2 focus:ring-[#FF9933]/25 focus:border-[#FF9933] bg-[#FFF9F2]/50"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#1C130D] mb-1">
                    काही विशेष विचारपूस किंवा संदेश
                  </label>
                  <textarea
                    rows={3}
                    placeholder="उदा. शाकाहारी व मांसाहारी दोन्ही थाळी लागतील, किंवा लहान मुलांसोबत येत आहोत..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#EEDCC8] focus:ring-2 focus:ring-[#FF9933]/25 focus:border-[#FF9933] bg-[#FFF9F2]/50"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded border-[#EEDCC8] text-[#FF9933] focus:ring-[#FF9933]"
                  />
                  <label htmlFor="consent" className="text-xs text-[#57473D] cursor-pointer">
                    हॉटेल ओम गार्डनकडून या चौकशीबाबत संपर्क करण्यासाठी मी संमती देत आहे.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] font-bold text-sm transition-colors inline-flex items-center justify-center gap-2 shadow-sm active:scale-98"
                  >
                    <Send className="w-4 h-4 text-[#1C130D]" />
                    <span>टेबलसाठी चौकशी पाठवा</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
