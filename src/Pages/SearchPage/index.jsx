import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FormatString from '../../Logic/FormatString';

import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../actions/movies';
import { Loading, ShowList } from '../../components';
import { SearchMovie } from '../../Logic/SearchMovie';
import styled from 'styled-components';

function SearchPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [listSearched, setListSearched] = useState([]);
    const [query, setQuery] = useState('');

    const moviesList = useSelector(state => state.movies.listMovies);
    let { search } = useLocation();
    //fetch list
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovie());
    }, [dispatch])
    //get query
    useEffect(() => {
        const queri = new URLSearchParams(search);
        const queryMovie = FormatString(queri.get('q'));
        setQuery(queryMovie);
    })
    //
    useEffect(() => {
        setIsLoading(true);
        const newList = SearchMovie(moviesList, query);
        setListSearched(newList);
        const setLoad = () => setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        setLoad();
        return clearTimeout(setLoad)
    }, [query]);

    if (isLoading) return <Loading />
    return (
        <>
            {!listSearched.length ?
                <Text>Tiếc quá đi 😥 hổng có phim bạn cần tìm rồi.</Text> :
                <ShowList Data={listSearched} TitleTop={`Kết quả tìm kiếm cho: ${query}`} />
            }
        </>
    );
}

const Text = styled.h2`
    color: #F1B722;
    text-align: center;
    font-size: 20px;
    margin-top: 30px;
`

export default SearchPage;