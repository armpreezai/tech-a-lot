import { motion } from 'motion/react';
import { Layout, Palette, Smartphone, Zap, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebsiteDesignInfo() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-900/20 blur-[120px]" />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-8 border border-blue-500/20 tech-glow">
            <Layout className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What is <span className="animated-gradient-text">Website Design?</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Website design is the process of creating the look, feel, and overall experience of a website. It combines visual design, structure, and functionality to ensure that visitors can easily navigate, understand, and interact with your business online.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed mt-6">
            A well-designed website is more than just something that looks good — it is built to attract attention, build trust, and convert visitors into customers.
          </p>
        </motion.div>

        {/* Why it Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 mb-16 border-l-4 border-l-blue-500 rounded-2xl"
        >
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Why Website Design Matters</h2>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            Your website is often the first impression people have of your business. A professional design helps you:
          </p>
          <ul className="space-y-4">
            {[
              "Build credibility and trust",
              "Clearly communicate your services",
              "Stand out from competitors",
              "Turn visitors into leads or clients"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-lg text-gray-300 font-medium">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-4 tech-glow"></div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* What it Includes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-10 text-center">What Website Design Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Layout,
                title: "Layout & Structure",
                desc: "Organizing content in a way that is easy to navigate"
              },
              {
                icon: Palette,
                title: "Visual Design",
                desc: "Colors, fonts, images, and branding that reflect your business"
              },
              {
                icon: Target,
                title: "User Experience (UX)",
                desc: "Making sure visitors can find what they need quickly and easily"
              },
              {
                icon: Smartphone,
                title: "Mobile Responsiveness",
                desc: "Ensuring the website works perfectly on phones, tablets, and desktops"
              },
              {
                icon: Zap,
                title: "Performance & Speed",
                desc: "Fast-loading pages that keep users engaged"
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl flex items-start hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mr-4 flex-shrink-0 border border-blue-500/20">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The Goal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-900/80 to-teal-900/80 border border-blue-500/30 text-white rounded-3xl p-8 md:p-12 text-center mb-16 shadow-[0_0_30px_rgba(59,130,246,0.2)] backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold mb-6">The Goal of Website Design</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            The goal of website design is to create a digital platform that not only looks professional, but also helps your business grow by generating leads, increasing engagement, and supporting your overall online presence.
          </p>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-blue-500/30">
            In Simple Terms
          </div>
          <p className="text-2xl md:text-3xl font-medium text-white leading-tight mb-12">
            Website design is about turning your business into a powerful online experience that works for you 24/7.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
