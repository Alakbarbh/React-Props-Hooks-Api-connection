import React from 'react'
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../assets/css/home/home.scss';
import Logo from '../../assets/img/logo.png'


function Header() {
    return (
        
            <div>
                <Nav className='nav-item'>
                    <img src={Logo}/>
                    <NavItem>
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contact">
                            Contact
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/employee">
                            Employees
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        




    )
}

export default Header