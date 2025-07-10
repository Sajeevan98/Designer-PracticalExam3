import FooterTitle from '../components/FooterTitle';
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronRight, FaPhoneAlt, FaRegHandPointRight, FaFacebookF, FaWhatsapp, FaTwitter, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import img5 from '../assets/img/last-mile.jpg';
import img2 from '../assets/img/ship.jpg';
import img1 from '../assets/img/supplier_2.jpg';
import img4 from '../assets/img/train.jpg';
import img3 from '../assets/img/truck.jpg';
import img6 from '../assets/img/supplier_1.jpg';
import { TbCircleLetterR } from "react-icons/tb";
import { SocialLink } from '../components/SocialLink';


const footerData = [
    {
        id: 1,
        title: "About Us",
        properties: [
            {
                id: 1,
                icon: null,
                slash: null,
                text: "We are a dedicated logistics company providing reliable and efficient cargo solutions worldwide."
            },
            {
                id: 2,
                icon: <FaPhoneAlt />,
                slash: "|",
                text: "(+94) 76 793 0541"
            },
            {
                id: 3,
                icon: <FaLocationDot />,
                slash: "|",
                text: "01 Navaly Manipay, Jaffna 40000"
            }
        ]
    },
    {
        id: 2,
        title: "Latest News",
        properties: [
            {
                id: 1,
                icon: <FaChevronRight className='text-yellow-400' />,
                slash: null,
                text: "Stay updated with the most recent developments in cargo logistics and transportation services.",
                time: null
            },
            {
                id: 2,
                icon: null,
                slash: null,
                text: null,
                time: "5 Minutes Ago"
            },
            {
                id: 3,
                icon: <FaChevronRight className='text-yellow-400' />,
                slash: null,
                text: "From fleet expansions to tech upgrades, get the news that moves the industry forward.",
                time: null
            },
            {
                id: 4,
                icon: null,
                slash: null,
                text: null,
                time: "5 Minutes Ago"
            }

        ]
    },
    {
        id: 3,
        title: "Customer Service",
        properties: [
            {
                id: 1,
                icon: <FaRegHandPointRight />,
                slash: null,
                text: "Support Forums"
            },
            {
                id: 2,
                icon: <FaRegHandPointRight />,
                slash: null,
                text: "Communication"
            },
            {
                id: 3,
                icon: <FaRegHandPointRight />,
                slash: null,
                text: "FAQS"
            },
            {
                id: 4,
                icon: <FaRegHandPointRight />,
                slash: null,
                text: "Privacy Policy"
            },
            {
                id: 5,
                icon: <FaRegHandPointRight />,
                slash: null,
                text: "Rules & Condition"
            },
            {
                id: 6,
                icon: <FaRegHandPointRight />,
                slash: null,
                text: "Contact Us"
            }
        ]
    }
];
const imageData = [
    {
        id: 1,
        img: img1
    },
    {
        id: 2,
        img: img2
    },
    {
        id: 3,
        img: img3
    },
    {
        id: 4,
        img: img4
    },
    {
        id: 5,
        img: img5
    },
    {
        id: 6,
        img: img6
    }
];
const socialData = [
    {
        id: 1,
        icon: <FaFacebookF className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white' />
    },
    {
        id: 2,
        icon: <FaWhatsapp className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white' />
    },
    {
        id: 3,
        icon: <FaTwitter className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white' />
    },
    {
        id: 4,
        icon: <FaLinkedinIn className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white' />
    },
    {
        id: 5,
        icon: <FaTelegramPlane className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white' />
    }
];

const Footer = () => {
    return (
        <section id="footer" className='md:px-28 px-3 py-2 bg-slate-500 mt-20'>

            {/* 1st line */}
            <div className='flex md:flex-row flex-col text-white w-full justify-between mt-2'>
                <span className='md:w-1/2 md:order-1 order-2'>
                    <p className='text-2xl font-bold'>Weekly Newsletter</p>
                    <p className='text-xs font-extralight mt-2.5'>There are many vaiationsof passengers of loream ipsum available.</p>
                </span>
                <span className='md:w-1/2 flex gap-x-5 md:py-1 py-5 md:order-2 order-1'>
                    <input type='text'
                        placeholder='Enter Your Mail'
                        className='bg-white text-black outline-none px-2 text-xs rounded w-[75%] py-3'
                    />
                    <button className='bg-yellow-400 text-xs font-semibold rounded w-[25%] hover:cursor-pointer hover:bg-yellow-500 py-3'>SUBSCRIBE</button>
                </span>
            </div>

            {/* 2nd line */}
            <div className="md:mt-20 mt-10 grid md:grid-cols-4 grid-cols-2 md:gap-x-10 gap-x-5">
                {footerData && footerData.map((data) => (
                    <FooterTitle key={data.id} title={data.title} properties={data.properties} />
                ))}
                <div>
                    <p className='text-base font-semibold text-white'>Customer Service</p>
                    <p className='text-yellow-400 font-extrabold mb-8'>.........</p>
                    <div className='grid grid-cols-3 gap-2 w-full'>
                        {imageData && imageData.map((img) => (
                            <div key={img.id} className="aspect-square w-full overflow-hidden">
                                <img
                                    src={img.img}
                                    alt="customer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3rd line */}
            <div className='mt-10 flex md:flex-row flex-col justify-between items-center mb-2 gap-y-4'>
                <span className='text-xs text-white font-semibold tracking-tight flex order-2 md:order-1'> Copyright &copy; 2025 All Right Reserved. Site By Xitep
                    <sub className='align-top ml-0.5'><TbCircleLetterR /></sub>
                </span>
                <span className='flex gap-x-5 order-1 md:order-2'>
                    {socialData && socialData.map((data) => (
                        <SocialLink key={data.id} icon={data.icon} />
                    ))}
                </span>
            </div>
        </section>
    )
}

export default Footer