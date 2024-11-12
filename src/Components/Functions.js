const sortGenres = (tracks) => {
    let hashMap = {}
    console.log(tracks)
    for (let track of tracks) {
        for(let genre of track.genres) {
            hashMap[genre] ? hashMap[genre] ++ : hashMap[genre] = 1
        }
    }
    let arr = []
    let noOthers = false
    for(let i = 1; i <= 3; i++) {
        let count = 1
        let currentGenre = ''
        for (let genre in hashMap) {
            if (noOthers) break;
            if(hashMap[genre] > count) {
                count = hashMap[genre]
                currentGenre = genre
            }
        }
        if(currentGenre){
            arr.push(currentGenre)
            delete hashMap[currentGenre]
        }else {
            let randomGenre = Object.keys(hashMap)[Math.floor(Math.random() * Object.keys(hashMap).length)]
            delete hashMap[randomGenre]
            arr.push(randomGenre)
        }
    }
    return arr
}

module.exports = {
    sortGenres
}