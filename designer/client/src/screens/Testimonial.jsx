import { RiDoubleQuotesL } from "react-icons/ri";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { MdAddBox } from "react-icons/md";
import ClientLogo from '../components/ClientLogo';
import { FaTruckMoving, FaShip, FaBolt, FaBoxes } from 'react-icons/fa';
import { GiCommercialAirplane } from "react-icons/gi";
import { Title } from '../components/Title';


const msgList = [
    {
        id: 1,
        message: "We deliver fast, reliable, and cost-effective logistics solutions"
    },
    {
        id: 2,
        message: "Our expert team ensures smooth operations from start to finish"
    },
    {
        id: 3,
        message: "Trusted by global clients for our commitment and efficiency"
    },
    {
        id: 4,
        message: "Experience the difference with our tailored transport strategies"
    }
];

const clientLogoData = [
    {
        id: 1,
        icon: <FaTruckMoving />,
        text: "Truckify"
    },
    {
        id: 2,
        icon: <FaShip />,
        text: "ShipLink"
    },
    {
        id: 3,
        icon: <GiCommercialAirplane />,
        text: "FlyExpress"
    },
    {
        id: 4,
        icon: <FaBoxes />,
        text: "GoLogi"
    },
    {
        id: 5,
        icon: <FaBolt className='bounce-slow' />,
        text: "QuickDrop"
    }
];

const msg = "Our clients trust us for timely, secure deliveries that exceed expectations. We're proud to offer world-class logistics with unmatched customer support. Reliability, transparency, and speed are at the heart of what we do. Backed by years of experience and a global network, we deliver results. Join thousands of satisfied partners who count on us every day.";

const Testimonial = () => {

    return (
        <section className="w-full bg-white py-12 px-0.5">
            <div className='border-4 border-gray-100 md:px-16 md:py-10 p-10 shadow w-[100%] md:flex'>
                <div className='flex flex-col items-start md:w-1/2'>
                    <p className='text-2xl font-semibold tracking-tight'>TRUSTED CLIENTS</p>
                    <p className='text-sm font-medium text-gray-400 mt-2 tracking-widest'>LORUM IPSUM DOLOR SIT AMET CONSECTETUR</p>

                    <div className="inline-flex relative w-full mt-10 z-0 select-none">
                        {/* square */}
                        <div className="bg-neutral-200 w-full min-h-[25vh] md:py-8 md:pl-18 md:pr-9 pl-14 pr-5 py-5 text-justify font-semibold leading-tight rounded mx-4 opacity-90 relative z-10">
                            <span className="text-sm font-normal text-black tracking-tighter">{msg}</span>
                            {/* Parallelogram  */}
                            <div className="md:w-17 md:h-15 w-15 h-13 bg-red-800 text-white font-bold flex items-center justify-center absolute z-20 -left-4 top-8"
                                style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0% 100%)' }}
                            >
                                <RiDoubleQuotesL className='text-2xl' />
                            </div>
                        </div>
                        {/* triangle */}
                        <div className="absolute bottom-[-28px] right-24 w-0 h-0 border-l-0 border-r-[32px] border-t-[32px] border-l-transparent border-r-transparent border-t-neutral-300 opacity-90"></div>
                    </div>
                    <div className='flex justify-between items-baseline mt-10 w-full mx-4' >
                        <span>
                            <button className='border border-neutral-300 text-neutral-400 py-1 px-1.5 cursor-pointer'><FaAngleLeft /></button>
                            <button className='border border-neutral-300 text-neutral-400 py-1 px-1.5 cursor-pointer'><FaAngleRight /></button>
                        </span>
                        <span className='text-center mr-28'>
                            <p className='font-bold text-lg'>JOHN DEO</p>
                            <p className='font-normal text-xs'>Managing Director</p>
                        </span>
                    </div>
                </div>

                <div className='md:w-1/2 md:ml-10 mt-16 md:mt-0'>
                    <p className='text-2xl font-semibold tracking-tight'>WHY CHOOSE US</p>
                    <p className='text-sm font-medium text-gray-400 mt-2.5 tracking-widest'>LORUM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                    <div className="w-full mt-10">
                        {msgList && msgList.map((msg) => (
                            <p key={msg.id}
                                className='border-t border-b border-neutral-200 px-2 py-3 text-start text-sm font-normal flex items-center justify-between'
                            >
                                {msg.message} <MdAddBox className='text-3xl cursor-pointer md:ml-0 ml-2' />
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className='border-4 border-gray-100 p-15 '>
                <Title 
                    title="Our Clients"
                    // subTitle="Logos of our valuable clients"
                    // icon={<ImEarth className='text-gray-400'/>}
                />
                <div className='grid md:grid-cols-5 grid-cols-1 gap-y-10 justify-around'>
                    {clientLogoData && clientLogoData.map((logo) => (
                        <ClientLogo key={logo.id} icon={logo.icon} text={logo.text} />
                    ))

                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonial