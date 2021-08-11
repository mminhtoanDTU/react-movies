import { Link } from "react-router-dom";
import styled from "styled-components"

export const SeachContain = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    max-width: 1000px;
    margin: 20px auto 10px;
    
`;

export const SearchInput = styled.input`
    padding: 15px;
    color: #333;
    outline: none;
    border: none;
    width: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    
`;

export const SearchButton = styled(Link)`
    width: 100px;
    outline: none;
    border: none;
    font-size: 15px;
    background-color: #3898ec;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px; 
    text-align: center;
    line-height: 43px;
    &:hover {
        cursor: pointer;
        background-color: #3187d3;
        color: #fff;
    }
    
`;
