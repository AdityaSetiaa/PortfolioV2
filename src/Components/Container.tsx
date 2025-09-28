import Tech from "./Tech";
import Time from "./Time";
import Tools from "./Tools";
import About from "./About";
import { useToggle } from "../Context/ToggleProvider";
import { motion, useMotionValue, animate } from "motion/react";
import { useRef } from "react";
import NewsTrends from "./CoolSideThing";
import Socials from "./Socials";

function Container() {
  const { Darkbackground } = useToggle();
  const parentRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div
      className={`w-full sm:w-160 md:w-180 lg:w-260 mx-auto md:py-2 lg:py-3  ${
        Darkbackground
          ? "text-zinc-950"
          : "bg-gradient-to-tr from-zinc-950 to-zinc-900 bg-clip-text text-transparent"
      }`}
    >
      <div
 className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-4 h-full">
        <div className="h-full flex flex-col gap-4">
           <div
           
            className="flex-[7] flex transform transition-all delay-75 duration-300 adi border border-zinc-800"
          >
            <motion.div  drag
            style={{ x, y,position: 'relative', zIndex: 10  }}
            dragElastic={0}
            dragConstraints={parentRef}
            dragMomentum={false}
            whileTap={{ cursor: "grabbing" }}
            onDragEnd={() => {
              animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
              animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
            }} className="w-full h-full flex items-center p-2 justify-center adi ">
              <Tech />
            </motion.div>
          </div>

          <div 
            className={`flex-[3] flex transform transition-all delay-75 duration-300`}
          >
            <h1 className="text-white text-4xl md:text-7xl md:text-center sm:text-center px-8 lg:text-left p-1 tracking-tighter font-bold uppercase items-center justify-center font-mono leading-none md:justify-center w-full h-full">
              Tools I use
            </h1>
          </div>
        </div>

        <div className="h-full min-h-[96vh] grid grid-rows-6 gap-4">
          <div
            className={`row-span-2 border w-[100%] mx-auto h-full flex adi transition-all delay-60 duration-300 border-zinc-800`}
          ><About /></div>
          <div className="row-span-3 border w-[100%] mx-auto h-full flex items-center justify-center adi border-zinc-800 transition-all delay-60 duration-300">
            <div className="w-full h-full flex items-center justify-center adi p-1shadow-[inset_9px_9px_60px_rgba(255,255,255,0.05),inset_-9px_-9px_60px_rgba(0,0,0,0.6)]">
              
            </div>
          </div>

          <div className="row-span-1 border border-zinc-800 w-[100%] mx-auto h-full flex items-center justify-center adi transition-all delay-60 duration-300">
            <motion.div className="w-full h-full flex items-center justify-center shadow-[inset_9px_9px_60px_rgba(255,255,255,0.05),inset_-9px_-9px_60px_rgba(0,0,0,0.6)] adi">
              <Tools />
            </motion.div>
          </div>
        </div>

        <div className="md:h-[] lg:h-full md:col-span-2 lg:col-span-1">
          <div className="flex flex-col md:flex-row lg:flex-col gap-4 w-full h-full sm:order-1 md:order-2 lg:order-1">
            <div className="flex-1 adi flex items-center justify-center border sm:order-2 md:order-1 transform transition-all delay-60 duration-300 border-zinc-800"><NewsTrends/></div>
            {/*inner grid*/}
            <div className="flex-1 flex items-center justify-center lg:order-2">
              <div className="flex-col grid grid-rows-5 md:flex-row lg:flex-col gap-4 w-full h-full">
                <div className="flex-1 adi flex items-center justify-center border border-zinc-800 row-span-2 transform transition-all delay-60 duration-300">
                  <div className="w-full h-full flex items-center justify-center adi shadow-[inset_9px_9px_60px_rgba(255,255,255,0.05),inset_-9px_-9px_60px_rgba(0,0,0,0.6)]">
                    <Time />
                  </div>
                </div>
                <div className="flex-1 adi flex items-center justify-center border row-span-3 transform transition-all delay-60 duration-300 "><Socials/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
