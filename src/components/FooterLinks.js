import React from 'react'
import { withPrefix } from 'gatsby'

const FooterLinks = () => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-auto borderR">
        <a href={withPrefix("/")}>
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
        <a href={withPrefix("/#services/")}>
          <h3>SERVICES</h3>
        </a>
        <a href={withPrefix("/regionalTimetable/")}>Regional Timetables</a>
        <br />
        <a href={withPrefix("/internationalTimetable/")}>International Timetables</a>
        <br />
      </div>

      <div className="col-sm-4 col-lg-2">
        <a href={withPrefix("/#thecompany/")}>
          <h3>THE COMPANY</h3>
        </a>
        <a href={withPrefix("/history/")}>History</a>
        <br />
        <a href={withPrefix("/staff/")}>Staff</a>
        <br />
        <a href={withPrefix("/fleet/")}>Fleet</a>
        <br />
        <a href={withPrefix("/globalone/")}>GlobalOne</a>
        <br />
        <a href={withPrefix("/vatsim/")}>Vatsim</a>
        <br />
        <a href={withPrefix("/fundaroraima/")}>Fundaroraima</a>
        <br />
      </div>

      <div className="col-sm-4 col-lg-2 borderR">
        <a href={withPrefix("/careers/")}>
          <h3>CAREERS</h3>
        </a>
        <a href={withPrefix("/joinus/")}>Join Us</a>
        <br />
        <br />
        <a href={withPrefix("/roraima-group/")}>
          <h3>RORAIMA GROUP</h3>
        </a>
        <a href={withPrefix("/tucan-airways/")}>Tucan Airways</a>
        <br />
        <a href={withPrefix("/roraima-cargo/")}>Roraima Cargo</a>
        <br />
        <br />
        <a href={withPrefix("/contact/")}>
          <h3>CONTACT</h3>
        </a>
        <a href="https://www.instagram.com/flyroraima_va/?hl=es">Instagram</a>
        <br />
        <a href="https://twitter.com/FlyroraimaVa">Twitter</a>
        <br />
        <a href="https://www.facebook.com/RoraimaVA/">Facebook</a>
        <br />
        <br />
        <a href={withPrefix("/privacy/")}>
          <h3>PRIVACY AND POLICY</h3>
        </a>
      </div>
    </div>
  )
}

export default FooterLinks