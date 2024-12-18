import { useState } from "react"
import { Link } from "react-router-dom"

const SettingsCard = ({card, loc}) => {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <Link to={`${card.url}`} onMouseLeave={() => setIsHovered(false)} onMouseEnter={() => setIsHovered(true)} className="group cursor-pointer duration-75 h-12 p-1 w-12 rounded-md bg-backgroundThird hover:bg-backgroundSecondary hover:duration-75">
        
        <svg  fill={(isHovered ? '#FFFFFF' : `${card.navpath}` == loc.pathname ? '#ADD9F4' : card.fillColor)} className='h-full duration-75'  viewBox="0 0 24 24"  >
            {
                card.paths.map((item, index) =>
                    <path className='duration-50'  key={index} d={item.d} />
                )
            }
        </svg>
        </Link>
    )
}

export default SettingsCard