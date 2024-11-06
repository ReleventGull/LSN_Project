import { useEffect } from "react"

const Callback = () => {
    const setToken = () => {
        let url = window.location.href
        let token = url.slice(url.indexOf("=") + 1, url.indexOf('&'))
        localStorage.setItem('LSNToken', token)
    }
    useEffect(() => {
        setToken()
    }, [])
    return (
        <div className="flex h-full bg-backgroundPrimary">
                <div className="flex flex-col justify-center content-center m-auto p-2">
                    <h2 className="text-textPrimary">You are successfully authorized</h2>
                    <button className="hover:bg-backgroundPrimary hover:text-textPrimary hover:duration-200 p-1 rounded bg-textPrimary duration-200 text-backgroundPrimary">Continue</button>
                </div>
        </div>
    )
}

export default Callback