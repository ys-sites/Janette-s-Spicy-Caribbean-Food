import { useState } from 'react';
import { motion } from 'motion/react';
import { ChefHat, Calendar, Send, CheckCircle, Users, Clock, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CateringSection() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/janettesspicy@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New Catering Request from Website!',
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', guests: '', message: '' });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Tuesdays & Wednesdays',
      description: 'Available catering days — plan your event on these days for fresh, authentic Caribbean meals.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Any Group Size',
      description: 'From intimate gatherings to large corporate events, we scale to your needs.',
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Book 72 Hours Ahead',
      description: 'Give us at least 72 hours notice so we can prepare your order fresh and on time.',
      color: 'bg-blue-100 text-blue-600',
    },
  ];

  return (
    <section id="catering" className="py-24 bg-[#1A1A1A] overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-widest mb-6">
            <ChefHat className="w-4 h-4" />
            Catering Services
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-[0.9] uppercase tracking-tight">
            BRING THE ISLANDS<br />
            <span className="text-orange-500">TO YOUR EVENT</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Make your next event unforgettable with authentic Caribbean flavors. We offer full catering services every Tuesday and Wednesday.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/30 transition-colors"
                >
                  <div className={`p-3 rounded-xl shrink-0 ${f.color}`}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1 uppercase tracking-wide">{f.title}</h3>
                    <p className="text-gray-400 font-medium text-sm leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA to call */}
            <div className="p-6 bg-orange-600/10 border border-orange-500/20 rounded-2xl">
              <p className="text-white font-bold text-lg mb-2">Prefer to call?</p>
              <p className="text-gray-400 text-sm mb-4">Reach us directly to discuss your event needs and get a custom quote.</p>
              <a
                href="tel:+15146834741"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-full transition-colors uppercase tracking-wide text-sm"
                aria-label="Call us at (514) 683-4741"
              >
                <Phone className="w-4 h-4" />
                (514) 683-4741
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="mx-auto w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">Request Sent!</h3>
                  <p className="text-gray-400 text-lg mb-6">
                    Thank you! We'll contact you within 24 hours to confirm your catering details.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-orange-400 hover:text-orange-300 font-semibold transition-colors"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">Request Catering</h3>
                    <p className="text-gray-400 text-sm">Fill in your details and we'll get back to you with availability and pricing.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="_subject" value="New Catering Request!" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="catering-name" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                          Full Name *
                        </label>
                        <input
                          id="catering-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="catering-phone" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                          Phone *
                        </label>
                        <input
                          id="catering-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-sm"
                          placeholder="(514) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="catering-email" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        id="catering-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-sm"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="catering-guests" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                        Number of Guests *
                      </label>
                      <select
                        id="catering-guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#2a2a2a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-sm"
                      >
                        <option value="" disabled>Select range</option>
                        <option value="10-25">10 – 25 guests</option>
                        <option value="25-50">25 – 50 guests</option>
                        <option value="50-100">50 – 100 guests</option>
                        <option value="100+">100+ guests</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="catering-message" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                        Event Details
                      </label>
                      <textarea
                        id="catering-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none text-sm"
                        placeholder="Tell us about your event, preferred dishes, any dietary requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-600/50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 uppercase tracking-wide mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Catering Request
                        </>
                      )}
                    </button>

                    <p className="text-center text-gray-500 text-xs mt-3">
                      We'll respond within 24 hours to confirm availability.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
