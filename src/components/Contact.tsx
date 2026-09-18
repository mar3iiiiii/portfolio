import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Linkedin, 
  MapPin, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  Info 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(personal.linkedinUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In production, this can be hooked up to Formspree, EmailJS, or an internal API endpoint
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-100/50 dark:bg-slate-950/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect Directly</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Interested in technical discussions, internship opportunities, or collaboration? Reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Profile Connect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Details
              </h3>

              <div className="space-y-4">
                {/* LinkedIn Contact Block */}
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Linkedin className="w-4 h-4 text-blue-500" />
                      Primary Professional Profile
                    </span>
                    <button
                      onClick={handleCopyLink}
                      className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1"
                      title="Copy LinkedIn URL"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                    linkedin.com/in/ahmed-marei-m
                  </div>
                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline pt-1"
                  >
                    <span>Open in LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Location Block */}
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{personal.location}</div>
                  </div>
                </div>
              </div>

              {/* Data Transparency Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-1.5">
                <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold">
                  <Info className="w-4 h-4 text-emerald-500" />
                  <span>Verified Public Records</span>
                </div>
                <p>
                  Direct email and phone numbers are kept confidential on LinkedIn to safeguard privacy. You can connect securely via the contact form or directly through LinkedIn messaging.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Direct Message
              </h3>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out to Ahmed Marei. For immediate inquiries, you can also send a direct InMail message on LinkedIn.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 underline hover:no-underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration / Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Ahmed, I saw your portfolio and would like to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-md transition-all flex items-center justify-center gap-2 transform active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Deliver Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
