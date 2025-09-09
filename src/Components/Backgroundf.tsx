import React, { useState } from 'react'
import { useToggle } from '../Context/ToggleProvider'

function Backgrounf() {
//     const [Darkbackground, setDarkBackground] = useState(true)
//   const [textColor, setTextColor] = useState(true)
//   const bgtoggle =() =>{
//     setDarkBackground(!Darkbackground)
//     setTextColor(!textColor)
//   }
const { Darkbackground, textColor} = useToggle()


return (
<>
<div className='relative w-full h-screen'>
<div className={`absolute h-screen w-full transition-colors duration-500 ease-in-out ${
Darkbackground
? "bg-gradient-to-tr from-zinc-800 to-zinc-900"
: "bg-white "
}`}>
<div className={`absolute top-1/2 left-1/2 h-auto transform -translate-x-[50%] -translate-y-[50%] flex ${textColor ? 'bg-gradient-to-tr from-zinc-950 to-zinc-900 bg-clip-text text-transparent ' : 'text-zinc-500'} text-[13vw] leading-none tracking-tighter font-sans font-semibold`}>
<h1 style={{fontFamily:"samarkan"}}>Adetia
</h1>

</div>
</div>
</div>
</>
)
}

export default Backgrounf