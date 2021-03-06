/* eslint-disable react/no-unescaped-entities,no-irregular-whitespace */
import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const Staff = () => (
  <Layout>
    <section id="staff">
      <div className="container-fluid">

        <div className="cover">
          <img src={withPrefix("img/staff/COVER-STAFF-DESKTOP.jpg")} alt="" className="img-fluid w-100"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="mt-4 animated fadeInLeft">STAFF</h2>
              <div className="separador"/>
              <h3 className="text-center">EXECUTIVE TEAM</h3>
              <p className="text-center mx-auto">The Roraima Airlines executive team comprises of highly motivated
                individuals who dedicate time to keep the airline and business proposal alive. With real world aviation
                knowledge throughout all sectors, the Roraima Airlines Executive Team exemplifies the true meaning of
                dedication, expertise and professionalism.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
              <img className="img-fluid" src={withPrefix("img/staff/CEO.png")} alt="CHIEF EXECUTIVE OFFICER"/>
            </div>
            <div className="col-md-9">
              <h4 className="text-center mx-auto">EMILIANO RUJANO</h4>
              <h6 className="text-center mx-auto">CHIEF EXECUTIVE OFFICER</h6>
              <p className="text-center mx-auto">The Chief Executive Officer of Roraima Airlines is Emiliano Rujano. The
                Chief Executive Officer is responsible for the overall management of the airline, and the CEO is the
                first and final authority in the company. The CEO is responsible for overseeing the airline’s growth
                and facilitating a profitable and safe business enterprise. Working closely with the operations staff,
                the CEO ensures that the airline meets all of the regional business regulations.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
              <img className="img-fluid" src={withPrefix("img/staff/COO.png")} alt="CHIEF OPERATIONS OFFICER"/>
            </div>
            <div className="col-md-9">
              <h4 className="text-center mx-auto">RICARDO PEKELHARING</h4>
              <h6 className="text-center mx-auto">CHIEF OPERATIONS OFFICER</h6>
              <p className="text-center mx-auto">The Chief Operations Officer of Roraima Airlines is Ricardo
                Pekelharing.
                The Chief Operations Officer is directly responsible for all operations of the airline. The COO prepares
                operational plans, executes directives from the CEO regarding airline expansion, and is the airline’s
                second in command. The COO oversees all operational aspects of the airline and has wide discretion to
                implement operational programs to guarantee the airline is operating safely and efficiently in
                compliance
                with all applicable laws and regulations.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
              <img className="img-fluid" src={withPrefix("img/staff/CFO.png")} alt="CHIEF FINACIAL OFFICER"/>
            </div>
            <div className="col-md-9">
              <h4 className="text-center mx-auto">ALBERTO GONZALEZ</h4>
              <h6 className="text-center mx-auto">CHIEF FINACIAL OFFICER</h6>
              <p className="text-center mx-auto">
                The Chief Financial Officer of Roraima Airlines is Alberto Gonzalez. The Chief Financial Officer
                provides
                both operational and programmatic support to the airline. The CFO supervises the finance unit and is the
                chief financial spokesperson for the organization. The CFO reports directly to the President/Chief
                Executive Officer (CEO) and directly assists the Chief Operating Officer (COO) on all strategic and
                tactical matters as they relate to budget management, cost benefit analysis, forecasting needs and the
                securing of new funding.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
              <img className="img-fluid" src={withPrefix("img/staff/CMO.png")} alt="CHIEF MARKETING OFFICER"/>
            </div>
            <div className="col-md-9">
              <h4 className="text-center mx-auto">JOSE DOS REIS</h4>
              <h6 className="text-center mx-auto">CHIEF MARKETING OFFICER</h6>
              <p className="text-center mx-auto">The Chief marketing officer of Roraima Airlines is Jose Dos Reis.
                The Chief marketing officer or marketing director is the corporate executive responsible for
                marketing activities in Roraima Airlines. The CMO leads brand management, marketing communications
                including advertising, promotions and public relations, market research, sales management, services
                development, distribution channel management, pricing, and customer service.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
              <img className="img-fluid" src={withPrefix("img/staff/CTO.png")} alt="CHIEF TECHNOLOGY OFFICER"/>
            </div>
            <div className="col-md-9">
              <h4 className="text-center mx-auto">GILBERTO GUERRA</h4>
              <h6 className="text-center mx-auto">CHIEF TECHNOLOGY OFFICER</h6>
              <p className="text-center mx-auto">The Director of Technology of Roraima Airlines is Gilberto Guerra.
                The Director of Technology is responsible for maintaining the airline’s entire technical
                infrastructure, and works closely with the Executive Management team to grow the company through
                the use of technological resources. The Director of Technology will direct the airline’s IT
                department to attain the Airline’s goals established in the Airline’s strategic growth plan.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
              <img className="img-fluid" src={withPrefix("img/staff/DHR.png")} alt="CHIEF HUMAN RESOURCES OFFICER"/>
            </div>
            <div className="col-md-9">
              <h4 className="text-center mx-auto">TO BE ANNOUNCED</h4>
              <h6 className="text-center mx-auto">CHIEF HUMAN RESOURCES OFFICER</h6>
              <p className="text-center mx-auto">The Chief Human Resources Officer plays a vital role in the day to day
                management of Roraima Airlines. Tasked with the responsibility of ensuring all NDAs are signed and
                filed, the Human Resources Director is the first line of legal defense for the airline.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
              <img className="img-fluid" src={withPrefix("img/staff/CSO.png")} alt="CHIEF SECURITY OFFICER"/>
            </div>
            <div className="col-md-9">
              <h4 className="text-center mx-auto">ANDRES YEPES</h4>
              <h6 className="text-center mx-auto">CHIEF SECURITY OFFICER</h6>
              <p className="text-center mx-auto">The Chief security officer of Roraima Airlines is Andres Yepes.
                The Chief Security Officer is the Roraima Airlines most accountable executive for the development and
                oversight of policies and programs intended for the mitigation and/or reduction of compliance,
                operational, strategic, financial and reputational security risk strategies relating to the protection
                of people, intellectual assets and tangible property.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3 className="text-center">OPERATIONS TEAM</h3>
              <p className="text-center mx-auto">The Operations Team, or Ops. For short, comprises of real world pilots
                and aviation professionals that are specifically selected to manage airline's aircraft operations.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
              <img className="img-fluid" src={withPrefix("img/staff/logo-DT.png")} alt="BOEING 737 CHIEF PILOT"/>
            </div>
            <div className="col-md-9">
              <h4 className="text-center mx-auto">ANDREW JOHNSON</h4>
              <h6 className="text-center mx-auto">BOEING 737 CHIEF PILOT</h6>
              <p className="text-center mx-auto">
                The 737 Chief Pilot of Roraima Airlines is Andrew Johnson. The 737 Chief Pilot is directly responsible
                for the technical operation of the 737 Family fleet. Tasked with producing aircraft manuals, company
                aircraft minimums, and performance calculations, the 737 Chief Pilot works closely with the Chief
                Operations Officer to guarantee that the airline’s fleet successfully accomplishes each mission safely
                and reliable. The 737 Chief Pilot is also in charge of producing a list of minimum requirements for
                pilot operational conduct, including the administration of the 737 First Officer and 737 Captain (PIC)
                examinations.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3 className="text-center">DEVELOPMENT TEAM</h3>
              <p className="text-center mx-auto">The Development Team of Roraima Airlines is group of profesional and
                dedicated people that works to enchancing the immersive experience that comes with flying for the
                airline. By conceiving, specifying, designing, programming, documenting, testing, and bug fixing
                involved in creating and maintaining applications, Website and even numerous sceneries in the region
                that specifically apply to the airline's operations.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
              <img className="img-fluid" src={withPrefix("img/staff/logo-DT.png")} alt="WEB DEVELOPER"/>
            </div>
            <div className="col-md-9">
              <h4 className="text-center mx-auto">ADRIAN WIX</h4>
              <h6 className="text-center mx-auto">WEB DEVELOPER</h6>
              <p className="text-center mx-auto">​The Web Developer of Roraima Airlines is Adrian Wix. In order to
                capture the attention and interest of possible new pilots of staff an excellent Website is needed,
                that's why the Web Developer is such an important member in the Roraima Airlines Development Team;
                works close to the President/Chief Executive Officer (CEO) to create a webstie capable of fulfill
                Roraima Airlines requirements, one that shows the profesionalism and commitment that we want to


                transmit to the people and to our pilots.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
              <img className="img-fluid" src={withPrefix("img/staff/logo-DT.png")} alt="PROJECT DEVELOPER"/>
            </div>
            <div className="col-md-9">
              <h4 className="text-center mx-auto">TO BE ANNOUNCED</h4>
              <h6 className="text-center mx-auto">PROJECT DEVELOPER</h6>
              <p className="text-center mx-auto">The Project Developer spends a large amount of monetary resources and
                time investing in Venezuelan scenery development for the Roraima Airlines operations in VATSIM
                Network. and to ensure the maximun realism to the pilot that chose to fly with us.
              </p>
            </div>
          </div>

          <Link className="btn btn-outline-black" to="/">BACK TO HOME</Link>

        </div>
        // CIERRE DEL CONTAINER

      </div>
    </section>
  </Layout>
)

export default Staff
