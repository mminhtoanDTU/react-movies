import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FindMoive from '../../Logic/FindMovie';
import { EpisodeBox, EpisodeItem, EpisodeList, EpisodeTitle, Title, Video, VideoBox, Wrapper } from './MovieDetail.element';

function MovieDetail({ Data }) {
    let { param } = useParams();
    const currentMovie = FindMoive(Data, param);
    const [currentUrl, setCurrentUrl] = useState(currentMovie.episode[0].url);

    //scroll into video
    useEffect(() => {
        window.scrollTo(0, 80);
    }, [currentUrl]);

    const handleChangeEpisode = (index) => {
        setCurrentUrl(currentMovie.episode[index].url)
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
                        {currentMovie.episode.map((item, index) => (
                            <EpisodeItem key={item.episode} onClick={() => handleChangeEpisode(index)}>{item.episode}</EpisodeItem>
                        ))}
                    </EpisodeList>
                </EpisodeBox>}
            </Wrapper>
        </>
    );
}

export default MovieDetail;