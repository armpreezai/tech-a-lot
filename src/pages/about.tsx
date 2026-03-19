import { motion } from 'motion/react';
import { Target, Lightbulb, ShieldCheck, TrendingUp, Headphones, Cpu, Network, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="blob blob-2 bg-[#0ea5e9]/20" style={{ top: '-10%', right: '-10%', left: 'auto' }}></div>
      <div className="blob blob-1 bg-[#8b5cf6]/20" style={{ bottom: '-10%', left: '-10%', top: 'auto' }}></div>
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#8b5cf6] mr-2 tech-glow"></span>
          <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">Who We Are</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          About <span className="animated-gradient-text">Tech-A-Lot</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We are a passionate team of digital architects dedicated to transforming businesses through cutting-edge technology and innovative design.
        </motion.p>
      </section>

      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission & Vision</h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                At Tech-A-Lot, our mission is simple: to be the catalyst for your digital success. We believe that every business, regardless of size, deserves access to enterprise-grade technology and design.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                We don't just build websites or databases; we craft custom solutions that solve real business problems. Our focus is on reliability, innovation, and creating digital assets that scale as you grow.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="flex items-start space-x-4 glass-card p-4 border border-white/5 hover:border-[#0ea5e9]/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9] group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Goal-Oriented</h4>
                    <p className="text-sm text-gray-400">Focused on your ROI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 glass-card p-4 border border-white/5 hover:border-[#10b981]/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981] group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Fast Execution</h4>
                    <p className="text-sm text-gray-400">Rapid deployment</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative">
              {/* Tech Illustration Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0ea5e9] to-[#8b5cf6] rounded-2xl transform rotate-3 opacity-20 blur-xl"></div>
              
              <div className="glass-card p-10 relative z-10 border border-white/10 overflow-hidden">
                {/* Decorative tech lines */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.2),transparent_70%)]"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.2),transparent_70%)]"></div>
                
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-center hover:-translate-y-1 transition-transform duration-300 group">
                    <div className="w-10 h-10 mx-auto bg-[#0ea5e9]/20 rounded-full flex items-center justify-center mb-4 text-[#0ea5e9] group-hover:scale-110 transition-transform">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
                    <p className="text-gray-400 font-medium text-sm uppercase tracking-wider">Commitment</p>
                  </div>
                  <div className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-center hover:-translate-y-1 transition-transform duration-300 group">
                    <div className="w-10 h-10 mx-auto bg-[#10b981]/20 rounded-full flex items-center justify-center mb-4 text-[#10b981] group-hover:scale-110 transition-transform">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
                    <p className="text-gray-400 font-medium text-sm uppercase tracking-wider">Support</p>
                  </div>
                  <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl border border-white/10 text-center col-span-2 hover:-translate-y-1 transition-transform duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/0 via-[#0ea5e9]/10 to-[#0ea5e9]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animation: 'shine 3s infinite' }}></div>
                    <div className="w-12 h-12 mx-auto bg-[#8b5cf6]/20 rounded-full flex items-center justify-center mb-4 text-[#8b5cf6] group-hover:scale-110 transition-transform">
                      <Network className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Custom Solutions</h3>
                    <p className="text-gray-400">Architected specifically for your exact needs</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 mt-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0ea5e9]/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">The fundamental principles that guide our engineering and design.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "Staying ahead of the curve with modern tech stacks and creative solutions.", color: "text-[#0ea5e9]", bg: "bg-[#0ea5e9]/10", border: "border-[#0ea5e9]/20" },
              { icon: ShieldCheck, title: "Reliability", desc: "Building robust systems you can depend on, day in and day out.", color: "text-[#10b981]", bg: "bg-[#10b981]/10", border: "border-[#10b981]/20" },
              { icon: TrendingUp, title: "Scalability", desc: "Designing architectures that grow seamlessly alongside your business.", color: "text-[#f59e0b]", bg: "bg-[#f59e0b]/10", border: "border-[#f59e0b]/20" },
              { icon: Headphones, title: "Support", desc: "Providing dedicated, ongoing assistance to ensure your continued success.", color: "text-[#8b5cf6]", bg: "bg-[#8b5cf6]/10", border: "border-[#8b5cf6]/20" }
            ].map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }}
                className="glass-card p-8 text-center group hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-white/20 relative overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`w-16 h-16 mx-auto rounded-2xl ${val.bg} ${val.color} flex items-center justify-center mb-6 border ${val.border} group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <val.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{val.title}</h3>
                <p className="text-gray-400 relative z-10 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
