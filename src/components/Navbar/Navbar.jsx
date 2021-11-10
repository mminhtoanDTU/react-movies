import React, { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useRouteMatch } from 'react-router-dom';
import {
    Nav, NavClose, NavContain, NavIcon, NavItem,
    NavLinks, NavList, NavLogo
} from './Navbar.elements';

function Navbar(props) {
    const [isOpenNav, setIsOpenNav] = useState(false);
    const match = useRouteMatch();
    const menuRef = useRef();
    const openRef = useRef();

    useEffect(() => {
        if (isOpenNav) {
            document.addEventListener('click', handleClickOutside);

        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpenNav])

    const handleClickOutside = (e) => {
        if (menuRef.current.contains(e.target) || openRef.current.contains(e.target)) {
            return;
        }
        setIsOpenNav(false);
    }

    const handleIconClick = () => {
        setIsOpenNav(!isOpenNav);
    }

    return (
        <>
            <NavContain>
                <Nav>
                    <NavLogo to={match.url}>Toàn Phim Hay</NavLogo>
                    <NavIcon ref={openRef} onClick={handleIconClick}>
                        <FaBars />
                    </NavIcon>
                    <NavList ref={menuRef} collapse={isOpenNav}>
                        <NavClose onClick={handleIconClick} />
                        <NavItem onClick={handleIconClick}>
                            <NavLinks
                                exact
                                to={`${match.url}`}
                                activeStyle={{ color: '#fff', borderBottom: '3px solid #f1b722' }}
                            >
                                Phim mới
                            </NavLinks>
                        </NavItem>
                        <NavItem onClick={handleIconClick}>
                            <NavLinks
                                exact
                                to={`/theloai/phimle`}
                                activeStyle={{ color: '#fff', borderBottom: '3px solid #f1b722' }}
                            >
                                Phim lẻ
                            </NavLinks>
                        </NavItem>
                        <NavItem onClick={handleIconClick}>
                            <NavLinks
                                exact
                                to={`/theloai/phimbo`}
                                activeStyle={{ color: '#fff', borderBottom: '3px solid #f1b722' }}
                            >
                                Phim bộ
                            </NavLinks>
                        </NavItem>
                        <NavItem onClick={handleIconClick}>
                            <NavLinks
                                exact
                                to={`/theloai/phimhoathinh`}
                                activeStyle={{ color: '#fff', borderBottom: '3px solid #f1b722' }}
                            >
                                Phim hoạt hình
                            </NavLinks>
                        </NavItem>
                        <NavItem onClick={handleIconClick}>
                            <NavLinks
                                exact
                                to={`/theloai/phimchieurap`}
                                activeStyle={{ color: '#fff', borderBottom: '3px solid #f1b722' }}
                            >
                                Phim chiếu rạp
                            </NavLinks>
                        </NavItem>
                    </NavList>

                </Nav>
            </NavContain>
        </>
    );
}

export default Navbar;