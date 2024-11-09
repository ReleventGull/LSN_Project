

const TopArtistsCard = ({card}) => {
    console.log(card.images[0].height)
    return (
        <div className="flex-1 cursor-pointer p-3 rounded-md hover:bg-backgroundSecondary">
            <img className="rounded-md" src={card.images[0].url}/>
            <h1 className="m-0 text-textPrimary font-bold">{card.name}</h1>
        </div>
    )
}

export default TopArtistsCard