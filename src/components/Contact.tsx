import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4">{t('contact.title')}</h2>
            <h3 className="text-6xl md:text-7xl font-display font-bold text-[#1A1A1A] mb-8 leading-[0.9] uppercase tracking-tight">
              {t('contact.subtitle').split(' ').slice(0, -1).join(' ')} <span className="text-[#F25C05]">{t('contact.subtitle').split(' ').slice(-1)}</span>
            </h3>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-4 rounded-2xl text-[#F25C05] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#1A1A1A] mb-1 uppercase tracking-wide">{t('contact.address')}</h4>
                  <p className="text-gray-600 text-lg font-medium">5B Av. 3e S<br />Roxboro, QC H8Y 2L3</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-4 rounded-2xl text-green-700 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#1A1A1A] mb-1 uppercase tracking-wide">{t('contact.phone')}</h4>
                  <p className="text-gray-600 text-lg font-medium">(514) 683-4741</p>
                  <p className="text-sm text-gray-500 mt-1 font-medium">{t('contact.callAhead')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-4 rounded-2xl text-yellow-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#1A1A1A] mb-1 uppercase tracking-wide">{t('contact.hours')}</h4>
                  <table className="text-gray-600 font-medium">
                    <tbody>
                      <tr>
                        <td className="pr-8 pb-2">{t('contact.days.monWed')}:</td>
                        <td className="pb-2 text-right">{t('contact.closed')}</td>
                      </tr>
                      <tr>
                        <td className="pr-8 pb-2">{t('contact.days.thursday')}:</td>
                        <td className="pb-2 text-right whitespace-nowrap">12:00 PM - 8:00 PM</td>
                      </tr>
                      <tr>
                        <td className="pr-8 pb-2">{t('contact.days.friday')}:</td>
                        <td className="pb-2 text-right whitespace-nowrap">12:00 PM - 8:00 PM</td>
                      </tr>
                      <tr>
                        <td className="pr-8 pb-2">{t('contact.days.saturday')}:</td>
                        <td className="pb-2 text-right whitespace-nowrap">1:00 PM - 8:00 PM</td>
                      </tr>
                      <tr>
                        <td className="pr-8 pb-2">{t('contact.days.sunday')}:</td>
                        <td className="pb-2 text-right whitespace-nowrap">1:00 PM - 8:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+15146834741" 
                className="bg-[#F25C05] hover:bg-[#d95204] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors text-center flex items-center justify-center gap-2 uppercase tracking-wider"
                aria-label={`${t('contact.callRestaurant')}: (514) 683-4741`}
              >
                <Phone className="w-5 h-5" />
                {t('contact.callRestaurant')}
              </a>
              <a 
                href="https://maps.google.com/?q=5B+Av.+3e+S,+Roxboro,+QC+H8Y+2L3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-100 hover:bg-gray-200 text-[#1A1A1A] px-8 py-4 rounded-full font-bold text-lg transition-colors text-center flex items-center justify-center gap-2 uppercase tracking-wider"
                aria-label={t('contact.getDirections')}
              >
                <MapPin className="w-5 h-5" />
                {t('contact.getDirections')}
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 relative"
          >
            {/* Map Placeholder */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: "url('/store.jpg?v=1')" }}
              role="img"
              aria-label="Janette's Spicy Caribbean Food store front"
            />
            <div className="absolute inset-0 bg-black/20 z-0" />
            
            <div className="w-full h-full relative flex items-end justify-end p-4 sm:p-6">
              <div className="text-center relative z-10 p-5 sm:p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 max-w-[280px] w-full">
                <MapPin className="w-8 h-8 text-[#F25C05] mx-auto mb-3" />
                <h4 className="font-display font-bold text-lg sm:text-xl text-[#1A1A1A] mb-1 uppercase tracking-wide">{t('contact.janettesSpicy')}</h4>
                <p className="text-gray-600 text-sm font-medium">5B Av. 3e S, Roxboro, QC</p>
                <a href="https://maps.google.com/?q=5B+Av.+3e+S,+Roxboro,+QC+H8Y+2L3" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[#F25C05] font-bold hover:underline uppercase tracking-wider text-xs">
                  {t('contact.openInMaps')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
