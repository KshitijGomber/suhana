import React from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Linkedin, MapPin, Download, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Contact = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // EmailJS configuration from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    // Check if environment variables are loaded
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing:', { serviceId, templateId, publicKey });
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    
    emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus('success');
        setIsSubmitting(false);
        // Reset form
        (e.target as HTMLFormElement).reset();
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setSubmitStatus('error');
        setIsSubmitting(false);
        // Reset error message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'suhana0627@gmail.com',
      link: 'mailto:suhana0627@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '437-255-9947',
      link: 'tel:437-255-9947'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'suhana999',
      link: 'https://www.linkedin.com/in/suhana999/'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Kingston, ON, Canada',
      link: null
    }
  ];

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-white/50"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Ready to connect and explore opportunities together. Let's start a conversation!
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div 
            className="lg:order-1 space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-gray-800">Let's Connect</h3>
            
            {contactInfo.map((item, index) => (
              <div key={index} className={`flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg bg-white/70 hover:bg-white transition-all duration-300 shadow-sm ${item.link ? 'cursor-pointer hover:shadow-md active:scale-95' : ''}`}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-500 text-xs md:text-sm">{item.label}</div>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      target={item.link.startsWith('http') ? "_blank" : "_self"}
                      rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-gray-800 hover:text-purple-600 transition-colors font-semibold block text-sm md:text-base truncate"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-gray-800 font-semibold text-sm md:text-base truncate">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:order-2 contact-form"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Send a Message</h3>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="form-input w-full px-4 py-3 md:py-4 text-base bg-white/90 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="form-input w-full px-4 py-3 md:py-4 text-base bg-white/90 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-input w-full px-4 py-3 md:py-4 text-base bg-white/90 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="form-textarea w-full px-4 py-3 md:py-4 text-base bg-white/90 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 resize-vertical min-h-[120px] md:min-h-[140px]"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-base md:text-lg font-semibold px-6 md:px-8 py-4 md:py-4 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center gap-2 active:scale-95 min-h-[52px] ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg text-green-700 text-center">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg text-red-700 text-center">
                  ❌ Failed to send message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </motion.div>
          
          {/* Professional Summary */}
          <motion.div 
            className="lg:order-3 bg-white/70 rounded-2xl p-6 md:p-8 shadow-sm"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Professional Summary</h3>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              MBA candidate with 3+ years of experience in talent acquisition and business development. 
              Proven track record of building high-performing teams, exceeding KPIs, and driving organizational growth. 
              Passionate about leveraging digital transformation to create innovative business solutions.
            </p>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center justify-between text-sm md:text-base">
                <span className="text-gray-500">Experience</span>
                <span className="text-purple-600 font-semibold">3+ Years</span>
              </div>
              <div className="flex items-center justify-between text-sm md:text-base">
                <span className="text-gray-500">Education</span>
                <span className="text-purple-600 font-semibold">MBA (In Progress)</span>
              </div>
              <div className="flex items-center justify-between text-sm md:text-base">
                <span className="text-gray-500">Specialization</span>
                <span className="text-purple-600 font-semibold">Digital Business</span>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
              <a
                href="/resume.pdf"
                download="Suhana_Gomber_Resume.pdf"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 md:px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-scale flex items-center justify-center space-x-2 shadow-lg text-center text-sm md:text-base active:scale-95 min-h-[48px]"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;