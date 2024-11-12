import { useEffect, useState } from "react"
import { getRecentlyListened, getTopArtists } from "./api"
import {RecentCard, TopArtistsCard} from './Components'
const {sortGenres} = require('./Functions')

const Home = () => {
    const [recentlyPlayed, setRecentlyPlayer] = useState([])
    const [topArtists, setTopArtists] = useState([])

    const getRecentList = async() => {
        const response = await getRecentlyListened({token: localStorage.getItem("LSNToken"), limit: 8})
        setRecentlyPlayer(response.items)
    }
    const getUsersTopArtists = async() => {
        const response = await getTopArtists({token: localStorage.getItem("LSNToken"), limit: 7})
        sortGenres(response.items)
        setTopArtists(response.items)
    }

    useEffect(() => {
        getRecentList()
        getUsersTopArtists()
    }, [])
    
    return (
        <div className="grow bg-playbar overflow-auto overflow-x-hidden">
            <div className="w-full p-2">
            <h1 className="font-bold mb-1 text-textPrimary">Recently Played</h1>
                <div className="grid p-3 bg-backgroundSecondary rounded-md grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {recentlyPlayed.map(card =>
                        <RecentCard card={card}/>
                    )}
                </div>
            </div>

            <div className="w-full p-2">
                <h1 className="font-bold mb-1 text-textPrimary">Top Artists</h1>
                <div className="gap-2 flex">
                    {topArtists.map((card, index) =>
                        <TopArtistsCard index={index} card={card}/>
                    )}
                </div>
            </div>

            <div className="w-full p-2">
                <h1 className="font-bold mb-1 text-textPrimary">Top Artists</h1>
                <div className="gap-2 flex">
                    {topArtists.map((card, index) =>
                        <TopArtistsCard index={index} card={card}/>
                    )}
                </div>
            </div>

         </div>
    )
}
export default Home