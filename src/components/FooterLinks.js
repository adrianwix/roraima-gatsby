import React from 'react'
import { withPrefix } from 'gatsby'

export default () => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-auto borderR">
        <a href="home.php">
          <img src={withPrefix('img/roraimafooter.png')} alt="Roraima" />
        </a>
        <p>
          <br />
          Email Us:
          <br />
          erujano@flyroraima.com
          <br />
          <br />
          Virtual HQ:
          <br />
          Simón Bolívar International Airport,
          <br />
          Vargas, Venezuela (CCS/SVMI)
        </p>
      </div>
      <div className="col-sm-4 col-lg-2">
        <a href="home.php#services">
          <h3>SERVICES</h3>
        </a>
        <a href="regionalTimetable.php">Regional Timetables</a>
        <br />
        <a href="internationalTimetable.php">International Timetables</a>
        <br />
      </div>

      <div className="col-sm-4 col-lg-2">
        <a href="home.php#thecompany">
          <h3>THE COMPANY</h3>
        </a>
        <a href="history.php">History</a>
        <br />
        <a href="staff.php">Staff</a>
        <br />
        <a href="fleet.php">Fleet</a>
        <br />
        <a href="globalone.php">GlobalOne</a>
        <br />
        <a href="vatsim.php">Vatsim</a>
        <br />
        <a href="fundaroraima.php">Fundaroraima</a>
        <br />
      </div>

      <div className="col-sm-4 col-lg-2 borderR">
        <a href="careers.php">
          <h3>CAREERS</h3>
        </a>
        <a href="joinus.php">Join Us</a>
        <br />
        <br />
        <a href="roraima-group.php">
          <h3>RORAIMA GROUP</h3>
        </a>
        <a href="tucan-airways.php">Tucan Airways</a>
        <br />
        <a href="roraima-cargo.php">Roraima Cargo</a>
        <br />
        <br />
        <a href="contact.php">
          <h3>CONTACT</h3>
        </a>
        <a href="https://www.instagram.com/flyroraima_va/?hl=es">Instagram</a>
        <br />
        <a href="https://twitter.com/FlyroraimaVa">Twitter</a>
        <br />
        <a href="https://www.facebook.com/RoraimaVA/">Facebook</a>
        <br />
        <br />
        <a href="privacy.php">
          <h3>PRIVACY AND POLICY</h3>
        </a>
      </div>
    </div>
  )
}
