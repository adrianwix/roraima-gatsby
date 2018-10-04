import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const RoraimaCargo = () => (
  <Layout>
    <section>
      <div className="container-fluid">

        <div className="cover">
          <img src={withPrefix("img/cover/COVER-CG.jpg")} alt="" className="img-fluid"/>
        </div>

        <div className="container">

          <div className="row mt-4">
            <div className="col">
              <h2 className="animated fadeInLeft">RORAIMA CARGO</h2>
              <div className="separador"/>
            </div>
          </div>

          <div className="row p-4">
            <div className="col text-center">
              <p className="p">Roraima Cargo is a partnered Cargo Carrier member of the Roraima Group founded by
                Roraima Airlines, based in SVMI, that have fleet a of Cargo jets with which can offer the service of
                parcel transportation through air delivery out of commercial and passenger aviation gateways to
                anywhere this Cargo jets can fly and land, to accomplish every request assigned by the client.
              </p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <h2 className="animated fadeInLeft">CARGO FLEET</h2>
              <div className="separador"/>
            </div>
          </div>

          <h3 className="text-center mth3">BOEING 777-200F</h3>
          <div className="row mt-4">
            <div className="col-md-8">

              <div id="carousel1" className="carousel slide" data-interval="false" data-ride="carousel">

                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block img-fluid" src={withPrefix("img/roraima-cargo/Boeing-777F.png")} alt="First slide"/>
                      <p className="text-center" style={{ fontSize: "10px" }}>Aircraft templates by
                        <a href="http://www.airline-empires.com/" rel="noopener noreferrer" target='_blank'>MedAviation</a>.
                      </p>
                      <div className="carousel-caption d-block">
                        <h3>AIRCRAFT INFO</h3>
                        <p>NAME: TDA</p>
                        <p>TAIL NUMBER: TDA</p>
                      </div>
                  </div>
                </div>

                <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"/>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"/>
                  <span className="sr-only">Next</span>
              </a>

            </div>

          </div>
          <div className="col-md-4 text-center animated fadeInRight">
            <div className="specs">
              <h4 className="text-center"><strong>777-200F SPECS</strong></h4><br />
              <p><strong>MANUFACTURER:</strong></p><br />
              <p>BOEING</p><br />
              <p><strong>RANGE:</strong></p><br />
              <p>4,885 NM</p><br />
              <p><strong>CRUISE SPEED:</strong></p><br />
              <p>896 KM/HR</p><br />
              <p><strong>CARGO CAPACITY:</strong></p><br />
              <p>347,815 kg</p><br />
              <p><strong>NUMBER IN FLEET:</strong></p><br />
              <p>TDA</p><br />
              <p><strong>SUPPORTED ADDONS:</strong></p><br />
              <p>PMDG</p><br />
            </div>
          </div>

        </div>

        <div className="row justify-content-center rowtucanlogo">

          <div className="col-md-7 text-center">
            <img className="img-fluid w-100" src={withPrefix("img/roraima-cargo/logoROv2-CARGO.png")} alt="Roraima Cargo Logo"/>
              <p className="p mt-2 animated fadeInLeft">Roraima Cargo Operations and Timetables </p>
              <h5 className="animated fadeInLeft">Coming Soon</h5>
          </div>

        </div>

        <Link to="/roraima-group/" className="btn btn-outline-black">BACK TO RORAIMA GROUP</Link>
      </div>

    </div>
    
  </section>
  </Layout>
)

export default RoraimaCargo
