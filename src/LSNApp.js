import {Route, Routes, useNavigate, Outlet, useSearchParams } from 'react-router-dom'
import { Playbar, Navbar, Home, Playlist} from './Components/Components'
import { useEffect, useState } from 'react'
import { activateDevice } from './Components/api'
const LSNApp = () => {
    const [player, setPlayer] = useState(null)
    const [deviceId, setDeviceId] = useState(null)
    
    const initializePlayer = async() => {
        console.log("Initiazling... Player is ", player)
        const token = localStorage.getItem('LSNToken')
        const webPlayer = new Spotify.Player({
            name: "Web Playback SDK Quick Start Player",
            getOAuthToken: cb => { cb(token); },
            volume: 1
        })
        await webPlayer.connect().then(() => {
            setPlayer(webPlayer)
        })
    }
    useEffect(() => {
        if (!player)  {
            console.log("No player set")
            return
        }
        player.addListener('ready', async({device_id}) => {
            const response = await activateDevice({token: localStorage.getItem('LSNToken'), deviceId: device_id})
            setDeviceId(device_id)
        })
        player.addListener('authentication_error', () => {
            console.log("Error")
        })
        return () => {
            player.removeListener('ready',);
            player.removeListener('authentication_error',);
        };
    }, [player])
   
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