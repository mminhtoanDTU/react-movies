import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../actions/movies';
import { Loading } from '../../components';
import ShowList from '../../components/ShowList/ShowList';

function PhimChieuRap() {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const moviesList = useSelector(state => state.movies.listMovies);

    useEffect(() => {
        const setLoad = () => setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        setLoad();
        return clearTimeout(setLoad)
    }, [])

    useEffect(() => {
        dispatch(fetchMovie());
    }, [dispatch])

    if (isLoading) return <Loading />
    return (
        <>
            <ShowList Data={moviesList.phimchieurap} TitleTop={'Phim Chiếu rạp mới cập nhật'} />
        </>
    );
}

export default PhimChieuRap;