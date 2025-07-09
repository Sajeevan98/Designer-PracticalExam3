import React from 'react'

const Stats = ({number, string1, string2}) => {
    return (
        <div className="relative flex flex-col items-center text-center">
            <span className="text-[60px] md:text-8xl font-extrabold text-white text-shadow-lg text-shadow-gray-200 z-0 select-none opacity-90">
                {number}
            </span>
            <span className="absolute text-xl md:text-4xl font-bold text-blue-950 z-10 flex items-center gap-2.5 top-1/2 -translate-y-1/2">
                {number} <span className="font-semibold text-blue-950 text-xs md:text-base"><p>{string1}</p><p>{string2}</p></span>
            </span>
        </div>
    )
}

export default Stats