import { useEffect } from "react"
import { getRecentlyListened } from "./api"
const Home = () => {
    const getRecentList = async() => {
        const response = await getRecentlyListened({token: localStorage.getItem("LSNToken"), limit: 10})
        console.log(response)
    }

    useEffect(() => {
        getRecentList()
    }, [])
    return (
        <div className="grow bg-playbar">
            
        </div>
    )
}
export default Home