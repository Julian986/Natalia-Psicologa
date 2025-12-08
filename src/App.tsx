import './App.css';
import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import HeroSlider from './components/home/HeroSlider';
import WelcomeSection from './components/home/WelcomeSection';
import ChildrenAdolescents from './components/home/ChildrenAdolescents';
import BannerCTA from './components/home/BannerCTA';
import ServicesGrid from './components/home/ServicesGrid';
import FAQ from './components/home/FAQ';
import LatestPosts from './components/home/LatestPosts';
import SidebarAbout from './components/sidebar/SidebarAbout';
import SidebarWidgets from './components/sidebar/SidebarWidgets';
import WhatsAppFloating from './components/common/WhatsAppFloating';
import Reflections from './components/home/Reflections';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <TopBar />
      
      {/* Header */}
      <Header onMenuToggle={toggleMobileMenu} />

      {/* Main Container - 2 Column Layout */}
      <div className="container-custom py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar - 3 columns (25%) */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <Sidebar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
            <SidebarAbout />
            <SidebarWidgets />
          </aside>

          {/* Main Content - 9 columns (75%) */}
          <main className="lg:col-span-9 order-1 lg:order-2">
            {/* Hero Slider */}
            <section id="inicio">
              <HeroSlider />
            </section>
            
            {/* Welcome Title */}
            <h3 className="widget-title mb-6">Salud mental desde una mirada profesional</h3>

            {/* Welcome Section */}
            <section id="sobre-mi">
              <WelcomeSection />
            </section>

            {/* Children and Adolescents Section */}
            <ChildrenAdolescents />

            {/* Banner CTA */}
            <BannerCTA />

            {/* Services Grid */}
            <section id="servicios">
              <ServicesGrid />
            </section>

            {/* Reflections Section */}
            <Reflections />

            {/* FAQ */}
            <section id="faq">
              <FAQ />
            </section>

            {/* Latest Posts */}
            <section id="blog">
              <LatestPosts />
            </section>
          </main>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <WhatsAppFloating />

      {/* Footer */}
      <Footer />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
