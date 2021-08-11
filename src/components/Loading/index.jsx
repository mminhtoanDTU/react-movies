import React from 'react';
import './loading.scss';

function Loading(props) {
    return (
        <>
            <div class="loading">
                <div class="bounceball"></div>
                <div class="text">NOW LOADING</div>
            </div>

        </>
    );
}

export default Loading;