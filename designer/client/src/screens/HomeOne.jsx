import img from '../assets/img/port.jpg';

const HomeOne = () => {
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

                    <div className="md:w-2/3 z-10 flex md:flex-col md:order-2 order-1">
                        <img
                            src={img}
                            alt="Logistics"
                            className="shadow-lg md:max-w-[98%] md:h-[88.5vh] md:pr-1.5"
                        />

                        {/* Vertical Right Text */}
                        <span className="hidden md:block absolute text-black text-base font-extrabold tracking-normal rotate-180 right-0.5 top-1/2 -translate-y-1/2" style={{ writingMode: 'vertical-rl' }}>
                            #CARGO LOGISTIC
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeOne