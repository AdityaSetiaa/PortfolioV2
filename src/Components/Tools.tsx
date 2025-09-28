import  { DevTools }  from "../assets/Assets"
import { motion, useMotionValue, animate } from "framer-motion";

function Tools() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  return (
    

  <div className='h-full w-full flex flex-row justify-evenly items-center p-4 border border-zinc-800/50 gap-2 adi'>
  {DevTools.map((tool) => (
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
      <img src={tool.icon} draggable={false} // <--- stops the ghost drag
  onDragStart={(e) => e.preventDefault()}  alt={tool.name} className="w-12 p-1 h-12 transition-transform duration-200 group-hover:scale-110" />
      
      {/* Tooltip that appears on hover */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-200 whitespace-nowrap opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-1">
        {tool.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-700"></div>
      </div>
    </div>
    </motion.div>
  ))}
</div>
  )
 
}

export default Tools;
