import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, Sparkles, Star } from 'lucide-react';

export interface CarouselSlide {
  id?: string;
  url: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  price?: string;
  originalPrice?: string;
  rating?: number;
  reviewCount?: number;
}

interface ImageCarouselProps {
  slides: (string | CarouselSlide)[];
  autoPlay?: boolean;
  interval?: number;
  showThumbnails?: boolean;
  showDots?: boolean;
  showControls?: boolean;
  showOverlayInfo?: boolean;
  containerClassName?: string;
  imageClassName?: string;
  onSlideClick?: (index: number, slide: CarouselSlide) => void;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  slides,
  autoPlay = false,
  interval = 4000,
  showThumbnails = true,
  showDots = true,
  showControls = true,
  showOverlayInfo = false,
  containerClassName = 'h-[460px] sm:h-[540px]',
  imageClassName = 'object-cover w-full h-full',
  onSlideClick,
}) => {
  const normalizedSlides: CarouselSlide[] = slides.map((s, idx) => {
    if (typeof s === 'string') {
      return { id: `slide-${idx}`, url: s, alt: `Slide ${idx + 1}` };
    }
    return s;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % normalizedSlides.length);
  }, [normalizedSlides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + normalizedSlides.length) % normalizedSlides.length);
  }, [normalizedSlides.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPlaying || normalizedSlides.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, nextSlide, normalizedSlides.length]);

  if (normalizedSlides.length === 0) return null;

  const currentSlide = normalizedSlides[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <div className="relative group/carousel w-full select-none">
      {/* Main Image Viewport */}
      <div
        className={`relative overflow-hidden rounded-2xl bg-[#1C281E] border border-[#E0D8CC] shadow-xl ${containerClassName}`}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full cursor-pointer"
            onClick={() => onSlideClick && onSlideClick(currentIndex, currentSlide)}
          >
            <img
              src={currentSlide.url}
              alt={currentSlide.alt || `Plantiqa botanical foliage - Slide ${currentIndex + 1}`}
              referrerPolicy="no-referrer"
              className={`${imageClassName}`}
            />
            {/* Subtle Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Top Badges & Utility Controls */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          {/* Badge */}
          {currentSlide.badge ? (
            <div className="bg-[#2C3B2E]/90 text-emerald-300 backdrop-blur-md text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-emerald-500/30 flex items-center gap-1.5 pointer-events-auto">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentSlide.badge}</span>
            </div>
          ) : (
            <div className="bg-white/90 text-[#1C281E] backdrop-blur-md text-xs font-bold px-3 py-1.5 rounded-full shadow-md border border-white/50 flex items-center gap-1.5 pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{currentIndex + 1} / {normalizedSlides.length} Images</span>
            </div>
          )}

          {/* Utility Action Buttons */}
          <div className="flex items-center gap-2 pointer-events-auto">
            {/* AutoPlay Toggle */}
            {autoPlay && normalizedSlides.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(!isPlaying);
                }}
                className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors cursor-pointer"
                title={isPlaying ? 'Pause Auto-Play' : 'Start Auto-Play'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-emerald-300" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            )}

            {/* Expand Fullscreen */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFullscreen(true);
              }}
              className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors cursor-pointer"
              title="Expand Full View"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Overlay Title / Price Info Card if enabled */}
        {showOverlayInfo && (currentSlide.title || currentSlide.price) && (
          <div
            onClick={(e) => {
              if (onSlideClick) {
                e.stopPropagation();
                onSlideClick(currentIndex, currentSlide);
              }
            }}
            className="absolute bottom-4 left-4 right-4 bg-white/95 hover:bg-white backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/70 z-10 transition-transform hover:scale-[1.01] cursor-pointer"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                {currentSlide.rating && (
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold mb-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{currentSlide.rating}</span>
                    {currentSlide.reviewCount && (
                      <span className="text-gray-500 text-[11px] font-normal ml-1">
                        ({currentSlide.reviewCount} Reviews)
                      </span>
                    )}
                  </div>
                )}
                {currentSlide.title && (
                  <h4 className="text-sm font-bold text-[#1C281E] leading-snug">{currentSlide.title}</h4>
                )}
                {currentSlide.subtitle && (
                  <p className="text-xs text-[#5C6E5E]">{currentSlide.subtitle}</p>
                )}
              </div>

              {currentSlide.price && (
                <div className="text-right whitespace-nowrap">
                  {currentSlide.originalPrice && (
                    <span className="text-xs text-gray-400 line-through block">
                      {currentSlide.originalPrice}
                    </span>
                  )}
                  <span className="text-base font-serif font-bold text-[#2C3B2E]">
                    {currentSlide.price}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Previous / Next Arrow Controls */}
        {showControls && normalizedSlides.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1C281E] shadow-lg backdrop-blur-md flex items-center justify-center transition-all opacity-80 group-hover/carousel:opacity-100 hover:scale-110 cursor-pointer z-10"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1C281E] shadow-lg backdrop-blur-md flex items-center justify-center transition-all opacity-80 group-hover/carousel:opacity-100 hover:scale-110 cursor-pointer z-10"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Dots Pagination */}
        {showDots && normalizedSlides.length > 1 && !showOverlayInfo && (
          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 z-10 pointer-events-none">
            {normalizedSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(idx);
                }}
                className={`h-2 rounded-full transition-all cursor-pointer pointer-events-auto ${
                  currentIndex === idx ? 'w-6 bg-white shadow-md' : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails Navigation Strip */}
      {showThumbnails && normalizedSlides.length > 1 && (
        <div className="flex items-center gap-2.5 mt-3 overflow-x-auto pb-1 scrollbar-none px-1">
          {normalizedSlides.map((slide, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  isActive
                    ? 'border-[#2C3B2E] ring-2 ring-[#2C3B2E]/30 scale-105 shadow-md'
                    : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400'
                }`}
              >
                <img
                  src={slide.url}
                  alt={slide.alt ? `${slide.alt} thumbnail preview` : `Botanical thumbnail preview ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {isActive && (
                  <div className="absolute inset-0 bg-emerald-900/10 border-2 border-emerald-600 rounded-lg pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center">
            <img
              src={currentSlide.url}
              alt={currentSlide.alt ? `${currentSlide.alt} - High-resolution fullscreen view` : 'High-resolution fullscreen artificial plant preview'}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />

            {normalizedSlides.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Caption */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-white/20">
              {currentSlide.title || currentSlide.alt || `Image ${currentIndex + 1} of ${normalizedSlides.length}`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
