import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function MenuHighlights() {
  const { t } = useTranslation();

  const menuCategories = [
    {
      title: t('menu.categories.entrees'),
      items: [
        { name: t('menu.items.patty'), price: "$3" },
        { name: t('menu.items.friedDumplings'), price: "$3" },
        { name: t('menu.items.plantain'), price: "$3" },
        { name: t('menu.items.soupOfTheDay'), price: "" },
        { name: t('menu.items.fishOfTheDay'), price: "" },
      ]
    },
    {
      title: t('menu.categories.mainCourses'),
      items: [
        { name: t('menu.items.smallJerkChicken'), price: "$15" },
        { name: t('menu.items.largeJerkChicken'), price: "$18" },
        { name: t('menu.items.smallStewChicken'), price: "$15" },
        { name: t('menu.items.largeStewChicken'), price: "$18" },
        { name: t('menu.items.smallCurryGoat'), price: "$16" },
        { name: t('menu.items.largeCurryGoat'), price: "$19" },
        { name: t('menu.items.oxtail'), price: "$21" },
      ]
    },
    {
      title: t('menu.categories.rotis'),
      items: [
        { name: t('menu.items.chickenRoti'), price: "$15" },
        { name: t('menu.items.goatRoti'), price: "$19" },
        { name: t('menu.items.beefRoti'), price: "$19" },
        { name: t('menu.items.veggieRoti'), price: "$13" },
      ]
    },
    {
      title: t('menu.categories.combos'),
      items: [
        { name: t('menu.items.oxtailAndGoatCurry'), price: "$30" },
        { name: t('menu.items.jerkChickenAndOxtail'), price: "$28" },
        { name: t('menu.items.goatCurryAndJerkChicken'), price: "$28" },
      ]
    },
    {
      title: t('menu.categories.drinks'),
      items: [
        { name: t('menu.items.drink'), price: "$3" },
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(menuCategories[0].title);

  return (
    <section id="menu" className="py-24 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display font-bold text-[#1A1A1A] mb-6 uppercase tracking-tight"
          >
            {t('menu.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 font-medium"
          >
            {t('menu.description')}
          </motion.p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16" role="tablist" aria-label="Menu categories">
          {menuCategories.map((category) => (
            <button
              key={category.title}
              role="tab"
              aria-selected={activeCategory === category.title}
              aria-controls={`panel-${category.title.replace(/\s+/g, '-').toLowerCase()}`}
              id={`tab-${category.title.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setActiveCategory(category.title)}
              className={`px-8 py-3 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.title
                  ? 'bg-[#F25C05] text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              id={`panel-${activeCategory.replace(/\s+/g, '-').toLowerCase()}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeCategory.replace(/\s+/g, '-').toLowerCase()}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            >
              {menuCategories.find(c => c.title === activeCategory)?.items.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-[#1A1A1A] uppercase tracking-wide leading-tight pr-4">
                      {item.name}
                    </h3>
                    <span className="text-lg font-medium text-[#F25C05] shrink-0">
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href="tel:+15146834741" 
            className="inline-flex items-center gap-2 bg-[#F25C05] hover:bg-[#d95204] text-white px-10 py-5 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wider"
            aria-label={`${t('menu.callToOrder')}: (514) 683-4741`}
          >
            {t('menu.callToOrder')}
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
