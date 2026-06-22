import { motion } from 'motion/react';
import { FacebookIcon } from './FacebookIcon';
import { Star, MapPin, Phone, ArrowRight, Info } from 'lucide-react';
// import { FacebookIcon } from './FacebookIcon';
import { useTranslation } from 'react-i18next';
import { CateringPopup } from './CateringPopup';

// Hero component for the landing page
export default function Hero() {
  const { t } = useTranslation();
  const marqueeItems = [
    { name: t('hero.jerkChicken'), icon: "🍗" },
    { name: t('hero.oxtailStew'), icon: "🍲" },
    { name: t('hero.curryGoat'), icon: "🐐" },
    { name: t('hero.beefPatties'), icon: "🥟" },
    { name: t('hero.friedPlantains'), icon: "🍌" },
    { name: t('hero.riceAndPeas'), icon: "🍚" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-black">
      <CateringPopup />
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/hero-bg.jpg'), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')" }}
        role="img"
        aria-label="Delicious Caribbean food spread"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start max-w-3xl"
        >
          {/* SEO Optimized Hidden H1 */}
          <h1 className="sr-only">Janette's Spicy Caribbean Food - Authentic Takeout in Roxboro, QC</h1>
          
          <div className="text-7xl md:text-8xl lg:text-[140px] font-display font-bold text-white mb-6 leading-[0.85] tracking-tight uppercase" aria-hidden="true">
            {t('hero.title').split(' ').slice(0, 2).join(' ')} <br />
            <span className="text-white">
              <span className="text-red-600">{t('hero.title').split(' ')[2]}</span> {t('hero.title').split(' ')[3]}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl font-medium">
            {t('hero.description')}
          </p>

          <div className="flex items-center gap-2 mb-10">
            <span
              className="inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(34,197,94,0.14) 60%, rgba(255,255,255,0.06) 100%)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.28)',
                boxShadow: '0 8px 32px rgba(34,197,94,0.22), 0 1.5px 8px rgba(0,0,0,0.18), inset 0 1.5px 0 rgba(255,255,255,0.32), inset 0 -1px 0 rgba(0,0,0,0.08)',
              }}
            >
              {/* Specular top highlight */}
              <span
                className="absolute inset-x-0 top-0 h-2/5 rounded-t-full pointer-events-none"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 100%)' }}
                aria-hidden="true"
              />
              <span className="relative z-10">☪️</span>
              <span className="relative z-10">{t('hero.halalBadge')}</span>
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#menu" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 uppercase tracking-wide"
              aria-label={t('hero.orderNow')}
            >
              {t('hero.orderNow')}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=5B+Av.+3e+S,+Roxboro,+QC+H8Y+2L3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative overflow-hidden text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.07) 100%)',
                backdropFilter: 'blur(20px) saturate(160%)',
                WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                border: '1px solid rgba(255,255,255,0.28)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 1.5px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.08)',
              }}
              aria-label={t('hero.getDirections')}
            >
              {t('hero.getDirections')}
              <MapPin className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/p/Janettes-Spicy-Caribbean-Food-100090978391538/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden w-16 h-16 font-bold text-lg transition-all flex items-center justify-center uppercase tracking-wide p-0"
              aria-label="Follow us on Facebook"
              style={{
                borderRadius: '22%',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.07) 100%)',
                backdropFilter: 'blur(20px) saturate(160%)',
                WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                border: '1px solid rgba(255,255,255,0.28)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2), 0 4px 24px rgba(196,65,10,0.15), inset 0 1.5px 0 rgba(255,255,255,0.3)',
              }}
            >
              <div className="flex items-center justify-center w-full h-full">
                <FacebookIcon className="w-10 h-10 text-[#c4410a]" />
              </div>
            </a>
          </div>
        </motion.div>

        {/* Floating Widgets */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden lg:flex flex-col gap-6"
        >
          <div
            className="p-6 rounded-3xl max-w-xs relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(28px) saturate(180%)',
              WebkitBackdropFilter: 'blur(28px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.22)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.3), inset 0 1.5px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.1)',
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex -space-x-3" aria-hidden="true">
                <img src="https://i.pravatar.cc/100?img=1" alt="" className="w-10 h-10 rounded-full border-2 border-black" referrerPolicy="no-referrer" />
                <img src="https://i.pravatar.cc/100?img=2" alt="" className="w-10 h-10 rounded-full border-2 border-black" referrerPolicy="no-referrer" />
                <img src="https://i.pravatar.cc/100?img=3" alt="" className="w-10 h-10 rounded-full border-2 border-black" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="flex text-yellow-500" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white text-xs font-bold mt-1">{t('hero.reviews')}</p>
              </div>
            </div>
          </div>

          <div
            className="p-4 rounded-3xl max-w-xs relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 100%)',
              backdropFilter: 'blur(28px) saturate(180%)',
              WebkitBackdropFilter: 'blur(28px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.22)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.3), inset 0 1.5px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.1)',
            }}
          >
            <img 
              src="/plate.jpeg" 
              alt="Caribbean fish plate" 
              className="w-full h-40 object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-500" 
              referrerPolicy="no-referrer"
              fetchPriority="high"
            />
            <div
              className="absolute top-6 right-6 p-1.5 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.25)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
              }}
            >
              <Info className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">{t('hero.authenticPatties')}</h3>
            <p className="text-gray-400 text-sm">{t('hero.pattiesDescription')}</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 w-full bg-black py-4 border-t border-white/10 overflow-hidden z-20">
        <motion.div 
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-4 mx-8">
              <span className="text-white font-display text-2xl tracking-widest uppercase">{item.name}</span>
              <span className="text-2xl">{item.icon}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
