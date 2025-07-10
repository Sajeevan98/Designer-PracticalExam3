import React from 'react'
import { GiCargoCrate } from "react-icons/gi";

export const Logo = () => {
  return (
    <>
      <div className="flex flex-row">
        <p className='md:text-5xl text-3xl font-extrabold'>Cargo</p>
        <span className='flex flex-col items-center'>
          <GiCargoCrate className='md:text-5xl text-3xl text-yellow-500 bounce-slow'/>
          <p className='md:text-[10px] text-[8px] font-extrabold'>TONS</p>
        </span>
      </div>
    </>
  )
}
