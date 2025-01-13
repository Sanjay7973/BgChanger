import React, { useState } from 'react'
import './BgChanger.css'
const BgChanger = () => {
 const [color,setcolor] = useState('olive')
 const BgChanger = (val)=>{
  setcolor(val)
 }
  return (
    <div style={{background:color}} className='h-screen'>
      <button className='outline-none mt-8 ms-4 px-4 py-1 w-28 h-12 bg-red-500' onClick={()=>BgChanger('red')}>
       red
      </button>
      <button className='outline-none mt-8 ms-4 px-4 py-1 w-28 h-12 bg-orange-500' onClick={()=>BgChanger('orange')}>
       orange
      </button>
      <button className='outline-none mt-8 ms-4 px-4 py-1 w-28 h-12 bg-blue-500' onClick={()=>BgChanger('blue')}>
       red
      </button>
      <button className='outline-none mt-8 ms-4 px-4 py-1 w-28 h-12 bg-purple-500' onClick={()=>BgChanger('purple')}>
      purple
      </button>
      <button className='outline-none mt-8 ms-4 px-4 py-1 w-28 h-12 bg-green-500' onClick={()=>BgChanger('green')}>
       green
      </button>
      <button className='outline-none mt-8 ms-4 px-4 py-1 w-28 h-12 bg-yellow-500' onClick={()=>BgChanger('yellow')}>
      yellow
      </button>
    </div>
  )
}

export default BgChanger
