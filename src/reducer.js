export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    top_artists: null,
    spotify: null,
    token: null
    // token: "BQD6te8-5ekU1i-IzOYBw2C0sYYiv1rJ-xpzB9Zu_Y0rHFmLCZrvFAJpTUtMT8eIj4BYprIwArKP6FgSdbOmAA__hjTpa4lAkYeXLrPvOralOOzxbMAWBSoDqWNq9ZS5-owum3yZ8uxUueWRBfxQ70YkMbTTK7fO4WVvC7WW9rT6woI4_G87q9UhJAVZbPcZEGbsLfBiJcJ6Ly_taAtP"
}

const reducer = (state, action) => {

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_Token":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLIST":
            return {
                ...state,
                playlists: action.playlists,
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }


        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };


        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };


        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        default:
            return state

    }
}

export default reducer;