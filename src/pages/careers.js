import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const Careers = () => (
  <Layout>
    <section>
      <div className="cointainer-fluid">
        <div className="cover">
          <img
            className="img-fluid w-100"
            src={withPrefix('img/careers/COVER-CAREERS.jpg')}
            alt=""
          />
        </div>

        <div className="container">
          <h2 className="animated fadeInLeft">CAREERS</h2>
          <div className="separador" />

          <p className="text-center p">
            Welcome to the Roraima Airlines Careers Seccion. Virtual Careers are
            volunteer staff opportunities at Roraima Airlines. There is no
            compensation of any kind, nor is an employer-employee relationship
            created. All staff members at Roraima Airlines are volunteers who
            dedicated their time and energy to the virtual airline and business
            concept with zero expectation of compensation or reimbursement.
          </p>
          <br />

          <p className="text-center p">
            Roraima Airlines looks for the best and most qualified members of
            the flight simulation and aviation communities to join its staff and
            virtual pilot core. This website is updated consistently and new
            positions may be made available without announcement.
          </p>
          <br />
          {/**
           * @todo Check why I used doble <a> for image links
           */}
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className="centrar">
                <a href="#">
                  <Link to="/roraima-group/">
                    <img
                      className="w-100 img-fluid"
                      src={withPrefix('img/careers/RORAIMAGROUP.jpg')}
                      alt="Roraima Group"
                    />
                  </Link>
                </a>
              </div>
              <div className="centrar">
                <a href="#">
                  <a href="http://globalonealliance.com/" rel="noopener noreferrer" target="_blank">
                    <img
                      className="w-100"
                      src={withPrefix('img/careers/GLOBALONE.jpg')}
                      alt="GlobalOne"
                    />
                  </a>
                </a>
              </div>
            </div>

            <div className="col-xs-12 col-md-4">
              <div className="centrar">
                <a href="#">
                  <Link to="/roraima-cargo/">
                    <img
                      className="w-100"
                      src={withPrefix('img/careers/RORAIMACARGO.jpg')}
                      alt="Roraima Cargo"
                    />
                  </Link>
                </a>
              </div>
              <div className="centrar">
                <a href="#">
                  <Link to="/fundaroraima/">
                    <img
                      className="w-100"
                      src={withPrefix('img/careers/FUNDARORAIMA.jpg')}
                      alt="FundaRoraima"
                    />
                  </Link>
                </a>
              </div>
              <div className="centrar">
                <a href="#">
                  <a href="http://www.vatsur.org/" rel="noopener noreferrer" target="_blank">
                    <img
                      className="w-100"
                      src={withPrefix('img/careers/VATSUR.jpg')}
                      alt="VATSUR"
                    />
                  </a>
                </a>
              </div>
            </div>

            <div className="col-xs-12 col-md-4">
              <div className="centrar">
                <Link to="/tucan-airways/">
                  <img
                    className="w-100"
                    src={withPrefix('img/careers/TUCAN-small.png')}
                    alt="Tucan Airways"
                  />
                </Link>
              </div>
              <div className="centrar">
                <Link href="https://www.vatsim.net/" target="_blank">
                  <img
                    className="w-100"
                    src={withPrefix('img/careers/VATSIM.png')}
                    alt="VATSIM"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="row px-5">
            <div className="col px-5 text-center">
              <hr className="mb-5" />
              <Link to="/joinus/">
                <h5 className="animated fadeInLeft">JOIN US</h5>
              </Link>
              <p className="text-center">
                If you want to fly with excellence and professionalism, come and
                join us to experience the realism that we ensure to offer to the
                pilots that choose to fly with us to a diversity of
                international and national destinations and to help us show
                Venezuela to the world.{' '}
              </p>
            </div>
          </div>

          <Link className="btn btn-outline-black" to="/">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default Careers
