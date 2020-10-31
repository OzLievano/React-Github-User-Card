import React from 'react'
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar color="dark" expand="md">
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/" style={{textDecoration:'none', color:"#ffffff"}}>UserCard</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar;
