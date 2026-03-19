import { motion } from 'motion/react';
import { Database, Layout, Zap, Lock, Link as LinkIcon, TrendingUp, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DatabaseDesignInfo() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/20 blur-[120px]" />
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
          <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-8 border border-emerald-500/20 tech-glow">
            <Database className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What is <span className="animated-gradient-text">Database Design?</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Database design is the process of creating a structured system to store, organize, and manage your business data efficiently. It ensures that your information is easy to access, secure, and scalable as your business grows.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed mt-6">
            A well-designed database acts as the backbone of your digital systems, powering everything from websites to applications and internal tools.
          </p>
        </motion.div>

        {/* Why it Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 mb-16 border-l-4 border-l-emerald-500 rounded-2xl"
        >
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-emerald-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Why Database Design Matters</h2>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            As your business grows, so does your data. Proper database design helps you:
          </p>
          <ul className="space-y-4">
            {[
              "Keep your data organized and easy to manage",
              "Improve speed and performance of your systems",
              "Reduce errors and duplication",
              "Enhance data security",
              "Support business growth and scalability"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-lg text-gray-300 font-medium">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mr-4 tech-glow"></div>
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
          <h2 className="text-3xl font-bold text-white mb-10 text-center">What Database Design Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Layout,
                title: "Data Structure Planning",
                desc: "Organizing how data is stored (tables, fields, relationships)"
              },
              {
                icon: Zap,
                title: "Efficiency Optimization",
                desc: "Ensuring fast data retrieval and performance"
              },
              {
                icon: Lock,
                title: "Security Setup",
                desc: "Protecting sensitive information with proper access controls"
              },
              {
                icon: LinkIcon,
                title: "Integration Capability",
                desc: "Connecting your database with websites, apps, or systems"
              },
              {
                icon: TrendingUp,
                title: "Scalability Planning",
                desc: "Designing systems that can grow with your business"
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl flex items-start hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mr-4 flex-shrink-0 border border-emerald-500/20">
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
          className="bg-gradient-to-r from-emerald-900/80 to-teal-900/80 border border-emerald-500/30 text-white rounded-3xl p-8 md:p-12 text-center mb-16 shadow-[0_0_30px_rgba(16,185,129,0.2)] backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold mb-6">The Goal of Database Design</h2>
          <p className="text-xl text-emerald-100 leading-relaxed">
            The goal is to create a reliable, secure, and high-performing data system that supports your operations and helps your business run smoothly.
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
          <div className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-emerald-500/30">
            In Simple Terms
          </div>
          <p className="text-2xl md:text-3xl font-medium text-white leading-tight mb-12">
            Database design is about building a smart system behind the scenes that keeps your business data organized, secure, and working efficiently at all times.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
