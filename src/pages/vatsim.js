import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const Vatsim = () => (
  <Layout>
    <section>
      <div className="cointainer-fluid">

        <div className="cover">
          <img className="img-fluid w-100" src={withPrefix("img/cover/COVER-VATSIM.jpg")} alt=""/>
        </div>

        <div className="container pb-2">

          <h2 className="animated fadeInLeft">A VATSIM ONLY COMPANY</h2>
          <div className="separador"/>

          <p className="text-center p">
            Roraima Airlines values realism above all. All flights are exclusively flown on the VATSIM Network.
            Unlike other networks, VATSIM provides high quality ATC services that are close to real life.
            Pilots are encouraged to fly on VATSIM to not only represent the Airline on the network, but to
            enjoy an immersive experience with unlimited potential. For more information, please visit
            the <a href="https://www.vatsim.net/">VATSIM Website</a>.
          </p><br/>

          <hr style={{ background:"#000" }}/>


            <div data-aos="fade-left" className="row my-4 justify-content-center">
              <div className="col-md-3 col-sm-6 text-center">
                <h4>JOIN VATSIM</h4>
                <p>Click <a href="https://www.vatsim.net/join">here</a> to Join VATSIM</p>
              </div>
            </div>

            <div className="stats">
              <div data-aos="fade-left" className="row">
                <div className="stat-cell col-sm-6 col-md-3">
                  <div className="d-inline-block">
                    <p className="big-p text">10</p>
                    <p className="small-p">Total Fleet</p>
                  </div>
                </div>

                <div className="stat-cell col-sm-6 col-md-3">
                  <div className="d-inline-block">
                    <p className="big-p">RX</p>
                    <p className="small-p">IATA</p>
                  </div>
                </div>

                <div className="stat-cell col-sm-6 col-md-3">
                  <div className="d-inline-block">
                    <p className="big-p">ROX</p>
                    <p className="small-p">ICAO</p>
                  </div>
                </div>

                <div className="stat-cell col-sm-6 col-md-3">
                  <div className="inline-block">
                    <p className="big-p">9</p>
                    <p className="small-p">Total Destinations</p>
                  </div>
                </div>
              </div>
            </div>

        </div>

        <div className="container">
          <Link className="btn btn-outline-black" to="/">BACK TO HOME</Link>
        </div>

      </div>

    </section>
  </Layout>
)

export default Vatsim
