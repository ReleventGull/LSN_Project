import {Route, Routes, useNavigate, Outlet, useSearchParams } from 'react-router-dom'
import { Playbar, Navbar, Home, Playlist} from './Components/Components'
import { useEffect, useState } from 'react'
import { activateDevice } from './Components/api'
const LSNApp = () => {
    const [player, setPlayer] = useState(null)
    const [deviceId, setDeviceId] = useState(null)
    
    const initializePlayer = () => {
        const token = localStorage.getItem('LSNToken')
        const player = new Spotify.Player({
            name: "Web Playback SDK Quick Start Player",
            getOAuthToken: cb => { cb(token); },
            volume: 1
        })
        player.connect()
        player.addListener('ready', async({device_id}) => {
            const response = await activateDevice({token: localStorage.getItem('LSNToken'), deviceId: device_id})
            setDeviceId(device_id)
           player.isLoaded.then((stuff) => {
                console.log("Player has been loaded")
           })
        })
        player.addListener('authentication_error', () => {
            console.log("Error")
        })
        player.addListener('player_state_changed', (state) => {
            console.log("Player state here", state)
        })
    }

    useEffect(() => {
            const script = document.createElement('script')
            script.src = "https://sdk.scdn.co/spotify-player.js"
            script.async = true
           window.onSpotifyWebPlaybackSDKReady = () => {
                initializePlayer()
           }
            document.head.appendChild(script);
        }, [])

    return(
         <div className="flex flex-col h-full">
            <div className='flex grow bg-playbar overflow-hidden'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home deviceId={deviceId} player={player}/>}/>
                    <Route path='playlists' element={<Playlist />}/>
                </Routes>
          
                </div>
        <Playbar />
        </div>
        
    )
}

export default LSNApp