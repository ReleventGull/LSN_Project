import { useEffect, useState } from "react"
import { redirectUser, revokeAccess } from "./auth"
import { Route, Routes, useNavigate } from "react-router-dom"
import { getUserProfile } from "./auth"
import Callback from "./Callback"
import LSNApp from "./LSNApp"
const App = () => {

    const navigate = useNavigate()
    
    const checkToken = async(token) => {
        console.log("checking token")
        let response = await getUserProfile(token)
        if (response.status == 401) {
            localStorage.removeItem("LSNToken")
            window.location.refresh
        }else {
            navigate('/app')
        }
        return response
    }
    const checkUrl = () => {
        console.log("Did i run")
        let url = window.location.href
        if(url.indexOf('=') == -1) {
            return 0
        }
        let result = url.slice(url.indexOf("=") + 1, url.indexOf('&'))
        return result
    }
    useEffect(() => {
        const token = localStorage.getItem("LSNToken")
        if (token) {
            let response = checkToken(token)
        }else if (checkUrl().length > 5) {
            return
        }else {
            redirectUser()
        }
    }, [])

    return (
            <Routes>
                <Route path='callback' element={<Callback/>}/>
                <Route path='app' element={<LSNApp/>}/>
            </Routes>
    )
}

export default App