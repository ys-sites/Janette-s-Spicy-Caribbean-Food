import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, ChefHat } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function CateringPopup() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleRequestCatering = () => {
    setIsOpen(false);
    const cateringSection = document.getElementById('catering');
    if (cateringSection) {
      cateringSection.scrollIntoView({ behavior: 'smooth' });
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
                  onClick={handleRequestCatering}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg shadow-orange-600/20"
                >
                  Request Catering
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

