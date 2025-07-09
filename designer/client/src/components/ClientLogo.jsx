import React from 'react'

const ClientLogo = ({icon, text}) => {
    return (
        <div className='flex items-center space-x-2 text-2xl font-bold text-neutral-300 '>
            <span className="text-5xl">{icon}</span>
            <span>{text}</span>
        </div>
    )
}

export default ClientLogo