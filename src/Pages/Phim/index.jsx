import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../actions/movies';
import ShowListHome from '../../components/ShowListHome/ShowListHome';
import Loading from '../../components/Loading'
import { useState } from 'react';

function Phim() {
    const [isLoading, setIsLoading] = useState(true);
    const moviesList = useSelector(state => state.movies.listMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        const timeLoad = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timeLoad)
    }, [])

    useEffect(() => {
        dispatch(fetchMovie());
    }, [dispatch])

    if (isLoading) return <Loading />
    return (
        <>
            <ShowListHome Data={moviesList.phimbo} TitleTop={'PHIM BỘ MỚI'} LinkTo={'phimbo'}></ShowListHome>
            <ShowListHome Data={moviesList.phimle} TitleTop={'PHIM Lẻ MỚI'} LinkTo={'phimle'}></ShowListHome>
            <ShowListHome Data={moviesList.phimhoathinh} TitleTop={'PHIM hoạt hình MỚI'} LinkTo={'phimhoathinh'}></ShowListHome>
            <ShowListHome Data={moviesList.phimchieurap} TitleTop={'PHIM chiếu rạp MỚI'} LinkTo={'phimchieurap'}></ShowListHome>
        </>
    );
}

export default Phim;