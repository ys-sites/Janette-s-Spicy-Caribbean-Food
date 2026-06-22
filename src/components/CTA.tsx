import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CTA() {
  const { t } = useTranslation();
  return (
    <section className="py-32 bg-[#F25C05] relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F25C05] to-transparent opacity-80"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-[#1A1A1A] mb-8 leading-[0.85] uppercase tracking-tight">
            {t('cta.title').split(' ').slice(0, -1).join(' ')} <br className="hidden md:block" />
            <span className="text-white">{t('cta.title').split(' ').slice(-1)}</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#1A1A1A] mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            {t('cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:+15146834741" className="bg-[#1A1A1A] hover:bg-black text-white px-12 py-6 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center uppercase tracking-wider">
              <Phone className="w-6 h-6" />
              {t('cta.orderTakeout')}
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=5B+Av.+3e+S,+Roxboro,+QC+H8Y+2L3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center uppercase tracking-wider"
            >
              {t('cta.getDirections')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
