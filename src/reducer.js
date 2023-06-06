export const initialState = {
    user: null,
    playlists: [],
    is_playing: false,
    item: null,
    token:null
}

const reducer = (state, action) => {
    console.log("action : ", action)
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
        default:
            return state

    }
}

export default reducer;