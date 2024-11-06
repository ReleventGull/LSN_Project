import { useEffect, useState } from "react"
import { redirectUser, revokeAccess } from "./auth"
import { Route, Routes, useNavigate } from "react-router-dom"
import { getUserProfile } from "./auth"
import Callback from "./Callback"
const App = () => {

    const navigate = useNavigate()
    
    const checkToken = async(token) => {
        let response = await getUserProfile(token)
        if (response.status == 401) {
            localStorage.removeItem("LSNToken")
            window.location.refresh
        }
        return response
    }
    const checkUrl = () => {
        let url = window.location.href
        return url.slice(url.indexOf("=") + 1, url.indexOf('&'))
    }
    useEffect(() => {
        console.log("I ran")
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
            </Routes>
    )
}

export default App