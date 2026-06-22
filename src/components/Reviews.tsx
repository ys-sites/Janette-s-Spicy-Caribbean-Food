import { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const reviews = [
  {
    name: "Aprinder",
    time: "4 months ago",
    text: "Amazing food and even better service. The owner, his wife, and their son were so kind, welcoming, and generous. The jerk chicken, curry goat, plantains, and dumplings were all delicious and full of flavour.",
    rating: 5
  },
  {
    name: "Agro Casa",
    time: "2 months ago",
    text: "Slowly cooked curry goat brings back memories of the island! Their jerk chicken even emits wood smoky flavours! Everything went down perfectly with their in house fruity chilli sauce. Highly recommended!",
    rating: 5
  },
  {
    name: "ps Gt",
    time: "4 months ago",
    text: "One of the best places to go! First time ever trying Jamaican food… what was I doing for last 24 years of my life, this is genuinely a gem. And the customer service is top notch.",
    rating: 5
  },
  {
    name: "Erika",
    time: "3 weeks ago",
    text: "Staff so very kind very friendly! Food was so delicious not easy to find goat that so tender and flavourful but yet also very affordable. Portions very generous.",
    rating: 5
  },
  {
    name: "Couple More Cravings",
    time: "4 months ago",
    text: "This meal hits every note perfectly. The jerk chicken is packed with flavour, tender, and has that authentic smoky char that makes each bite addictive. Portions are generous, everything tastes homemade.",
    rating: 5
  },
  {
    name: "caleb angeles",
    time: "7 months ago",
    text: "The food was utterly splendid, we ordered the oxtail, which was a generous portion with fall of the bone meat, fluffy rice, and delicious sides, the jerk chicken, was juicy, tender, flavourful and delightfully seasoned.",
    rating: 5
  },
  {
    name: "Karina Zusmanovsky",
    time: "5 months ago",
    text: "Amazing ! Really enjoyed the food. I had the jerk chicken, ox tail and goat curry. Food is fresh, full of flavors and spice ! Service was great ! I recommend !",
    rating: 5
  },
  {
    name: "Yvan L.",
    time: "4 months ago",
    text: "Very tasty Carribean food. I loved the goat curry and jerk chicken (both pictured).",
    rating: 5
  },
  {
    name: "Kevin Rawnsley",
    time: "10 months ago",
    text: "This was my first time trying Jamaican food and it definitely won’t be my last. As a start the service was incredible, you can really tell the people there had a passion for what they did and it really showed in the food.",
    rating: 5
  },
  {
    name: "yani",
    time: "10 months ago",
    text: "The oxtail was amazing tender, flavorful, and cooked perfectly. The rice, plantains, and cabbage were fresh and tasty, and the jerk chicken was delicious too. Everything felt homemade and full of flavor.",
    rating: 5
  },
  {
    name: "Blaine Trainor",
    time: "7 months ago",
    text: "Hidden gem take out window. The goat curry, plantains, and Jamaican patty were exactly what we wanted. We waiting about 20 mins for our food and they recommended calling in your order ahead in case they were busier.",
    rating: 5
  },
  {
    name: "Javaughn Morgan",
    time: "3 months ago",
    text: "Caribbean food done right. Always happy with my order. Keep up the good job.🫡",
    rating: 5
  },
  {
    name: "Masterislandboy Lapointe",
    time: "5 months ago",
    text: "Always great food hands down best Roti around my neck of the woods coming from 🇸🇨 clients it's a 10/10 for me",
    rating: 5
  },
  {
    name: "D Burns",
    time: "6 months ago",
    text: "Exceptional food and kind service. Up there with the best across the city and worth the travel if you don’t live nearby.",
    rating: 5
  },
  {
    name: "Julia C",
    time: "8 months ago",
    text: "First time trying this place! We tried the jerk chicken. AMAZING!!!! made with love and fresh. Will definitely come back !!",
    rating: 5
  },
  {
    name: "Melissa L'Ecuyer",
    time: "2 years ago",
    text: "Wow! Just wow. Absolutely delicious! I ordered the goat curry and oxtail combo, it is fall off the bone and melt in your mouth tender. Perfect level of spicy.",
    rating: 5
  }
];

export default function Reviews() {
  const { t } = useTranslation();
  const [isPaused, setIsPaused] = useState(false);
  // Duplicate the array to create a seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-[#F4F1EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4">
              {t('reviews.title')}
            </h2>
            <h3 className="text-6xl md:text-8xl font-display font-bold text-[#1A1A1A] leading-tight uppercase tracking-tight">
              {t('reviews.subtitle').split(' ').slice(0, -1).join(' ')} <span className="text-[#F25C05]">{t('reviews.subtitle').split(' ').slice(-1)}</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="relative w-full flex overflow-x-hidden mt-8 marquee-container" 
           onMouseEnter={() => setIsPaused(true)} 
           onMouseLeave={() => setIsPaused(false)}>
        {/* Gradient masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F4F1EA] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F4F1EA] to-transparent z-10 pointer-events-none"></div>

        <div className={`flex gap-6 py-4 px-4 animate-marquee [animation-duration:60s] ${isPaused ? 'pause-animation' : ''}`}>
          {duplicatedReviews.map((review, index) => (
            <div 
              key={index} 
              className="w-[350px] md:w-[450px] flex-shrink-0 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-gray-200 fill-current" />
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=random&color=fff`} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border border-gray-200" 
                  referrerPolicy="no-referrer" 
                />
                <div>
                  <div className="font-bold text-[#1A1A1A] uppercase tracking-wide text-sm">{review.name}</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{t('reviews.customer')}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm md:text-base mb-4 relative z-10 flex-grow leading-relaxed font-medium">"{review.text}"</p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <div className="flex text-[#F25C05]" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{review.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
