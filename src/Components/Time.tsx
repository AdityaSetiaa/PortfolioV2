import { motion, useMotionValue, animate } from "framer-motion";
import { useState, useEffect } from "react";

function Time() {
  const date = new Date();
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const today = date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  
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
      className="h-full w-full flex flex-col adi border border-zinc-800"
    >
      <div className="h-full w-full flex flex-col items-center justify-center gap-2 p-4 adi my-2">
        <div className="flex flex-row gap-4 items-center">
          <h1 className="text-zinc-200 text-3xl">{time}</h1>
        </div>
        <h2 className="text-zinc-400 text-sm">
          {day}, {today}
        </h2>
      </div>
    </motion.div>
  );
}

export default Time;