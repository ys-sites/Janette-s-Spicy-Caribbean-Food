import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const benefits: string[] = t('whyChooseUs.benefits', { returnObjects: true }) as string[];

  return (
    <section className="py-24 bg-[#1A1A1A] text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#F25C05] font-bold tracking-widest uppercase text-sm mb-4">{t('whyChooseUs.title')}</h2>
            <h3 className="text-6xl md:text-7xl font-display font-bold mb-8 leading-[0.9] uppercase tracking-tight">
              {t('whyChooseUs.subtitle').split(' ')[0]} {t('whyChooseUs.subtitle').split(' ')[1]} <span className="text-[#F25C05]">{t('whyChooseUs.subtitle').split(' ')[2]}</span>
            </h3>
            <p className="text-gray-300 text-lg mb-10 font-medium leading-relaxed">
              {t('whyChooseUs.description')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list" aria-label="Benefits of choosing Janette's Spicy Caribbean Food">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  role="listitem"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#F25C05] shrink-0" />
                  <span className="font-bold text-gray-200 uppercase tracking-wide text-sm mt-0.5">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="/oxtail.jpeg?v=1" 
                alt="Fall-off-the-bone Jamaican Oxtail - Janette's Caribbean specialty in Roxboro"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-8 -left-8 bg-white text-[#1A1A1A] p-6 rounded-3xl shadow-2xl max-w-xs hidden md:block border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-14 h-14 bg-orange-100 text-[#F25C05] rounded-full flex items-center justify-center font-display font-bold text-2xl">
                  $
                </div>
                <div>
                  <p className="font-display font-bold text-2xl uppercase tracking-wide leading-none mb-1">{t('whyChooseUs.greatValue')}</p>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{t('whyChooseUs.valueDesc')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
