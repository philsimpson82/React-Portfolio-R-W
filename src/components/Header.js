import { useState } from "react";
import { Nav, Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import RandWLogo from '../app/assets/img/logo_icon_rest_wellness.jpg';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <Navbar dark color='success' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={RandWLogo} alt='restandwellness logo' className='float-start' />
                {/*<h1 className='mt-3'>Rest & Wellness</h1> */}
            </NavbarBrand>
            <NavbarToggler onClick={() => setNavbarOpen(!navbarOpen)} />
            <Collapse isOpen={navbarOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            Home
                        </NavLink>    
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='services'>
                            Services
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='gifts'>
                            Gifts
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='about'>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='contact'>
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;