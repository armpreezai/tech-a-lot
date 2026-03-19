import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isExploding, setIsExploding] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    source: ''
  });

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const forceShow = urlParams.get('showPopup') === 'true';
      const hasSeen = localStorage.getItem('tech-a-lot-welcome-v15');
      if (!hasSeen || forceShow) {
        setIsVisible(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('tech-a-lot-welcome-v15', 'true');
  };

  const triggerFireworks = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100, scalar: 1.2 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Multiple bursts to simulate fireworks
      confetti({ 
        ...defaults, 
        particleCount, 
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff0000', '#ff7700', '#ffff00'] 
      });
      confetti({ 
        ...defaults, 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#00ff00', '#00ffff', '#0000ff'] 
      });
      confetti({ 
        ...defaults, 
        particleCount, 
        origin: { x: randomInRange(0.3, 0.7), y: Math.random() - 0.2 },
        colors: ['#ff00ff', '#ffffff', '#0ea5e9'] 
      });
    }, 250);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const scriptUrl = import.meta.env.VITE_CONTACT_FORM_WEB_APP_URL || (process.env as any).VITE_CONTACT_FORM_WEB_APP_URL;
      
      console.log('Attempting to submit to Google Sheets...');
      
      if (!scriptUrl || scriptUrl.trim() === "") {
        console.warn('Welcome popup Web App URL not configured. Using simulation mode.');
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        const payload: any = {
          timestamp: new Date().toISOString(),
          firstName: formData.firstName,
          lastName: formData.lastName,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          source: formData.source,
          message: `Source: ${formData.source}`,
          sheetName: 'PopUp message'
        };

        console.log('Submitting payload:', payload);

        // Use JSON string with text/plain - the most reliable method for GAS
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });
        
        console.log('Submission request sent via JSON-over-Text (no-cors)');
      }
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      // Still show success to user even if sheet fails, or handle error
    }
    
    setIsSubmitting(false);
    setStep('success');

    // Start countdown
    let count = 5;
    const timer = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count === 0) {
        clearInterval(timer);
        setIsExploding(true);
        
        // Initial "explosion" confetti
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.5 },
          colors: ['#0ea5e9', '#8b5cf6', '#10b981']
        });

        setTimeout(() => {
          setIsVisible(false);
          triggerFireworks();
          localStorage.setItem('tech-a-lot-welcome-v15', 'true');
        }, 500);
      }
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {!isExploding && (
          <motion.div
            key="welcome-popup"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ 
              opacity: 0, 
              scale: 2.5, 
              filter: 'blur(40px)',
              transition: { duration: 0.5, ease: "easeIn" }
            }}
            className="relative w-full max-w-lg glass-card p-8 md:p-10 border border-white/10 shadow-[0_0_50px_rgba(14,165,233,0.2)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0ea5e9] via-[#8b5cf6] to-[#10b981]"></div>
            
            {step === 'form' ? (
              <>
                <button 
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-bold uppercase tracking-widest mb-4">
                    <Sparkles className="w-3 h-3 mr-2" />
                    Special Invitation
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">Welcome to Tech-A-Lot</h2>
                  <p className="text-gray-400">
                    Join our community and witness something <span className="text-[#0ea5e9] font-bold italic">magical</span>.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Name</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 transition-all"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Surname</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 transition-all"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 transition-all"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Where did you hear about us?</label>
                    <select 
                      required
                      value={formData.source}
                      onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 transition-all appearance-none"
                    >
                      <option value="" className="bg-[#0f172a]">Select an option</option>
                      <option value="google" className="bg-[#0f172a]">Google</option>
                      <option value="facebook" className="bg-[#0f172a]">Facebook</option>
                      <option value="friend" className="bg-[#0f172a]">A friend/family member</option>
                      <option value="other" className="bg-[#0f172a]">Other</option>
                    </select>
                  </div>

                  <div className="pt-4 flex flex-col gap-3">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Submit & See Magic <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <button 
                      type="button"
                      onClick={handleClose}
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      I'll pass on the magic for now
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-[#10b981]/10 text-[#10b981] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#10b981]/20 tech-glow">
                  <Sparkles className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Preparation Complete!</h2>
                <p className="text-gray-400 mb-8">
                  Thank you for participating. The magic is about to begin...
                </p>
                <div className="text-5xl font-bold text-[#0ea5e9] mb-4">
                  {countdown}
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Message will terminate in {countdown} seconds
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
