

const TopArtistsCard = ({images, card, index}) => {
    let style = {
        backgroundImage: `url(${images[0].url})`
    }

    return (
        <div className={`recentCard ${index == 6 ? ' last' : index == 5 ? 'secondLast' : index == 4 ? 'thirdLast' : index == 3 ? 'fourthlast' : index == 2 ? 'fifthLast' : ''} group`}>
            <svg className="recentCardPlayButton group-hover:opacity-100" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className="-translate-y-0.5" d="M21,21H3L12,3Z"/>
            </svg>
            <div className="grow rounded-md aspect-w-1 aspect-h-1">
                <img className="rounded-md" src={images[0].url}/>
            </div>
            <h1 className="m-0 m-w-full overflow-hidden text-ellipsis text-xs text-textPrimary font-bold">{card.name}</h1>
            <h1 className="text-xs text-darkPrimary font-bold font-bold text-ellipsis overflow-hidden">{card.artists ? card.artists[0].name : 'Artist'}</h1>
        </div>
    )
}

export default TopArtistsCard