import React,{useState} from 'react'

const Question = () => {
    const [count,setcount] = useState(10)

 const inc =()=>{
  setcount((preval)=> preval+1)
  setcount((preval)=> preval+1)
  // setcount(count+1)
  // setcount(count+1)
  // setcount(count+1)
 }
  return (
    <div>
      <button onClick={inc}>inc</button>
    {count}
    <button >dec</button>
    </div>
  )
}

export default Question
