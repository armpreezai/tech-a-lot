import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-900/20 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 tech-glow">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-400">
            Tech-A-Lot<br />
            Effective Date: 18 March 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg max-w-none text-gray-300 glass-card p-8 md:p-12 rounded-2xl"
        >
          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
          <p>
            Tech-A-Lot (“we”, “our”, “us”) is committed to protecting your personal information and your right to privacy in accordance with the <strong className="text-white">Protection of Personal Information Act, 2013 (POPIA)</strong> of South Africa.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or use our services.
          </p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Information We Collect</h2>
          <p>We may collect and process the following personal information:</p>

          <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-3">2.1 Information You Provide</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Name and surname</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Any information submitted via contact forms or communication</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-3">2.2 Automatically Collected Information</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited on our website</li>
            <li>Date and time of visits</li>
          </ul>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use your personal information to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Respond to inquiries and provide support</li>
            <li>Deliver and improve our services</li>
            <li>Communicate with you regarding your requests</li>
            <li>Maintain and improve our website functionality</li>
            <li>Comply with legal obligations</li>
          </ul>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Legal Basis for Processing</h2>
          <p>We process your personal information in accordance with POPIA based on:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Your consent</li>
            <li>The necessity to perform a contract</li>
            <li>Legitimate business interests</li>
            <li>Compliance with legal obligations</li>
          </ul>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Sharing of Information</h2>
          <p>We do not sell your personal information.</p>
          <p>We may share your information with:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Service providers assisting in website hosting or operations</li>
            <li>Legal authorities when required by law</li>
          </ul>
          <p>All third parties are required to respect the confidentiality and security of your data.</p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Unauthorized access</li>
            <li>Loss or theft</li>
            <li>Alteration or disclosure</li>
          </ul>
          <p>However, no method of transmission over the internet is 100% secure.</p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Data Retention</h2>
          <p>We retain your personal information only for as long as necessary to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Fulfill the purposes outlined in this policy</li>
            <li>Comply with legal, accounting, or reporting requirements</li>
          </ul>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Your Rights Under POPIA</h2>
          <p>Under South African law, you have the right to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Access your personal information</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to processing of your information</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the Information Regulator</li>
          </ul>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Cookies and Tracking Technologies</h2>
          <p>Our website may use cookies to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Improve user experience</li>
            <li>Analyze website traffic</li>
            <li>Remember user preferences</li>
          </ul>
          <p>You can choose to disable cookies through your browser settings.</p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Third-Party Links</h2>
          <p>Our website may contain links to external websites. We are not responsible for the privacy practices of those websites.</p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.</p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">12. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or your personal data, please contact us:</p>
          <p>
            <strong className="text-white">Tech-A-Lot</strong><br />
            Email: <a href="mailto:info@tech-a-lot.co.za" className="text-blue-400 hover:text-blue-300 transition-colors">info@tech-a-lot.co.za</a><br />
            Phone: 082 650 4740
          </p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">13. Information Regulator (South Africa)</h2>
          <p>If you believe your data has been misused, you have the right to lodge a complaint with:</p>
          <p>
            <strong className="text-white">The Information Regulator (South Africa)</strong><br />
            Website: <a href="https://www.justice.gov.za/inforeg/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">https://www.justice.gov.za/inforeg/</a><br />
            Email: <a href="mailto:inforeg@justice.gov.za" className="text-blue-400 hover:text-blue-300 transition-colors">inforeg@justice.gov.za</a>
          </p>

          <hr className="my-8 border-white/10" />

          <p className="font-bold text-center mt-8 text-white">
            By using this website, you agree to the terms of this Privacy Policy.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
