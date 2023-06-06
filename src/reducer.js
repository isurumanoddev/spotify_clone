export const initialState = {
    user:null
}

const reducer = (state,action) => {
    switch (action.type) {
        case "as":
            return{
                state
            }
        default:
            return state

    }
}

export default reducer;