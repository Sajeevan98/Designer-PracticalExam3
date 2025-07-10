import { useEffect, useState } from 'react';
import img1 from '../assets/img/home_1.jpg';
import img2 from '../assets/img/home_2.jpg';
import img3 from '../assets/img/home_3.jpg';
import img4 from '../assets/img/home_4.jpg';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Home = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3, img4];
    const [fade, setFade] = useState(true);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }
    const handleNext = () => {
        setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval) // cleanup on unmount,
    }, [images.length]);

    return (
        <>
            <section className="w-full bg-white py-0.5">
                <div className="max-w-[100%] mx-auto px-1 flex flex-col md:flex-row items-center relative">
                    <div className="md:w-1/3 md:order-1 order-2">
                        <div className='z-20 md:absolute w-full md:w-1/3 md:top-1/2 md:-translate-y-1/2 md:translate-x-1/6'>
                            <div className='bg-white md:h-[72vh] px-10 py-5 flex flex-col gap-y-6 justify-center'>
                                <span className='tracking-widest border-l-4 border-yellow-400 pl-2'>LOGISTIC</span>
                                <span className='tracking-normal text-5xl font-semibold'>Best Shipping</span>
                                <span className='tracking-normal text-6xl font-black text-yellow-400'>Partner</span>
                                <span className='text-sm'>Your best shipping partner across the globe. Trusted by businesses for secure and on-time delivery. We simplify complex logistics with smart solutions.</span>
                                <button className='bg-yellow-400 w-1/2 py-4 text-sm text-white font-medium tracking-widest hover:cursor-pointer hover:bg-yellow-500 rounded-xs mt-3'>DISCOVER MORE</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 z-10 flex md:flex-col md:order-2 order-1 relative md:static">
                        <img
                            src={images[currentIndex]}
                            alt="Logistics"
                            className="shadow-lg md:max-w-[98%] md:h-[88.5vh] h-[50vh] md:pr-1.5"
                        />
                        <span className="hidden md:block absolute text-black text-base font-extrabold tracking-normal rotate-180 right-0.5 top-1/2 -translate-y-1/2" style={{ writingMode: 'vertical-rl' }}>
                            #CARGO LOGISTIC
                        </span>
                        <div className="md:hidden flex flex-row items-center justify-center w-1/3 bg-yellow-400 absolute bottom-0 left-0 py-5 z-30">
                            <span className="text-white text-base">
                                {currentIndex + 1} / {images.length}
                            </span>
                            <FaLongArrowAltLeft className="text-white hover:cursor-pointer ml-2 text-xl" onClick={handlePrevious} />
                            <FaLongArrowAltRight className="text-white hover:cursor-pointer ml-2 text-xl" onClick={handleNext} />
                        </div>
                    </div>

                    <div className="hidden md:flex flex-row items-center justify-center w-1/8 bg-yellow-400 absolute bottom-0 left-0 py-5 z-30">
                        <span className="text-white text-base">
                            {currentIndex + 1} / {images.length}
                        </span>
                        <FaLongArrowAltLeft className="text-white hover:cursor-pointer ml-2 text-xl" onClick={handlePrevious} />
                        <FaLongArrowAltRight className="text-white hover:cursor-pointer ml-2 text-xl" onClick={handleNext} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home