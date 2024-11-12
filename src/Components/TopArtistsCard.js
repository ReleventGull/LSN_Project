

const TopArtistsCard = ({card, index}) => {
    let style = {
        backgroundImage: `url(${card.images[0].url})`
    }
    console.log(card.images[0].height)
    return (
        <div className={`recentCard ${index == 5 ? ' last' : index == 4 ? 'secondLast' : index == 3 ? 'thirdLast' : index == 2 ? 'fourthlast' : ''}`}>
            <div className="grow rounded-md aspect-w-1 aspect-h-1">
                <img className="rounded-md" src={card.images[0].url}/>
            </div>
            <h1 className="m-0 text-xs text-textPrimary font-bold">{card.name}</h1>
        </div>
    )
}

export default TopArtistsCard