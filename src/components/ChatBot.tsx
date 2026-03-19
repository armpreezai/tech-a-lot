import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, AlertTriangle } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import BinaryRain from './BinaryRain';

// Lazy initialization of GenAI to prevent crash if key is missing
let genAIInstance: GoogleGenAI | null = null;

const getGenAI = () => {
  if (!genAIInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey.trim() === '') {
      return null;
    }
    try {
      genAIInstance = new GoogleGenAI({ apiKey });
    } catch (e) {
      console.error('Failed to initialize GoogleGenAI:', e);
      return null;
    }
  }
  return genAIInstance;
};

const SYSTEM_INSTRUCTION = `You are an AI assistant for a digital agency called **Tech-A-Lot**.

Your role is to act as a **professional, knowledgeable, and friendly digital consultant** who helps website visitors understand services, answer questions, and guide them toward contacting the business.

---

# 🎯 PRIMARY OBJECTIVE

* Help users understand Tech-A-Lot’s services
* Answer questions about websites and technology
* Guide users toward taking action (contacting the business)
* Create a professional and trustworthy experience

---

# 🧠 PERSONALITY & TONE

* Friendly and professional
* Confident but not pushy
* Clear and easy to understand (avoid overly technical jargon unless asked)
* Helpful and solution-focused

---

# 💼 COMPANY CONTEXT

Tech-A-Lot is a digital solutions company that helps businesses grow online.

### Core Services:
* Website Design (creating modern, high-converting websites)
* Website Revamps (upgrading outdated websites)
* Database Design (structured and secure data systems)
* Data Backups (protecting business data)
* Social Media Management (growing online presence)

### Coming Soon:
* AI Bot Design
* Android App Development

---

# 🌐 WHAT YOU SHOULD HELP WITH

You must be able to:

### 1. Explain Services Clearly
If a user asks about a service:
* Give a simple explanation
* Explain benefits
* Keep it short and clear

### 2. Guide Users to the Right Solution
Ask questions like:
* “Are you starting a new business or improving an existing one?”
* “Do you already have a website?”

Then recommend:
* Starter Website
* Professional Website
* Premium Website

### 3. Encourage Contact (IMPORTANT)
Naturally guide users toward contacting the business.
Example:
* “I’d recommend getting in touch so we can understand your needs better.”
* “Would you like me to help you get in contact?”

### 4. Answer General Tech Questions
You can answer:
* What is a website?
* Why businesses need websites
* What SEO is
* Basic digital strategy

Keep answers simple and practical.

---

# 🚫 WHAT YOU MUST NOT DO

* Do NOT guess or make up pricing
* Do NOT give incorrect technical advice
* Do NOT be overly robotic
* Do NOT overwhelm users with too much information

---

# 💬 RESPONSE STYLE

Keep responses:
* Short (3–6 lines)
* Structured (use bullet points if needed)
* Easy to read

---

# 📞 CONTACT DETAILS (USE WHEN NEEDED)

If a user asks how to get in touch, provide:
* Email: info@tech-a-lot.co.za
* Phone/WhatsApp: 082 650 4740

---

# 🎯 FINAL GOAL

Every conversation should move the user closer to:
👉 Understanding the service
👉 Seeing the value
👉 Contacting Tech-A-Lot

Always aim to be helpful, clear, and professional.`;

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
};

// Rule-based responses for when no API key is provided
const getRuleBasedResponse = (input: string): string => {
  const text = input.toLowerCase();
  
  if (text.includes('hello') || text.includes('hi ') || text === 'hi') {
    return "Hello! 👋 How can Tech-A-Lot help you today? We specialize in website design, database systems, and digital strategy.";
  }
  
  if (text.includes('website') || text.includes('design') || text.includes('site')) {
    return "We offer professional website design and revamps! Whether you need a simple starter site or a premium business platform, we've got you covered. Would you like to see our pricing or contact us?";
  }
  
  if (text.includes('price') || text.includes('cost') || text.includes('how much')) {
    return "Our website packages start from R2,500 for a Starter Website, R4,500 for Professional, and R8,500+ for Premium solutions. Each package is tailored to your specific needs!";
  }
  
  if (text.includes('database') || text.includes('data')) {
    return "Tech-A-Lot provides expert database design and secure data backup solutions to keep your business running smoothly and your information safe.";
  }
  
  if (text.includes('social') || text.includes('media') || text.includes('marketing')) {
    return "We offer comprehensive social media management to help grow your online presence and engage with your audience effectively.";
  }
  
  if (text.includes('contact') || text.includes('email') || text.includes('phone') || text.includes('whatsapp')) {
    return "You can reach us at **info@tech-a-lot.co.za** or via WhatsApp/Phone at **082 650 4740**. We'd love to discuss your project!";
  }
  
  if (text.includes('thank')) {
    return "You're very welcome! Is there anything else I can help you with today?";
  }

  return "That's interesting! I'd love to tell you more about how Tech-A-Lot can help with your digital needs. You can ask me about our website design, database services, or how to get in touch with us!";
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      role: 'model',
      text: "Hi there! 👋 I'm the Tech-A-Lot assistant. How can I help you grow your business online today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Store the chat instance in a ref so it persists across renders
  const chatRef = useRef<any>(null);

  useEffect(() => {
    const ai = getGenAI();
    if (ai && !chatRef.current) {
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: 'user', text: userMessage },
    ]);
    setIsLoading(true);

    try {
      const ai = getGenAI();
      let responseText = "";

      if (ai && chatRef.current) {
        const response = await chatRef.current.sendMessage({ message: userMessage });
        responseText = response.text || "I'm sorry, I couldn't process that request.";
      } else {
        // Fallback to rule-based response if no API key
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate thinking
        responseText = getRuleBasedResponse(userMessage);
      }
      
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'model', text: responseText },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later or contact us directly at info@tech-a-lot.co.za." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 mb-[65px] ml-0 pt-0 pl-0 mt-0 w-14 h-14 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] text-white rounded-full shadow-[0_0_20px_rgba(14,165,233,0.4)] flex items-center justify-center z-50 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] glass-card flex flex-col z-50 overflow-hidden border border-white/10 shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0ea5e9]/20 to-[#8b5cf6]/20 border-b border-white/10 text-white p-4 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <Bot className="w-5 h-5 text-[#0ea5e9]" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-white">Tech-A-Lot Assistant</h3>
                  <p className="text-xs text-[#0ea5e9]">Online & ready to help</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#020617]/60 backdrop-blur-md relative">
              <div className="absolute inset-0 z-0 opacity-50">
                <BinaryRain opacity={0.3} color="#0ea5e9" />
              </div>
              <div className="relative z-10 space-y-4">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.role === 'user' 
                          ? 'bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] text-white rounded-br-none shadow-[0_0_15px_rgba(14,165,233,0.2)]' 
                          : 'bg-white/10 text-gray-200 border border-white/10 shadow-sm rounded-bl-none backdrop-blur-sm'
                      }`}
                    >
                      {msg.role === 'user' ? (
                        <div className="whitespace-pre-wrap">{msg.text}</div>
                      ) : (
                        <div className="markdown-body prose prose-sm prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10">
                          <Markdown>{msg.text}</Markdown>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 border border-white/10 shadow-sm p-4 rounded-2xl rounded-bl-none flex space-x-2 backdrop-blur-sm">
                      <div className="w-2 h-2 bg-[#0ea5e9] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-[#0ea5e9] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-[#0ea5e9] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#0f172a]/80 border-t border-white/10 backdrop-blur-md">
              <div className="flex items-center space-x-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 resize-none h-10 min-h-[40px] max-h-[120px] transition-all"
                  rows={1}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] text-white rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_10px_rgba(14,165,233,0.3)] hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-gray-500">
                  {getGenAI() ? "Powered by AI" : "Powered by Tech-A-Lot Assistant"}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
