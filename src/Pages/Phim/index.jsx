import React from 'react';
import ShowListHome from '../../components/ShowListHome/ShowListHome';

function Phim() {
    return (
        <>
            <ShowListHome TitleTop={'PHIM BỘ MỚI'} LinkTo={'phimbo'}></ShowListHome>
            <ShowListHome TitleTop={'PHIM Lẻ MỚI'} LinkTo={'phimle'}></ShowListHome>
            <ShowListHome TitleTop={'PHIM hoạt hình MỚI'} LinkTo={'phimhoathinh'}></ShowListHome>
            <ShowListHome TitleTop={'PHIM chiếu rạp MỚI'} LinkTo={'phimchieurap'}></ShowListHome>
        </>
    );
}

export default Phim;