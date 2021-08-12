import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../actions/movies';
import { MovieDetail } from '../../components';
import Loading from '../../components/Loading';

function DetailPage() {
    const [isLoading, setIsLoading] = useState(true);
    const moviesList = useSelector(state => state.movies.listMovies);
    const dispatch = useDispatch();
    //set loader
    useEffect(() => {
        const setLoad = () => setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        setLoad();
        return clearTimeout(setLoad)
    }, [])
    //fetch api
    useEffect(() => {
        dispatch(fetchMovie());
    }, [dispatch])

    if (isLoading) return <Loading />
    return (
        <>
            <MovieDetail Data={moviesList} />
        </>
    );
}

export default DetailPage;