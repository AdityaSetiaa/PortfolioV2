import pfp from "../assets/download.jpg"
import { motion, useMotionValue, animate } from "framer-motion";
import { useState, useEffect } from "react";

function About() {
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
  className="w-full flex flex-col border adi border-zinc-800"
>
  <div className="w-full flex flex-row m-3 gap-3 items-center">
    <img src={pfp} alt="Aditya" className="h-11 w-11 rounded-2xl flex-shrink-0"/>
    <div className="flex flex-col">
      <h1 className="text-zinc-200 text-xl tracking-tighter">@Aditya Setia</h1>
      <h1 className="text-zinc-400 text-sm">Web Developer</h1>
    </div>
  </div>
  
  <div className="w-full flex flex-col px-4 ">
    <p className="text-zinc-400 text-sm">
      Hey, I'm Aditya! I build cool, user-friendly web apps and stuff. 
      When I'm not coding, I'm exploring tech trends or working on personal projects.
    </p>
  </div>
  
  <div className="w-full flex flex-col p-2 justify-center text-zinc-400 font-extralight">
    <div className="flex items-center gap-2 px-4">
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></span>
      <h1 className="text-zinc-400 text-sm">open to work</h1>
    </div>
  </div>
</motion.div>
  );
}

export default About;