import { FaFolder, FaFolderOpen } from "react-icons/fa"
import { useFolder } from "../Context/ProjectProvider"


function Project() {
    const {Open , OpenToggle} = useFolder()
  return (
    <div className='h-full w-full flex flex-col'>
        <div className='border-b-3 border-zinc-300'>

            <h1 className='text-lg font-mono uppercase py-2.5 px-7 tracking-tight'>Projects</h1>

        </div>
        <div className='h-[10%] p-6'>
             
        </div>
        <div className="flex flex-row py-7 h-full px-5 bg-zinc-100">
            <p onClick={OpenToggle} className='text-5xl font-mono p-2 leading-6 text-justify'>
                {Open ? <FaFolder className="text-zinc-600/85 transform transition-transform delay-60 duration-200 hover:-translate-y-1 hover:-translate-x-1"/> : <FaFolderOpen className="text-zinc-600/85 transform transition-transform delay-60 duration-200 hover:-translate-y-1 hover:-translate-x-1"/>}
            </p>
<p onClick={OpenToggle} className='text-5xl font-mono p-2 leading-6 text-justify'>
                {Open ? <FaFolder className="text-zinc-600/85 transform transition-transform delay-60 duration-200 hover:-translate-y-1 hover:-translate-x-1"/> : <FaFolderOpen className="text-zinc-600/85 transform transition-transform delay-60 duration-200 hover:-translate-y-1 hover:-translate-x-1"/>}
            </p>
            <p onClick={OpenToggle} className='text-5xl font-mono p-2 leading-6 text-justify'>
                {Open ? <FaFolder className="text-zinc-600/85 transform transition-transform delay-60 duration-200 hover:-translate-y-1 hover:-translate-x-1"/> : <FaFolderOpen className="text-zinc-600/85 transform transition-transform delay-60 duration-200 hover:-translate-y-1 hover:-translate-x-1"/>}
            </p>

            
            
        </div>

    </div>
  )
}

export default Project