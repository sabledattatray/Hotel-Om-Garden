import React, { useState } from 'react';
import { Shield, AlertTriangle, Phone, CheckCircle2, Lock } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const PermitRoomPage: React.FC = () => {
  const { settings } = useStore();
  const [ageConfirmed, setAgeConfirmed] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A74600]">
          <Shield className="w-4 h-4 text-[#FF9933]" />
          <span>कायदेशीर माहिती</span>
          <span aria-hidden="true">·</span>
          <span>हॉटेल ओम गार्डन</span>
        </div>
        <h1 className="font-serif-mr text-3xl sm:text-4xl font-bold text-[#1C130D]">
          परमिट रूम संदर्भातील माहिती
        </h1>
        <p className="text-sm text-[#57473D] max-w-2xl mx-auto leading-relaxed">
          महाराष्ट्र राज्य उत्पादन शुल्क विभागाच्या नियमांनुसार स्वतंत्र परवानाधारक कक्षाची केवळ वस्तुस्थितीदर्शक माहिती.
        </p>
      </div>

      {/* Age Check & Compliance Notice */}
      {!ageConfirmed ? (
        <div className="bg-white rounded-2xl border border-[#EEDCC8] p-6 sm:p-8 text-center space-y-5 shadow-xs">
          <div className="w-14 h-14 rounded-full bg-[#FFF0E0] border border-[#F2DAC0] text-[#FF9933] flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7 text-[#FF9933]" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="font-serif-mr text-xl font-bold text-[#1C130D]">
              कायदेशीर वयाची खात्री (Age Verification)
            </h2>
            <p className="text-xs sm:text-sm text-[#57473D] leading-relaxed">
              महाराष्ट्र राज्य उत्पादन शुल्क कायद्यानुसार परमिट रूम विभागात प्रवेशासाठी आणि माहिती पाहण्यासाठी कायदेशीर वयोमर्यादेचे पालन अनिवार्य आहे. आपण कायदेशीर वयाचे आहात का?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setAgeConfirmed(true)}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] font-bold text-sm transition-colors shadow-xs active:scale-98"
            >
              होय, मी कायदेशीर वयाचा/वयाची आहे
            </button>
            <a
              href="/"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#FFF9F2] hover:bg-[#F5E8D4] text-[#1C130D] border border-[#EEDCC8] font-semibold text-sm transition-colors text-center"
            >
              नाही, मुख्यपृष्ठावर परत जा
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-in fade-in duration-200">
          {/* Factual Statement */}
          <div className="bg-white rounded-2xl border border-[#EEDCC8] p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#A74600]">
              <CheckCircle2 className="w-4 h-4 text-green-700" />
              <span>अधिकृत नोंद</span>
            </div>
            <h2 className="font-serif-mr text-xl sm:text-2xl font-bold text-[#1C130D]">
              स्वतंत्र परमिट रूम सुविधा
            </h2>
            <p className="text-sm sm:text-base text-[#1C130D] leading-relaxed">
              {settings.permit_room_note_mr}
            </p>
            <div className="p-4 rounded-xl bg-[#FFF9F2] border border-[#EEDCC8] text-xs text-[#57473D] space-y-2 leading-relaxed">
              <p>
                <strong>महत्त्वाची नोंद:</strong> हॉटेल ओम गार्डन फॅमिली रेस्टॉरंट हे कौटुंबिक भोजनासाठी स्वतंत्र असून, परमिट रूम विभाग हा कायद्यानुसार पूर्णपणे वेगळा आणि स्वतंत्र कक्षात कार्यरत आहे.
              </p>
              <p>
                आमच्या संकेतस्थळावर कोणत्याही मद्याची जाहिरात, ब्रँड सूची, किंमती, सवलती किंवा ऑनलाइन विक्री/होम डिलिव्हरीची सुविधा दिली जात नाही.
              </p>
            </div>
          </div>

          {/* Statutory Warnings (Mandated by Law) */}
          <div className="bg-[#FFF0E0] rounded-2xl border border-[#F2DAC0] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#943C00] uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-[#FF9933]" />
              <span>वैधानिक चेतावणी (Statutory Warning)</span>
            </div>
            <ul className="space-y-2 text-sm text-[#1C130D] font-medium">
              <li className="flex items-start gap-2">
                <span className="text-[#A74600] font-bold">•</span>
                <span>मद्यपान आरोग्यास घातक आहे. (Consumption of alcohol is injurious to health.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A74600] font-bold">•</span>
                <span>दारू पिऊन कधीही वाहन चालवू नका. (Don't drink and drive.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A74600] font-bold">•</span>
                <span>कायदेशीर वय नसलेल्या व्यक्तींना प्रवेश सक्त मनाई आहे.</span>
              </li>
            </ul>
          </div>

          {/* Contact Box */}
          <div className="bg-[#1C130D] text-[#FFF9F2] rounded-2xl p-6 sm:p-8 text-center space-y-3 border border-[#382619]">
            <h3 className="font-serif-mr text-lg sm:text-xl font-bold text-[#FF9933]">
              अधिक माहितीसाठी थेट संपर्क साधा
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF9F2]/80">
              हॉटेलचे नियम, परवाना व वेळेबाबत कोणत्याही चौकशीसाठी आपण थेट फोनवर संपर्क करू शकता.
            </p>
            <div className="pt-2 flex justify-center">
              <a
                href={`tel:+91${settings.primary_phone}`}
                className="px-6 py-2.5 rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] font-bold text-sm transition-colors inline-flex items-center gap-2 shadow-xs active:scale-98"
              >
                <Phone className="w-4 h-4 fill-current" />
                कॉल करा: +91 {settings.primary_phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
