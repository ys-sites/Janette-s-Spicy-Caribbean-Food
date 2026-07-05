import { motion } from 'motion/react';
import { Flame, Heart, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F4F1EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-[3/4] lg:aspect-square">
              <img 
                src="/fish.jpeg?v=1" 
                alt="Janette's Spicy Caribbean Fish Plate" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <p className="font-display font-bold text-3xl sm:text-4xl mb-2 uppercase tracking-wide">{t('about.smokySpicy')}</p>
                <p className="text-gray-300 text-sm sm:text-base font-medium">{t('about.marinated')}</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F25C05] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gray-900 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">
              Janette's Spicy Caribbean Food - Roxboro
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-display font-bold text-[#1A1A1A] mb-8 leading-[0.9] uppercase tracking-tight">
              {t('about.subtitle').split(',')[0]} <br /> 
              <span className="text-[#F25C05]">{t('about.subtitle').split(',')[1]}</span>
            </h3>
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 mb-6 lg:mb-10 font-medium leading-relaxed">
              <p>
                {t('about.description1')}
              </p>
              <p>
                {t('about.description2')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-start p-6 rounded-3xl transition-shadow"
              >
                <div className="bg-orange-100 p-4 rounded-2xl text-[#F25C05] mb-5">
                  <Flame className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#1A1A1A] mb-2 uppercase tracking-wide">{t('about.authenticSpice')}</h4>
                <p className="text-sm text-gray-600 font-medium">{t('about.authenticSpiceDesc')}</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-start p-6 rounded-3xl transition-shadow"
              >
                <div className="bg-red-100 p-4 rounded-2xl text-red-600 mb-5">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#1A1A1A] mb-2 uppercase tracking-wide">{t('about.homemadeTaste')}</h4>
                <p className="text-sm text-gray-600 font-medium">{t('about.homemadeTasteDesc')}</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-start p-6 rounded-3xl transition-shadow"
              >
                <div className="bg-green-100 p-4 rounded-2xl text-green-700 mb-5">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#1A1A1A] mb-2 uppercase tracking-wide">{t('about.quickTakeout')}</h4>
                <p className="text-sm text-gray-600 font-medium">{t('about.quickTakeoutDesc')}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
