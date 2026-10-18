import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { useStore } from '../context/StoreContext';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
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
          <FileText className="w-4 h-4 text-[#FF9933]" />
          <span>नियम व अटी</span>
        </div>
        <h1 className="font-serif-mr text-3xl sm:text-4xl font-bold text-[#1C130D]">
          नियम व अटी (Terms & Conditions)
        </h1>
        <p className="text-xs text-[#57473D]">
          शेवटचे अद्यतन: १८ ऑक्टोबर २०२६
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-[#EEDCC8] p-6 sm:p-10 space-y-6 text-sm text-[#57473D] leading-relaxed shadow-xs">
        <section className="space-y-2">
          <h2 className="font-serif-mr text-lg font-bold text-[#1C130D]">
            १. संकेतस्थळाचा वापर
          </h2>
          <p>
            या संकेतस्थळावरील माहिती केवळ हॉटेल ओम गार्डनची प्राथमिक ओळख, उपलब्ध खाद्यपदार्थ, संपर्क क्रमांक आणि सोयींची माहिती देण्यासाठी आहे.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif-mr text-lg font-bold text-[#1C130D]">
            २. खाद्यपदार्थ उपलब्धता व दर
          </h2>
          <p>
            संकेतस्थळावर दर्शवलेले दर आणि पदार्थांची उपलब्धता ही बाजारभाव व ताज्या साहित्याच्या पुरवठ्यानुसार बदलू शकते. कोणत्याही विसंगतीबाबत हॉटेलच्या प्रत्यक्ष मेनू कार्डवरील दर व व्यवस्थापकांचे म्हणणे अंतिम मानले जाईल.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif-mr text-lg font-bold text-[#1C130D]">
            ३. टेबल पूर्वचौकशी
          </h2>
          <p>
            संकेतस्थळावरील चौकशी अर्ज ही केवळ प्राथमिक विचारणा आहे; ते स्वयंचलित अथवा खात्रीशीर आरक्षण (Confirmed Reservation) नाही. हॉटेल प्रतिनिधी फोनवर खात्री केल्यानंतरच टेबल निश्चित केले जाईल.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif-mr text-lg font-bold text-[#1C130D]">
            ४. परमिट रूम व कायदेशीर बाबी
          </h2>
          <p>
            परमिट रूम विभागात प्रवेशासाठी महाराष्ट्र शासनाच्या उत्पादन शुल्क नियमांनुसार वयाची पूर्तता आवश्यक आहे. मद्याची कोणतीही ऑनलाइन विक्री किंवा घरपोच सेवा दिली जात नाही.
          </p>
        </section>
      </div>
    </div>
  );
};
