import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FormatString from '../../Logic/FormatString';
import { SearchMovie } from '../../Logic/SearchMovie';
import { Title } from './SearchPage.element';
import Loadings from '../../components/Loading'


function SearchPage({ Data, Loading }) {
    const [listSearched, setListSearched] = useState([]);
    const [query, setQuery] = useState('');
    let { search } = useLocation();

    useEffect(() => {
        const query = new URLSearchParams(search);
        const queryMovie = FormatString(query.get('q'));
        setQuery(queryMovie);

    }, [query])

    useEffect(() => {
        async function getListSearched() {
            if (Data !== {}) {
                const dataSearched = await SearchMovie(Data, query);
                console.log('return ', dataSearched);
                setListSearched(dataSearched);
            }
        }
        getListSearched();
    }, []);

    return (
        <>
            <Title>Kết quả tìm kiếm cho: {query}</Title>
        </>
    );
}

export default SearchPage;