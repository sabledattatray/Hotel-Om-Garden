import React from 'react';
import {
  Users,
  Sparkles,
  Car,
  ShieldCheck,
  CalendarCheck,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { GraphicCard } from '../components/common/GraphicCard';

export const FacilitiesPage: React.FC = () => {
  const { settings, facilities } = useStore();

  const verifiedFacilities = facilities.filter(
    (item) => item.is_published && item.is_verified
  );

  const pendingFacilities = facilities.filter(
    (item) => !item.is_verified || !item.is_published
  );

  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return Users;
      case 'Sparkles':
        return Sparkles;
      case 'Car':
        return Car;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'CalendarCheck':
        return CalendarCheck;
      default:
        return CheckCircle2;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A74600]">
          <span>सुविधा व व्यवस्था</span>
          <span aria-hidden="true">·</span>
          <span>हॉटेल ओम गार्डन</span>
        </div>
        <h1 className="font-serif-mr text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C130D]">
          कुटुंबासाठी उपलब्ध सुविधा
        </h1>
        <p className="text-sm sm:text-base text-[#57473D] leading-relaxed">
          महामार्गावरील प्रवासात कुटुंबीयांसह निवांत विश्रांती आणि भोजनासाठी हॉटेल ओम गार्डन येथे उपलब्ध असलेल्या खात्रीशीर सुविधांची माहिती.
        </p>
      </div>

      {/* Hero Showcase with Graphic */}
      <div className="bg-white rounded-2xl border border-[#EEDCC8] p-6 sm:p-8 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif-mr text-2xl font-bold text-[#1C130D]">
              कौटुंबिक आणि सुरक्षित वातावरण
            </h2>
            <p className="text-sm text-[#57473D] leading-relaxed">
              हॉटेल ओम गार्डनमध्ये फॅमिली रेस्टॉरंट आणि परमिट रूम पूर्णपणे स्वतंत्र कक्षांमध्ये कार्यरत आहेत, जेणेकरून कुटुंब आणि लहान मुले निवांतपणे भोजन करू शकतील.
            </p>
            <div className="space-y-2 text-xs text-[#57473D]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A74600]" />
                <span>मोकळी, हवेशीर आणि स्वच्छ बैठक व्यवस्था</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A74600]" />
                <span>प्रवाशांच्या वाहनांसाठी सुरक्षित वाहनतळ सोय</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A74600]" />
                <span>प्रवासात ताजेतवाने होण्यासाठी स्वच्छ प्रसाधनगृह</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <GraphicCard type="family" title="कुटुंब बैठक व्यवस्था" className="h-64" />
          </div>
        </div>
      </div>

      {/* Verified Facilities Cards Grid */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-[#EEDCC8]">
          <h2 className="font-serif-mr text-xl font-bold text-[#1C130D]">
            तपासलेल्या व प्रत्यक्ष उपलब्ध सुविधा
          </h2>
          <span className="text-xs text-[#57473D] font-medium">
            ({verifiedFacilities.length} सुविधा)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedFacilities.map((facility) => {
            const Icon = getFacilityIcon(facility.icon_name);
            return (
              <div
                key={facility.id}
                className="bg-white rounded-xl border border-[#EEDCC8] p-6 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF9F2] border border-[#EEDCC8] text-[#1C130D] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#A74600]" />
                  </div>
                  <h3 className="font-serif-mr text-lg font-bold text-[#1C130D] mb-2">
                    {facility.name_mr}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57473D] leading-relaxed">
                    {facility.description_mr}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#EEDCC8]/60 flex items-center justify-between text-xs">
                  <span className="text-green-800 font-semibold inline-flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-700" />
                    सत्यापित सुविधा
                  </span>
                  <span className="text-[#57473D]">उपलब्ध</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Transparency Note regarding unverified amenities */}
      {pendingFacilities.length > 0 && (
        <div className="p-5 rounded-xl bg-[#FFF0E0] border border-[#F2DAC0] text-xs text-[#57473D] space-y-1">
          <span className="font-semibold text-[#1C130D] block">
            पारदर्शकता सूचना (Verified Amenities Policy):
          </span>
          <p>
            आम्ही ग्राहकांना कोणत्याही अवास्तव सोयींचा दावा करत नाही. लहान मुलांसाठी स्वतंत्र खेळाचे साहित्य किंवा वातानुकूलित (AC) विभाग यासारख्या अतिरिक्त सोयींची मालकांकडून अधिकृत नोंद झाल्यावरच त्या येथे प्रकाशित केल्या जातात.
          </p>
        </div>
      )}

      {/* Inquiry Box */}
      <div className="bg-[#1C130D] text-[#FFF9F2] p-8 rounded-2xl border border-[#382619] text-center space-y-4">
        <h3 className="font-serif-mr text-2xl font-bold text-[#FF9933]">
          विशिष्ट सुविधा किंवा समूह जेवणाबद्दल विचारपूस करायची आहे?
        </h3>
        <p className="text-sm text-[#FFF9F2]/80 max-w-xl mx-auto">
          आपल्या प्रवासाचे नियोजन करताना किंवा समूहाच्या जेवणाबाबत कोणतीही शंका असल्यास आमच्याशी थेट बोला.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href={`tel:+91${settings.primary_phone}`}
            className="px-6 py-3 rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] font-bold text-sm transition-colors inline-flex items-center gap-2 shadow-xs active:scale-98"
          >
            <Phone className="w-4 h-4 fill-current" />
            +91 {settings.primary_phone} वर कॉल करा
          </a>
        </div>
      </div>
    </div>
  );
};
