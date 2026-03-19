import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Layout, RefreshCw, Database, HardDriveDownload, Share2, ArrowRight } from 'lucide-react';
import BinaryRain from '../components/BinaryRain';

export default function Services() {
  const services = [
    {
      icon: Layout, title: "Website Design", delay: 0,
      desc: "We build stunning, high-performance websites tailored to your brand. Our mobile-first approach ensures a flawless experience across all devices.",
      color: "text-[#0ea5e9]", bg: "bg-[#0ea5e9]/10", border: "border-[#0ea5e9]/20", hover: "group-hover:text-[#38bdf8]", rainColor: "#0ea5e9"
    },
    {
      icon: RefreshCw, title: "Website Revamps", delay: 0.1,
      desc: "Breathe new life into your outdated website. We modernize your design, improve UX, and optimize for modern SEO standards.",
      color: "text-[#8b5cf6]", bg: "bg-[#8b5cf6]/10", border: "border-[#8b5cf6]/20", hover: "group-hover:text-[#a78bfa]", rainColor: "#8b5cf6"
    },
    {
      icon: Database, title: "Database Design", delay: 0.2,
      desc: "Robust, scalable, and secure database architectures. We design data structures that power complex applications efficiently.",
      color: "text-[#10b981]", bg: "bg-[#10b981]/10", border: "border-[#10b981]/20", hover: "group-hover:text-[#34d399]", rainColor: "#10b981"
    },
    {
      icon: HardDriveDownload, title: "Data Backups", delay: 0,
      desc: "Protect your most valuable asset. Automated, secure, and redundant data backup solutions to ensure business continuity.",
      color: "text-[#f43f5e]", bg: "bg-[#f43f5e]/10", border: "border-[#f43f5e]/20", hover: "group-hover:text-[#fb7185]", rainColor: "#f43f5e"
    },
    {
      icon: Share2, title: "Social Media Management", delay: 0.1,
      desc: "Strategic content creation, community management, and growth campaigns across all major social platforms.",
      color: "text-[#f59e0b]", bg: "bg-[#f59e0b]/10", border: "border-[#f59e0b]/20", hover: "group-hover:text-[#fbbf24]", rainColor: "#f59e0b"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="blob blob-1 bg-[#0ea5e9]/20"></div>
      <div className="blob blob-2 bg-[#8b5cf6]/20"></div>
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#0ea5e9] mr-2 tech-glow"></span>
          <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">Our Expertise</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Digital <span className="animated-gradient-text">Solutions</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Comprehensive digital solutions designed to elevate your brand, streamline your operations, and drive measurable growth in the modern tech landscape.
        </motion.p>
      </section>

      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: service.delay }}
                className="glass-card p-8 flex flex-col h-full group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden border border-white/5 hover:border-white/20">
                
                {/* Animated IT Background */}
                <BinaryRain opacity={0.08} color={service.rainColor} direction="mixed" />
                
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 border ${service.border} group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-gray-400 mb-8 flex-grow relative z-10 leading-relaxed">{service.desc}</p>
                <Link to={`/services/${service.title.toLowerCase().replaceAll(' ', '-')}`} className={`${service.color} font-semibold flex items-center ${service.hover} transition-colors mt-auto relative z-10`}>
                  Learn More <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0ea5e9]/10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Not sure what you need?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Schedule a free consultation with our experts to discuss your digital strategy and find the perfect solution.</p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Book Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
