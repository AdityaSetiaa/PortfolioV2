import { useToggle } from '../Context/ToggleProvider'

function Background() {

const { Darkbackground, textColor } = useToggle()


return (
<div className='fixed z-[2] w-full h-screen'>
<div className={`absolute h-screen w-full transition-colors duration-500 ease-in-out ${
Darkbackground
? "bg-gradient-to-tr from-zinc-950/98 to-black" :  "bg-white " 
}`}> 
<div className={`absolute top-1/2 left-1/2 h-auto transform -translate-x-[50%] -translate-y-[50%] flex ${textColor ? 'bg-gradient-to-tr from-zinc-950 to-zinc-900 bg-clip-text text-transparent ' : 'text-zinc-500'} text-[13vw] leading-[1.2]] tracking-normal font-sans font-semibold`}>
<h1 className='sama'>Aditya
</h1>

</div>
</div>
</div>
)
}

export default Background