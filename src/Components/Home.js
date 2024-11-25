import { useEffect, useState } from "react"
import { getRecentlyListened, getTopArtists, getRecommendations } from "./api"
import {RecentCard, TopArtistsCard} from './Components'
const {sortGenres, selectRandomArtists} = require('./Functions')

const Home = ({player, deviceId}) => {
    const [recentlyPlayed, setRecentlyPlayer] = useState([])
    const [topArtists, setTopArtists] = useState([])
    const [recommended, setRecommended] = useState([])
    const getRecentList = async() => {
        const response = await getRecentlyListened({token: localStorage.getItem("LSNToken"), limit: 8})
        setRecentlyPlayer(response.items)
    }
    const getUsersTopArtists = async() => {
        const response = await getTopArtists({token: localStorage.getItem("LSNToken"), limit: 7})
        setTopArtists(response.items)
        const arr = selectRandomArtists(response.items)
        const responseTwo = await getRecommendations({token: localStorage.getItem("LSNToken"), limit: 7, aritistIds: arr})
        setRecommended(responseTwo.tracks)
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
                    {recentlyPlayed.map((card, index) =>
                        <RecentCard key={index} deviceId={deviceId} player={player} images={card.images} card={card}/>
                    )}
                </div>
            </div>

            <div className="w-full p-2">
                <h1 className="font-bold mb-1 text-textPrimary">Top Artists</h1>
                <div className="gap-2 flex">
                    {topArtists.map((card, index) =>
                        <TopArtistsCard key={index} deviceId={deviceId} images={card.images} index={index} card={card}/>
                    )}
                </div>
            </div>

          <div className="w-full p-2">
                <h1 className="font-bold mb-1 text-textPrimary">Recommendations</h1>
                <div className="gap-2 flex">
                    {recommended.map((card, index) =>
                        <TopArtistsCard key={index} images={card.album.images} index={index} card={card}/>
                    )}
                </div>
            </div>

         </div>
    )
}
export default Home