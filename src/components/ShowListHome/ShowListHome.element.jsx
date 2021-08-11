import { Rate } from "antd";
import { FaTags } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const Wrapper = styled.div`
    margin-top: 50px;
    width: 100%;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
`;

export const Title = styled.span`
    color: #F1B722;
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
`;

export const TextSub = styled(Link)`
    color: #888;
    font-size: 15px;
    &:hover {
        color: #fff;
    }
`;

export const Content = styled.div`
    
`;

export const Cards = styled.div`
    --column: 1;
    --spacing: 15px;
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(-1 * var(--spacing));
`;

export const Card = styled.div`
    width: calc(calc(100% / var(--column)) - var(--spacing));
    margin-top: 10px;
    margin-bottom: 40px;
    margin-left: var(--spacing);
    display: flex;
    flex-direction: column;
    padding: 0 var(--spacing);
    @media screen and (min-width: 768px) {
        --column: 2;
    }
    @media screen and (min-width: 1024px) {
        --column: 4;
    }
`;

export const CardImage = styled(Link)`
    width: 200px;
    height: 300px;
    margin: 0 auto 30px;
    border-radius: 5px;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CardRate = styled(Rate)`
    font-size: 13px;
    margin-bottom: 8px;
    z-index: 1;
`;

export const CardTitle = styled(Link)`
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 5px;
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    &:hover {
        color: #fff;
        text-decoration: underline;
    }
`;

export const CardCategory = styled.span`
    font-size: 6px;
    font-weight: 300;
    text-decoration: underline;
    color: #ddd;
    float: left;
    display:flex;
    align-item: center;
    margin-top: auto;
    transition: color .2s linear;
    &:hover {
        cursor: pointer;
        color: #fff;
    }
`;

export const CardIcon = styled(FaTags)`
    font-size: 15px;
    margin-right: 5px;
    color: #F1B722;
`;
