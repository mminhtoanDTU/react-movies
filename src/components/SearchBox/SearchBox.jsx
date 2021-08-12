import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import {
    SeachContain,
    SearchInput,
    SearchButton
} from './SearchBox.element';

function SearchBox() {
    const history = useHistory();
    const [name, setName] = useState('');
    const handleChangeInput = (e) => {
        const data = e.target.value;
        setName(data);
    }
    const handleKeyDown = (e) => {
        if (e.charCode === 13) {
            history.push(`/phim/search?q=${name.trim()}`);
        }
    }


    return (
        <>
            <SeachContain>
                <SearchInput
                    value={name}
                    onChange={(e) => handleChangeInput(e)}
                    placeholder='Bạn muốn tìm phim gì'
                    onKeyPress={(e) => handleKeyDown(e)}
                />
                <SearchButton
                    to={name.length > 0 ? `/phim/search?q=${name.trim()}` : '#'}
                >
                    Tìm kiếm
                </SearchButton>
            </SeachContain>
        </>
    );
}

export default SearchBox;