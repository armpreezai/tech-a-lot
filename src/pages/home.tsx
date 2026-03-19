import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Cpu, TrendingUp, Lock, LayoutTemplate, Database, Share2, Bot, Smartphone, Code, Zap } from 'lucide-react';
import BinaryRain from '../components/BinaryRain';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="blob blob-1 bg-[#0ea5e9]/20"></div>
      <div className="blob blob-2 bg-[#10b981]/20"></div>
      <div className="absolute top-40 left-20 w-32 h-32 bg-[#0ea5e9]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#10b981]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center min-h-[90vh] justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 text-[#0ea5e9] font-medium text-sm mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#0ea5e9] mr-2 animate-pulse tech-glow"></span>
            Your Partner in Digital Success
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            We design <span className="animated-gradient-text">powerful</span><br className="hidden md:block" /> digital solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl text-gray-400 max-w-xl mx-auto md:mx-0 mb-10">
            Tech-A-Lot helps businesses grow faster with cutting-edge web design, robust databases, and strategic digital management.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4 group">
              Get in Touch 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="btn-secondary text-lg px-8 py-4">
              View Services
            </Link>
          </motion.div>
        </div>

        {/* Hero Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="md:w-1/2 relative hidden md:block">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Abstract Tech Illustration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0ea5e9]/10 to-[#10b981]/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 glass rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 grid-bg-dark opacity-50"></div>
              <motion.div 
                animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full border-[1px] border-dashed border-[#0ea5e9]/50 rounded-full scale-110">
              </motion.div>
              <motion.div 
                animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-3/4 h-3/4 border-[1px] border-dashed border-[#10b981]/50 rounded-full scale-110">
              </motion.div>
              <div className="relative z-10 grid grid-cols-2 gap-4 p-6">
                <div className="bg-[#0f172a]/80 backdrop-blur p-4 rounded-xl shadow-sm flex flex-col items-center justify-center border border-white/5">
                  <Code className="w-8 h-8 text-[#0ea5e9] mb-2" />
                  <div className="h-2 w-16 bg-gray-700 rounded-full"></div>
                </div>
                <div className="bg-[#0f172a]/80 backdrop-blur p-4 rounded-xl shadow-sm flex flex-col items-center justify-center translate-y-4 border border-white/5">
                  <Database className="w-8 h-8 text-[#10b981] mb-2" />
                  <div className="h-2 w-12 bg-gray-700 rounded-full"></div>
                </div>
                <div className="bg-[#0f172a]/80 backdrop-blur p-4 rounded-xl shadow-sm flex flex-col items-center justify-center -translate-y-4 border border-white/5">
                  <Zap className="w-8 h-8 text-[#f59e0b] mb-2" />
                  <div className="h-2 w-14 bg-gray-700 rounded-full"></div>
                </div>
                <div className="bg-[#0f172a]/80 backdrop-blur p-4 rounded-xl shadow-sm flex flex-col items-center justify-center border border-white/5">
                  <ShieldCheck className="w-8 h-8 text-[#8b5cf6] mb-2" />
                  <div className="h-2 w-10 bg-gray-700 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 glass p-3 rounded-xl shadow-lg border border-white/10">
              <Cpu className="w-6 h-6 text-[#0ea5e9]" />
            </motion.div>
            <motion.div 
              animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-0 glass p-3 rounded-xl shadow-lg border border-white/10">
              <TrendingUp className="w-6 h-6 text-[#10b981]" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="border-y border-white/5 bg-[#0f172a]/40 backdrop-blur-md py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: ShieldCheck, title: "Reliable Solutions", color: "text-[#0ea5e9]", bg: "bg-[#0ea5e9]/10" },
              { icon: Cpu, title: "Modern Technology", color: "text-[#10b981]", bg: "bg-[#10b981]/10" },
              { icon: TrendingUp, title: "Scalable Systems", color: "text-[#f59e0b]", bg: "bg-[#f59e0b]/10" },
              { icon: Lock, title: "Secure Infrastructure", color: "text-[#8b5cf6]", bg: "bg-[#8b5cf6]/10" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center group">
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_currentColor]`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-300">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Everything you need to establish and scale your digital presence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
              className="glass-card p-8 group relative overflow-hidden">
              <BinaryRain opacity={0.08} color="#0ea5e9" direction="mixed" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea5e9]/20 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:opacity-70 opacity-0"></div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#3b82f6] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#0ea5e9]/30 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <LayoutTemplate className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Website Design</h3>
              <p className="text-gray-400 mb-6 relative z-10">Custom, responsive websites built to convert visitors into customers with stunning UI/UX.</p>
              <Link to="/services/website-design" className="inline-flex items-center text-[#0ea5e9] font-medium group-hover:underline relative z-10">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 group relative overflow-hidden">
              <BinaryRain opacity={0.08} color="#10b981" direction="mixed" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/20 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:opacity-70 opacity-0"></div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10b981] to-[#059669] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#10b981]/30 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Database Design</h3>
              <p className="text-gray-400 mb-6 relative z-10">Scalable and secure database architectures tailored to your specific business requirements.</p>
              <Link to="/services/database-design" className="inline-flex items-center text-[#10b981] font-medium group-hover:underline relative z-10">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 group relative overflow-hidden">
              <BinaryRain opacity={0.08} color="#f59e0b" direction="mixed" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f59e0b]/20 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:opacity-70 opacity-0"></div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#f59e0b]/30 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Share2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Social Media</h3>
              <p className="text-gray-400 mb-6 relative z-10">Strategic management and content creation to grow your audience and brand awareness.</p>
              <Link to="/services/social-media-management" className="inline-flex items-center text-[#f59e0b] font-medium group-hover:underline relative z-10">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-center">
            <Link to="/services" className="btn-secondary group">
              View All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section - Futuristic Dark Theme */}
      <section className="py-24 bg-[#0f172a]/50 text-white relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 grid-bg-dark opacity-30 z-0"></div>
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-[#0ea5e9]/10 to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-full bg-gradient-to-r from-[#10b981]/10 to-transparent z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
              className="md:w-1/2">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 text-[#10b981] font-medium text-xs mb-6 uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <span className="flex h-2 w-2 rounded-full bg-[#10b981] mr-2 animate-pulse tech-glow"></span>
                Launching Soon
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">The <span className="animated-gradient-text">Future</span> of Tech-A-Lot</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">We're expanding our capabilities to bring you next-generation tools, intelligent automation, and native mobile experiences.</p>
              
              <div className="flex gap-4">
                <div className="w-12 h-1 bg-gradient-to-r from-[#0ea5e9] to-transparent rounded-full"></div>
                <div className="w-4 h-1 bg-[#0ea5e9]/50 rounded-full"></div>
                <div className="w-2 h-1 bg-[#0ea5e9]/30 rounded-full"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
              className="md:w-5/12 w-full space-y-6">
              <div className="glass border border-white/10 rounded-2xl p-6 flex items-center hover:bg-white/5 transition-all duration-300 group hover:border-[#0ea5e9]/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]">
                <div className="w-14 h-14 rounded-xl bg-[#0ea5e9]/20 text-[#0ea5e9] flex items-center justify-center mr-5 group-hover:scale-110 transition-transform group-hover:bg-[#0ea5e9]/30">
                  <Bot className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">AI Bot Design</h3>
                  <p className="text-gray-400 text-sm">Intelligent conversational agents & automation</p>
                </div>
              </div>
              
              <div className="glass border border-white/10 rounded-2xl p-6 flex items-center hover:bg-white/5 transition-all duration-300 group hover:border-[#10b981]/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                <div className="w-14 h-14 rounded-xl bg-[#10b981]/20 text-[#10b981] flex items-center justify-center mr-5 group-hover:scale-110 transition-transform group-hover:bg-[#10b981]/30">
                  <Smartphone className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Android App Design</h3>
                  <p className="text-gray-400 text-sm">Native mobile experiences & applications</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/10 to-[#8b5cf6]/10 z-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0ea5e9]/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="blob blob-3 bg-[#f59e0b]/20"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 glass-card p-12 md:p-16 border-white/10 shadow-[0_0_50px_rgba(14,165,233,0.1)]">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to take your business to the <span className="animated-gradient-text">next level?</span></h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Let's build something amazing together. Our team is ready to start your next project and transform your digital presence.</p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4 shadow-xl shadow-[#0ea5e9]/30 group">
            Start Your Project Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
