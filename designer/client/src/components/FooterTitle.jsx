
const FooterTitle = ({ title, properties }) => {
    return (
        <div className='text-white'>
            <p className='text-base font-semibold'>{title}</p>
            <p className='text-yellow-400 font-extrabold mb-8'>.........</p>
            <ul>
                {properties && properties.map((props) => (
                    props.icon ? (
                        <li key={props.id} className='text-xs font-thin opacity-60 flex mb-3 items-center'>
                            <span className="mr-2">{props.icon}</span>
                            <span className="mr-2">{props.slash}</span>
                            <span>{props.text}</span>
                        </li>
                    ) : (
                        props.time ? (
                            <li key={props.id} className='text-xs font-thin opacity-60 flex mb-8 items-center'>
                                <span className="ml-7">{props.time}</span>
                            </li>
                        ) : (
                            <li key={props.id} className='text-xs font-thin opacity-60 flex mb-8 items-center'>
                                <span>{props.text}</span>
                            </li>
                        )
                    )

                ))}
            </ul>
        </div>
    )
}

export default FooterTitle