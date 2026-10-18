import React from 'react';
import { ShieldCheck, Utensils, Phone, Users } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { GraphicCard } from '../components/common/GraphicCard';

export const AboutPage: React.FC = () => {
  const { settings } = useStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A74600]">
          <span>आमच्याविषयी</span>
          <span aria-hidden="true">·</span>
          <span>हॉटेल ओम गार्डन</span>
        </div>
        <h1 className="font-serif-mr text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C130D]">
          आतिथ्य, विश्वास आणि रुचकर चव
        </h1>
        <p className="text-base text-[#57473D] leading-relaxed">
          {settings.tagline_mr}
        </p>
      </div>

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
    </div>
  );
};
