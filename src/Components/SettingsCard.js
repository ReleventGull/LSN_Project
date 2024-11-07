

const SettingsCard = ({card}) => {
    return (
        <div className="h-12 p-1 w-12 rounded-md bg-backgroundThird">
        <svg className='h-full'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {
                card.paths.map((item, index) =>
                    <path key={index} d={item.d} stroke={item.stroke} strokeWidth={item.StrokeWidth} strokeLinecap={item.strokeLinecap}/>
                )
            }
        </svg>
        </div>
    )
}

export default SettingsCard