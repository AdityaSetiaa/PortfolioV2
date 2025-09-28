
import { motion, useMotionValue, animate } from "motion/react";
import { socials } from "../assets/Assets"

export default function Socials() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  return (
    <motion.div 
     drag
            style={{ x, y,position: 'relative', zIndex: 10  }}
            dragElastic={0}
            dragMomentum={false}
            whileTap={{ cursor: "grabbing" }}
            onDragEnd={() => {
              animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
              animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
            }} className='h-full w-auto flex flex-col adi '>
      <div>
        <div className="grid grid-cols-4 lg:grid-cols-2 lg:grid-rows-2 gap-4 px-6 py-4">
          {socials.map((tool) => (
    <motion.div  drag
            style={{ x, y,position: 'relative', zIndex: 10  }}
            dragElastic={0}
            dragMomentum={false}
            whileTap={{ cursor: "grabbing" }}
            onDragEnd={() => {
              animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
              animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
            }} className="border border-zinc-700 adi relative h-15 w-15 ">
      <div  
      className="group relative border h-14 w-14 adi border-zinc-700/50 rounded bg-zinc-900/50 backdrop-blur-sm shadow-lg transition-all duration-200  flex items-center justify-center p-2 hover:scale-110" 
      key={tool.name}
    >
      <img src={tool.icon} draggable={false}
  onDragStart={(e) => e.preventDefault()}  alt={tool.name} className="w-12 bg-white adi h-12 transition-transform duration-200 group-hover:scale-110" />
      
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-200 whitespace-nowrap opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-1">
        {tool.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-700"></div>
      </div>
    </div>
    </motion.div>
  ))}
        </div>
      </div>

    </motion.div>
  )
}
