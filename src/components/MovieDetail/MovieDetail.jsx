import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FindMoive from '../../Logic/FindMovie';
import { EpisodeBox, EpisodeItem, EpisodeList, EpisodeTitle, Title, Video, VideoBox, Wrapper } from './MovieDetail.element';
import Loadings from '../Loading'

function MovieDetail() {
    const [currentUrl, setCurrentUrl] = useState('https://www.youtube.com/embed/RJGFMvv0ySY');
    const [currentEpisode, setCurrentEpisode] = useState(1);

    let { param } = useParams();

    const currentMovie = FindMoive(Data, param);

    //scroll into video
    useEffect(() => {
        window.scrollTo(0, 80);
    });

    useEffect(() => {
        if (currentMovie.episode[0] !== undefined) {
            const getNewUrl = currentMovie.episode[currentEpisode - 1].url;
            setCurrentUrl(getNewUrl);

        }
    }, [currentEpisode])

    const handleChangeEpisode = (e) => {
        const numEpisode = (e.target.innerHTML).slice(0, 2);
        console.log(numEpisode);
        setCurrentEpisode(numEpisode);
    }

    return (
        <>
            <Wrapper>
                <VideoBox>
                    <Video
                        height={200}
                        src={currentUrl}
                        allowFullScreen={true}
                        frameBorder={0}>
                    </Video>
                </VideoBox>
                <Title>{currentMovie.title}</Title>
                {currentMovie.episode[0] === undefined ? '' : currentMovie.episode[0].episode === undefined ? <></> : <EpisodeBox>
                    <EpisodeTitle>Chọn tập phim</EpisodeTitle>
                    <EpisodeList>
                        {currentMovie.episode.map((item) => (
                            <EpisodeItem key={item.episode} dataSet={item.url} onClick={(e) => handleChangeEpisode(e)}>{item.episode}</EpisodeItem>
                        ))}

                    </EpisodeList>
                </EpisodeBox>}
            </Wrapper>
        </>
    );
}

export default MovieDetail;