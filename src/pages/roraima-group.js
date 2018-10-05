import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const RoraimaGroup = () => (
  <Layout>
    <section>
      <div className="cointainer-fluid">

        <div className="cover">
          <img className="img-fluid w-100" src={withPrefix("img/cover/COVER-RORAIMAGROUP.jpg")} alt=""/>
        </div>

        <div className="container">

          <h2 className="mt-4">RORAIMA GROUP</h2>
          <div className="separador"/>

          <div className="row">
            <div className="col">
              <p data-aos="fade-left" className="text-center p-4 my-4" style={{ fontSize: "1.5em"}}>
                The Roraima Group is an association of companies or enterprises that founded by Roraima Airlines with
                that strives every day to help the Venezuelan talent get better every moment and to show the best of
                Venezuela to the world, by the application of different types of products or services that seeks the
                clients satisfaction.
              </p>
            </div>
          </div>
          <div className="row justify-content-center mb-4">
            <div data-aos="fade-left" className="col-12 col-md-6 text-center borderRcargo">
              <div className="centrar">
                <img className="img-fluid w-100" src={withPrefix("img/tucan-airways/TUCANLOGOBLUE.png")} alt=""/>
              </div>
              <Link className="btn btn-outline-black btn-sm mt-auto" to="/tucan-airways/">Show More</Link>
            </div>
            <div data-aos="fade-left" className="col-12 col-md-6 text-center">
              <div className="centrar">
                <img className="img-fluid w-100" src={withPrefix("img/roraima-cargo/logoROv2-CARGO.png")} alt=""/>
              </div>
              <Link className="btn btn-outline-black btn-sm mt-auto" to="/roraima-cargo/">Show More</Link>
            </div>
          </div>

          <Link className="btn btn-outline-black" to="/">BACK TO HOME</Link>

        </div>

      </div>

    </section>
  </Layout>
)

export default RoraimaGroup
