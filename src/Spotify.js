export const authEndpoint = "https://accounts.spotify.com/authorize/"

const redirectUri = "https://localhost:3000/"

const clientID = "a48b0f48a8b447428cc78baf0484b766"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",

]

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
