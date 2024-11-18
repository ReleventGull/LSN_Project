import {Route, Routes } from 'react-router-dom'
import { useMemo } from 'react'
import { Playbar, Navbar, Home, Playlist} from './Components/Components'
import { useEffect, useState, useRef } from 'react'
import { activateDevice, getPlaybackState } from './Components/api'
const LSNApp = () => {
    const [player, setPlayer] = useState(null)
    const [deviceId, setDeviceId] = useState(null)
    const [songPlaying, setSongPlaying] = useState(null)
    const [isPlaying, setIsPlaying] = useState(null)    
    const [songMs, setSongMs] = useState(null)
    const [currentSongMs, setCurrentSongMs] = useState(null)
    
    const intervalRef = useRef(null)
    
    const initializePlayer = async() => {
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
        intervalRef.current = setInterval( async() => {
            const response = await getPlaybackState({token: localStorage.getItem("LSNToken")})
            console.log("Fetched Respones", response)
            if (!songPlaying || songPlaying.id !== response.id) {
                setSongPlaying(response.item)
            }
            if(isPlaying === null) {
                setIsPlaying(response.is_playing)
            }
            if(songMs !== response.item.duration_ms) {
                setSongMs(response.item.duration_ms)
            }
            if(currentSongMs !== response.progress_ms) {
                setCurrentSongMs(response.progress_ms)
            }
        }, 1000)
        return () => {
            player.removeListener('ready',);
            player.removeListener('authentication_error',);
            clearInterval(intervalRef.current)
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
        <Playbar songMs={songMs} setIsPlaying={setIsPlaying} songPlaying={songPlaying} isPlaying={isPlaying} player={player}/>
        </div>
        
    )
}

export default LSNApp