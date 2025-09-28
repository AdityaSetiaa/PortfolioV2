import {useToggle } from '../Context/ToggleProvider'
import { FaMoon, FaSun } from 'react-icons/fa6';



function ToggleButton() {
  const {Darkbackground, bgtoggle } = useToggle()

  return (
    <button onClick={bgtoggle} >
      {Darkbackground ?  <FaMoon className='mr-2 text-2xl text-white inline-block rotate-240'/> : <FaSun className='mr-2 text-2xl text-black inline-block rotate-240'/> }
    </button>
  )
}

export default ToggleButton