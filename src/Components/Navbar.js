
import SettingsCard from "./SettingsCard";
import arr from './SvgPaths'

const Navbar = () => {
    return (
        <div className="h-full p-2 w-20 bg-playbar">
            <div className="flex items-center flex-col h-full p-1 gap-2 bg-backgroundSecondary rounded-md">
                {
                    arr.map(card => 
                        <SettingsCard key={card.id} card={card}/>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar