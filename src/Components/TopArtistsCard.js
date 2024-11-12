

const TopArtistsCard = ({card, index}) => {
    let style = {
        backgroundImage: `url(${card.images[0].url})`
    }

    return (
        <div className={`recentCard ${index == 6 ? ' last' : index == 5 ? 'secondLast' : index == 4 ? 'thirdLast' : index == 3 ? 'fourthlast' : ''}`}>
            <div className="grow rounded-md aspect-w-1 aspect-h-1">
                <img className="rounded-md" src={card.images[0].url}/>
            </div>
            <h1 className="m-0 text-xs text-textPrimary font-bold">{card.name}</h1>
        </div>
    )
}

export default TopArtistsCard