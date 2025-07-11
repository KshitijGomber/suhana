import React from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Linkedin, MapPin, Download, Send } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Ready to connect and explore opportunities together. Let's start a conversation!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Let's Connect</h3>
            
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-white/70 hover:bg-white transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div>
                  <div className="text-gray-500 text-sm">{item.label}</div>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-purple-600 transition-colors font-semibold"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-gray-800 font-semibold">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Form */}
          <div className="contact-form">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="form-textarea"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
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
          </div>
          
          {/* Professional Summary */}
          <div className="bg-white/70 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Professional Summary</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              MBA candidate with 3+ years of experience in talent acquisition and business development. 
              Proven track record of building high-performing teams, exceeding KPIs, and driving organizational growth. 
              Passionate about leveraging digital transformation to create innovative business solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Experience</span>
                <span className="text-purple-600 font-semibold">3+ Years</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Education</span>
                <span className="text-purple-600 font-semibold">MBA (In Progress)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Specialization</span>
                <span className="text-purple-600 font-semibold">Digital Business</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-scale flex items-center justify-center space-x-2 shadow-lg">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;