import {Route, Routes, useNavigate} from 'react-router-dom'
import { Playbar } from './Components/Components'

const LSNApp = () => {
    return(
        <div className="flex flex-col h-full">
            
            <div className='grow bg-backgroundPrimary'>

            </div>
        <Playbar />
        </div>
    )
}

export default LSNApp