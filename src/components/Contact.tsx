import React, { useState } from 'react';
import { Github, Linkedin, Loader2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
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
    const hostsMatch = !isLocalhost && stripWww(envUrl.hostname) === stripWww(hostname);

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
  const [leftRef, isLeftVisible] = useScrollAnimation(0.2);
  const [rightRef, isRightVisible] = useScrollAnimation(0.2);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formFeedback, setFormFeedback] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
          : `Your message was saved, but the notification email failed. Please retry later.${
              emailError ? ` (${emailError})` : ''
            }`,
      );
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus('error');
      setFormFeedback(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'asjadyousafkhan07@gmail.com',
      href: 'mailto:asjadyousafkhan07@gmail.com',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+92-314-4704840',
      href: 'tel:+923144704840',
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'WhatsApp',
      value: '+92-314-4704840',
      href: 'https://wa.me/923144704840?text=Hi%20Asjad%2C%20I%20want%20to%20discuss%20a%20project.',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell">
        <div
          ref={titleRef}
          className={`text-center transition-all duration-1000 ${
            isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="section-title">
            Let&apos;s Build <span className="text-blue-600 dark:text-blue-300">Something Great</span>
          </h2>
          <p className="section-subtitle">
            Open for AI/ML roles, internship opportunities, AI software projects, and full-stack
            application work.
          </p>
        </div>

        <div className="mt-10 grid gap-10 border-t border-slate-200/80 pt-10 dark:border-slate-700/70 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ${
              isLeftVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            <article>
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
                Contact Details
              </h3>
              <div className="mt-5 divide-y divide-slate-200/80 dark:divide-slate-700/70">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-3 py-4 transition duration-300 hover:translate-x-1"
                  >
                    <span className="rounded-xl bg-blue-600/10 p-2 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300">
                      {info.icon}
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {info.label}
                      </span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                        {info.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </article>

            <article className="mt-8 border-t border-slate-200/80 pt-6 dark:border-slate-700/70">
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                Social Profiles
              </h3>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/asjadyousaf05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-4"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/asjad-yousaf-khan-066680269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-4"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="https://wa.me/923144704840?text=Hi%20Asjad%2C%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary border-emerald-300/70 bg-emerald-50/80 px-4 text-emerald-700 hover:border-emerald-400 hover:bg-emerald-100/80 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200 dark:hover:border-emerald-400"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </article>
          </div>

          <div
            ref={rightRef}
            className={`glass-panel soft-ring rounded-3xl p-6 sm:p-8 transition-all duration-1000 ${
              isRightVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
            <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Send a Message
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Share your website or AI software requirements and timeline. I will respond as soon
              as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-500/25"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-500/25"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-500/25"
                  placeholder="Tell me about your project"
                />
              </div>

              {formStatus !== 'idle' && (
                <div
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    formStatus === 'success'
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-700/50 dark:bg-emerald-900/25 dark:text-emerald-100'
                      : formStatus === 'error'
                        ? 'border-red-300 bg-red-50 text-red-800 dark:border-red-700/50 dark:bg-red-900/25 dark:text-red-100'
                        : 'border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-700/50 dark:bg-blue-900/25 dark:text-blue-100'
                  }`}
                  aria-live="polite"
                >
                  {formFeedback}
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`btn-primary w-full ${formStatus === 'sending' ? 'cursor-not-allowed opacity-80' : ''}`}
              >
                {formStatus === 'sending' ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
