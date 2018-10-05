import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const GlobalOne = () => (
  <Layout>
    <section>
      <div className="cointainer-fluid">
        <div className="cover">
          <img
            className="img-fluid w-100"
            src={withPrefix('img/cover/COVER-G1.jpg')}
            alt=""
          />
        </div>

        <div className="container">
          <h2 data-aos="fade-left" className="mt-2">
            A PROUD GLOBALONE ALLIANCE MEMBER
          </h2>
          <div className="separador" />

          <p data-aos="fade-left" className="text-center p">
            The GlobalOne Alliance is the worlds most successful Virtual Airline
            Alliance and the largest active codesharing community on Vatsim.
            Established by Arabian Airlines in 2006, GlobalOne aims to connect
            the finest and best Virtual Airlines in a single network, providing
            our member pilots with a rich and vibrant network to fly. GlobalOne
            is a prestigious Alliance priding itself in high quality. For more
            information, please visit the{' '}
            <a href="http://globalonealliance.com/">
              GlobalOne Alliance Website
            </a>
            .
          </p>
          <br />

          <h3 data-aos="fade-left" className="text-center">
            PARTNER AIRLINES
          </h3>
          <div className="separador mx-auto" />

          <div
            className="row justify-content-center"
            style={{ margin: '6rem 0' }}
          >
            <div
              data-aos="fade-left"
              className="col-xs-12 col-sm-6 col-md-3 my-4"
            >
              <a
                href="http://arabian.aero/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="img-fluid w-100"
                  src={withPrefix('img/globalone/arabian.jpg')}
                  alt="Arabian Airline"
                />
              </a>
            </div>
            <div
              data-aos="fade-left"
              className="col-xs-12 col-sm-6 col-md-3 my-4"
            >
              <a
                href="http://www.flycubev.com/coming-soon/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="img-fluid w-100"
                  src={withPrefix('img/globalone/cubelogo.jpg')}
                  alt="Cube Airline"
                />
              </a>
            </div>
            <div
              data-aos="fade-left"
              className="col-xs-12 col-sm-6 col-md-3 my-4"
            >
              <a
                href="http://www.flyeurobelgian.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="img-fluid w-100"
                  src={withPrefix('img/globalone/logo_trans.png')}
                  alt="Eurobelgian Airline"
                />
              </a>
            </div>
            <div
              data-aos="fade-left"
              className="col-xs-12 col-sm-6 col-md-3 my-4"
            >
              <a
                href="https://www.fly-ocean.net/INT/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="img-fluid w-100"
                  src={withPrefix('img/globalone/logo-1.png')}
                  alt="Ocean Airline"
                />
              </a>
            </div>
            <div
              data-aos="fade-left"
              className="col-xs-12 col-sm-6 col-md-3 my-4"
            >
              <a
                href="http://flycloud9.org/airline.php"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="img-fluid w-100"
                  src={withPrefix('img/globalone/cloud.jpg')}
                  alt="Cloud9 Airlines"
                />
              </a>
            </div>
            <div
              data-aos="fade-left"
              className="col-xs-12 col-sm-6 col-md-3 my-4"
            >
              <a
                href="https://ariaairways.org/home/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="img-fluid w-100"
                  src={withPrefix('img/globalone/ARIA.jpg')}
                  alt="Aria Airways"
                />
              </a>
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

export default GlobalOne
