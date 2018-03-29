import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import './SearchBar.css';


class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

    handleChange = (e) => {
      this.setState({search: e.target.value});
    } 

    render() {
      return (
       <div>
          <Navbar color="faded" light expand="md">
            <div>
              <NavbarBrand className="Nav" href="/">
                <i className="fab fa-instagram fa-2x Nav_icon"></i>
                <img className="Nav_Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/640px-Instagram_logo.svg.png" />
              </NavbarBrand>
            </div>
            <Nav className="mx-auto" navbar>
              <form>
                <input className="Nav_Form" placeholder='Search' value={this.state.search} onChange={this.handleChange} />
              </form>
            </Nav>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/"><i className="far fa-compass fa-2x"></i></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/"><i className="far fa-heart fa-2x"></i></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/"><i className="far fa-user fa-2x"></i></NavLink>
            </NavItem>
            </Nav>
        </Navbar>
      </div>
      )
    }


}

export default SearchBar;