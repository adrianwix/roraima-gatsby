import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section id="home">
      <div className="container-fluid">
        <div className="cover autoh">
          <img
            className="logo"
            src={withPrefix('img/home/welcome.png')}
            alt="Roraima"
          />
          <div className="d-block text-center">
            <a href={withPrefix('#services')}>
              <i
                className="fas fa-angle-down fa-5x"
                style={{ color: 'white' }}
              />
            </a>
          </div>
        </div>

        <div className="row autoh">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center" id="services">
                  SERVICES
                </h2>
                <div className="separador mx-auto" />
              </div>
            </div>

            <div className="row pb-3 mb-4 justify-content-center">
              <div
                data-aos="fade-left"
                className="col-sm-6 col-md-4 col-lg-3 px-4"
              >
                <img
                  className="img-fluid w-100 rounded"
                  src={withPrefix('img/home/INTERNATIONAL-Thumbnail.jpg')}
                  alt="International Commercial Flight"
                />
                <div className="gris d-flex flex-column align-items-end p-2">
                  <h3 className="text-center serviceh3">
                    International Commercial Flight
                  </h3>
                  <p className="text-center">
                    An international flight is a form of commercial flight
                    within civil aviation where the departure and the arrival
                    take place in different countries.
                  </p>
                  <Link
                    className="btn btn-outline-black btn-sm hidebtn mt-auto"
                    to="/internationalTimetable/"
                  >
                    Timetables
                  </Link>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="col-sm-6 col-md-4 col-lg-3 px-4"
              >
                <img
                  className="img-fluid w-100 rounded"
                  src={withPrefix('img/home/REGIONAL-Thumbnail.jpg')}
                  alt="Regional Commercial Flight"
                />
                <div className="gris d-flex flex-column align-items-end p-2">
                  <h3 className="text-center serviceh3">
                    Regional Commercial Flight
                  </h3>
                  <br />
                  <p className="text-center">
                    Regional flights are flights operated with regional aircraft
                    to provide passenger air service to destinations inside a
                    country.
                  </p>
                  <Link
                    className="btn btn-outline-black btn-sm hidebtn mt-auto"
                    to="/regionalTimetable/"
                  >
                    Timetables
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row autoh" style={{ background: '#F7F7F7' }}>
          <div className="col-md-6 thecompany">
            <h2 data-aos="fade-left" className="" id="thecompany">
              THE COMPANY
            </h2>
            <div className="separador" />
            <p
              data-aos="fade-left"
              id="xz"
              className="animated fadeInLeft fadeIn"
              style={{ fontSize: '23px', lineHeight: '30px', color: '#3B3A3A' }}
            >
              Roraima Airlines is a venezuelan Virtual airline that seeks to
              show Venezuela to the world with the transportation of passengers
              and parceles at national and international level. all this hand in
              hand with latest technology to ensure safety and comfort to the
              passenger that choose us.
              <br />
              <br />
              Roraima Airlines aspires to be the number one air transport
              company in the country, reflecting its excellence and quality in
              the services it offers, in each of its flights.
            </p>
          </div>
          <div className="col-md-6 p-0" style={{ overflow: 'hidden' }}>
            <img
              className="img-fluid w-100"
              src={withPrefix('img/home/Home-THE-COMPANY.jpg')}
              alt=""
            />
          </div>
        </div>

        <div data-aos="fade-left" className="stats row">
          <div className="stat-cell col-sm-6 col-md-3">
            <div className="d-inline-block">
              <p className="big-p text">2013</p>
              <p className="small-p">Year Established</p>
            </div>
          </div>

          <div className="stat-cell col-sm-6 col-md-3">
            <div className="d-inline-block">
              <p className="big-p">SVMI</p>
              <p className="small-p">Hub Airport</p>
            </div>
          </div>

          <div className="stat-cell col-sm-6 col-md-3">
            <div className="d-inline-block">
              <p className="big-p">ROX</p>
              <p className="small-p">Callsing</p>
            </div>
          </div>

          <div className="stat-cell col-sm-6 col-md-3">
            <p className="big-p">9</p>
            <p className="small-p">Total Destinations</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
