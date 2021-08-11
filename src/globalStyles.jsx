import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-size: 62.5%;
        font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html {
        line-height: 1.15;
        scroll-behavior: smooth;
    }
    ul {
        list-style: none;
    }

    img {
        width: 100%;
        height: 100%;
        border-style: none;
    }
    a {
        text-decoration: none;
        color: currentColor;
    }

    p {
        margin-bottom: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 0;
    }

`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1111px;
    margin: 0 auto;

    @media screen and (max-width: 1023px) {
        padding-right: 30px;
        padding-left: 30px;
}
`;

export const Button = styled.button`
    border: ${({ bgc }) => `1px solid ${bgc}` || 'none'};
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    white-space: nowrap;
    color: ${({ color }) => (color || '#333')};
    background: ${({ bgc }) => (bgc || '#fff')};
    padding: 10px 20px; 
    font-size: 16px;
    transition: all .2 linear;

    &:hover {
        transition: all .3s ease-out;
        color: ${({ bgc }) => (bgc || '#333')};
        background: ${({ color }) => (color || '#fff')};
    }
    &:active {
        background: ${({ bgc }) => (bgc || '#fff')};
        color: ${({ color }) => (color || '#333')};
    }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`


export default GlobalStyle;