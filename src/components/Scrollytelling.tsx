import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'motion/react';

const FRAME_COUNT = 120;

export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Preload images (or fallback if they don't exist)
  useEffect(() => {
    let loaded = 0;
    const loadedImages: HTMLImageElement[] = [];
    let hasError = false;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Expecting images in /public/sequence/frame_0.webp to frame_119.webp
      img.src = `/sequence/frame_${i}.webp`;
      
      img.onload = () => {
        loaded++;
        loadedImages[i] = img;
        setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100));
        if (loaded === FRAME_COUNT) {
          setImages(loadedImages);
          setLoading(false);
        }
      };
      
      img.onerror = () => {
        hasError = true;
        // If images aren't found, we finish loading immediately to show the procedural fallback
        if (i === FRAME_COUNT - 1) {
          setLoading(false);
        }
      };
    }

    // Safety timeout
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  // Canvas Drawing Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawFallback = (progress: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.25;
      
      // Explosion and rotation math
      const explosion = 1 + Math.pow(progress, 2) * 4;
      const rotation = progress * Math.PI * 2;

      // Draw procedural particle sphere
      for (let i = 0; i < 400; i++) {
        const seed = i * 137.5;
        const theta = seed * Math.PI / 180;
        const phi = Math.acos(1 - 2 * ((i + 0.5) / 400));
        
        let x = Math.sin(phi) * Math.cos(theta);
        let y = Math.sin(phi) * Math.sin(theta);
        let z = Math.cos(phi);

        // Rotate Y
        const rx = x * Math.cos(rotation) - z * Math.sin(rotation);
        const rz = x * Math.sin(rotation) + z * Math.cos(rotation);
        x = rx; z = rz;

        // Rotate X
        const ry = y * Math.cos(rotation * 0.5) - z * Math.sin(rotation * 0.5);
        y = ry;

        // Project 3D to 2D
        const scale = 400 / (400 + z * baseRadius * explosion);
        const px = cx + x * baseRadius * explosion * scale;
        const py = cy + y * baseRadius * explosion * scale;

        const size = Math.max(0.5, (2 * scale) * (1 - progress * 0.3));
        const alpha = Math.max(0, 1 - progress * 0.9);

        // Caribbean theme colors based on index
        const colors = [
          `rgba(255, 100, 0, ${alpha})`,   // Orange
          `rgba(255, 0, 0, ${alpha})`,     // Red
          `rgba(255, 200, 0, ${alpha})`,   // Yellow
          `rgba(255, 255, 255, ${alpha})`  // White
        ];
        const color = colors[i % colors.length];

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Core connection lines
        if (i % 5 === 0 && progress < 0.8) {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(px, py);
          ctx.strokeStyle = `rgba(255, 100, 0, ${alpha * 0.1})`; // Subtle orange lines
          ctx.stroke();
        }
      }
    };

    const render = (latest: number) => {
      const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(latest * FRAME_COUNT));
      
      if (images.length === FRAME_COUNT && images[frameIndex]) {
        // Draw actual image sequence if uploaded
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const img = images[frameIndex];
        
        // Calculate "contain" scaling
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      } else {
        // Draw procedural fallback
        drawFallback(latest);
      }
    };

    const unsubscribe = smoothProgress.on("change", render);
    
    // Initial render
    render(smoothProgress.get());

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      unsubscribe();
    };
  }, [smoothProgress, images]);

  // --- SCROLLYTELLING BEATS (Text Overlays) ---
  
  // Beat A: 0 - 20%
  const opacityA = useTransform(smoothProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const yA = useTransform(smoothProgress, [0, 0.05, 0.15, 0.2], [40, 0, 0, -40]);

  // Beat B: 25 - 45%
  const opacityB = useTransform(smoothProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const yB = useTransform(smoothProgress, [0.25, 0.3, 0.4, 0.45], [40, 0, 0, -40]);

  // Beat C: 50 - 70%
  const opacityC = useTransform(smoothProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const yC = useTransform(smoothProgress, [0.5, 0.55, 0.65, 0.7], [40, 0, 0, -40]);

  // Beat D: 75 - 95%
  const opacityD = useTransform(smoothProgress, [0.75, 0.8, 0.9, 0.95], [0, 1, 1, 0]);
  const yD = useTransform(smoothProgress, [0.75, 0.8, 0.9, 0.95], [40, 0, 0, -40]);

  // Scroll indicator fade
  const opacityScroll = useTransform(smoothProgress, [0, 0.05], [1, 0]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white"
          >
            <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="text-white/60 text-sm tracking-widest uppercase font-medium">Loading Experience</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={containerRef} className="relative w-full bg-[#050505]" style={{ height: '400vh' }}>
        
        {/* Sticky Canvas Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          {/* Background Image for Hero Section (Beat A) */}
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ 
              opacity: useTransform(smoothProgress, [0, 0.2, 0.25], [1, 1, 0]),
              backgroundImage: 'url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </motion.div>

          <canvas 
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-10"
          />
          
          {/* Overlay Gradients for seamless blending if needed */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_40px_#050505] z-20"></div>

          {/* Scroll Indicator */}
          <motion.div 
            style={{ opacity: opacityScroll }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 z-30"
          >
            <span className="text-xs uppercase tracking-[0.2em] mb-2">Scroll to Explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          </motion.div>

          {/* Beat A */}
          <motion.div 
            style={{ opacity: opacityA, y: yA }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none z-30"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/90 tracking-tighter mb-4">
              JANETTE'S
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light tracking-wide">
              Authentic Spicy Caribbean Food
            </p>
          </motion.div>

          {/* Beat B */}
          <motion.div 
            style={{ opacity: opacityB, y: yB }}
            className="absolute inset-0 flex flex-col justify-center px-8 md:px-24 lg:px-32 pointer-events-none z-30"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white/90 tracking-tight mb-4 max-w-3xl">
              AUTHENTIC<br />FLAVORS
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-xl font-light">
              Experience the true taste of the Caribbean. Every dish is prepared with passion, using traditional recipes and the freshest ingredients.
            </p>
          </motion.div>

          {/* Beat C */}
          <motion.div 
            style={{ opacity: opacityC, y: yC }}
            className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:px-24 lg:px-32 pointer-events-none z-30"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white/90 tracking-tight mb-4 max-w-3xl">
              SPICE IT<br />UP
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-xl font-light">
              From our signature jerk chicken to mouth-watering curries, we bring the heat and soul of island cooking straight to your plate.
            </p>
          </motion.div>

          {/* Beat D */}
          <motion.div 
            style={{ opacity: opacityD, y: yD }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none z-30"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white/90 tracking-tight mb-8">
              ORDER TAKEOUT
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl font-light mb-12">
              Craving something delicious? Call us now to place your order and enjoy a taste of the Caribbean at home.
            </p>
            <a href="tel:5146834741" className="pointer-events-auto px-8 py-4 bg-orange-600 text-white rounded-full font-medium tracking-wide hover:bg-orange-700 hover:scale-105 transition-all">
              (514) 683-4741
            </a>
          </motion.div>

        </div>
      </div>
    </>
  );
}
