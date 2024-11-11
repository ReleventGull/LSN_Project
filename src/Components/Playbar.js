
const Playbar = () => {
    return (
        <div className="bg-white h-20">
                <div className="grid grid-cols-[1fr_1.5fr_1fr] w-full h-full bg-playbar">
                    <div className="h-full">
                        
                    </div>
                    <div className="h-full">
                        <div className="flex mt-2 flex-row w-full content-end justify-center gap-10">
                            <svg  className="skipButton" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 1H6V7L12 1H14V15H12L6 9V15H2V1Z" fill="#FFFFFF"/>
                            </svg>
                            
                            <svg fill="#000000" className="h-6 p-1 h-9 rotate-90 bg-white rounded-full" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path className="-translate-y-0.5" d="M21,21H3L12,3Z"/>
                            </svg>
                            
                            <svg  className="skipButton second" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="color-#FFFFFFF"  d="M2 1H6V7L12 1H14V15H12L6 9V15H2V1Z" fill="#FFFFFF"/>
                            </svg>
                        
                        </div>
                            <div className="w-full">
                                <div className="w-full">
                                <input type="range" min="1" max="100" value="1" class="rangeSlider"/>
                                </div>
                            </div>
                        <div>
                        
                        </div>
                    </div>
                    <div className="h-full">

                    </div>
                </div>
        </div>
    )
}
export default Playbar