import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {NavLink} from "react-router-dom";

const UserMenu = ({user}) => {
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Hello, {user.username}!
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    <NavLink to='/track_history'>Track History</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};
export default UserMenu;
