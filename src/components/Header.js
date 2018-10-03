import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <header className="fixed-top">
    <nav className="navbar navbar-toggleable navbar-expand-lg navbar-dark w-100">
      <a className="navbar-brand" href="#">
        <div className="roraimalogo">
          <img
            className="img-fluid w-100"
            src="img/heather.jpg"
            alt="Roraima Logo"
          />
        </div>
      </a>

      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars fa-lg" style={{ color: 'white' }} />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link text-center" href="home.php">
              HOME
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-center"
              role="button"
              ref="#"
              id="navdrop1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              SERVICES
            </a>
            <div className="dropdown-menu" aria-labelledby="navdrop1">
              <a
                className="dropdown-item text-center"
                href="regionalTimetable.php"
              >
                REGIONAL
              </a>
              <a
                className="dropdown-item text-center"
                href="InternationalTimetable.php"
              >
                INTERNATIONAL
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-center"
              role="button"
              href="#"
              id="navdrop2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              THE COMPANY
            </a>
            <div className="dropdown-menu" aria-labelledby="navdrop2">
              <a className="dropdown-item text-center" href="history.php">
                HISTORY
              </a>
              <a className="dropdown-item text-center" href="staff.php">
                STAFF
              </a>
              <a className="dropdown-item text-center" href="fleet.php">
                FLEET
              </a>
              <a className="dropdown-item text-center" href="globalone.php">
                GLOBALONE
              </a>
              <a className="dropdown-item text-center" href="vatsim.php">
                VATSIM
              </a>
              <a className="dropdown-item text-center" href="fundaroraima.php">
                FUNDARORAIMA
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-center"
              role="buttom"
              href="#"
              id="navdrop3"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              WORK
            </a>
            <div className="dropdown-menu" aria-labelledby="navdrop3">
              <a className="dropdown-item text-center" href="joinus.php">
                JOIN US
              </a>
              <a className="dropdown-item text-center" href="careers.php">
                CAREERS
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-center"
              role="buttom"
              href="#"
              id="navdrop3"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              RORAIMA GROUP
            </a>
            <div className="dropdown-menu dmenu" aria-labelledby="navdrop3">
              <a className="dropdown-item text-center" href="roraima-group.php">
                ABOUT US
              </a>
              <a className="dropdown-item text-center" href="tucan-airways.php">
                TUCAN AIRWAYS
              </a>
              <a className="dropdown-item text-center" href="roraima-cargo.php">
                RORAIMA CARGO
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center" href="contact.php">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header
