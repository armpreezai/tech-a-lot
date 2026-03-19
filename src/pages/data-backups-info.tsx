import { motion } from 'motion/react';
import { HardDriveDownload, Target, RefreshCw, Cloud, Zap, History, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DataBackupsInfo() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-8 border border-purple-500/20 tech-glow">
            <HardDriveDownload className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What are <span className="animated-gradient-text">Data Backups?</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Data backups are the process of creating secure copies of your important business data so that it can be restored in case of loss, damage, or system failure.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed mt-6">
            Backups ensure that your business information — such as client data, website content, and files — is never permanently lost.
          </p>
        </motion.div>

        {/* Why it Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 mb-16 border-l-4 border-l-purple-500 rounded-2xl"
        >
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-purple-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Why Data Backups Matter</h2>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            Data loss can happen at any time due to:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "System crashes",
              "Cyberattacks or hacking",
              "Human error",
              "Hardware failure"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-lg text-gray-300 font-medium">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-4 tech-glow"></div>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg text-gray-300 mb-6 mt-8">
            Having reliable backups helps you:
          </p>
          <ul className="space-y-4">
            {[
              "Protect critical business information",
              "Recover quickly from unexpected issues",
              "Avoid costly downtime",
              "Maintain business continuity",
              "Ensure peace of mind"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-lg text-gray-300 font-medium">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-4 tech-glow"></div>
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
          <h2 className="text-3xl font-bold text-white mb-10 text-center">What Data Backup Services Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: RefreshCw,
                title: "Automated Backups",
                desc: "Regularly scheduled backups without manual effort"
              },
              {
                icon: Cloud,
                title: "Secure Storage",
                desc: "Storing data safely in the cloud or external systems"
              },
              {
                icon: Zap,
                title: "Fast Recovery Options",
                desc: "Quickly restoring lost or damaged data"
              },
              {
                icon: History,
                title: "Version Control",
                desc: "Access to previous versions of files if needed"
              },
              {
                icon: Shield,
                title: "Security Protection",
                desc: "Encryption and protection against unauthorized access"
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl flex items-start hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mr-4 flex-shrink-0 border border-purple-500/20">
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
          className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 border border-purple-500/30 text-white rounded-3xl p-8 md:p-12 text-center mb-16 shadow-[0_0_30px_rgba(168,85,247,0.2)] backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold mb-6">The Goal of Data Backups</h2>
          <p className="text-xl text-purple-100 leading-relaxed">
            The goal is to ensure that your business can recover quickly and continue operating without losing valuable data.
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
          <div className="inline-block bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-purple-500/30">
            In Simple Terms
          </div>
          <p className="text-2xl md:text-3xl font-medium text-white leading-tight mb-12">
            Data backups act as a safety net for your business, protecting your information and keeping everything secure no matter what happens.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
