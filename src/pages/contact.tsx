import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, CheckCircle, Loader2, Send } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = "Your time matters to us, and we’re committed to providing IT solutions you can depend on. Get in touch today and let’s build something efficient, secure, and future-ready.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
      sheetName: 'Contact Messages'
    };

    const WEB_APP_URL = import.meta.env.VITE_CONTACT_FORM_WEB_APP_URL || (process.env as any).VITE_CONTACT_FORM_WEB_APP_URL;

    if (!WEB_APP_URL || WEB_APP_URL.trim() === "") {
      console.warn('Contact form Web App URL not configured. Using simulation mode.');
      // Fallback for development/demo
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
      return;
    }

    console.log('Submitting contact form payload:', data);
    console.log('To URL:', WEB_APP_URL);

    // Add a timeout to the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
      // Use JSON string with text/plain - the most reliable method for GAS
      await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error: any) {
      clearTimeout(timeoutId);
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      
      if (error.name === 'AbortError') {
        alert('The request timed out. Please check your internet connection or the Google Apps Script URL.');
      } else {
        alert('There was an error sending your message. Please ensure the Google Apps Script URL is correct and deployed as "Anyone".');
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="blob blob-3 bg-[#10b981]/20" style={{ top: '10%', right: '10%', left: 'auto', opacity: 0.2 }}></div>
      <div className="blob blob-1 bg-[#0ea5e9]/20" style={{ bottom: '10%', left: '10%', top: 'auto', opacity: 0.2 }}></div>
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#10b981] mr-2 tech-glow"></span>
          <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">Connect With Us</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Get in <span className="animated-gradient-text">Touch</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </motion.p>
      </section>

      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8">
              <div className="glass-card p-8 border border-white/10 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_70%)]"></div>
                
                <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Contact Information</h3>
                
                <div className="space-y-8 relative z-10">
                  <a href="mailto:info@tech-a-lot.co.za" className="flex items-start group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#0ea5e9] flex items-center justify-center mr-5 flex-shrink-0 group-hover:bg-[#0ea5e9]/20 group-hover:border-[#0ea5e9]/50 group-hover:scale-110 transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</h4>
                      <p className="text-lg font-medium text-white group-hover:text-[#0ea5e9] transition-colors">info@tech-a-lot.co.za</p>
                    </div>
                  </a>
                  
                  <a href="tel:0826504740" className="flex items-start group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#10b981] flex items-center justify-center mr-5 flex-shrink-0 group-hover:bg-[#10b981]/20 group-hover:border-[#10b981]/50 group-hover:scale-110 transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Phone / WhatsApp</h4>
                      <p className="text-lg font-medium text-white group-hover:text-[#10b981] transition-colors">082 650 4740</p>
                    </div>
                  </a>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-[100px] pt-10 border-t border-white/5 relative"
                  >
                    <div className="absolute -top-px left-0 w-16 h-px bg-gradient-to-r from-[#0ea5e9] to-transparent"></div>
                    
                    <motion.h4 
                      animate={{ 
                        color: ['#0ea5e9', '#10b981', '#8b5cf6', '#f43f5e', '#0ea5e9'],
                        textShadow: [
                          '0 0 10px rgba(14,165,233,0.3)',
                          '0 0 10px rgba(16,185,129,0.3)',
                          '0 0 10px rgba(139,92,246,0.3)',
                          '0 0 10px rgba(244,63,94,0.3)',
                          '0 0 10px rgba(14,165,233,0.3)'
                        ]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="text-xl font-bold mb-4 leading-tight tracking-tight"
                    >
                      Thank you for choosing to visit Tech-A-Lot.
                    </motion.h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed italic font-light min-h-[4.5rem]">
                      {displayText}
                      <span className="inline-block w-1 h-4 ml-1 bg-[#0ea5e9] animate-pulse"></span>
                    </p>
                    
                    <div className="mt-6 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#0ea5e9] animate-ping"></div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">Future Ready</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:col-span-3">
              <div className="glass-card p-8 md:p-10 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0ea5e9] via-[#8b5cf6] to-[#10b981]"></div>
                
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send us a Message</h3>
                
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-4 bg-[#10b981]/10 border border-[#10b981]/30 text-[#34d399] rounded-xl flex items-center backdrop-blur-sm">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <p>Message sent successfully! We will get back to you shortly.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                      <input type="text" id="name" name="name" required 
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all backdrop-blur-sm" 
                        placeholder="John Doe" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                      <input type="email" id="email" name="email" required 
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all backdrop-blur-sm" 
                        placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                    <textarea id="message" name="message" rows={5} required 
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all backdrop-blur-sm resize-none" 
                      placeholder="How can we help you?"></textarea>
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} 
                    className="btn-primary w-full py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center group">
                    {isSubmitting ? (
                      <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Sending...</>
                    ) : (
                      <>Send Message <Send className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                </form>

                <div className="mt-12 p-6 border-t border-white/5 text-left">
                  <h4 className="text-[#0ea5e9] font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0ea5e9] animate-pulse"></span>
                    Troubleshooting Connection
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">
                    If you receive errors when trying to submit messages, please do the following:
                  </p>
                  <ul className="space-y-3 text-xs text-gray-500">
                    <li className="flex gap-2">
                      <span className="text-[#0ea5e9] font-bold">1.</span>
                      <span>Make sure to refresh your page</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#0ea5e9] font-bold">2.</span>
                      <span>If the error persists, use our email address <a href="mailto:info@tech-a-lot.co.za" className="text-[#0ea5e9] hover:underline">info@tech-a-lot.co.za</a></span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
