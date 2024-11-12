

const TopArtistsCard = ({images, card, index}) => {
    let style = {
        backgroundImage: `url(${images[0].url})`
    }

    return (
        <div className={`recentCard ${index == 6 ? ' last' : index == 5 ? 'secondLast' : index == 4 ? 'thirdLast' : index == 3 ? 'fourthlast' : index == 2 ? 'fifthLast' : ''}`}>
            <div className="grow rounded-md aspect-w-1 aspect-h-1">
                <img className="rounded-md" src={images[0].url}/>
            </div>
            <h1 className="m-0 m-w-full overflow-hidden text-ellipsis text-xs text-textPrimary font-bold">{card.name}</h1>
            <h1 className="text-xs text-darkPrimary font-bold font-bold text-ellipsis overflow-hidden">{card.artists ? card.artists[0].name : 'Artist'}</h1>
        </div>
    )
}

export default TopArtistsCard