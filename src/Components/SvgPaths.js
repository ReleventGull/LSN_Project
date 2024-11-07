let strokeColor = '#6C6D7A'
const arr = [
    {
        id: 1,
        name: 'Home',
        paths: [
            {
                d: 'M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274',
                stroke:strokeColor,
                strokeWidth: '1.5',
                strokeLingecap: 'round'
            },
            {
                d: 'M15 18H9',
                stroke: strokeColor,
                strokeWidth: '1.5',
                strokeLinecap: 'round'
            }
        ]
    },
    {
        id: 2,
        name: "Playlist",
        paths: [
            {
                d: "M11 14L3 14",
                stroke: strokeColor ,
                strokeWidth: "1.5" ,
                strokeLinecap:"round",
            },
            {
                d:"M11 18H3",
                stroke:strokeColor,
                strokeWidth:"1.5", 
                strokeLinecap:"round",
            },
            {
                d:"M18.875 14.1183C20.5288 15.0732 21.3558 15.5506 21.4772 16.2394C21.5076 16.4118 21.5076 16.5881 21.4772 16.7604C21.3558 17.4492 20.5288 17.9266 18.875 18.8815C17.2212 19.8363 16.3942 20.3137 15.737 20.0745C15.5725 20.0147 15.4199 19.9265 15.2858 19.814C14.75 19.3644 14.75 18.4096 14.75 16.4999C14.75 14.5902 14.75 13.6354 15.2858 13.1858C15.4199 13.0733 15.5725 12.9852 15.737 12.9253C16.3942 12.6861 17.2212 13.1635 18.875 14.1183Z",
                stroke:strokeColor,
                strokeWidth:"1.5"
            },
            {
                d:"M3 6L13.5 6M20 6L17.75 6",
                stroke:strokeColor,
                strokeWidth:"1.5" ,
                strokeLinecap:"round"
            },
            {
                d:"M20 10L9.5 10M3 10H5.25" ,
                stroke:strokeColor ,
                strokeWidth:"1.5" ,
                strokeLinecap:"round"
            }
        ]
    }
]

export default arr