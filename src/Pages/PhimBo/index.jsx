import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../actions/movies';
import { Loading } from '../../components';
import ShowList from '../../components/ShowList/ShowList';

function PhimBo() {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const moviesList = useSelector(state => state.movies.listMovies);

    useEffect(() => {
        const timeLoad = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timeLoad)
    }, [])
    useEffect(() => {
        dispatch(fetchMovie());
    }, [dispatch])

    if (isLoading) return <Loading />
    return (
        <>
            <ShowList Data={moviesList.phimbo} TitleTop={'Phim bộ mới cập nhật'} />
        </>
    );
}

export default PhimBo;