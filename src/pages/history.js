/* eslint-disable react/no-unescaped-entities,no-irregular-whitespace */
import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const History = () => (
  <Layout>
    <section>
      <div className="cointainer-fluid">
        <div className="cover">
          <img
            className="img-fluid w-100"
            src={withPrefix('img/COVER-HISTORY.jpg')}
            alt=""
          />
        </div>

        <div className="container">
          <h2 className="mt-4 ">HISTORY</h2>
          <div className="separador" />

          <div className="row">
            <div className="col-md-6">
              <p data-aos="fade-left" className="text-justify">
                Everything began in a normal day of September, 2013, I was in
                the middle of a long flight from SVMI to SCEL, there was still a
                very long distance to go, I believe it was with a LAN Airlines
                Boeing 787; that was when suddenly a question came to my mind,
                is there any way I can personalize the aircraft I use to fly?,
                so that was when I decided to learn how to create personalized
                textures for Aircraft models, I started with the basic things,
                like putting images In the fuselage, nothing so special; then I
                said to myself, we don't I just create something unique, like an
                airline?, so that was when I got the idea that will change my
                life forever, to create my own airline.
                <br />
                <br />
                Thinking in the name wasn't so easy at all, I wanted something
                exotic, known and that represents commitment with nature, that's
                when I remember the mighty Mount Roraima, it's was the perfect
                name! It sounded exotic, it's something known in other countries
                but also symbolizes nature, so in November 24th of 2013, Roraima
                Airlines was born. The colors were another things to deal,
                Roraima wasn't Red and black all the time, at beginning it was
                blue and green but by the pass of time, in 2016, Roraima changed
                to Red and Gray schemes.
                <br />
                <br />
                At the beginning of 2017, I received a proposal from the CEO of
                a virtual airline called Arabian Airlines, to let Roraima become
                a member of the GlobalOne Alliance, I thought, this could be
                really interesting, so I accepted, and then the discussions
                within the Alliance started to let Roraima be a member; some
                weeks later I received an excellent later, which said that
                Roraima was accepted to be a new proud member of GlobalOne
                Alliance. Everything since that day has been an great adventure,
                experience and opportunity to learn and grow for Roraima; my
                goal is to one day place Roraima as the number one airline by
                excellence in Venezuela, thanks to all the help GlobalOne,
                Arabian has provided to us and all the people who has
                contributed through the time to help Roraima become the best of
                all.
                <br />
                <br />
                History review by:
                <br />
                Emiliano Rujano
                <br />
                Funder / President / CEO
              </p>
            </div>

            <div className="col-md-6">
              <img
                className="img-fluid w-100"
                src={withPrefix('img/History.jpg')}
                alt=""
              />
              <p data-aos="fade-left" className="text-right mt-4">
                <strong>Special Thanks to:</strong>
              </p>
              <p data-aos="fade-left" className="text-right">
                ​Valeria Fernandez, Andres Yepes, Paola Mottola, Octavio Gomez,
                Samuel Garcia, Valeska Realza, Francisco Cernadas, Juan Pablo
                Villar, Jose Angel Dos Reis, Christiam Campoverde, Jesus
                Fuentes, Eric Basalo, Ricardo Pekelharing, Corina Meyer, Moises
                Moreno, Matias Campos, Alberto Gonzalez, Gilberto Guerra, Carlos
                Garcia, Adrian Wix, Mahmoud Fadli, Remington Box, Lukasz Musial,
                Sher Ming, Andrew Johnson and Chris Attheramp.
              </p>
              <p data-aos="fade-left" className="text-right">
                <strong>
                  For all the support they provided to help Roraima become the
                  best.
                </strong>
              </p>
            </div>
          </div>

          <Link className="btn btn-outline-black" to="/">
            BACK TO HOME
          </Link>
        </div>
        {/*Cierre de container*/}
      </div>
      {/*Cierre de container-fluid*/}
    </section>
  </Layout>
)

export default History
