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
      className="py-16 md:py-20 bg-white/50"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">Get in Touch</h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column: Contact Info + Professional Summary */}
          <div className="space-y-6 md:space-y-8">
            {/* Contact Info */}
            <div className="space-y-3 md:space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.link || undefined}
                  className="flex items-center space-x-3 p-3 bg-white/90 rounded-xl border border-purple-100 shadow-md hover:shadow-lg transition-all duration-300 hover-scale text-gray-700 text-xs md:text-sm"
                  target={info.link && info.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  <span className="text-purple-500">{info.icon}</span>
                  <span className="font-semibold">{info.label}:</span>
                  <span>{info.value}</span>
                </a>
              ))}
            </div>
            
            {/* Professional Summary */}
            <motion.div 
              className="bg-white/70 rounded-2xl p-4 md:p-6 shadow-sm"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3 md:mb-4 text-gray-800">Professional Summary</h3>
              <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                MBA candidate with 3+ years of experience in human resources and talent acquisition. 
                Proven track record of building high-performing teams, exceeding KPIs, and driving organizational growth. 
                Passionate about leveraging digital transformation to create innovative business solutions.
              </p>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center justify-between text-xs md:text-sm">
                  <span className="text-gray-500">Experience</span>
                  <span className="text-purple-600 font-semibold">3+ Years</span>
                </div>
                <div className="flex items-center justify-between text-xs md:text-sm">
                  <span className="text-gray-500">Education</span>
                  <span className="text-purple-600 font-semibold">MBA (In Progress)</span>
                </div>
                <div className="flex items-center justify-between text-xs md:text-sm">
                  <span className="text-gray-500">Specialization</span>
                  <span className="text-purple-600 font-semibold">Digital Business</span>
                </div>
              </div>
              <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200">
                <a
                  href="/resume.pdf"
                  download="Suhana_Gomber_Resume.pdf"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 hover-scale flex items-center justify-center space-x-2 shadow-lg text-center text-xs md:text-sm active:scale-95 min-h-[44px]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column: Contact Form */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-4 md:mb-6 text-gray-800">Send a Message</h3>
            <form className="grid grid-cols-1 gap-3 md:gap-4" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="form-input w-full px-3 py-2 md:py-3 text-sm md:text-base bg-white/90 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="form-input w-full px-3 py-2 md:py-3 text-sm md:text-base bg-white/90 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-input w-full px-3 py-2 md:py-3 text-sm md:text-base bg-white/90 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="form-textarea w-full px-3 py-2 md:py-3 text-sm md:text-base bg-white/90 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 resize-vertical min-h-[100px] md:min-h-[120px]"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm md:text-base font-semibold px-4 md:px-6 py-3 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center gap-2 active:scale-95 min-h-[44px] ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-2 p-3 bg-green-100 border border-green-300 rounded-lg text-green-700 text-center text-xs md:text-sm">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-2 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-center text-xs md:text-sm">
                  ❌ Failed to send message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;