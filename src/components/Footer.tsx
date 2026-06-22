import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-20 pb-8 border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-20">
          
          <div className="md:col-span-2">
            <h4 className="font-bold text-white text-sm tracking-widest uppercase mb-6">{t('footer.aboutUs')}</h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-8">
              {t('footer.aboutDescription')}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/people/Janettes-Spicy-Caribbean-Food/100090978391538/?eav=AfY_RASWBytci7Jywtcf-1R77lfm9YNMT0FIGq2CkqEZdVCMnHDQcF1CY1QZbH7Dx1M&tsid=0.3315940639098758&source=result" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors text-white group"
                aria-label={t('footer.followFacebook')}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-sm tracking-widest uppercase mb-6">{t('footer.openingHours')}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><span className="block text-white mb-1">{t('footer.days.monWed')}</span> {t('footer.closed')}</li>
              <li><span className="block text-white mb-1">{t('footer.days.thuFri')}</span> 12:00 PM - 8:00 PM</li>
              <li><span className="block text-white mb-1">{t('footer.days.satSun')}</span> 1:00 PM - 8:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-sm tracking-widest uppercase mb-6">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>5B Av. 3e S, Roxboro, QC H8Y 2L3</li>
              <li>
                <a 
                  href="tel:15146834741" 
                  className="hover:text-red-600 transition-colors"
                  aria-label="Call main line: (514) 683-4741"
                >
                  (514) 683-4741
                </a>
              </li>
              <li>
                <a 
                  href="tel:15145687048" 
                  className="hover:text-red-600 transition-colors"
                  aria-label="Call secondary line: (514) 568-7048"
                >
                  (514) 568-7048
                </a>
              </li>
              <li>
                <a 
                  href="mailto:janettesspicy@gmail.com" 
                  className="hover:text-red-600 transition-colors"
                  aria-label="Email us at janettesspicy@gmail.com"
                >
                  janettesspicy@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-gray-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} {t('footer.allRightsReserved')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacyPolicy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.termsConditions')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
