import React from 'react'
import { Link, withPrefix } from 'gatsby'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
/* eslint-disable jsx-a11y/anchor-is-valid*/
class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <header className="fixed-top">
        <nav className="navbar navbar-toggleable navbar-expand-lg navbar-dark w-100">
          <Link className="navbar-brand" to="/">
            <div className="roraimalogo">
              <img
                className="img-fluid w-100"
                src={withPrefix('img/headerBrand.jpg')}
                alt="Roraima Logo"
              />
            </div>
          </Link>
          <NavbarToggler onClick={this.toggle}>
            <i className="fas fa-bars fa-lg" style={{ color: 'white' }} />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="navbar-nav ml-auto">
              <NavItem className={"text-center"}>
                <NavLink href="/">HOME</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="nav-link text-center" nav caret>
                  SERVICES
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    href={withPrefix("/regionalTimetable/")}
                    className="dropdown-item text-center"
                  >
                    REGIONAL
                  </DropdownItem>
                  <DropdownItem
                    href={withPrefix("/internationalTimetable/")}
                    className="dropdown-item text-center"
                  >
                    INTERNATIONAL
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="nav-link text-center" nav caret>
                  THE COMPANY
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    href={withPrefix("/history/")}
                    className="dropdown-item text-center"
                  >
                    HISTORY
                  </DropdownItem>
                  <DropdownItem
                    href={withPrefix("/staff/")}
                    className="dropdown-item text-center"
                  >
                    STAFF
                  </DropdownItem>
                  <DropdownItem
                    href={withPrefix("/fleet/")}
                    className="dropdown-item text-center"
                  >
                    FLEET
                  </DropdownItem>
                  <DropdownItem
                    href={withPrefix("/globalone/")}
                    className="dropdown-item text-center"
                  >
                    GLOBALONE
                  </DropdownItem>
                  <DropdownItem
                    href={withPrefix("/vatsim/")}
                    className="dropdown-item text-center"
                  >
                    VATSIM
                  </DropdownItem>
                  <DropdownItem
                    href={withPrefix("/fundaroraima/")}
                    className="dropdown-item text-center"
                  >
                    FUNDAROARAIMA
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="nav-link text-center" nav caret>
                  WORK
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    href={withPrefix("/joinus/")}
                    className="dropdown-item text-center"
                  >
                    JOIN US
                  </DropdownItem>
                  <DropdownItem
                    href={withPrefix("/careers/")}
                    className="dropdown-item text-center"
                  >
                    CAREERS
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="nav-link text-center" nav caret>
                  RORAIMA GROUP
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    href={withPrefix("/roraima-group/")}
                    className="dropdown-item text-center"
                  >
                    ABOUT US
                  </DropdownItem>
                  <DropdownItem
                    href={withPrefix("/tucan-airways/")}
                    className="dropdown-item text-center"
                  >
                    TUCAN AIRWAYS
                  </DropdownItem>
                  <DropdownItem
                    href={withPrefix("/roraima-cargo/")}
                    className="dropdown-item text-center"
                  >
                    RORAIMA CARGO
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className={"text-center"}>
                <NavLink href={withPrefix("/contact/")}>CONTACT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </nav>
      </header>
    )
  }
}

export default Header
