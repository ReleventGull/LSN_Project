import { useMemo } from "react"
const Playbar = ({isPlaying, songPlaying, player, setIsPlaying, songMs, currentSongMs}) => {
    console.log("Song miliseconds", songMs)
    const onToggle = () => {
        player.togglePlay().then(result => {
            setIsPlaying((val) => !val)
        })
    }
    const calculateCurrentStamp = (milis) => {
        let miliseconds = milis
        if(!miliseconds) {
            return '00:00'
        }
        const minutes = String(Math.floor(miliseconds/60000)) 
        miliseconds -= (Number(minutes) * 60000)
        const seconds = String(Math.floor(miliseconds/1000))

        return `${(minutes.length > 1 ? minutes : minutes.length == 1 ? `0${minutes}` : '00')}:${(seconds.length > 1 ? seconds : seconds.length == 1 ? `0${seconds}` : '00')}`
    }
    return (
        <div className="bg-white h-20">
                <div className="grid grid-cols-[1fr_1.5fr_1fr] w-full h-full bg-playbar">
                    <div className="h-full">
                        {
                            !songPlaying ? '' : 
                        <div className="flex ml-2 gap-5 h-full items-center">
                            <div className="h-full flex items-center justify-center">
                                <img className="w-16 rounded-md" src={songPlaying.album.images[0].url}/>
                            </div>
                            <div className="line-clamp-2">
                                <h1 className="text-textPrimary line-clamp-2 font-bold">{songPlaying.name}</h1>
                                <p className="text-darkPrimary text-xs text-bold">{songPlaying.artists[0].name}</p>
                            </div>
                        </div>   
                        }
                        
                    </div>
                    <div className="h-full flex flex-col">
                        <div className="flex mt-2 flex-row w-full content-end justify-center gap-10">
                            <svg  className="skipButton" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 1H6V7L12 1H14V15H12L6 9V15H2V1Z" fill="#FFFFFF"/>
                            </svg>
                            
                            <svg onClick={onToggle} fill="#000000" className={isPlaying ? 'h-6 p-1 h-9 bg-white rounded-full duration-75 cursor-pointer' : 'playButton'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {
                                    isPlaying ?
                                    <>
                                <path className="translate-y-1 translate-x-1" d="M7 1H2V15H7V1Z" fill="#000000"/>
                                <path className="translate-y-1 translate-x-1 " d="M14 1H9V15H14V1Z" fill="#000000"/>
                                    </>
                                    :
                                <path className="pausePath" d="M21,21H3L12,3Z"/>
                                }
                            </svg>
                            <svg  className="skipButton second" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="color-#FFFFFFF"  d="M2 1H6V7L12 1H14V15H12L6 9V15H2V1Z" fill="#FFFFFF"/>
                            </svg>
                        </div>
                            <div className="w-full grow">
                                <div className="w-full h-full flex gap-2 items-center align-center justify-center">
                                <p className="text-textPrimary text-xs font-bold">{useMemo(() => calculateCurrentStamp(currentSongMs), [currentSongMs])}</p>
                                <input type="range" min="1" max={songMs} value={currentSongMs} class="rangeSlider"/>
                                <p className="text-textPrimary text-xs font-bold">{useMemo(() => calculateCurrentStamp(songMs), [songMs])}</p>
                                </div>
                            </div>
                        <div>
                        
                        </div>
                    </div>
                    <div className="h-full">
                        <div className="mt-5 flex flex-row content-end justify-center items-center gap-5" >
                        <svg className="volumeButton" viewBox="0 0 24 24" fill="FFFFFF" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.00299 11.7155C2.04033 9.87326 2.059 8.95215 2.67093 8.16363C2.78262 8.0197 2.9465 7.8487 3.08385 7.73274C3.83639 7.09741 4.82995 7.09741 6.81706 7.09741C7.527 7.09741 7.88197 7.09741 8.22035 7.00452C8.29067 6.98522 8.36024 6.96296 8.4289 6.93781C8.75936 6.81674 9.05574 6.60837 9.64851 6.19161C11.9872 4.54738 13.1565 3.72527 14.138 4.08241C14.3261 4.15088 14.5083 4.24972 14.671 4.37162C15.5194 5.00744 15.5839 6.48675 15.7128 9.44537C15.7606 10.5409 15.7931 11.4785 15.7931 12C15.7931 12.5215 15.7606 13.4591 15.7128 14.5546C15.5839 17.5132 15.5194 18.9926 14.671 19.6284C14.5083 19.7503 14.3261 19.8491 14.138 19.9176C13.1565 20.2747 11.9872 19.4526 9.64851 17.8084C9.05574 17.3916 8.75936 17.1833 8.4289 17.0622C8.36024 17.037 8.29067 17.0148 8.22035 16.9955C7.88197 16.9026 7.527 16.9026 6.81706 16.9026C4.82995 16.9026 3.83639 16.9026 3.08385 16.2673C2.9465 16.1513 2.78262 15.9803 2.67093 15.8364C2.059 15.0478 2.04033 14.1267 2.00299 12.2845C2.00103 12.1878 2 12.0928 2 12C2 11.9072 2.00103 11.8122 2.00299 11.7155Z" fill="#1C274C"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4895 5.55219C19.7821 5.29218 20.217 5.33434 20.4608 5.64635L19.931 6.11713C20.4608 5.64635 20.4606 5.64602 20.4608 5.64635L20.4619 5.6477L20.4631 5.64921L20.4658 5.65275L20.4727 5.66184C20.4779 5.6688 20.4844 5.67756 20.4921 5.68814C20.5075 5.70929 20.5275 5.73772 20.5515 5.77358C20.5995 5.84529 20.6635 5.94667 20.7379 6.07889C20.8868 6.34345 21.077 6.73092 21.2644 7.25038C21.6397 8.29107 22 9.85136 22 12.0002C22 14.1491 21.6397 15.7094 21.2644 16.7501C21.077 17.2695 20.8868 17.657 20.7379 17.9216C20.6635 18.0538 20.5995 18.1552 20.5515 18.2269C20.5275 18.2627 20.5075 18.2912 20.4921 18.3123C20.4844 18.3229 20.4779 18.3317 20.4727 18.3386L20.4658 18.3477L20.4631 18.3513L20.4619 18.3528C20.4616 18.3531 20.4608 18.3541 19.931 17.8833L20.4608 18.3541C20.217 18.6661 19.7821 18.7083 19.4895 18.4483C19.1983 18.1895 19.1578 17.729 19.3977 17.417C19.3983 17.4163 19.3994 17.4148 19.4009 17.4127C19.4058 17.406 19.4154 17.3925 19.4291 17.372C19.4565 17.3311 19.5003 17.2625 19.5552 17.1649C19.6649 16.9698 19.8195 16.6587 19.977 16.2221C20.2913 15.3508 20.6207 13.9695 20.6207 12.0002C20.6207 10.0309 20.2913 8.64968 19.977 7.77836C19.8195 7.34181 19.6649 7.03066 19.5552 6.8356C19.5003 6.73802 19.4565 6.66934 19.4291 6.62845C19.4154 6.608 19.4058 6.59449 19.4009 6.58778C19.3994 6.58561 19.3983 6.58416 19.3977 6.5834C19.3977 6.5834 19.3977 6.58341 19.3977 6.5834" fill="#1C274C"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7571 8.41595C18.0901 8.21871 18.51 8.34663 18.6949 8.70166L18.0921 9.0588C18.6949 8.70166 18.6948 8.70134 18.6949 8.70166L18.6956 8.70295L18.6963 8.70432L18.6978 8.7073L18.7014 8.71428L18.7102 8.73227C18.7169 8.74607 18.7251 8.76348 18.7345 8.78457C18.7533 8.82676 18.7772 8.88363 18.8042 8.95574C18.8584 9.10004 18.9251 9.3049 18.99 9.57476C19.1199 10.115 19.2415 10.9119 19.2415 12.0003C19.2415 13.0888 19.1199 13.8857 18.99 14.4259C18.9251 14.6958 18.8584 14.9007 18.8042 15.045C18.7772 15.1171 18.7533 15.1739 18.7345 15.2161C18.7251 15.2372 18.7169 15.2546 18.7102 15.2684L18.7014 15.2864L18.6978 15.2934L18.6963 15.2964L18.6956 15.2978C18.6954 15.2981 18.6949 15.299 18.0921 14.9419L18.6949 15.299C18.51 15.6541 18.0901 15.782 17.7571 15.5847C17.427 15.3892 17.3063 14.9474 17.4846 14.5938L17.4892 14.5838C17.4955 14.5697 17.5075 14.5415 17.5236 14.4987C17.5557 14.4132 17.6039 14.2688 17.6539 14.0606C17.7539 13.6448 17.8622 12.9709 17.8622 12.0003C17.8622 11.0298 17.7539 10.3559 17.6539 9.94007C17.6039 9.73193 17.5557 9.58748 17.5236 9.50197C17.5075 9.45918 17.4955 9.43102 17.4892 9.41691L17.4846 9.40687C17.3063 9.05332 17.427 8.61152 17.7571 8.41595Z" fill="#1C274C"/>
                        </svg>
                        <input type="range" min="1" max="100" value="1" class="volumeSlider"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Playbar