import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, ChefHat, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function CateringPopup() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/janettesspicy@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="p-8">
              {!showForm ? (
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/30">
                    <ChefHat className="w-8 h-8 text-orange-500" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">
                    Now Offering Catering!
                  </h2>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Make your next event special with our authentic Caribbean dishes. We are now accepting catering orders for <strong className="text-white">Tuesdays and Wednesdays</strong>.
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-8 text-orange-400 bg-orange-400/10 py-2 px-4 rounded-full w-fit mx-auto">
                    <Calendar className="w-4 h-4" />
                    <span className="font-semibold text-sm">Tuesdays & Wednesdays Only</span>
                  </div>
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg shadow-orange-600/20"
                  >
                    Request Catering
                  </button>
                </div>
              ) : isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 border border-green-500/30">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white mb-4">
                    Request Sent!
                  </h2>
                  <p className="text-gray-300 text-lg mb-8">
                    Thank you. We will get back to you shortly to confirm your catering details.
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-4 px-8 rounded-xl transition-colors border border-white/10"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-display font-bold text-white mb-2">
                      Catering Request
                    </h2>
                    <p className="text-gray-400 text-sm">Fill out the form below and we'll get back to you shortly.</p>
                  </div>
                  
                  <form 
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="_subject" value="New Catering Request!" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Event Details</label>
                      <textarea 
                        name="message" 
                        required 
                        rows={3}
                        className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                        placeholder="Date (Tue/Wed), number of people, specific dishes..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-600/50 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 mt-4"
                    >
                      <span>{isSubmitting ? "Sending..." : "Send Request"}</span>
                      {!isSubmitting && <Send className="w-4 h-4" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="w-full text-gray-400 hover:text-white py-2 text-sm mt-2 transition-colors"
                    >
                      Back
                    </button>
                  </form>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
