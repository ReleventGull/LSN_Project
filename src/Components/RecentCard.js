

const RecentCard = ({card}) => {
    return (
        <div className="cursor-pointer group duration-75 h-14 flex bg-backgroundThird rounded-md hover:bg-backgroundFourth">
                <img className="rounded-l-md h-full" src={card.track.album.images[0].url}/>
            <div className="flex overflow-hidden text-ellipsis whitespace-nowrap grow content-center items-center">
                <h1 className="ml-2 text-xs mr-2 flex content-center justify-center font-bold text-textPrimary text-ellipsis overflow-hidden">{card.track.name}</h1>
            </div>
            <div className="flex items-center w-12 h-full ml-auto">
            <svg className="hover:bg-white duration-100 opacity-0 group-hover:opacity-100 bg-textPrimary relative p-1 rounded-full h-8 rotate-90" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className="-translate-y-0.5" d="M21,21H3L12,3Z"/>
            </svg>
          
                </div>
        </div>
    )
}

export default RecentCard