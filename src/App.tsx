import './App.css';
import { Analytics } from '@vercel/analytics/react';
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import HeroSlider from './components/home/HeroSlider';
import WelcomeSection from './components/home/WelcomeSection';
import BannerCTA from './components/home/BannerCTA';
import ServicesGrid from './components/home/ServicesGrid';
import Testimonials from './components/home/Testimonials';
import FAQ from './components/home/FAQ';
import LatestPosts from './components/home/LatestPosts';
import SidebarAbout from './components/sidebar/SidebarAbout';
import SidebarWidgets from './components/sidebar/SidebarWidgets';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <TopBar />
      
      {/* Header */}
      <Header />

      {/* Main Container - 2 Column Layout */}
      <div className="container-custom py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar - 3 columns (25%) */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <Sidebar />
            <SidebarAbout />
            <SidebarWidgets />
          </aside>

          {/* Main Content - 9 columns (75%) */}
          <main className="lg:col-span-9 order-1 lg:order-2">
            {/* Hero Slider */}
            <section id="inicio">
              <HeroSlider />
            </section>

            {/* Welcome Section */}
            <section id="sobre-mi">
              <WelcomeSection />
            </section>

            {/* Banner CTA */}
            <BannerCTA />

            {/* Services Grid */}
            <section id="servicios">
              <ServicesGrid />
            </section>

            {/* Testimonials */}
            <Testimonials />

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

      {/* Footer */}
      <Footer />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
