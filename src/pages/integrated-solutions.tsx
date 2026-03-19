import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Monitor, 
  Layout, 
  Code, 
  TrendingUp, 
  Bot, 
  ShoppingCart, 
  Shield, 
  Smartphone, 
  Palette,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import BinaryRain from '../components/BinaryRain';

export default function IntegratedSolutions() {
  const features = [
    {
      category: "Growth & Marketing",
      icon: TrendingUp,
      color: "text-[#0ea5e9]",
      bg: "bg-[#0ea5e9]/10",
      dot: "bg-[#0ea5e9]",
      items: [
        "SEO optimization",
        "Analytics & tracking",
        "Lead generation systems",
        "Conversion optimization"
      ]
    },
    {
      category: "Automation & Smart Features",
      icon: Bot,
      color: "text-[#10b981]",
      bg: "bg-[#10b981]/10",
      dot: "bg-[#10b981]",
      items: [
        "AI chatbot integration",
        "Automated workflows",
        "Booking systems",
        "Email automation"
      ]
    },
    {
      category: "Business Functionality",
      icon: ShoppingCart,
      color: "text-[#f59e0b]",
      bg: "bg-[#f59e0b]/10",
      dot: "bg-[#f59e0b]",
      items: [
        "E-commerce systems",
        "Payment integrations",
        "Membership areas",
        "Client dashboards"
      ]
    },
    {
      category: "Data & Security",
      icon: Shield,
      color: "text-[#8b5cf6]",
      bg: "bg-[#8b5cf6]/10",
      dot: "bg-[#8b5cf6]",
      items: [
        "Database systems",
        "Secure backups",
        "Cloud integration",
        "Security enhancements"
      ]
    },
    {
      category: "Advanced Development",
      icon: Smartphone,
      color: "text-[#d946ef]",
      bg: "bg-[#d946ef]/10",
      dot: "bg-[#d946ef]",
      items: [
        "Mobile app integration",
        "Custom systems",
        "API integrations",
        "Advanced dashboards"
      ]
    },
    {
      category: "Design & Branding",
      icon: Palette,
      color: "text-[#f43f5e]",
      bg: "bg-[#f43f5e]/10",
      dot: "bg-[#f43f5e]",
      items: [
        "Logo design",
        "Brand identity",
        "Social media design",
        "UI/UX enhancements"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="blob blob-1 bg-[#0ea5e9]/20"></div>
      <div className="blob blob-2 bg-[#8b5cf6]/20"></div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#0ea5e9] mr-2 tech-glow"></span>
          <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">Comprehensive Packages</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Integrated <span className="animated-gradient-text">Solutions</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          We build powerful, modern websites tailored to your business stage — from startup to advanced digital solutions.
        </motion.p>
      </section>

      {/* Website Types Section */}
      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch overflow-visible">
            {/* Starter */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
              className="glass-card p-8 flex flex-col h-full border border-white/5 hover:border-[#0ea5e9]/30 transition-all duration-300 group relative overflow-hidden"
            >
              <BinaryRain opacity={0.08} color="#0ea5e9" direction="mixed" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center mb-6 border border-[#0ea5e9]/20 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Monitor className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Starter Websites</h3>
              <p className="text-gray-400 mb-6 font-medium relative z-10">Perfect for new businesses starting their online journey</p>
              
              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                {['1–3 pages (Home, About, Contact)', 'Mobile-responsive design', 'Clean, modern layout', 'Contact form', 'Fast performance'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#0ea5e9] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-secondary w-full relative z-10">Request a Quote</Link>
            </motion.div>

            {/* Professional (Highlighted) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass-card p-8 flex flex-col h-full border-2 border-[#0ea5e9]/50 relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(14,165,233,0.15)] group overflow-visible"
            >
              <BinaryRain opacity={0.08} color="#0ea5e9" direction="mixed" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ea5e9]/5 to-transparent"></div>
              
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap z-30">
                Most Popular
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#8b5cf6] text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Layout className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Professional Websites</h3>
              <p className="text-[#38bdf8] mb-6 font-medium relative z-10">Ideal for growing businesses looking to attract more clients</p>
              
              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                {['4–8 pages', 'Custom UI/UX design', 'Animations & interactivity', 'Lead generation forms', 'SEO-ready structure'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#38bdf8] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary w-full relative z-10">Request a Quote</Link>
            </motion.div>

            {/* Premium */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8 flex flex-col h-full border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group relative overflow-hidden"
            >
              <BinaryRain opacity={0.08} color="#10b981" direction="mixed" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-[#10b981]/10 text-[#10b981] flex items-center justify-center mb-6 border border-[#10b981]/20 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Premium Websites</h3>
              <p className="text-gray-400 mb-6 font-medium relative z-10">Built for businesses that want a powerful, high-end digital presence</p>
              
              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                {['Fully custom design', 'Advanced UI/UX', 'Integrations & automation', 'Performance optimization', 'Scalable architecture'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-secondary w-full relative z-10">Request a Quote</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-24 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0ea5e9]/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Additional <span className="animated-gradient-text">Features</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Enhance your website with powerful add-ons designed to scale your operations and boost your marketing.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 border border-white/5 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{feature.category}</h3>
                <ul className="space-y-3 relative z-10">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full ${feature.dot} mr-3 shadow-[0_0_5px_currentColor]`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Support Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="glass-card p-10 md:p-16 text-center max-w-4xl mx-auto border border-white/10 relative overflow-hidden"
          >
            <BinaryRain opacity={0.08} color="#0ea5e9" direction="down" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_70%)]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.1),transparent_70%)]"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Ongoing Support & Growth</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
              We continue supporting your business long after your website goes live.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left relative z-10">
              {[
                "Website maintenance",
                "Updates & improvements",
                "Performance monitoring",
                "Technical support"
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center sm:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] mr-2 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/20 to-[#8b5cf6]/20"></div>
        <div className="absolute inset-0 grid-bg-dark opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight"
          >
            Ready to build a website that grows your business?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact" className="btn-primary inline-flex items-center group">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
