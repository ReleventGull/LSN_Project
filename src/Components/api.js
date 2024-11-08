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