import React from 'react';
import img1 from '../assets/img/supplier_2.jpg';
import img2 from '../assets/img/supplier_1.jpg';

const Welcome = () => {
    const clientsCount = "15,350 +";

    return (
        <>
            <section id="welcome" className="w-full bg-white py-10 my-32 flex md:flex-row flex-col justify-around">
                <div className="md:w-2/5 w-full md:order-1 order-2 justify-end">
                    <div className='relative flex flex-row'>
                        <img src={img2} alt='img_2' className='md:h-[39vh] md:w-[28vh] h-[25vh] w-[35%] translate-y-32 translate-x-10 z-20 opacity-90' />
                        <img src={img1} alt='img_1' className='md:h-[49vh] md:w-[45vh] h-[28vh] w-[65%] -translate-x-10 z-10 opacity-90' />

                        <div className="inline-flex items-center text-white absolute -bottom-16 right-0 z-30 ">
                            <div className="-mt-23 w-0 h-0 border-t-0 border-b-20 border-r-26 border-t-transparent border-b-transparent border-r-orange-500"></div>
                            <div className="bg-orange-500 px-5 py-8 font-semibold leading-tight text-center" >
                                <span className='text-xl font-medium text-white tracking-tighter'>{clientsCount}</span>
                                <br /> <span className='text-sm font-light text-white'>Clients Worldwide</span>
                            </div>
                        </div>
                        <div className="w-15 h-13 bg-cyan-900 transform skew-x-46 rotate-48 absolute md:bottom-5 -bottom-8 left-4 z-30"></div>
                        <div className="w-0 h-0 border-t-[38px] border-b-0 border-l-[38px] border-t-transparent border-b-transparent border-l-orange-500 absolute md:-bottom-7 -bottom-20 left-6 z-30"></div>
                    </div>
                </div>

                <div className="md:w-2/5 w-full py-11 px-10 flex flex-col items-start justify-center md:order-2 order-1">
                    <div className='relative'>
                        <h1 className='text-3xl font-semibold tracking-wider'>TransMax Logistics</h1>
                        <h1 className='text-3xl font-semibold  tracking-wider leading-14'>Arround <span className='text-orange-500'>the World</span></h1>
                        <div className="w-19 h-17 bg-gray-200 transform skew-x-42 rotate-48 opacity-55 absolute top-0 -left-10"></div>
                    </div>
                    <p className='mt-3.5 leading-6 font-medium text-sm'>
                        TransMax Logistics is a global leader in smart cargo solutions.
                        We specialize in international shipping, freight forwarding, and supply chain management.
                        Our mission is to move goods reliably, efficiently, and on time — every time.
                    </p>
                    <p className='mt-3.5 leading-6 font-extralight text-sm opacity-80'>
                        With operations spanning over 50 countries, we deliver seamless connectivity.
                        We're driven by technology, customer trust, and logistics innovation.
                        TransMax makes shipping simple and stress.
                    </p>
                    <button className='mt-8 text-xs font-semibold cursor-pointer bg-gray-200 py-4 px-5 text-blue-950 tracking-normal hover:bg-gray-300 rounded-sm'>MORE ABOUT US</button>
                </div>
            </section>
        </>


    )
}

export default Welcome