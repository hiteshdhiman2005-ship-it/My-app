import React, { useState, useRef } from 'react';
import { ZoomIn } from 'lucide-react';

interface ZoomImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  zoomScale?: number;
  showBadge?: boolean;
}

export const ZoomImage: React.FC<ZoomImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  zoomScale = 2.2,
  showBadge = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [imgSrc, setImgSrc] = useState(src);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync state if src prop changes
  React.useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  const handleImgError = () => {
    setImgSrc('https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=95');
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden cursor-crosshair group ${containerClassName}`}
    >
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={handleImgError}
        style={{
          transformOrigin: `${origin.x}% ${origin.y}%`,
          transform: isHovered ? `scale(${zoomScale})` : 'scale(1)',
          transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.5s ease-out, transform-origin 0.3s ease-out',
        }}
        className={`w-full h-full object-cover select-none pointer-events-none ${className}`}
      />

      {/* Magnifier indicator badge on hover */}
      {showBadge && (
        <div
          className={`absolute bottom-3 left-3 bg-black/65 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-all duration-300 pointer-events-none z-10 ${
            isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-1'
          }`}
        >
          <ZoomIn className="w-3 h-3 text-emerald-300 animate-pulse" />
          <span>Magnifying {Math.round(zoomScale * 100)}%</span>
        </div>
      )}
    </div>
  );
};
