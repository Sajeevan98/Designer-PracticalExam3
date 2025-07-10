import { FaComments } from "react-icons/fa";

export const News = ({img, name, position, count, text, date, month }) => {
    return (
        <div className='group flex md:flex-row flex-col justify-start items-center md:h-[38vh] w-full relative bg-neutral-200 hover:bg-cyan-400 hover:text-white transition-colors hover:cursor-pointer duration-300'>
           
            <img src={img} alt="news_image" className='h-full md:w-1/2 object-cover' />

            <div className='space-y-4 p-10 h-full md:w-1/2 flex flex-col justify-center z-10'>
                <h1 className='font-semibold text-base'>{name}</h1>
                <span className='flex space-x-4 items-center'>
                    <p className='font-semibold text-xs'>{position}</p>
                    <p><FaComments className='text-xs text-cyan-400 group-hover:text-white transition-colors duration-300' /></p>
                    <p className='font-semibold text-xs'>{count}</p>
                </span>
                <p className='font-extralight text-xs text-justify'>{text} </p>
            </div>
            <div className='absolute top-0 left-0 w-16 h-16 bg-gray-800 opacity-80 text-white p-2 group-hover:bg-cyan-400 transition-colors duration-300 z-20'>
                <p className='text-2xl font-bold text-center'>{date}</p>
                <p className='text-sm font-medium text-center leading-2'>{month}</p>
            </div>
        </div>
    )
}
