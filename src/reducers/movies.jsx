let initialState = {
    listMovies: [],
    loading: false
}
const SET_DATA = 'SET_DATA';

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                listMovies: action.payload
            }
        default:
            return state;
    }
}

export default moviesReducer;