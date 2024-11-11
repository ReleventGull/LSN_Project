
import SettingsCard from "./SettingsCard";
import arr from './SvgPaths'
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Navbar = () => {
    const [loc, setCurrentLoc] = useState('')
    const location = useLocation()
    useEffect(() => {
        setCurrentLoc(location)
    },[location])
    return (
        <div className="h-full p-2 w-20 bg-playbar">
            <div className="flex items-center flex-col h-full max-h-full p-1 gap-2 bg-backgroundSecondary rounded-md overflow-auto scrollbar-hide overflow-x-hidden">
                {
                    arr.map(card => 
                        <SettingsCard key={card.id} loc={loc} card={card}/>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar