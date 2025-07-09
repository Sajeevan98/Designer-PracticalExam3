import React, { useEffect, useState } from 'react';
import img1 from '../assets/img/ship.jpg';
import img2 from '../assets/img/drone.jpg';
import img3 from '../assets/img/truck.jpg';
import img4 from '../assets/img/train.jpg';
import img5 from '../assets/img/last-mile.jpg';
import img6 from '../assets/img/all.jpg';
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import Stats from '../components/Stats';

const servicesData = [
    {
        id: 1,
        title: 'Ships Services',
        description: 'Reliable ship services for international and large-scale cargo transportation. Designed to handle heavy loads with cost-effective maritime logistics.',
        image: img1,
    },
    {
        id: 2,
        title: 'Drone Services',
        description: 'Advanced drone and flight services for rapid, aerial delivery and surveillance. Ideal for remote access, time-critical logistics, and high-precision monitoring.',
        image: img2,
    },
    {
        id: 3,
        title: 'Truck Services',
        description: 'Reliable cargo truck service ensuring safe and timely delivery of goods across cities. Our fleet handles bulk shipments with maximum efficiency and care.',
        image: img3,
    },
    {
        id: 4,
        title: 'Train Services',
        description: 'Fast and efficient train service for long-distance cargo and passenger transport. Eco-friendly option with high capacity and punctual scheduling.',
        image: img4,
    },
    {
        id: 5,
        title: 'Last-Mile Delivery',
        description: 'Fast and efficient delivery service from hub to customer’s doorstep. Ideal for e-commerce, groceries, and time-sensitive packages.',
        image: img5,
    },
    {
        id: 6,
        title: 'Logistics & Supply Chain Consulting',
        description: 'Expert guidance to optimize your logistics and reduce operational costs. Customized solutions for warehousing, transportation, and planning.',
        image: img6,
    },

];
const statsData = [
    {
        id: 1,
        number: 890,
        string1: 'Delivered',
        string2: 'Packages'
    },
    {
        id: 2,
        number: 137,
        string1: 'Countries',
        string2: 'Covered'
    },
    {
        id: 3,
        number: 740,
        string1: 'Tons',
        string2: 'of Goods'
    },
    {
        id: 4,
        number: 600,
        string1: 'Satisfied',
        string2: 'Clients'
    },
]

const Service = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const itemPerView = 2; // show 2 services at once
    const currentServiceMobile = servicesData[activeIndex]; // this is for mobile view
    const currentServicesDesk = servicesData.slice(activeIndex, activeIndex + itemPerView); // this is for desktop view
    const totalSlides = servicesData.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((pre) => (pre + 1) % totalSlides);
        }, 10000); // change every 10 sec

        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <>
            <section className="w-full bg-white py-12 px-0.5">
                <div className='border-2 border-gray-200 md:px-16 md:py-3 p-10 shadow'>
                    <h1 className='text-lime-500 text-xs font-bold text-center'>Real Solution, Real Fast !</h1>
                    <h2 className='text-black text-3xl font-bold text-center mt-1.5'>Best Global Logistics Solutions.</h2>

                    {/* desktop view */}
                    <div className="hidden md:grid md:grid-cols-2 gap-8 mt-10">
                        {currentServicesDesk.map((service) => (
                            <div key={service.id} className="flex md:flex-row bg-white shadow-lg w-[100%]">
                                <img src={service.image} alt={service.title} className="md:w-1/2 md:h-[40vh] object-cover rounded md:mr-4 hover:cursor-pointer hover:scale-105  duration-300 " />
                                <div className="flex flex-col items-start justify-center md:w-1/2 md:pr-5 p-5 mb-5">
                                    <h3 className="text-lg font-bold">{service.title}</h3>
                                    <p className="text-sm text-gray-600 mt-4">{service.description}</p>
                                    <button className="text-black text-sm font-semibold mt-4 flex items-center hover:cursor-pointer hover:text-lime-500">
                                        <FaCircleArrowRight className='text-xl mr-1.5' />
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* mobile view  */}
                    <div className="md:hidden grid grid-cols-1 gap-8 mt-10">
                        {currentServiceMobile && (
                            <div key={currentServiceMobile.id} className="flex flex-col bg-white shadow-lg w-[100%]">
                                <img src={currentServiceMobile.image} alt={currentServiceMobile.title} className="h-[30vh] object-cover rounded md:mr-4" />
                                <div className="flex flex-col items-start justify-center md:w-1/2 md:pr-5 p-5 mb-5">
                                    <h3 className="text-lg font-bold">{currentServiceMobile.title}</h3>
                                    <p className="text-sm text-gray-600 mt-4">{currentServiceMobile.description}</p>
                                    <button className="text-black text-sm font-semibold mt-4 flex items-center hover:cursor-pointer hover:text-lime-500">
                                        <FaCircleArrowRight className='text-xl mr-1.5' />
                                        Read More
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='mt-10 flex md:flex-row flex-col justify-between items-center'>
                        <span className='flex md:flex-row flex-col items-center text-xs font-light order-2 md:order-1'>
                            Logistic & Transport Solutions Saves your time.
                            <button className="text-black text-xs font-bold flex items-center ml-0.5 hover:cursor-pointer hover:text-lime-500">
                                Finds Your Solutions <FaArrowCircleRight className='ml-1.5 text-sm' />
                            </button>
                        </span>
                        <div className="flex space-x-2 md:mt-4 mb-6 order-1 md:order-2">
                            {servicesData.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full border hover:cursor-pointer duration-700
                                    ${activeIndex === index ? 'bg-white border-lime-500 border-2' : 'bg-gray-300 border-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-2 justify-around border-4 border-gray-100 p-10 md:mt-26'>
                    {statsData && statsData.map((data) => (
                        <Stats key={data.id} number={data.number} string1={data.string1} string2={data.string2} />
                    ))

                    }
                </div>
            </section>
        </>
    )
}

export default Service