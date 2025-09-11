import {useToggle } from '../Context/ToggleProvider'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";



function ToggleButton() {
  const {Darkbackground, bgtoggle } = useToggle()

  return (
    <button onClick={bgtoggle} className={`p-2 rounded-full border-2 border-zinc-400/50 backdrop-blur-sm hover:scale-110 duration-300 ease-in-out ${Darkbackground ? 'bg-zinc-700/30 text-2xl hover:bg-zinc-600/50' : 'bg-white/30 hover:bg-white/50'}`}>
      {Darkbackground ? <CiLight className='text-white' /> : <MdDarkMode className='text-black h-[5%]' />}
    </button>
  )
}

export default ToggleButton