let strokeColor = '#6C6D7A'
const arr = [
    {
        id: 1,
        name: 'Home',
        url: '',
        navpath: '/app',
        fillColor: strokeColor,
        paths: [
            {
                d: 'M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274',
                stroke: strokeColor,
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
        url: 'playlists',
        navpath: '/app/playlists',
        fillColor: strokeColor,
        paths: [
            {
                d: "M7 3h2v18H7zM4 3h2v18H4zm6 0h2v18h-2zm9.062 17.792-6.223-16.89 1.877-.692 6.223 16.89z"
	        },


        ]
    }
]

export default arr