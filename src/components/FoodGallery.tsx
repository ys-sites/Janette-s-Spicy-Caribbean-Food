import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const galleryImages = [
  {
    src: '/2.jpeg',
    altKey: 'foodGallery.items.wholeSnapperFeast',
    className: 'md:col-span-5 md:row-span-2',
  },
  {
    src: '/3.jpeg',
    altKey: 'foodGallery.items.salmonInSauce',
    className: 'md:col-span-4 md:row-span-1',
  },
  {
    src: '/4.jpeg',
    altKey: 'foodGallery.items.escovitchVegetables',
    className: 'md:col-span-3 md:row-span-1',
  },
  {
    src: '/5.jpeg',
    altKey: 'foodGallery.items.plantainsAndDumplings',
    className: 'md:col-span-3 md:row-span-1',
  },
  {
    src: '/6.jpeg',
    altKey: 'foodGallery.items.riceAndPeasTray',
    className: 'md:col-span-3 md:row-span-1',
  },
  {
    src: '/7.jpeg',
    altKey: 'foodGallery.items.oxtailTray',
    className: 'md:col-span-3 md:row-span-1',
  },
  {
    src: '/9.jpeg',
    altKey: 'foodGallery.items.steamedVegetables',
    className: 'md:col-span-3 md:row-span-1',
  },
  {
    src: '/10.jpeg',
    altKey: 'foodGallery.items.curryChicken',
    className: 'md:col-span-6 md:row-span-1',
  },
  {
    src: '/11.jpeg',
    altKey: 'foodGallery.items.goatCurry',
    className: 'md:col-span-6 md:row-span-1',
  },
];

export default function FoodGallery() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const swipeStartX = useRef<number | null>(null);
  const swipeCurrentX = useRef<number | null>(null);

  const goToPrevious = () => {
    setCurrentIndex((previousIndex) => (previousIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % galleryImages.length);
  };

  const openPreview = (index: number) => {
    setCurrentIndex(index);
    setSelectedIndex(index);
  };

  const closePreview = () => {
    setSelectedIndex(null);
  };

  const showPreviousPreview = () => {
    setSelectedIndex((previousIndex) => {
      if (previousIndex === null) {
        return galleryImages.length - 1;
      }

      return (previousIndex - 1 + galleryImages.length) % galleryImages.length;
    });
  };

  const showNextPreview = () => {
    setSelectedIndex((previousIndex) => {
      if (previousIndex === null) {
        return 0;
      }

      return (previousIndex + 1) % galleryImages.length;
    });
  };

  const handleSwipeStart = (clientX: number) => {
    swipeStartX.current = clientX;
    swipeCurrentX.current = clientX;
  };

  const handleSwipeMove = (clientX: number) => {
    swipeCurrentX.current = clientX;
  };

  const handleSwipeEnd = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
    if (swipeStartX.current === null || swipeCurrentX.current === null) {
      swipeStartX.current = null;
      swipeCurrentX.current = null;
      return;
    }

    const deltaX = swipeStartX.current - swipeCurrentX.current;

    swipeStartX.current = null;
    swipeCurrentX.current = null;

    if (Math.abs(deltaX) < 50) {
      return;
    }

    if (deltaX > 0) {
      onSwipeLeft();
      return;
    }

    onSwipeRight();
  };

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePreview();
      }

      if (event.key === 'ArrowLeft') {
        showPreviousPreview();
      }

      if (event.key === 'ArrowRight') {
        showNextPreview();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section className="relative overflow-hidden bg-[#F4F1EA] py-24">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-orange-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-bold uppercase tracking-[0.3em] text-[#F25C05]"
          >
            {t('foodGallery.eyebrow')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mb-6 text-5xl font-display font-bold uppercase leading-[0.9] tracking-tight text-[#1A1A1A] md:text-7xl"
          >
            {t('foodGallery.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-lg font-medium leading-relaxed text-gray-600"
          >
            {t('foodGallery.description')}
          </motion.p>
        </div>

        <div className="relative md:hidden">
          <div className="overflow-hidden rounded-[2rem]">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTouchStart={(event) => handleSwipeStart(event.touches[0].clientX)}
              onTouchMove={(event) => handleSwipeMove(event.touches[0].clientX)}
              onTouchEnd={() => handleSwipeEnd(goToNext, goToPrevious)}
            >
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className="group relative block h-[24rem] w-full shrink-0 overflow-hidden rounded-[2rem] border border-black/5 bg-white text-left shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  onClick={() => openPreview(index)}
                  aria-label={`${t('foodGallery.openPreview')} ${t(image.altKey)}`}
                >
                  <img
                    src={image.src}
                    alt={t(image.altKey)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      {t('foodGallery.badge')}
                    </span>
                    <p className="mt-3 max-w-[18rem] text-lg font-bold uppercase tracking-wide text-white">
                      {t(image.altKey)}
                    </p>
                  </figcaption>
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
            onClick={goToPrevious}
            aria-label={t('foodGallery.previousImage')}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
            onClick={goToNext}
            aria-label={t('foodGallery.nextImage')}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-5 flex justify-center gap-2">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`h-2.5 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-[#F25C05]' : 'w-2.5 bg-black/15'}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`${t('foodGallery.goToImage')} ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden grid-cols-1 gap-5 md:grid md:grid-cols-12 md:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${image.className}`}
            >
              <motion.button
                type="button"
                whileHover={{ y: -6 }}
                className="relative block h-full w-full text-left"
                onClick={() => openPreview(index)}
                aria-label={`${t('foodGallery.openPreview')} ${t(image.altKey)}`}
              >
                <img
                  src={image.src}
                  alt={t(image.altKey)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    {t('foodGallery.badge')}
                  </span>
                  <p className="mt-3 max-w-[18rem] text-lg font-bold uppercase tracking-wide text-white md:text-xl">
                    {t(image.altKey)}
                  </p>
                </figcaption>
              </motion.button>
            </motion.figure>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={closePreview}
          role="dialog"
          aria-modal="true"
          aria-label={t('foodGallery.previewAria')}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded-full p-2 text-white transition-colors hover:bg-white/10"
            onClick={closePreview}
            aria-label={t('foodGallery.closePreview')}
          >
            <X className="h-8 w-8" />
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousPreview();
            }}
            aria-label={t('foodGallery.previousImage')}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            onClick={(event) => {
              event.stopPropagation();
              showNextPreview();
            }}
            aria-label={t('foodGallery.nextImage')}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#201712] p-4 shadow-2xl md:p-6"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => handleSwipeStart(event.touches[0].clientX)}
            onTouchMove={(event) => handleSwipeMove(event.touches[0].clientX)}
            onTouchEnd={() => handleSwipeEnd(showNextPreview, showPreviousPreview)}
          >
            <img
              src={galleryImages[selectedIndex].src}
              alt={t(galleryImages[selectedIndex].altKey)}
              className="max-h-[72vh] w-full object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 flex items-center justify-between gap-4 text-white">
              <p className="text-lg font-bold uppercase tracking-wide md:text-2xl">
                {t(galleryImages[selectedIndex].altKey)}
              </p>
              <p className="shrink-0 text-sm font-medium text-white/70">
                {selectedIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}