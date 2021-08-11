import { FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
const navHeightMobile = '60px';
const navHeightPC = '80px';
const colorPrimary = "#f1b722"

export const NavContain = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: ${navHeightMobile};
    background-color: #0c2738;
    z-index: 99;
    @media screen and (min-width: 1024px) {
        height:  ${navHeightPC};
    }
    
`

export const Nav = styled.nav`
    max-width: 1111px;
    margin: 0 auto;
`;

export const NavLogo = styled(Link)`
    padding-left: 30px;
    float: left;
    color: #fff;
    font-size: 1.5rem;
    line-height: ${navHeightMobile};
    @media screen and (min-width: 1024px) {
        line-height:  ${navHeightPC};
        padding-left: 0;
    }

    &:hover {
        color: ${colorPrimary}
    }
    
`;

export const NavIcon = styled.div`
    float: right;
    color: #fff;
    width: 60px;
    height: ${navHeightMobile};
    line-height: ${navHeightMobile};
    font-size: 1.4rem;
    padding-top: 5px;
    text-align: center;
    cursor: pointer;
    background-color: #081b27;
    @media screen and (min-width: 1024px) {
        display: none;
    }
    
`;

export const NavList = styled.ul`
    position: fixed;
    right: ${({ collapse }) => (collapse ? '-100%' : '0')};
    bottom: 0;
    top: 0;
    width: 300px;
    background-color: #081b27;
    margin: 0;
    color: #fff;
    padding: 50px;
    transition: all ease-in-out .4s;
    z-index: 9;
    @media screen and (min-width: 1024px) {
        position: static;
        background-color: transparent;
        padding: 0;
        width: auto;
        float: right;
        display: flex;
        align-items: center;
    }
`;

export const NavClose = styled(FaTimes)`
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 30px;
    cursor: pointer;
    @media screen and (min-width: 1024px) {
        display: none;
    }
    
`

export const NavItem = styled.li`
    @media screen and (min-width: 1024px) {
        margin-left: 45px;
    }
    
`;

export const NavLinks = styled(NavLink)`
    display: block;
    border-bottom: 1px solid rgba(141,158,172,.1);
    font-size: 1rem;
    font-weight: 500;
    color: #899ead;
    padding: 20px 0;
    transition: all .2s ease-in-out;

    &:hover {
        color: #fff;
        cursor: pointer;
    }
    @media screen and (min-width: 1024px) {
        height: ${navHeightPC};
    }
    
`;
