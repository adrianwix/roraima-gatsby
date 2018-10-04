/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const FundaRoraima = () => (
  <Layout>
    <section>
      <div className="cointainer-fluid">

        <div className="cover">
          <img className="img-fluid w-100" src={withPrefix("img/cover/COVER-FUNDARORAIMA.jpg")} alt=""/>
        </div>

        <div className="container">

          <h2 className="mt-4 animated fadeInLeft">FUNDARORAIMA</h2>
          <div className="separador"/>

          <div className="row">
            <div className="col">
              <p className="text-center px-4" style={{ fontSize: "1.5em" }}>
                FundaRoraima is environmental ONG that seeks the conservation of nature and wildlife through out the
                help and collaboration for other environmental ONG's, setting the environmentalist side of Roraima
                Airline and to fulfill our commitment with Nature
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-7">
              <img className="img-fluid w-100" src={withPrefix("img/fundaroraima.jpg")} alt=""/>
            </div>
          </div>

          <Link className="btn btn-outline-black" to="/">BACK TO HOME</Link>

        </div>

      </div>

    </section>
  </Layout>
)

export default FundaRoraima
