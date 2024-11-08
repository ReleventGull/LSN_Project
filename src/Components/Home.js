import { useEffect, useState } from "react"
import { getRecentlyListened } from "./api"
import {RecentCard} from './Components'

const Home = () => {
    const [recentlyPlayed, setRecentlyPlayer] = useState([])
    
    const getRecentList = async() => {
        const response = await getRecentlyListened({token: localStorage.getItem("LSNToken"), limit: 8})
        setRecentlyPlayer(response.items)
        console.log('Recent played bro', recentlyPlayed)
    }

    useEffect(() => {
        getRecentList()
    }, [])
    return (
        <div className="grow bg-playbar">
            <div className="w-full p-2">
            <h1 className="font-bold mb-1 text-textPrimary">Recently Played</h1>
                <div className="grid p-3 bg-backgroundSecondary rounded-md grid-cols-4 gap-2">
                    
                    {recentlyPlayed.map(card =>
                        <RecentCard card={card}/>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Home