'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Send, MessageCircle, Clock } from 'lucide-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! I will get back to you soon.', {
      duration: 4000,
      style: {
        background: '#1e293b',
        color: '#fff',
        border: '1px solid #a855f7',
      },
      iconTheme: {
        primary: '#a855f7',
        secondary: '#fff',
      },
    });
    setFormState({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@example.com',
      href: 'mailto:contact@example.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Your City, Country',
      href: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const quickInfo = [
    { icon: Clock, text: 'Response time: Within 24 hours' },
    { icon: MessageCircle, text: 'Open to new opportunities' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <Toaster position="top-right" />
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
              <MessageCircle className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300">Let's Connect</span>
            </div>
          </motion.div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-500/50 transition-all group relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    
                    <motion.div 
                      className={`p-3 bg-gradient-to-br ${info.color} rounded-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3"
            >
              {quickInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <item.icon className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20 relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <h4 className="text-xl font-bold mb-3 text-white">Let's Work Together</h4>
              <p className="text-gray-300">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500 transition-all"
                  placeholder="Your name"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500 transition-all resize-none"
                  placeholder="Your message..."
                />
              </motion.div>
              
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Send Message</span>
                <Send className="w-5 h-5 relative z-10" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
