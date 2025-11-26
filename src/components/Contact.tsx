import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  Loader2,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const API_BASE_URL = (() => {
  const rawEnv = import.meta.env.VITE_API_BASE_URL?.trim();
  const { origin, hostname } = window.location;
  const isLocalhost = ['localhost', '127.0.0.1', '::1'].includes(hostname);
  const fallbackBase = isLocalhost ? 'http://localhost:5174' : origin;

  if (!rawEnv) {
    return fallbackBase;
  }

  const stripWww = (host: string) => host.replace(/^www\./, '');

  try {
    const envUrl = new URL(rawEnv, fallbackBase);
    const hostsMatch =
      !isLocalhost && stripWww(envUrl.hostname) === stripWww(hostname);

    // If the env URL only differs by www/non-www, prefer the current origin to avoid redirects.
    if (hostsMatch) {
      return origin;
    }

    return envUrl.toString().replace(/\/+$/, '');
  } catch (error) {
    console.warn('Invalid VITE_API_BASE_URL; using current origin.', error);
    return fallbackBase;
  }
})();

const apiUrl = (path: string) => new URL(path, `${API_BASE_URL}/`).toString();

const Contact: React.FC = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation(0.2);
  const [contactInfoRef, isContactInfoVisible] = useScrollAnimation(0.3);
  const [formRef, isFormVisible] = useScrollAnimation(0.3);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formFeedback, setFormFeedback] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setFormFeedback('Sending your message...');

    try {
      const response = await fetch(apiUrl('/api/messages'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      const emailDelivered = data?.emailSent !== false;
      const emailError = data?.emailError;

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to send your message.');
      }

      setFormStatus(emailDelivered ? 'success' : 'error');
      setFormFeedback(
        emailDelivered
          ? 'Thanks for reaching out! I will get back to you soon.'
          : `Your message was saved, but the notification email failed. Please retry later. ${emailError ? `(${emailError})` : ''}`,
      );
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus('error');
      setFormFeedback(
        error instanceof Error ? error.message : 'Something went wrong.',
      );
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "asjadyousafkhan07@gmail.com",
      href: "mailto:asjadyousafkhan07@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+92-314-4704840",
      href: "tel:+923144704840"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Pakistan",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/asjadyousaf05",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/asjad-yousaf-khan-066680269",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Let's discuss opportunities, collaborations, or just have a chat about AI and technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div 
              ref={contactInfoRef}
              className={`transition-all duration-1000 delay-300 ${isContactInfoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className={`flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 ${
                      isContactInfoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                      <div className="text-blue-600">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.label}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 text-gray-600 dark:text-gray-400 ${social.color} ${
                        isContactInfoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{ transitionDelay: `${index * 100 + 700}ms` }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              ref={formRef}
              className={`transition-all duration-1000 delay-500 ${isFormVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                    placeholder="Enter your message"
                  />
                </div>

                {formStatus !== 'idle' && (
                  <div
                    className={`rounded-lg border px-4 py-3 text-sm ${
                      formStatus === 'success'
                        ? 'border-green-300 bg-green-50 text-green-800 dark:border-green-700/50 dark:bg-green-900/30 dark:text-green-100'
                        : formStatus === 'error'
                          ? 'border-red-300 bg-red-50 text-red-800 dark:border-red-700/50 dark:bg-red-900/30 dark:text-red-100'
                          : 'border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-700/50 dark:bg-blue-900/30 dark:text-blue-100'
                    }`}
                    aria-live="polite"
                  >
                    {formFeedback}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    formStatus === 'sending' ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus === 'sending' ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
