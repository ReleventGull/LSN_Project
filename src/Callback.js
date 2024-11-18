import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { revokeToken } from "./auth"
const Callback = () => {
    const navigate = useNavigate()
    const setToken = () => {
        let url = window.location.href
        let token = url.slice(url.indexOf("=") + 1, url.indexOf('&'))
        localStorage.setItem('LSNToken', token)
    }
    const redirectToHome = () => {
        navigate('/app')
    }
    const expireToken = async() => {
        console.log("Revoking token")
        localStorage.removeItem("LSNToken")
    }
    useEffect(() => {
        setToken()
    }, [])
    return (
        <div className="flex h-full bg-backgroundPrimary">
                <div className="flex gap-1 flex-col justify-center content-center m-auto p-2">
                    <h2 className="text-textPrimary">You are successfully authorized</h2>
                    <button onClick={redirectToHome} className="hover:bg-backgroundPrimary hover:text-textPrimary hover:duration-200 p-1 rounded bg-textPrimary duration-200 text-backgroundPrimary">Continue</button>
                    <button onClick={expireToken} className="hover:bg-backgroundPrimary hover:text-textPrimary hover:duration-200 p-1 rounded bg-textPrimary duration-200 text-backgroundPrimary">Expire Token</button>
                </div>
        </div>
    )
}

export default Callback