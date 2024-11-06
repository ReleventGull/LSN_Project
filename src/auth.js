let client_id = 'b753c8e4025041c5b2709dbdf7de6e43';
let client_secret = '0347d924fb8844a48a180f32c2e61175'
var redirect_uri = 'http://localhost:3000';


var scope = 'user-read-private user-read-email use-read-playback-state user-modify-playback-state';

var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);


export const redirectUser = () => {
    console.log(url)
    window.location.href = url;
}

