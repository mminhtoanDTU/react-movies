import axios from "axios";
const API_MOIVE = 'https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR0iqL6-Rw3oEryVIh2nSoSKpSEjn3KlA9GYaKjPpDO3zceHs-ql7BOLMPY';
const SET_DATA = 'SET_DATA'

export const setMovies = listMovie => ({
    type: SET_DATA,
    payload: listMovie
})

export const fetchMovie = () => async (dispatch) => {
    const res = await axios.get(API_MOIVE)
    dispatch(setMovies(res.data.phim));
}
