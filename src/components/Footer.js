import React from 'react'
import FooterLinks from './FooterLinks'
import Copyright from './Copyright'

export default () => {
  return (
    <section id="footer">
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-auto borderR">
            <a href="home.php">
              <img src="img\roraimafooter.png" alt="Roraima" />
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
          <FooterLinks />
        </div>
        <Copyright />
      </div>
    </section>
  )
}
