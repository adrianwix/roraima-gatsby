import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const regionalTimetable = () => (
  <Layout>
    <section id="timetable">
      <div className="container-fluid">

        <div className="cover">
          <img src={withPrefix("img/COVER-REGIONAL.jpg")} alt="Regional Timetable" className="img-fluid"/>
        </div>

        <div className="container">

          <h2 className="mt-4 animated fadeInLeft">REGIONAL TIMETABLES</h2>
          <div className="separador" />

          <table className="table text-center animated fadeInLeft">
            <thead>
            <tr style={{ background: '#900B0B', color: 'white' }}>
              <th colSpan="5">Regional Flights from Caracas - CCS</th>
            </tr>
            <tr style={{ background: '#3E3E3E', color: 'white' }}>
              <th>To</th>
              <th>Flight Nº</th>
              <th>Days</th>
              <th>ETD</th>
              <th>ETA</th>
            </tr>
            </thead>
            <tbody style={{ background: '#BFBFBF', color: '#666464' }}>
            <tr>
              <td>Porlamar</td>
              <td>RX710</td>
              <td>M Tu W Th F S Su</td>
              <td>11:00 UTC</td>
              <td>11:40 UTC</td>
            </tr>
            <tr>
              <td>Maracaibo</td>
              <td>RX750</td>
              <td>M Tu W Th F S Su</td>
              <td>11:20 UTC</td>
              <td>12:00 UTC</td>
            </tr>
            <tr>
              <td>Canaima</td>
              <td>RX700</td>
              <td>M Tu W Th F S Su</td>
              <td>11:40 UTC</td>
              <td>12:30 UTC</td>
            </tr>
            <tr>
              <td>Barinas</td>
              <td>RX720</td>
              <td>M Tu W Th F S Su</td>
              <td>12:00 UTC</td>
              <td>12:50 UTC</td>
            </tr>
            </tbody>
          </table>

          <table className="table text-center animated fadeInLeft">
            <thead>
            <tr style={{ background: '#900B0B', color: 'white' }}>
              <th colSpan="5">Regional Flights from Porlamar - PMV</th>
            </tr>
            <tr style={{ background: '#3E3E3E', color: 'white' }}>
              <th>To</th>
              <th>Flight Nº</th>
              <th>Days</th>
              <th>ETD</th>
              <th>ETA</th>
            </tr>
            </thead>
            <tbody style={{ background: '#BFBFBF', color: '#666464' }}>
            <tr>
              <td>Caracas</td>
              <td>RX711</td>
              <td>M Tu W Th F S Su</td>
              <td>12:00 UTC</td>
              <td>12:40 UTC</td>
            </tr>
            </tbody>
          </table>

          <table className="table text-center animated fadeInLeft">
            <thead>
            <tr style={{ background: '#900B0B', color: 'white' }}>
              <th colSpan="5">Regional Flights from Maracaibo - MAR</th>
            </tr>
            <tr style={{ background: '#3E3E3E', color: 'white' }}>
              <th>To</th>
              <th>Flight Nº</th>
              <th>Days</th>
              <th>ETD</th>
              <th>ETA</th>
            </tr>
            </thead>
            <tbody style={{ background: '#BFBFBF', color: '#666464' }}>
            <tr>
              <td>Caracas</td>
              <td>RX751</td>
              <td>M Tu W Th F S Su</td>
              <td>12:20 UTC</td>
              <td>13:00 UTC</td>
            </tr>
            </tbody>
          </table>

          <table className="table text-center animated fadeInLeft">
            <thead>
            <tr style={{ background: '#900B0B', color: 'white' }}>
              <th colSpan="5">Regional Flights from Canaima - CAJ</th>
            </tr>
            <tr style={{ background: '#3E3E3E', color: 'white' }}>
              <th>To</th>
              <th>Flight Nº</th>
              <th>Days</th>
              <th>ETD</th>
              <th>ETA</th>
            </tr>
            </thead>
            <tbody style={{ background: '#BFBFBF', color: '#666464' }}>
            <tr>
              <td>Caracas</td>
              <td>RX701</td>
              <td>M Tu W Th F S Su</td>
              <td>12:50 UTC</td>
              <td>13:40 UTC</td>
            </tr>
            </tbody>
          </table>

          <table className="table text-center animated fadeInLeft">
            <thead>
            <tr style={{ background: '#900B0B', color: 'white' }}>
              <th colSpan="5">Regional Flights from Barinas - BNS</th>
            </tr>
            <tr style={{ background: '#3E3E3E', color: 'white' }}>
              <th>To</th>
              <th>Flight Nº</th>
              <th>Days</th>
              <th>ETD</th>
              <th>ETA</th>
            </tr>
            </thead>
            <tbody style={{ background: '#BFBFBF', color: '#666464' }}>
            <tr>
              <td>Caracas</td>
              <td>RX721</td>
              <td>M Tu W Th F S Su</td>
              <td>13:10 UTC</td>
              <td>14:00 UTC</td>
            </tr>
            </tbody>
          </table>

          <Link to="home.php#services" className="btn btn-outline-black">BACK TO SERVICES</Link>

        </div>

      </div>
    </section>
  </Layout>
)

export default regionalTimetable
