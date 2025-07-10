import React from 'react'

export const Title = ({title, subTitle, icon}) => {
    return (
        <span className='flex flex-col items-center my-10'>
            <p className='text-2xl font-bold'>{title}</p>
            <p className='flex items-center gap-x-2 text-xs'>{icon}{subTitle}</p>
        </span>
    )
}
