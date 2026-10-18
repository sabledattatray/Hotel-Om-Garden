import React, { useState, useEffect } from 'react';
import { StoreProvider } from './context/StoreContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileActionBar } from './components/layout/MobileActionBar';
import { DevanagariBanner } from './components/common/DevanagariBanner';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { PermitRoomPage } from './pages/PermitRoomPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { AdminPage } from './pages/AdminPage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Handle browser back / forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigateTo} />;
      case '/khadyapadarth':
        return <MenuPage />;
      case '/kutumbasathi-suvidha':
        return <FacilitiesPage />;
      case '/photo-gallery':
        return <GalleryPage />;
      case '/amchyavishayi':
        return <AboutPage />;
      case '/permit-room':
        return <PermitRoomPage />;
      case '/sampark':
        return <ContactPage />;
      case '/gopaniyata':
        return <PrivacyPage onNavigate={navigateTo} />;
      case '/niyam-ati':
        return <TermsPage onNavigate={navigateTo} />;
      case '/admin':
      case '/admin/menu':
      case '/admin/gallery':
      case '/admin/content':
      case '/admin/enquiries':
      case '/admin/settings':
        return <AdminPage />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col bg-[#FFF9F2] text-[#221811]">
        {/* Top Announcement Banner */}
        <DevanagariBanner />

        {/* Top Bar Header adhering to Top Bar Contract */}
        <Header currentPath={currentPath} onNavigate={navigateTo} />

        {/* Main Content Viewport */}
        <main className="flex-1">
          {renderCurrentPage()}
        </main>

        {/* Comprehensive Devanagari Footer */}
        <Footer onNavigate={navigateTo} />

        {/* Sticky Mobile Quick Dial & Navigation (<15% height) */}
        <MobileActionBar onNavigate={navigateTo} />
      </div>
    </StoreProvider>
  );
}

export default App;
