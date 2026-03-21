import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#09090b]">
      {/* Heavy Cyber Grid - Slowly moving upwards */}
      <motion.div 
        className="absolute inset-[-100%] opacity-[0.08]" 
        animate={{ 
          y: [0, -50],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 20, 
          ease: "linear" 
        }}
        style={{ 
          backgroundImage: `linear-gradient(to right, hsl(var(--neon-cyan)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--neon-cyan)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)'
        }} 
      />

      {/* Primary Cyan Orb - Follows mouse slightly and floats */}
      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.15) 0%, transparent 70%)' }}
        animate={{
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
          scale: [1, 1.2, 1],
        }}
        transition={{
          scale: { repeat: Infinity, duration: 8, ease: "easeInOut" },
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 }
        }}
      />

      {/* Secondary Purple Orb - Opposite corner, breathes */}
      <motion.div
        className="absolute bottom-0 right-0 h-[800px] w-[800px] rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, hsl(var(--neon-purple) / 0.12) 0%, transparent 70%)' }}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -50, -100, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear"
        }}
      />

      {/* Deep dark gradient overlay to ensure text is readable always */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      
      {/* Noise filter for texture (Nano Banana style) */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
    </div>
  );
};
