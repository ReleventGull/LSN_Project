

const RecentCard = ({card}) => {
    console.log(card)
    return (
        <div className="h-10 flex bg-backgroundThird rounded-md">
            
                <img className="h-full" src={card.track.album.images[0].url}/>
        
            <div className="flex content-center items-center">
                <h1 className="ml-1 flex content-center justify-center p-1 font-bold text-textPrimary">{card.track.name}</h1>
            </div>
        </div>
    )
}

export default RecentCard