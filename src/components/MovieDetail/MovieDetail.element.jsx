import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
`
export const VideoBox = styled.div`
    width: 100%;
    height: 255px;
    background-color: #eee;
    @media screen and (min-width: 768px) {
        height: 360px;
    }
    
    @media screen and (min-width: 1024px) {
        width: 854px;
        height: 480px;
    }
`;
export const Video = styled.iframe`
    width: 100%;
    height: 100%;
`

export const Title = styled.h1`
    color: #fff;
    font-size: 1.9rem;
    margin-top: 35px;
    
`

export const EpisodeBox = styled.div`
    width: 100%;
    height: auto;
    @media screen and (min-width: 1024px) {
        width: 855px;
        margin: 0 auto;
    }
    
`;

export const EpisodeTitle = styled.h2`
    color: #92abb6;
    text-transform: uppercase;
    font-size: 20px;
    margin-top: 20px;
`;

export const EpisodeList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const EpisodeItem = styled.div`
    padding: 10px 20px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 20px;
    font-size: 15px;
    background-color: #3898ec;
    &:hover {
        cursor: pointer;
        background-color: #3289d4;
    }
`;
