/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <section>
      <div className="cointainer-fluid">

        <div className="cover">
          <img className="img-fluid w-100" src={withPrefix("img/cover/COVER-contact.jpg")} alt=""/>
        </div>

        <div className="container">

          <h2 className="mt-4 animated fadeInLeft">CONTACT</h2>
          <div className="separador"/>

          <div className="row">
            <div className="col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.7559709225015!2d-67.00563673520074!3d10.598242792442587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5d63ca7e539b%3A0xb29312efca1dea0d!2sAeropuerto+Internacional+de+Maiquet%C3%ADa+Sim%C3%B3n+Bol%C3%ADvar!5e0!3m2!1ses!2sve!4v1521344010400"
                width="100%" height="600" frameBorder="0" style={{ border: "0" }} allowFullScreen/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4>Inquiries</h4>
              <p>For any inquiries, questions, please don't hesitate to contact us.</p>
              {/**
               * @todo Make form functional
               */}
              <form className="" method="post">

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input className="form-control" type="text" placeholder="Name" name="name" id="name"/>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Email</label>
                  <input className="form-control" type="email" placeholder="Email" name="email" id="email"/>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input className="form-control" type="text" placeholder="Subject" name="subject" id="subject"/>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea className="form-control" name="name" rows="10" cols="80"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>

          <Link className="btn btn-outline-black" to="/">BACK TO HOME</Link>

        </div>

      </div>

    </section>

  </Layout>
)

export default Contact
