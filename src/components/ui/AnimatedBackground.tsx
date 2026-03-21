import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#09090b]">
      {/* 
        FLUID MESH GRADIENT BLOBS 
        Inspired by the premium Dribbble reference (Way Stars vibe).
        No grids. Just massive, smooth, overlapping colorful blurorbs.
      */}

      {/* Blob 1: Deep Indigo / Purple (Left side) */}
      <motion.div
        className="absolute left-[-10%] top-[-10%] h-[120vh] w-[80vw] rounded-full blur-[160px]"
        style={{ background: 'radial-gradient(circle, rgba(67, 19, 181, 0.3) 0%, rgba(67, 19, 181, 0.1) 40%, transparent 70%)' }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut"
        }}
      />

      {/* Blob 2: Warm Gold / Orange (Right center) */}
      <motion.div
        className="absolute right-[-5%] top-[10%] h-[100vh] w-[70vw] rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(232, 120, 52, 0.2) 0%, rgba(220, 80, 20, 0.1) 50%, transparent 70%)' }}
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 70, -30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "easeInOut"
        }}
      />

      {/* Blob 3: Deep Blue (Bottom left) */}
      <motion.div
        className="absolute bottom-[-20%] left-[10%] h-[80vh] w-[90vw] rounded-[100%] blur-[180px]"
        style={{ background: 'radial-gradient(ellipse, rgba(20, 40, 150, 0.25) 0%, transparent 60%)' }}
        animate={{
          x: [0, 40, -50, 0],
          y: [0, -30, 60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Noise Texture Overlay to bind the gradients nicely */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.03] mix-blend-overlay pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
      
      {/* Vignette Overlay (darkens edges) */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.6)_100%)] pointer-events-none" />
    </div>
  );
};
