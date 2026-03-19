import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 tech-glow">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Terms and Conditions</h1>
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
            Welcome to Tech-A-Lot. These Terms and Conditions (“Terms”) govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
          </p>
          <p>
            If you do not agree with any part of these Terms, you must not use our website.
          </p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Services</h2>
          <p>Tech-A-Lot provides digital services including, but not limited to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Website design and development</li>
            <li>Website revamps</li>
            <li>Database design</li>
            <li>Data backup solutions</li>
            <li>Social media management</li>
            <li>Future services such as AI bot development and mobile applications</li>
          </ul>
          <p>All services are subject to availability and may be modified or discontinued at any time without notice.</p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Use of Website</h2>
          <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Disrupt or damage the website or its functionality</li>
          </ul>
          <p>Unauthorized use of this website may result in legal action.</p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and design, is the property of Tech-A-Lot unless otherwise stated.</p>
          <p>You may not:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Copy, reproduce, or distribute content without permission</li>
            <li>Use our branding for commercial purposes without consent</li>
          </ul>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Quotes, Payments, and Agreements</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>All quotes provided are valid for a limited time unless stated otherwise</li>
            <li>A project may require a deposit before work begins</li>
            <li>Final deliverables may be withheld until full payment is received</li>
            <li>Specific terms may be outlined in individual service agreements</li>
          </ul>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Client Responsibilities</h2>
          <p>Clients agree to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide accurate and complete information</li>
            <li>Respond to requests in a timely manner</li>
            <li>Supply required content (text, images, etc.)</li>
          </ul>
          <p>Delays in providing information may impact project timelines.</p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Revisions and Changes</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Reasonable revisions may be included depending on the project scope</li>
            <li>Additional changes outside the agreed scope may incur extra charges</li>
          </ul>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Limitation of Liability</h2>
          <p>Tech-A-Lot will not be held liable for:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Any indirect or consequential damages</li>
            <li>Loss of data, profits, or business opportunities</li>
            <li>Issues arising from third-party services or platforms</li>
          </ul>
          <p>All services are provided “as is” without warranties of any kind.</p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Third-Party Services</h2>
          <p>Our services may involve third-party tools, hosting providers, or integrations.</p>
          <p>We are not responsible for:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Downtime or failures of third-party services</li>
            <li>Changes made by external platforms</li>
          </ul>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Data Protection and Privacy</h2>
          <p>Your personal information is handled in accordance with our Privacy Policy and applicable South African laws, including the Protection of Personal Information Act (POPIA).</p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Termination</h2>
          <p>We reserve the right to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Suspend or terminate access to our website or services</li>
            <li>Refuse service at our discretion</li>
          </ul>
          <p>This may occur if these Terms are violated.</p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">12. Governing Law</h2>
          <p>These Terms are governed by the laws of the Republic of South Africa.</p>
          <p>Any disputes arising will be subject to the jurisdiction of South African courts.</p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">13. Changes to Terms</h2>
          <p>We may update these Terms at any time. Changes will be posted on this page with an updated effective date.</p>
          <p>Your continued use of the website constitutes acceptance of the updated Terms.</p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">14. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <p>
            <strong className="text-white">Tech-A-Lot</strong><br />
            Email: <a href="mailto:info@tech-a-lot.co.za" className="text-blue-400 hover:text-blue-300 transition-colors">info@tech-a-lot.co.za</a><br />
            Phone: 082 650 4740
          </p>

          <hr className="my-8 border-white/10" />

          <p className="font-bold text-center mt-8 text-white">
            By using this website, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
