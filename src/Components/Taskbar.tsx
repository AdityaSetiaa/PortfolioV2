import ToggleButton from "./ToggleButton"

function Taskbar() {
  return (
    <div className='relative w-full h-full flex items-end justify-center'> 
    <div className='w-2/3 h-1/16 bg-zinc-800/50 top-0 backdrop-blur-sm rounded-2xl border border- m-5 flex items-center justify-center hover:h-[10%] hover:w-[80%] hover:104 duration-300 ease-in-out shadow-lg '> 
    <div className=" hover:scale-110 duration-300 ease-in-out">
      <ToggleButton/>
    </div>
    
    </div>
    </div>
  )
}

export default Taskbar