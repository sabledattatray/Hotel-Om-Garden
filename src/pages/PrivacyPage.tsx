import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { useStore } from '../context/StoreContext';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  const { settings } = useStore();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      <button
        onClick={() => onNavigate('/')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A74600] hover:text-[#FF9933] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        मुख्यपृष्ठावर परत जा
      </button>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A74600]">
          <ShieldCheck className="w-4 h-4 text-[#FF9933]" />
          <span>गोपनीयता धोरण</span>
        </div>
        <h1 className="font-serif-mr text-3xl sm:text-4xl font-bold text-[#1C130D]">
          गोपनीयता धोरण (Privacy Policy)
        </h1>
        <p className="text-xs text-[#57473D]">
          शेवटचे अद्यतन: १८ ऑक्टोबर २०२६
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-[#EEDCC8] p-6 sm:p-10 space-y-6 text-sm text-[#57473D] leading-relaxed shadow-xs">
        <section className="space-y-2">
          <h2 className="font-serif-mr text-lg font-bold text-[#1C130D]">
            १. माहिती संकलन आणि वापर
          </h2>
          <p>
            हॉटेल ओम गार्डन ({settings.name_en}) च्या या संकेतस्थळावर ग्राहकांकडून केवळ टेबल चौकशी अथवा मार्गदर्शनासाठी आवश्यक असणारी मूलभूत माहिती (उदा. नाव, संपर्क क्रमांक आणि विचारपूस संदेश) संकलित केली जाते.
          </p>
          <p>
            आम्ही ग्राहकांची कोणतीही वैयक्तिक माहिती इतर कोणत्याही त्रयस्थ संस्थेस किंवा जाहिरातदारांस विकत नाही अथवा व्यावसायिक फायद्यासाठी सामायिक करत नाही.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif-mr text-lg font-bold text-[#1C130D]">
            २. संपर्काचा उद्देश
          </h2>
          <p>
            आपण सादर केलेल्या संपर्क क्रमांकाचा वापर केवळ हॉटेलमधील आसनव्यवस्था, पदार्थांची उपलब्धता किंवा आपल्या प्रश्नांना उत्तर देण्यासाठीच केला जातो. ग्राहकांना कोणताही नको असलेला (Spam) प्रचार संदेश पाठवला जात नाही.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif-mr text-lg font-bold text-[#1C130D]">
            ३. माहिती सुरक्षितता
          </h2>
          <p>
            सर्व ग्राहक चौकशी नोंदी सुरक्षित वातावरणात जतन केल्या जातात आणि केवळ हॉटेलच्या अधिकृत व्यवस्थापकांनाच त्या पाहण्याचा अधिकार आहे.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif-mr text-lg font-bold text-[#1C130D]">
            ४. संपर्क माहिती
          </h2>
          <p>
            या धोरणाविषयी अथवा आपल्या डेटाविषयी काही विचारणा असल्यास आपण थेट खालील क्रमांकावर संपर्क साधू शकता:
          </p>
          <p className="font-medium text-[#1C130D]">
            फोन: +91 {settings.primary_phone} / +91 {settings.secondary_phone}
            <br />
            पत्ता: {settings.address_mr}, {settings.taluka_mr}, {settings.district_mr}.
          </p>
        </section>
      </div>
    </div>
  );
};
