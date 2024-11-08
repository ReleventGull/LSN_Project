import {Route, Routes, useNavigate} from 'react-router-dom'
import { Playbar, Navbar, Home} from './Components/Components'

const LSNApp = () => {
    return(
        <div className="flex flex-col h-full">
            <div className='flex grow bg-playbar'>
                <Navbar />
                <Routes>
                    <Route path='' element={<Home />}/>
                </Routes>
            </div>
        <Playbar />
        </div>
    )
}

export default LSNApp