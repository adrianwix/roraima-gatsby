import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const Fleet = () => (
  <Layout>
    <section className="fleet">
      <div className="container-fluid">
        <div className="cover">
          <img
            src={withPrefix('img/fleet/COVER-FLEET.jpg')}
            className={'img-fluid'}
          />
        </div>

        <div className="container">
          <h2 className="animated fadeInLeft">FLEET</h2>
          <div className="separador" />

          <h3 data-aos="fade-left" className="text-center">
            BOEING 737-800 NG
          </h3>
          <div className="row mt-4">
            <div data-aos="fade-left" className="col-md-8">
              {/**
               * @todo Change carousel to reactstrap
               */}
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
                      src={withPrefix('img/fleet/YV701T-NEO.png')}
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
                    <div className="carousel-caption d-md-block">
                      <h3>AIRCRAFT INFO</h3>
                      <p>NAME: GONZALITO</p>
                      <p>TAIL NUMBER: YV701T</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid"
                      src={withPrefix('img/fleet/YV702T-NEO.png')}
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
                    <div className="carousel-caption d-md-block">
                      <h3>AIRCRAFT INFO</h3>
                      <p>NAME: MORICHE</p>
                      <p>TAIL NUMBER: YV702T</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid"
                      src={withPrefix('img/fleet/YV703T-NEO.png')}
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
                    <div className="carousel-caption d-md-block">
                      <h3>AIRCRAFT INFO</h3>
                      <p>NAME: TURPIAL</p>
                      <p>TAIL NUMBER: YV703T</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid"
                      src={withPrefix('img/fleet/YV704T-NEO.png')}
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
                    <div className="carousel-caption d-md-block">
                      <h3>AIRCRAFT INFO</h3>
                      <p>NAME: TOCHE</p>
                      <p>TAIL NUMBER: YV704T</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid"
                      src={withPrefix('img/fleet/YV705T-NEO.png')}
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
                    <div className="carousel-caption d-md-block">
                      <h3>AIRCRAFT INFO</h3>
                      <p>NAME: TURPIAL MIGRATORIO</p>
                      <p>TAIL NUMBER: YV705T</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid"
                      src={withPrefix('img/fleet/YV706T-NEO.png')}
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
                    <div className="carousel-caption d-md-block">
                      <h3>AIRCRAFT INFO</h3>
                      <p>NAME: GONZALITO REAL</p>
                      <p>TAIL NUMBER: YV706T</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid"
                      src={withPrefix('img/fleet/YV707T-NEO.png')}
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
                    <div className="carousel-caption d-md-block">
                      <h3>AIRCRAFT INFO</h3>
                      <p>NAME: REINITA DE FUEGO</p>
                      <p>TAIL NUMBER: YV707T</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid"
                      src={withPrefix('img/fleet/YV708T-NEO.png')}
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
                    <div className="carousel-caption d-md-block">
                      <h3>AIRCRAFT INFO</h3>
                      <p>NAME: REINITA CERÚLEA</p>
                      <p>TAIL NUMBER: YV708T</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid"
                      src={withPrefix('img/fleet/YV709T-NEO.png')}
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
                    <div className="carousel-caption d-md-block">
                      <h3>AIRCRAFT INFO</h3>
                      <p>NAME: GALLITO DE LAS ROCAS</p>
                      <p>TAIL NUMBER: YV709T</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid"
                      src={withPrefix('img/fleet/YV710T-NEO.png')}
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
                    <div className="carousel-caption d-md-block">
                      <h3>AIRCRAFT INFO</h3>
                      <p>NAME: GALLITO DE LAS SIERRAS</p>
                      <p>TAIL NUMBER: YV710T</p>
                    </div>
                  </div>
                </div>

                <div
                  className="left-carousel"
                  href="#carousel1"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fas fa-angle-left fa-3x" />
                  <span className="sr-only">Previous</span>
                </div>
                <div
                  className="right-carousel"
                  href="#carousel1"
                  role="button"
                  data-slide="next"
                >
                  <i className="fas fa-angle-right fa-3x" />
                  <span className="sr-only">Previous</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="col-md-4 text-md-center">
              <div className="specs">
                <h4 className="text-center">
                  <strong>737-800 SPECS</strong>
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
                <p>3,115 NM</p>
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
                <p>162</p>
                <br />
                <p>
                  <strong>NUMBER IN FLEET:</strong>
                </p>
                <br />
                <p>10</p>
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

          <h3 data-aos="fade-left" className="text-center h3fleet">
            BOEING 787-9{' '}
            <span className="" style={{ color: '#BFBFBF', fontSize: '1rem' }}>
              (COMING PHASE 2)
            </span>
          </h3>
          <div className="row mt-4">
            <div data-aos="fade-left" className="col-md-8">
              <div
                id="carousel2"
                className="carousel slide"
                data-interval="false"
                data-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      className="d-block img-fluid"
                      src={withPrefix(
                        'img/fleet/Boeing-787-9-Improved-livery.png'
                      )}
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
                    <div className="carousel-caption d-md-block">
                      <h3>AIRCRAFT INFO</h3>
                      <p>NAME: TDA</p>
                      <p>TAIL NUMBER: TDA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="col-md-4 text-md-center">
              <div className="specs">
                <h4 className="text-center">
                  <strong>787-9 SPECS</strong>
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
                <p>7,635 NM</p>
                <br />
                <p>
                  <strong>CRUISE SPEED:</strong>
                </p>
                <br />
                <p>902 KM/HR</p>
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
                <p>QUALITY WINGS</p>
                <br />
              </div>
            </div>
          </div>

          <h3 data-aos="fade-left" className="text-center h3fleet">
            BOEING 737 MAX 8{' '}
            <span className="" style={{ color: '#BFBFBF', fontSize: '1rem' }}>
              (COMING PHASE 3)
            </span>
          </h3>
          <div className="row mt-4">
            <div data-aos="fade-left" className="col-md-8">
              <div
                id="carousel3"
                className="carousel slide"
                data-interval="false"
                data-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      className="d-block img-fluid"
                      src={withPrefix('img/fleet/MAX-8-Improved-livery.png')}
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
                    <div className="carousel-caption d-md-block">
                      <h3>AIRCRAFT INFO</h3>
                      <p>NAME: TDA</p>
                      <p>TAIL NUMBER: TDA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="col-md-4 text-md-center">
              <div className="specs">
                <h4 className="text-center">
                  <strong>737 MAX 8 SPECS</strong>
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
                <p>3,620 NM</p>
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
                <p>TDA</p>
                <br />
              </div>
            </div>
          </div>

          <Link to="/" className="btn btn-outline-black">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default Fleet
