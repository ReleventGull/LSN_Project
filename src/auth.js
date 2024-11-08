let client_id = 'b753c8e4025041c5b2709dbdf7de6e43';
let client_secret = '0347d924fb8844a48a180f32c2e61175'
var redirect_uri = 'http://localhost:3000/callback';


var scope = 'user-read-recently-played user-read-email user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-follow-read user-follow-modify';

var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);


export const redirectUser = () => {
    console.log(url)
    window.location.href = url;
}

export const getUserProfile = async(token) => {
    try {
        console.log("Token on request", token)
        const response = await fetch('https://api.spotify.com/v1/me', {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response
    }catch(error) {
        throw error
    }
}

const revokeToken = async () => {

    try {
        const response = await fetch('https://accounts.spotify.com/api/token/revoke', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `token=${accessToken}`, // The token you want to revoke
        });

        if (response.ok) {
            console.log('Token successfully revoked!');
        } else {
            console.error('Failed to revoke token:', response.statusText);
        }
    } catch (error) {
        console.error('Error revoking token:', error);
    }
};
