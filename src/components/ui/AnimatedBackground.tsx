import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050B14]">
      {/* 
        FLUID MESH GRADIENT BLOBS - VIBRANT ROYAL NAVY
        Using rich saturated blues, sapphire, and electric cyan pops.
      */}

      {/* Blob 1: Vibrant Royal Blue (Left side) */}
      <motion.div
        className="absolute left-[-10%] top-[-10%] h-[120vh] w-[80vw] rounded-full blur-[160px]"
        style={{ background: 'radial-gradient(circle, rgba(38, 115, 255, 0.3) 0%, rgba(38, 115, 255, 0.1) 40%, transparent 70%)' }}
        animate={{
          x: [0, 50, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut"
        }}
      />

      {/* Blob 2: Deep Sapphire / Navy (Right center) */}
      <motion.div
        className="absolute right-[-5%] top-[10%] h-[100vh] w-[70vw] rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(15, 45, 120, 0.5) 0%, rgba(15, 45, 120, 0.15) 50%, transparent 70%)' }}
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 50, -20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "easeInOut"
        }}
      />

      {/* Blob 3: Electric Cyan (Bottom left accent) */}
      <motion.div
        className="absolute bottom-[-20%] left-[10%] h-[80vh] w-[90vw] rounded-[100%] blur-[180px]"
        style={{ background: 'radial-gradient(ellipse, rgba(0, 204, 255, 0.15) 0%, transparent 60%)' }}
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -20, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Noise Texture Overlay to bind the gradients nicely */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.04] mix-blend-overlay pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
      
      {/* Vignette Overlay (darkens edges) */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,11,20,0.8)_100%)] pointer-events-none" />
    </div>
  );
};
