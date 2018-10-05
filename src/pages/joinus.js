import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const JoinUs = () => (
  <Layout>
    <section>

      <div className="container-fluid">

        <div className="cover">
          <img className="img-fluid w-100" src={withPrefix("img/careers/COVER-FLY.jpg")} alt=""/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">

              <h2 className="mt-4 mb-1">FLY WITH US</h2>
              <div className="separador"/>

              <p data-aos="fade-left" className="text-center p px-4 mt-4">
                If you are looking for Airline that lets you fly with the ultimate realism and professionalism then you
                are in the right place, experience the challenge to fly to some of the most tough airports in Venezuela
                and the world with us.
              </p>
              <p data-aos="fade-left" className="text-center p px-4" style={{ marginBottom: "3rem" }}>
                To fly for Roraima Airlines, pilots must meet certain minimum criteria. This criteria is outlined below.
                Moreover, virtual pilots are required to take a number of brief examinations that gauge both their
                proficiency and familiar with the company, aircraft operations, and procedures. While this may seem a
                bit much, Roraima Airlines values quality over quantity, and given that the airline only hires a limited
                number of pilots, it is important to ensure that only the best and most dedicated make the cut.
                Eligible applicants must meet the minimum criteria and requirements listed below.
              </p>

              <h4>Minimum Pilot Requirements</h4>
              <ul className="mt-3">
                <li data-aos="fade-left" className="pb-3"><span className="rc">✓</span> Precision Manuals Development Group (PMDG) Boeing 737
                  NGX Series
                </li>
                <li data-aos="fade-left" className="pb-3"><span className="rc">✓</span> Lockheed Martin Prepar3D or Flight Simulator X</li>
                <li data-aos="fade-left" className="pb-3"><span className="rc">✓</span> VATSIM ID Number</li>
                <li data-aos="fade-left" className="pb-3"><span className="rc">✓</span> Must be 18 Years of Age or Older</li>
                <li data-aos="fade-left" className="pb-3"><span className="rc">✓</span> Read, Write and Speak English</li>
                <li data-aos="fade-left" className="pb-3"><span className="rc">✓</span> Minimum 4 Flights Per Month</li>
                <li data-aos="fade-left" className="pb-3"><span className="rc">✓</span> Valid Email Address</li>
              </ul>

              <h2 className="text-center">Pilot Hiring</h2>
              <p data-aos="fade-left" className="text-center p">
                Roraima Airlines allows only a limited number of virtual pilots to be active at any one time. Please
                check this page often to see if applications are being accepted. Applicants are required to pass the
                Minimum Pilot Requirements prior to flying.
              </p>
              <div className="row">
                <div className="col text-center">
                  {/*<Link to="/contact/" class="mx-auto btn btn-success btn-lg" disable>Applications Opened</Link>*/}
                  <Link to="/contact/" className="mx-auto btn btn-danger btn-lg" disable>Applications Closed</Link>

                </div>
              </div>
            </div>
          </div>

          <Link className="btn btn-outline-black" to="/">BACK TO CAREERS</Link>

        </div>

      </div>

    </section>
  </Layout>
)

export default JoinUs
