import { json } from "react-router-dom";

let client_id = 'b753c8e4025041c5b2709dbdf7de6e43';

export const getRecentlyListened = async ({ token, limit }) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error bro", error);
    }
};

export const getTopArtists = async ({ token, limit }) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/top/artists/?limit=${limit}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error bro", error);
    }
};

export const getRecommendations = async ({ token, limit, aritistIds }) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/recommendations?limit=${limit}&seed_artists=${aritistIds.join(',')}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        console.log("Response here", response)
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error bro", error);
    }
};

export const playTrack = async({token, uri, deviceId}) => {
    try {
        const response = await fetch('https://api.spotify.com/v1/me/player/play', {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              uris: uri,
            }),
          })
    }catch(error){
        console.log("Error", error)
    }
}

export const playAlbumOrArtist = async({token, uri, deviceId}) => {
    console.log(uri)
    try {
        console.log('Playing at this device', deviceId)
        const response = await fetch('https://api.spotify.com/v1/me/player/play', {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              context_uri: uri,
            }),
          })
    }catch(error){
        console.log("Error", error)
    }
}
export const activateDevice = async({token, deviceId}) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/player`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                device_ids: [deviceId],
                play: true
            })
        })
        return response
    }catch(error){
        console.log("Error", error)
    }
}

export const getPlaybackState = async ({token}) => {
    try{
        const response = await fetch(`https://api.spotify.com/v1/me/player`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => {
            if(result.ok) {
                return result.text().then(body => {
                    if(body) {
                        return JSON.parse(body)
                    }
                    return {}
                })
            }
        })
        return response
    }catch(error) {
        console.error("Error fetching playback", error)
        return []
    }
}

export const getArtistAlbums = async({id, token}) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${id}/albums`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
 
        )
        const data = response.json()
        return data
    }catch(error) {
        console.error('error fetching artists albums', error)
    }
}

export const getAlbumTracks = async({id, token}) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/albums/${id}/tracks`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
)
        const data = response.json()
        return data
    }catch(error) {
        console.error('error fetching artists albums', error)
    }
}

export const checkIfTrackIsLiked = async ({id, token}) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/tracks/contains?ids=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    }catch(error) {
        console.error("Error checking if track is liked", error)

    }
}

export const likeTrack = async({token, id}) => {
    console.log("ID HERE", id)
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/tracks`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                ids: [id]
            })
        }).then(response => {
            if(response.ok) {
                return response.text().then(body => {
                    if(!body) {
                        return response
                    }else {
                        return body.json()
                    }
                })
            }
        })
        return response
    }catch(error) {
        console.error("There was an error liking the track", error)
    }
}

export const removeLikedTrack = async({token, id}) => {
    
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/tracks`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                ids: [id]
            })
        }).then(result => {
            if(result.ok) {
                return result.text().then(body => {
                    if(body) {
                        return body
                    }else {
                        return result
                    }
                })
            }
        })
        return response
    }catch(error) {
        console.error("There was an error liking the track", error)
    }
}