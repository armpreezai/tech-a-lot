import { motion } from 'motion/react';
import { Share2, Target, PenTool, Calendar, MessageCircle, Map, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SocialMediaManagementInfo() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-red-900/20 blur-[120px]" />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center mx-auto mb-8 border border-orange-500/20 tech-glow">
            <Share2 className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What is <span className="animated-gradient-text">Social Media Management?</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Social media management is the process of creating, managing, and optimizing your business’s presence on social media platforms to attract, engage, and convert your audience.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed mt-6">
            It goes beyond just posting content — it’s about building a strong online presence that connects with your audience and drives real business results.
          </p>
        </motion.div>

        {/* Why it Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 mb-16 border-l-4 border-l-orange-500 rounded-2xl"
        >
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-orange-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Why Social Media Management Matters</h2>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            In today’s digital world, your customers are already on social media. Effective management helps you:
          </p>
          <ul className="space-y-4">
            {[
              "Increase brand awareness",
              "Build trust and credibility",
              "Engage directly with your audience",
              "Drive traffic to your website",
              "Generate leads and sales"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-lg text-gray-300 font-medium">
                <div className="w-2 h-2 rounded-full bg-orange-500 mr-4 tech-glow"></div>
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
          <h2 className="text-3xl font-bold text-white mb-10 text-center">What Social Media Management Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: PenTool,
                title: "Content Creation",
                desc: "Designing posts, graphics, and captions tailored to your brand"
              },
              {
                icon: Calendar,
                title: "Posting & Scheduling",
                desc: "Consistent posting at optimal times"
              },
              {
                icon: MessageCircle,
                title: "Audience Engagement",
                desc: "Responding to comments and messages"
              },
              {
                icon: Map,
                title: "Strategy & Planning",
                desc: "Creating content plans aligned with your business goals"
              },
              {
                icon: BarChart,
                title: "Performance Tracking",
                desc: "Monitoring analytics and improving results over time"
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl flex items-start hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mr-4 flex-shrink-0 border border-orange-500/20">
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
          className="bg-gradient-to-r from-orange-900/80 to-red-900/80 border border-orange-500/30 text-white rounded-3xl p-8 md:p-12 text-center mb-16 shadow-[0_0_30px_rgba(249,115,22,0.2)] backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold mb-6">The Goal of Social Media Management</h2>
          <p className="text-xl text-orange-100 leading-relaxed">
            The goal is to turn your social media platforms into powerful marketing tools that grow your audience and bring in new customers.
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
          <div className="inline-block bg-orange-500/20 text-orange-300 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-orange-500/30">
            In Simple Terms
          </div>
          <p className="text-2xl md:text-3xl font-medium text-white leading-tight mb-12">
            Social media management is about turning your online presence into a consistent, engaging, and results-driven marketing channel for your business.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
