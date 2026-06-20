import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle, MessageSquare, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Core Client Validations
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage('Please fill out all required fields (Name, Email, Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate sending progress with realistic 1.5s latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Auto-clear success state after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      value: "rnkraj05@gmail.com",
      href: "mailto:rnkraj05@gmail.com",
      label: "Send Email"
    },
    {
      icon: Github,
      title: "GitHub Profile",
      value: "github.com/rnkraj05",
      href: "https://github.com/rnkraj05",
      label: "View Repositories"
    },
    {
      icon: Linkedin,
      title: "LinkedIn Profile",
      value: "linkedin.com/in/raunak-raj-451062352",
      href: "https://www.linkedin.com/in/raunak-raj-451062352/",
      label: "Connect with me"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      href: "#",
      label: "Available for Remote Work"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0a0c10]">
      {/* Background gradients */}
      <div className="absolute top-[20%] right-[10%] w-[25rem] h-[25rem] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Connect With Raunak
          </h2>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Have a project idea, question, or internship opportunity? Drop me a line directly.
          </p>
        </div>

        {/* Form and info Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel - Info channel nodes */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-5 rounded-xl bg-[#0f121d] border border-gray-800 hover:border-gray-700 transition duration-300 text-left"
                  >
                    <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">{card.title}</h4>
                      <p className="text-sm font-semibold text-white truncate">{card.value}</p>
                      {card.href !== '#' ? (
                        <a
                          href={card.href}
                          target="_blank"
                          rel="noreferrer referrer"
                          className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium pt-1.5 transition-all"
                        >
                          {card.label}
                          <span>→</span>
                        </a>
                      ) : (
                        <span className="text-xs text-gray-400 block pt-1.5 font-medium">{card.label}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Extra decorative details */}
            <div className="bg-gradient-to-br from-indigo-950/10 to-blue-950/10 border border-indigo-500/10 rounded-xl p-5 text-left">
              <h4 className="text-xs font-mono font-bold text-blue-300 uppercase tracking-wider mb-2">
                Response Speed
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Currently keeping focus on web development and backend studies. Responses to student collaborations or internship inquiries are usually sent within 24 hours.
              </p>
            </div>
          </div>

          {/* Right panel - Form engine */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className="bg-[#0f121d] border border-[#1f293d]/50 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl text-left"
              id="contact-form"
            >
              <h3 className="text-lg font-display font-semibold text-gray-100 flex items-center gap-2 mb-2 select-none">
                <Send className="w-4.5 h-4.5 text-blue-400" />
                Message Portal
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono uppercase text-gray-400 tracking-wider font-semibold">
                    Your Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0d0f14] border border-gray-800 focus:border-blue-500/50 focus:outline-none text-xs sm:text-sm text-white font-sans transition"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono uppercase text-gray-400 tracking-wider font-semibold">
                    Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0d0f14] border border-gray-800 focus:border-blue-500/50 focus:outline-none text-xs sm:text-sm text-white font-sans transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono uppercase text-gray-400 tracking-wider font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Internship Opportunity / Collaboration"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0d0f14] border border-gray-800 focus:border-blue-500/50 focus:outline-none text-xs sm:text-sm text-white font-sans transition"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono uppercase text-gray-400 tracking-wider font-semibold">
                  Message Body <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-[#0d0f14] border border-gray-800 focus:border-blue-500/50 focus:outline-none text-xs sm:text-sm text-white font-sans transition resize-none leading-relaxed"
                />
              </div>

              {/* Client error notification banner */}
              <AnimatePresence>
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 px-4 py-2 rounded-lg font-sans font-medium"
                  >
                    {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success state feedback block */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-start gap-2.5 text-xs text-emerald-400 bg-emerald-500/15 border border-emerald-500/25 p-4 rounded-xl font-sans"
                    id="submit-success-banner"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <div className="space-y-0.5">
                      <strong className="block font-semibold">Message Dispatched!</strong>
                      <span className="text-gray-300 leading-normal">Your connection handshake has completed. Raunak will reach out shortly via email.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Trigger Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 disabled:pointer-events-none border border-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)] focus:ring-2 focus:ring-blue-500/30"
                id="form-submit-button"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                    Deploying Message Payload...
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 font-bold">
                    <Send className="w-4 h-4" />
                    Submit Message Transfer
                  </div>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
