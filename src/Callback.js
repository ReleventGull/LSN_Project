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
        <h2>Callback component</h2>
    )
}

export default Callback