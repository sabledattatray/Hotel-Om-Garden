import React, { useState } from 'react';
import { Phone, Menu as MenuIcon, X, Shield, Lock } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { BrandLogo } from '../common/BrandLogo';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const { settings, isAdminAuthenticated } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'मुख्यपृष्ठ' },
    { path: '/khadyapadarth', label: 'खाद्यपदार्थ' },
    { path: '/kutumbasathi-suvidha', label: 'सुविधा' },
    { path: '/photo-gallery', label: 'छायाचित्रे' },
    { path: '/sampark', label: 'संपर्क' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#1C130D] text-[#FFF9F2] border-b border-[#382619] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Professional Icon & Reduced Brand Logo */}
            <button
              onClick={() => handleNavClick('/')}
              className="text-left whitespace-nowrap shrink-0 group flex items-center gap-2 cursor-pointer transition-transform duration-150 active:scale-98"
              aria-label="हॉटेल ओम गार्डन मुख्यपृष्ठ"
            >
              <BrandLogo size="sm" />
            </button>

            {/* Zone 2: 4–5 concise single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#FFF9F2]/90">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`whitespace-nowrap shrink-0 py-1 transition-colors relative ${
                      isActive
                        ? 'text-[#FF9933] font-semibold'
                        : 'hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF9933] rounded-full" />
                    )}
                  </button>
                );
              })}
              {settings.permit_room_visible && (
                <button
                  onClick={() => handleNavClick('/permit-room')}
                  className={`whitespace-nowrap shrink-0 py-1 text-xs opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1.5 ${
                    currentPath === '/permit-room' ? 'text-[#FF9933] font-semibold opacity-100' : ''
                  }`}
                >
                  <Shield className="w-3.5 h-3.5 text-[#FF9933]" />
                  परमिट रूम माहिती
                </button>
              )}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={`tel:+91${settings.primary_phone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold rounded-lg bg-[#FF9933] hover:bg-[#E67E17] text-[#1C130D] transition-colors shadow-sm whitespace-nowrap shrink-0 active:scale-98"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>आता कॉल करा</span>
              </a>
            </div>

            {/* Mobile hamburger button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:+91${settings.primary_phone}`}
                className="p-2 rounded-lg bg-[#FF9933] text-[#1C130D] sm:hidden flex items-center justify-center font-bold"
                aria-label="कॉल करा"
              >
                <Phone className="w-4 h-4 fill-current" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#FFF9F2] hover:bg-[#281B12] transition-colors"
                aria-label={mobileMenuOpen ? 'मेनू बंद करा' : 'मेनू उघडा'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#150E0A] border-t border-[#382619] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-base transition-colors ${
                  currentPath === link.path
                    ? 'bg-[#281B12] text-[#FF9933] font-semibold'
                    : 'text-[#FFF9F2] hover:bg-[#281B12]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('/amchyavishayi')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-base transition-colors ${
                currentPath === '/amchyavishayi'
                  ? 'bg-[#281B12] text-[#FF9933] font-semibold'
                  : 'text-[#FFF9F2] hover:bg-[#281B12]'
              }`}
            >
              आमच्याविषयी
            </button>

            {settings.permit_room_visible && (
              <button
                onClick={() => handleNavClick('/permit-room')}
                className={`w-full text-left px-3 py-2.5 rounded-md text-base flex items-center gap-2 transition-colors ${
                  currentPath === '/permit-room'
                    ? 'bg-[#281B12] text-[#FF9933] font-semibold'
                    : 'text-[#FFF9F2]/80 hover:bg-[#281B12]'
                }`}
              >
                <Shield className="w-4 h-4 text-[#FF9933]" />
                परमिट रूम माहिती (परवानाधारक)
              </button>
            )}

            <div className="pt-3 border-t border-[#382619] flex flex-col gap-2">
              <a
                href={`tel:+91${settings.primary_phone}`}
                className="w-full text-center py-2.5 px-4 bg-[#FF9933] text-[#1C130D] font-bold rounded-lg flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4 fill-current" />
                कॉल करा: {settings.primary_phone}
              </a>
              <button
                onClick={() => handleNavClick('/admin')}
                className="w-full text-left px-3 py-2 text-xs text-[#FFF9F2]/60 hover:text-white flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-[#FF9933]" />
                व्यवस्थापन लॉगिन {isAdminAuthenticated && '(सक्रिय)'}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
