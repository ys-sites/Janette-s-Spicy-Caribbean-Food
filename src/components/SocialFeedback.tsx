import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Play, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type VideoItem = {
  id: number;
  src: string;
};

const videos: VideoItem[] = [
  { id: 1, src: '/snaptik_7227534106702171397_v3.mp4' },
  { id: 2, src: '/snaptik_7431693512267107589_v3.mp4' },
  { id: 3, src: '/snaptik_7473676810832710918_v3.mp4' },
  { id: 4, src: '/this.mp4' },
  { id: 5, src: '/ig.mp4' },
  { id: 6, src: '/snaptik_7483615498056355127_v3.mp4' },
  { id: 7, src: '/rip-guy-fieri.mp4' },
];

const floatingImages = [
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9pvy2UkVr9r49JazFUedovk5ZOYvN0XPcPkSKhOZJ3WHR_lBGcK5aRNKcC3NSxQgM9JCV-TyerY1RO2pdFccEOWZ2M4xKOZl8HxoMjAjMDO5Ie8kpTucLQJ8LYAIRzq9b_mJCCT3cneboS6O=s800', top: '5%', left: '2%', size: 'w-24 h-24 md:w-36 md:h-36', delay: 0, animation: { y: [0, -30, 0], x: [0, 15, 0], rotate: [0, 10, -5, 0] }, alt: "Janette's Spicy Caribbean Jerk Chicken" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9pvjN23V5K4hEThv2OsVq0V0h0eh9hUtet7ibWOxrLSyoJ7i_ZMkFpsdmUev-h16iuc0Q1wY_I5Jb4tFCOa8GZNZ-w3ZXPobwT5FxFRzNi_xv_R8kIfIEfS49Sg0OJfwFB6NZiIHejkeB15o=s800', top: '55%', left: '5%', size: 'w-32 h-32 md:w-48 md:h-48', delay: 1.5, animation: { y: [0, 20, 0], x: [0, -20, 0], rotate: [0, -8, 8, 0] }, alt: "Authentic Caribbean Oxtail Stew" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9pu_tRqmIf65OfleQ9Lk4EeDlkR3yaDXH5JnDm5UMxcYwuFoha6fYN72C4NQk1cgfJbw4CuRlFY0LMYX9iv2I0QTw59lalvxKyPYz1-TIocZrcVKUKHwcDT1XtWozh8OTEyaIl5Hff-H1pMI=s800', top: '10%', right: '3%', size: 'w-28 h-28 md:w-40 md:h-40', delay: 2.5, animation: { y: [0, -25, 0], x: [0, -10, 0], rotate: [0, 15, -10, 0] }, alt: "Spicy Beef Patty Janette's" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9psOO63UJUVAZuAIEr49TTvA5j8jD5K_jHcujA6ODp85oQ-3q4XPbWNZO8EnSN85xZWhjJR5Y8m_KuVXjN57H0Nqq7mLa-KlpCQweXrdUa6CsjZFf72HDzM4_fD_r_0PLGRe5YzP-8NQSPzf=s800', top: '60%', right: '6%', size: 'w-20 h-20 md:w-32 md:h-32', delay: 3.5, animation: { y: [0, 15, 0], x: [0, 25, 0], rotate: [0, -12, 5, 0] }, alt: "Jamaican Curry Goat Roxboro" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9psK_AQgnGrrnyLW6SHrvp7JUFl00rFKBALnET5n4YTqzWV0BYsFOZH4pO94LNZScDB5J3uiMxhfe_GM_lXIMBV6FxvAszZDbEKQ-MJe5uvhp2Ub7hNTmiv-5BXozWH3RaoFKy5O83tegNs=s800', top: '80%', left: '20%', size: 'w-24 h-24 md:w-32 md:h-32', delay: 1.0, animation: { y: [0, -40, 0], x: [0, 30, 0], rotate: [0, 20, -15, 0] }, alt: "Caribbean Food Takeout Janette's" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9ptmK5MMqtbS69vhMkV8U5wtWsv9hAQag85sGzVBZQAkTWEw4No-oBvQJ719GYYHQlqTu54Ke7rtwKKUKfq7SDKjDcSFkSBAmIbUPlF_WFd22qiyhJ1c__GuG5-rIdR1tHt_EMYMaNNpHnYF=s800', top: '75%', right: '25%', size: 'w-24 h-24 md:w-36 md:h-36', delay: 2.0, animation: { y: [0, 35, 0], x: [0, -25, 0], rotate: [0, -18, 12, 0] }, alt: "Janette's Famous Caribbean Oxtail" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9pvd27VzBfMO_PlTdamvKgcTZI7UYOsO9hK7Oct6iNWr9VE5OuOwk-J0w_OJt5IIcLkU2TzYyFVibfUp75yqTdR5YMzcdhcqk5Ar1Y0u3TO1s3ttOkDpOOuaz7KcymcKsvhGJ1T553DVXHx1=s800', top: '30%', left: '15%', size: 'w-20 h-20 md:w-28 md:h-28', delay: 0.5, animation: { y: [0, -15, 0], x: [0, -30, 0], rotate: [0, 8, -8, 0] }, alt: "Traditional Caribbean Side Dishes" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9pse8Ikqg2zz6rguGt0D-Wo5jxf0BqlpsZCLfbPZ4ccV_GXRonyAPYFVv0lzxBkZvumxIiAcVE22GPFYESQlO6SKQ7XJL4okaWO_dO8ZYySGuOxoGLxvz-Mkx9oP-EsEybyYNgY1OlHK5kQ-=s800', top: '25%', right: '18%', size: 'w-28 h-28 md:w-36 md:h-36', delay: 4.0, animation: { y: [0, 25, 0], x: [0, 20, 0], rotate: [0, -10, 10, 0] }, alt: "Goat Curry and Jerk Chicken Janette's" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9puvX0IEk3J7uNK8Is-s2uqivDJkc4PmFO5dfLQ1IUumBeFMqWTf_rGgWEFJsyY1AeHwLjjyslBiZGwmM1SPFxnHnetjOCkePNrcp6BBsEfLR0ZIt5Cu0VcR5crzCq84h-vve86gIg=s800', top: '45%', right: '2%', size: 'w-16 h-16 md:w-24 md:h-24', delay: 1.2, animation: { y: [0, -20, 0], x: [0, -15, 0], rotate: [0, 5, -5, 0] }, alt: "Caribbean Food Catering Roxboro" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9pv85Ppjsfa-bKlEhaRUdvr3CThn3BwPp4BWz6eP12uTYhgJFIf8LOou0Hghd_SOpyF5azIXKiDPK4rhnDw4y2e5l3Ya4CCW65pk91pGDZ3g01IDfZScQ1cAHeJQAohVFFbSVOVV=s800', top: '85%', right: '10%', size: 'w-32 h-32 md:w-48 md:h-48', delay: 3.2, animation: { y: [0, 30, 0], x: [0, 20, 0], rotate: [0, -15, 15, 0] }, alt: "Best Caribbean Food in Montreal" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9puTCXueX49I54iOAQfJDZWjBWOdZVXyDjILaHL5ru8hmBIOyreQTu98y_pVW7aBzr1sFcMLfJauSPl4bjUI5K3sdjQq0_jZamMuPxCgrEvNztvFiaCynnko89FfNYmfCU_HIjxBq0DNi6Jv=s800', top: '15%', left: '25%', size: 'w-24 h-24 md:w-32 md:h-32', delay: 0.8, animation: { y: [0, -25, 0], x: [0, 10, 0], rotate: [0, 12, -12, 0] }, alt: "Jamaican Patty Selection" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9puoneaZeN05fNGk_OqoTKdkOK7ssVrWzXAPt-3RW_0ZaJcqB43dVvP7kvzgUHDN3InYfQA9LmMbXB2H-OhYnApK_u-EAK9am9vSVmYQUDnW81cnHE-2vO0AYDU0oyTCsRmktKF9KOM-TScJ=s800', top: '70%', left: '12%', size: 'w-28 h-28 md:w-40 md:h-40', delay: 2.8, animation: { y: [0, 20, 0], x: [0, -15, 0], rotate: [0, -10, 10, 0] }, alt: "Caribbean Dinner Platters" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9pvy2UkVr9r49JazFUedovk5ZOYvN0XPcPkSKhOZJ3WHR_lBGcK5aRNKcC3NSxQgM9JCV-TyerY1RO2pdFccEOWZ2M4xKOZl8HxoMjAjMDO5Ie8kpTucLQJ8LYAIRzq9b_mJCCT3cneboS6O=s800', top: '35%', right: '35%', size: 'w-16 h-16 md:w-20 md:h-20', delay: 1.7, animation: { y: [0, 40, 0], x: [0, -30, 0], rotate: [0, 25, -20, 0] }, alt: "Spicy Jerk Sauce Janette's" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9pvjN23V5K4hEThv2OsVq0V0h0eh9hUtet7ibWOxrLSyoJ7i_ZMkFpsdmUev-h16iuc0Q1wY_I5Jb4tFCOa8GZNZ-w3ZXPobwT5FxFRzNi_xv_R8kIfIEfS49Sg0OJfwFB6NZiIHejkeB15o=s800', top: '12%', right: '45%', size: 'w-20 h-20 md:w-28 md:h-28', delay: 0.3, animation: { y: [0, -35, 0], x: [0, 25, 0], rotate: [0, -15, 15, 0] }, alt: "Janette's Oxtail Gravy" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9pu_tRqmIf65OfleQ9Lk4EeDlkR3yaDXH5JnDm5UMxcYwuFoha6fYN72C4NQk1cgfJbw4CuRlFY0LMYX9iv2I0QTw59lalvxKyPYz1-TIocZrcVKUKHwcDT1XtWozh8OTEyaIl5Hff-H1pMI=s800', top: '85%', left: '40%', size: 'w-24 h-24 md:w-32 md:h-32', delay: 2.2, animation: { y: [0, 25, 0], x: [0, 40, 0], rotate: [0, 10, -10, 0] }, alt: "Caribbean Beef Patties" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9psOO63UJUVAZuAIEr49TTvA5j8jD5K_jHcujA6ODp85oQ-3q4XPbWNZO8EnSN85xZWhjJR5Y8m_KuVXjN57H0Nqq7mLa-KlpCQweXrdUa6CsjZFf72HDzM4_fD_r_0PLGRe5YzP-8NQSPzf=s800', top: '50%', left: '35%', size: 'w-14 h-14 md:w-20 md:h-20', delay: 3.8, animation: { y: [0, -20, 0], x: [0, -25, 0], rotate: [0, -20, 20, 0] }, alt: "Curry Goat Janette's Spicy" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9psK_AQgnGrrnyLW6SHrvp7JUFl00rFKBALnET5n4YTqzWV0BYsFOZH4pO94LNZScDB5J3uiMxhfe_GM_lXIMBV6FxvAszZDbEKQ-MJe5uvhp2Ub7hNTmiv-5BXozWH3RaoFKy5O83tegNs=s800', top: '20%', left: '45%', size: 'w-16 h-16 md:w-24 md:h-24', delay: 1.4, animation: { y: [0, 30, 0], x: [0, -15, 0], rotate: [0, 15, -5, 0] }, alt: "Caribbean Food Near Me" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9ptmK5MMqtbS69vhMkV8U5wtWsv9hAQag85sGzVBZQAkTWEw4No-oBvQJ719GYYHQlqTu54Ke7rtwKKUKfq7SDKjDcSFkSBAmIbUPlF_WFd22qiyhJ1c__GuG5-rIdR1tHt_EMYMaNNpHnYF=s800', top: '65%', right: '40%', size: 'w-28 h-28 md:w-36 md:h-36', delay: 0.7, animation: { y: [0, -45, 0], x: [0, 20, 0], rotate: [0, -12, 18, 0] }, alt: "Smoky Jerk Chicken Roxboro" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9pvd27VzBfMO_PlTdamvKgcTZI7UYOsO9hK7Oct6iNWr9VE5OuOwk-J0w_OJt5IIcLkU2TzYyFVibfUp75yqTdR5YMzcdhcqk5Ar1Y0u3TO1s3ttOkDpOOuaz7KcymcKsvhGJ1T553DVXHx1=s800', top: '40%', right: '12%', size: 'w-24 h-24 md:w-32 md:h-32', delay: 2.6, animation: { y: [0, 15, 0], x: [0, 35, 0], rotate: [0, 8, -15, 0] }, alt: "Janette's Caribbean Food Specialties" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9pse8Ikqg2zz6rguGt0D-Wo5jxf0BqlpsZCLfbPZ4ccV_GXRonyAPYFVv0lzxBkZvumxIiAcVE22GPFYESQlO6SKQ7XJL4okaWO_dO8ZYySGuOxoGLxvz-Mkx9oP-EsEybyYNgY1OlHK5kQ-=s800', top: '8%', right: '25%', size: 'w-16 h-16 md:w-24 md:h-24', delay: 3.1, animation: { y: [0, -25, 0], x: [0, -20, 0], rotate: [0, -5, 10, 0] }, alt: "Caribbean Lunch Specials" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9puvX0IEk3J7uNK8Is-s2uqivDJkc4PmFO5dfLQ1IUumBeFMqWTf_rGgWEFJsyY1AeHwLjjyslBiZGwmM1SPFxnHnetjOCkePNrcp6BBsEfLR0ZIt5Cu0VcR5crzCq84h-vve86gIg=s800', top: '90%', left: '25%', size: 'w-20 h-20 md:w-28 md:h-28', delay: 1.9, animation: { y: [0, 20, 0], x: [0, -35, 0], rotate: [0, 18, -12, 0] }, alt: "Janette's Catering Services" },
  { src: 'https://lh3.googleusercontent.com/geougc-cs/ABOP9pv85Ppjsfa-bKlEhaRUdvr3CThn3BwPp4BWz6eP12uTYhgJFIf8LOou0Hghd_SOpyF5azIXKiDPK4rhnDw4y2e5l3Ya4CCW65pk91pGDZ3g01IDfZScQ1cAHeJQAohVFFbSVOVV=s800', top: '55%', right: '30%', size: 'w-18 h-18 md:w-24 md:h-24', delay: 0.4, animation: { y: [0, -30, 0], x: [0, 15, 0], rotate: [0, -10, 8, 0] }, alt: "Jerk Chicken and Oxtail Platters" },
];

function VideoCard({ video }: { video: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.muted = false;
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className="relative rounded-3xl overflow-hidden bg-[#1a1a1a] aspect-[9/16] w-full flex-shrink-0 shadow-2xl border border-white/10 group cursor-pointer"
      onClick={togglePlay}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5 rounded-full">
            <div className="bg-black p-1.5 rounded-full">
              <Instagram className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
{/* Video */}
<video
  ref={videoRef}
  src={`${video.src}#t=0.1`}
  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
  loop
  playsInline
  preload="metadata"
  onEnded={() => setIsPlaying(false)}
  aria-label="Customer review video"
/>


      {/* Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none group-hover:bg-black/10 transition-colors duration-300">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-xl transform transition-transform group-hover:scale-110">
            <Play className="w-8 h-8 text-white ml-1 drop-shadow-lg" fill="currentColor" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function SocialFeedback() {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    container.scrollLeft = container.scrollWidth / 3;
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const item = container.firstElementChild as HTMLElement;
      if (item) {
        const scrollAmount = item.offsetWidth + 24; // width + gap-6 (24px)
        
        // Handle infinite scroll logic
        const totalWidth = container.scrollWidth;
        const oneThirdWidth = totalWidth / 3;
        
        if (direction === 'left' && container.scrollLeft <= 0) {
          // If at the beginning, jump to the middle section
          container.scrollLeft = oneThirdWidth;
        } else if (direction === 'right' && container.scrollLeft >= totalWidth - container.clientWidth - 10) {
          // If at the end, jump back to the middle section
          container.scrollLeft = oneThirdWidth;
        }

          container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };
  
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Floating Background Images */}
      {floatingImages.map((img, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-2xl overflow-hidden shadow-2xl z-0 opacity-30 blur-sm hover:opacity-100 hover:blur-none transition-all duration-500 delay-[2000ms] hover:delay-0 cursor-pointer ${img.size}`}
          style={{ 
            top: img.top, left: img.left, right: img.right,
            willChange: 'transform, opacity, filter'
          }}
          animate={img.animation}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: img.delay,
            ease: "easeInOut"
          }}
        >
          <img src={img.src.replace('=s800', '=s200')} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F25C05] font-bold tracking-widest uppercase text-sm mb-4"
          >
            {t('social.subtitle')}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tight"
          >
            Viral <span className="text-[#F25C05]">Feedback</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            {t('social.description')}
          </motion.p>
        </div>

        {/* Video Carousel */}
        <div className="relative max-w-5xl mx-auto group">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-[#F25C05] backdrop-blur-md p-3 rounded-full text-white transition-all duration-300 opacity-100 shadow-xl border border-white/20"
            aria-label="Previous videos"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')} 
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-[#F25C05] backdrop-blur-md p-3 rounded-full text-white transition-all duration-300 opacity-100 shadow-xl border border-white/20"
            aria-label="Next videos"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-12 pt-4 px-[7.5%] sm:px-4 snap-x snap-mandatory hide-scrollbar" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...videos, ...videos, ...videos].map((video, index) => (
              <motion.div
                key={`${video.id}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % videos.length) * 0.1, duration: 0.5 }}
                className="snap-center shrink-0 w-[85%] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]"
              >
                <VideoCard video={video} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
