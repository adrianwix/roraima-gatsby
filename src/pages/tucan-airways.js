/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const TucanAirways = () => (
  <Layout>
    <section>
      <div className="container-fluid">
        <div className="cover">
          <img
            src={withPrefix('img/tucan-airways/COVER-TUCAN.jpg')}
            alt=""
            className="img-fluid"
          />
        </div>

        <div className="container">
          <div className="row mt-4">
            <div className="col">
              <h2 className="animated fadeInLeft">TUCAN AIRWAYS</h2>
              <div className="separador-tucan" />
            </div>
          </div>

          <div data-aos="fade-left" className="row p-4">
            <div className="col text-center">
              <p className="p">
                Tucan Airways is a partnered Low-Cost Airline member of the
                Roraima Group founded by Roraima Airlines, based in SVVA, that
                have and small fleet of regional jets that makes flights inside
                Venezuela to the same Roraima Regional destinations and even
                airports and places were Roraima do not, it's logo blue color
                schemes and Toucan bird silhoutte makes a full representation of
                the total commitment with the environment protection established
                by Roraima Airlines, also using the same Nature conservation
                philosophies as Roraima does.
              </p>
            </div>
          </div>

          <div data-aos="fade-left" className="row mt-3">
            <div className="col">
              <h2 className="animated fadeInLeft">TUCAN FLEET</h2>
              <div className="separador-tucan" />
            </div>
          </div>

          <h3 data-aos="fade-left" className="text-center mth3">
            BOEING 737-700 NG
          </h3>
          <div data-aos="fade-left" className="row mt-4">
            <div className="col-md-8">
              <div
                id="carousel1"
                className="carousel slide"
                data-interval="false"
                data-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      className="d-block img-fluid"
                      src={withPrefix('img/tucan-airways/YV800T.png')}
                      alt="First slide"
                    />
                    <p className="text-center" style={{ fontSize: '10px' }}>
                      Aircraft templates by{' '}
                      <a
                        href="http://www.airline-empires.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        MedAviation
                      </a>
                      .
                    </p>
                    <div className="carousel-caption d-block">
                      <h3>AIRCRAFT INFO</h3>
                      <p>NAME: TDA</p>
                      <p>TAIL NUMBER: TDA</p>
                    </div>
                  </div>
                </div>

                {/*<a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"/>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"/>
                  <span className="sr-only">Next</span>
                </a>*/}
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="specs-tucan">
                <h4 className="text-center">
                  <strong>737-700 SPECS</strong>
                </h4>
                <br />
                <p>
                  <strong>MANUFACTURER:</strong>
                </p>
                <br />
                <p>BOEING</p>
                <br />
                <p>
                  <strong>RANGE:</strong>
                </p>
                <br />
                <p>4,400 NM</p>
                <br />
                <p>
                  <strong>CRUISE SPEED:</strong>
                </p>
                <br />
                <p>829 KM/HR</p>
                <br />
                <p>
                  <strong>PASSENGER CAPACITY:</strong>
                </p>
                <br />
                <p>TDA</p>
                <br />
                <p>
                  <strong>NUMBER IN FLEET:</strong>
                </p>
                <br />
                <p>TDA</p>
                <br />
                <p>
                  <strong>SUPPORTED ADDONS:</strong>
                </p>
                <br />
                <p>PMDG</p>
                <br />
              </div>
            </div>
          </div>

          <h3 data-aos="fade-left" className="text-center mth3">
            BOMBARDIER Q400
          </h3>
          <div data-aos="fade-left" className="row mt-4">
            <div className="col-md-8">
              <div
                id="carousel1"
                className="carousel slide"
                data-interval="false"
                data-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      className="d-block img-fluid"
                      src={withPrefix('img/tucan-airways/Q400.png')}
                      alt="First slide"
                    />
                    <p className="text-center" style={{ fontSize: '10px' }}>
                      Aircraft templates by{' '}
                      <a
                        href="http://www.airline-empires.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        MedAviation
                      </a>
                      .
                    </p>
                    <div className="carousel-caption d-block">
                      <h3>AIRCRAFT INFO</h3>
                      <p>NAME: TDA</p>
                      <p>TAIL NUMBER: TDA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="specs-tucan">
                <h4 className="text-center">
                  <strong>Q400 SPECS</strong>
                </h4>
                <br />
                <p>
                  <strong>MANUFACTURER:</strong>
                </p>
                <br />
                <p>BOMBARDIER</p>
                <br />
                <p>
                  <strong>RANGE:</strong>
                </p>
                <br />
                <p>1,362 NM</p>
                <br />
                <p>
                  <strong>CRUISE SPEED:</strong>
                </p>
                <br />
                <p>660 KM/HR</p>
                <br />
                <p>
                  <strong>PASSENGER CAPACITY:</strong>
                </p>
                <br />
                <p>TDA</p>
                <br />
                <p>
                  <strong>NUMBER IN FLEET:</strong>
                </p>
                <br />
                <p>TDA</p>
                <br />
                <p>
                  <strong>SUPPORTED ADDONS:</strong>
                </p>
                <br />
                <p>Majestic Software</p>
                <br />
              </div>
            </div>
          </div>

          <div className="row justify-content-center rowtucanlogo">
            <div className="col-md-7 text-center">
              <img
                data-aos="fade-left"
                className="img-fluid w-100"
                src={withPrefix('img/tucan-airways/TUCANLOGOBLUE.png')}
                alt="Tucan Airways Logo"
              />
              <p data-aos="fade-left" className="p mt-2">
                Tucan Airways Operations and Timetables{' '}
              </p>
              <h5 data-aos="fade-left" className="animated fadeInLeft">
                Coming Soon
              </h5>
            </div>
          </div>

          <Link to="/roraima-group/" className="btn btn-outline-black">
            BACK TO RORAIMA GROUP
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default TucanAirways
