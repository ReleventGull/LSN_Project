import { useState } from "react"

const SettingsCard = ({card}) => {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <div onMouseLeave={() => setIsHovered(false)} onMouseEnter={() => setIsHovered(true)} className="group cursor-pointer duration-75 h-12 p-1 w-12 rounded-md bg-backgroundThird hover:bg-backgroundSecondary hover:duration-75">
        <svg  fill={isHovered ? '#FFFFFF' : card.fillColor} className='h-full duration-75'  viewBox="0 0 24 24"  >
            {
                card.paths.map((item, index) =>
                    <path className='duration-50'  key={index} d={item.d} />
                )
            }
        </svg>
        </div>
    )
}

export default SettingsCard