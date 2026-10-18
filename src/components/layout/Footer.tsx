import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Lock } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { BrandLogo } from '../common/BrandLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { settings, openingHours } = useStore();

  const handleNavClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#140D09] text-[#FFF9F2] border-t border-[#2D1B11] pt-12 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Restaurant Brand & Address */}
          <div>
            <div className="mb-3">
              <BrandLogo size="md" />
            </div>
            <p className="text-sm text-[#FFF9F2]/80 mb-4 leading-relaxed">
              {settings.tagline_mr}
            </p>
            <div className="flex items-start gap-2 text-sm text-[#FFF9F2]/90 mb-3">
              <MapPin className="w-4 h-4 text-[#FF9933] shrink-0 mt-1" />
              <span>
                {settings.address_mr}, {settings.taluka_mr}, {settings.district_mr}
              </span>
            </div>
            <div className="text-xs text-[#FFF9F2]/60 italic">
              अहमदनगर–सोलापूर महामार्गालगत सहज येण्याजोगे ठिकाण
            </div>
          </div>

          {/* Column 2: Direct Contact Phones */}
          <div>
            <h4 className="font-serif-mr text-base font-semibold text-[#FF9933] mb-3">
              संपर्क क्रमांक (Click to Call)
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={`tel:+91${settings.primary_phone}`}
                className="flex items-center gap-2 text-[#FFF9F2] hover:text-[#FF9933] transition-colors font-medium tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#FF9933]" />
                <span>+91 {settings.primary_phone}</span>
              </a>
              <a
                href={`tel:+91${settings.secondary_phone}`}
                className="flex items-center gap-2 text-[#FFF9F2] hover:text-[#FF9933] transition-colors font-medium tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#FF9933]" />
                <span>+91 {settings.secondary_phone}</span>
              </a>
              {settings.whatsapp_enabled && settings.whatsapp_number && (
                <a
                  href={`https://wa.me/91${settings.whatsapp_number}?text=${encodeURIComponent('नमस्कार हॉटेल ओम गार्डन, मला जेवण व टेबलबाबत माहिती हवी आहे.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#281B12] text-xs text-[#FF9933] border border-[#3D281B] hover:bg-[#342217] transition-colors mt-2 font-medium"
                >
                  व्हॉट्सअ‍ॅपवर संदेश पाठवा
                </a>
              )}
            </div>
          </div>

          {/* Column 3: Site Navigation */}
          <div>
            <h4 className="font-serif-mr text-base font-semibold text-[#FF9933] mb-3">
              महत्त्वाच्या लिंक्स
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF9F2]/80">
              <li>
                <button
                  onClick={() => handleNavClick('/')}
                  className="hover:text-[#FF9933] transition-colors"
                >
                  मुख्यपृष्ठ
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('/khadyapadarth')}
                  className="hover:text-[#FF9933] transition-colors"
                >
                  खाद्यपदार्थ यादी (Digital Menu)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('/kutumbasathi-suvidha')}
                  className="hover:text-[#FF9933] transition-colors"
                >
                  कुटुंबासाठी सुविधा
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('/photo-gallery')}
                  className="hover:text-[#FF9933] transition-colors"
                >
                  छायाचित्र दालन
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('/amchyavishayi')}
                  className="hover:text-[#FF9933] transition-colors"
                >
                  आमच्याविषयी
                </button>
              </li>
              {settings.permit_room_visible && (
                <li>
                  <button
                    onClick={() => handleNavClick('/permit-room')}
                    className="hover:text-white transition-colors text-xs text-[#FF9933]"
                  >
                    परमिट रूम माहिती
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={() => handleNavClick('/admin')}
                  className="hover:text-white transition-colors text-xs text-[#FFF9F2]/50 flex items-center gap-1 mt-2"
                >
                  <Lock className="w-3 h-3 text-[#FF9933]" />
                  व्यवस्थापन पोर्टल
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Factual Note */}
          <div>
            <h4 className="font-serif-mr text-base font-semibold text-[#FF9933] mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FF9933]" />
              भोजन वेळ
            </h4>
            <div className="space-y-1.5 text-xs text-[#FFF9F2]/80">
              <div className="flex justify-between py-0.5 border-b border-[#2D1B11]">
                <span>सोमवार ते गुरुवार:</span>
                <span className="font-medium text-white">सकाळी ११:०० - रात्री ११:००</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-[#2D1B11]">
                <span>शुक्रवार ते रविवार:</span>
                <span className="font-medium text-white">सकाळी ११:०० - रात्री ११:३०</span>
              </div>
              <p className="text-[11px] text-[#FFF9F2]/60 pt-2">
                * सुट्टीच्या दिवशी व सणांच्या दिवशी वेळेत बदल होऊ शकतो. कृपया येण्यापूर्वी संपर्क साधावा.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#2D1B11] flex items-start gap-1.5 text-[11px] text-[#FFF9F2]/60">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF9933] shrink-0 mt-0.5" />
              <span>स्वच्छता आणि कौटुंबिक आतिथ्य हेच आमचे प्राधान्य.</span>
            </div>
          </div>
        </div>

        {/* Legal & Policy Row */}
        <div className="pt-6 border-t border-[#2D1B11] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF9F2]/60">
          <p>© {new Date().getFullYear()} हॉटेल ओम गार्डन (Hotel Om Garden), मांदळी. सर्व हक्क राखीव.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('/gopaniyata')}
              className="hover:text-[#FF9933] transition-colors"
            >
              गोपनीयता धोरण (Privacy)
            </button>
            <span>·</span>
            <button
              onClick={() => handleNavClick('/niyam-ati')}
              className="hover:text-[#FF9933] transition-colors"
            >
              नियम व अटी (Terms)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
