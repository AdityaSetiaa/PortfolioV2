import ToggleButton from './Components/ToggleButton'


import './App.css'
import Backgrounf from './Components/Backgroundf'
import Foreground from './Components/Foreground'

function App() {

  
  return (
    <>
     <div className='relative w-full h-screen'>
     <Backgrounf/>
     <Foreground/>
      <div className='absolute z-[4] top-5 right-5'>
      <ToggleButton/>
      </div>
     
      </div> 
    </>
  )
}

export default App