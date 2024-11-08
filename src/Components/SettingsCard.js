import { useState } from "react"

const SettingsCard = ({card}) => {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <div onMouseLeave={() => setIsHovered(false)} onMouseEnter={() => setIsHovered(true)} className="group cursor-pointer duration-75 h-12 p-1 w-12 rounded-md bg-backgroundThird hover:bg-backgroundSecondary hover:duration-75">
        <svg className='h-full'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {
                card.paths.map((item, index) =>
                    <path className='duration-50' parentId={card.id} key={index} d={item.d} stroke={isHovered ? '#B1B3C0' : item.stroke} strokeWidth={item.StrokeWidth} strokeLinecap={item.strokeLinecap}/>
                )
            }
        </svg>
        </div>
    )
}

export default SettingsCard