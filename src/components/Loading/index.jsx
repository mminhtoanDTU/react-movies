import React from 'react';
import './loading.scss';

function Loading(props) {
    return (
        <>
            <div class="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
}

export default Loading;