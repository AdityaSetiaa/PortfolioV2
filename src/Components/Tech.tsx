import { Languages, Frameworks, Databases } from "../assets/Assets"; 
import { motion, useMotionValue, animate } from "framer-motion"; 
import { useState, useEffect } from "react";

function Tech() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isWideScreen = window.innerWidth > 768;
      setIsDesktop(isWideScreen && !hasTouch);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const motionProps = isDesktop ? {
    drag: true,
    style: { x, y, position: 'relative' as const, zIndex: 10 },
    dragElastic: 0,
    dragMomentum: false,
    whileTap: { cursor: "grabbing" },
    onDragEnd: () => {
      animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
      animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
    }
  } : {
    style: { position: 'relative' as const, zIndex: 10 }
  };

  return (
    <motion.div  
      {...motionProps}
      className='h-full w-full flex flex-col adi border border-zinc-900 gap-4 shadow-[inset_9px_9px_60px_rgba(255,255,255,0.05),inset_-9px_-9px_60px_rgba(0,0,0,0.6)]'
    >
      <div className="flex flex-col adi border-zinc-900 gap-4">
        <h1 className="text-5xl font-bold text-white py-4 px-6 tracking-tighter uppercase">Tech Stack</h1>
      </div>
      
      <div>
        <div>
          <h2 className="text-xl/1 font-extralight text-white py-2 px-6 tracking-tighter uppercase">Languages</h2>
          <div className="flex flex-row flex-wrap gap-2 px-6 py-4">
            {Languages.map((lang) => (
              <div 
                key={lang.name} 
                className="group relative overflow-hidden rounded border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-800/60 hover:scale-105"
              >
                <span className="block px-2 py-1 text-xs font-medium text-zinc-200 transition-colors duration-200 group-hover:text-white">
                  {lang.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl/1 font-extralight text-white py-2 px-6 tracking-tighter uppercase">Frameworks</h2>
          <div className="flex flex-row flex-wrap gap-2 px-6 py-4">
            {Frameworks.map((framework) => (
              <div 
                key={framework.name} 
                className="group relative overflow-hidden rounded border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-800/60 hover:scale-105"
              >
                <span className="block px-2 py-1 text-xs font-medium text-zinc-200 transition-colors duration-200 group-hover:text-white">
                  {framework.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl/1 font-extralight text-white py-2 px-6 tracking-tighter uppercase">Databases</h2>
          <div className="flex flex-row flex-wrap gap-2 px-6 py-4">
            {Databases.map((db) => (
              <div 
                key={db.name} 
                className="group relative overflow-hidden rounded border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-800/60 hover:scale-105"
              >
                <span className="block px-2 py-1 text-xs font-medium text-zinc-200 transition-colors duration-200 group-hover:text-white">
                  {db.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Tech