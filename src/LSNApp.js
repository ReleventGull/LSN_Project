import {Route, Routes, useNavigate, Outlet } from 'react-router-dom'
import { Playbar, Navbar, Home, Playlist} from './Components/Components'

const LSNApp = () => {
    return(
        <div className="flex flex-col h-full">
            <div className='flex grow bg-playbar'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='playlists' element={<Playlist />}/>
                </Routes>
          
                </div>
        <Playbar />
        </div>
    )
}

export default LSNApp