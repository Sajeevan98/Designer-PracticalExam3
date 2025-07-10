import { News } from '../components/News';
import news1 from '../assets/img/news_1.jpg';
import news2 from '../assets/img/news_2.jpg';
import news3 from '../assets/img/news_3.jpg';
import news4 from '../assets/img/news_4.jpg';
import { PiNewspaperFill } from "react-icons/pi";
import { Title } from '../components/Title';

const newsData = [
    {
        id: 1,
        img: news1,
        text: "SwiftHaul Cargo Logistics has expanded its cargo truck fleet with 25 new fuel-efficient vehicles to meet growing regional delivery demands. The company also upgraded its tracking system for improved shipment visibility and customer service. Operations with the new fleet begin next month, promising faster and more reliable freight transport.",
        postBy: "David Ron Lex Hunt",
        position: "Admin",
        count: "15",
        date: "26",
        month: "MAY"
    },
    {
        id: 2,
        img: news2,
        text: "RailHaul Freight Cargo has launched a new cargo train route to improve long-distance shipping efficiency across the region. The service includes modern wagons with enhanced load capacity and advanced GPS tracking. Operations begin this month, aiming to reduce delivery times and cut transportation costs by 20%.",
        postBy: "Marko Dean Felix Troy",
        position: "Director",
        count: "57",
        date: "18",
        month: "JUNE"
    },
    {
        id: 3,
        img: news3,
        text: "SkyLift Air Cargo has added three new aircraft to its fleet, boosting international freight capacity. The planes feature temperature-controlled storage and real-time tracking systems. This expansion aims to speed up global deliveries and support growing e-commerce logistics.",
        postBy: "Chris Nolan Jett Ray",
        position: "Organizer",
        count: "08",
        date: "30",
        month: "JUNE"
    },
    {
        id:4,
        img: news4,
        text: "OceanX Shipping has introduced a new cargo vessel route to enhance global maritime logistics. The ships are equipped with eco-friendly engines and automated container handling systems. This upgrade aims to reduce transit time and improve sustainability in sea freight operations.",
        postBy: "Leo Brent Mason",
        position: "CEO",
        count: "125",
        date: "01",
        month: "JULY"
    }
];

const LatestNews = () => {
    return (
        <div id="news" className='md:my-12 px-10'>
            <Title 
                title="LATEST NEWS" 
                subTitle="INTEGER CONGUE ELIT" 
                icon={<PiNewspaperFill 
                className='text-cyan-400' />} 
            />
            <div className='grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-12'>
            { newsData && newsData.map((news)=>(
                <News 
                    key={news.id} 
                    img={news.img}
                    name={news.postBy}
                    position={news.position}
                    count={news.count}
                    text={news.text}
                    date={news.date}
                    month={news.month}
                />
            ))}
            </div>
        </div>
    )
}

export default LatestNews