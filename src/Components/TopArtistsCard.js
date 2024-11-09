

const TopArtistsCard = ({card}) => {
    let style = {
        backgroundImage: `url(${card.images[0].url})`
    }
    console.log(card.images[0].height)
    return (
        <div className="flex flex-col flex-1  w-auto cursor-pointer p-3 rounded-md hover:bg-backgroundSecondary">
            <div className="grow rounded-md aspect-w-1 aspect-h-1">
                <img className="rounded-md" src={card.images[0].url}/>
            </div>
            <h1 className="m-0 text-textPrimary font-bold">{card.name}</h1>
        </div>
    )
}

export default TopArtistsCard