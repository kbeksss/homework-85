import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';
import {useSelector} from "react-redux";
import UserMenu from "./UserMenu";
import AnonymousMenu from "./AnonymousMenu";

const Toolbar = () => {
    const user = useSelector(state => state.users.user);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Tracks</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={RouterNavLink} to="/" exact>Home</NavLink>
                </NavItem>
                {user ? (
                    <UserMenu user={user}/>
                ) : (
                    <AnonymousMenu/>
                )}
            </Nav>
        </Navbar>
    );
};

export default Toolbar;
