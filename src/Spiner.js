import React from 'react'
import { BiHeading } from "react-icons/bi";

function Spiner() {
  return (
    <div  className='animate-pulse absolute top-[50%] left-[50%] m-auto' ><BiHeading className=' pl-4 text-4xl font-extrabold'/>Loading..</div>
  )
}

export default Spiner