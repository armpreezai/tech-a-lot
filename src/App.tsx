/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Services from './pages/services';
import IntegratedSolutions from './pages/integrated-solutions';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import WebsiteDesignInfo from './pages/website-design-info';
import WebsiteRevampsInfo from './pages/website-revamps-info';
import DatabaseDesignInfo from './pages/database-design-info';
import DataBackupsInfo from './pages/data-backups-info';
import SocialMediaManagementInfo from './pages/social-media-management-info';
import ChatBot from './components/ChatBot';
import PrivacyPolicy from './pages/privacy-policy';
import TermsAndConditions from './pages/terms-and-conditions';
import BinaryRain from './components/BinaryRain';
import ScrollToTop from './components/ScrollToTop';
import WelcomePopup from './components/WelcomePopup';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <WelcomePopup />
      <div className="antialiased relative min-h-screen flex flex-col bg-[#020617] text-white overflow-hidden">
        {/* Global Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 grid-bg-dark opacity-30"></div>
          <BinaryRain opacity={0.25} color="#0ea5e9" />
        </div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/website-design" element={<WebsiteDesignInfo />} />
            <Route path="/services/website-revamps" element={<WebsiteRevampsInfo />} />
            <Route path="/services/database-design" element={<DatabaseDesignInfo />} />
            <Route path="/services/data-backups" element={<DataBackupsInfo />} />
            <Route path="/services/social-media-management" element={<SocialMediaManagementInfo />} />
            <Route path="/integrated-solutions" element={<IntegratedSolutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
        </div>
      </div>
    </Router>
  );
}
