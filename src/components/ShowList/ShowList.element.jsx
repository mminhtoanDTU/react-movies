import styled from "styled-components";
import { FaTags } from 'react-icons/fa';
import { Pagination, Rate } from 'antd';
import { Link } from "react-router-dom";

export const Title = styled.h1`
    text-transform: uppercase;
    color: #F1B722;
    font-size: 25px;
    margin-top: 40px;
`;

export const Content = styled.div`
    min-height: 100vh;
`;

export const ListCard = styled.div`
    --column: 1;
    --spacing: 15px;
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(-1 * var(--spacing))
`;

export const CardItem = styled.div`
    /* width: 100%; */
    width: calc(calc(100% / var(--column)) - var(--spacing));
    margin-top: 50px;
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

export const CardImg = styled(Link)`
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
    @media screen and (max-width: 1023px) {
        text-align: center;
    }
    
`;

export const CardTitle = styled(Link)`
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
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
    @media screen and (max-width: 1023px) {
        text-align: center;
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

export const Icon = styled(FaTags)`
    font-size: 15px;
    margin-right: 5px;
    color: #F1B722;
`;

export const Paginations = styled(Pagination)`
    font-size: 16px;
    max-width: fit-content;
    margin: 40px auto 0;
    padding-bottom: 20px;

`
