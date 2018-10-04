import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'

const InternationalTimetable = () => (
  <Layout>
    <section id="timetable">
      <div className="container-fluid">
        <div className="cover">
          <img
            src={withPrefix('img/COVER-INTERNATIONAL.jpg')}
            alt="Regional Timetable"
            className="img-fluid"
          />
        </div>
        <div className="container">
          <h2 className="mt-4 animated fadeInLeft">INTERNATIONAL TIMETABLES</h2>
          <div className="separador" />

          <table className="table text-center animated fadeInLeft">
            <thead>
              <tr style={{ background: '#900B0B', color: 'white' }}>
                <th colSpan="5">International Flights from Caracas - CCS</th>
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
                <td>Sint Maarten</td>
                <td>RX715</td>
                <td>M W F</td>
                <td>12:00 UTC</td>
                <td>14:00 UTC</td>
              </tr>
              <tr>
                <td>Costa Rica</td>
                <td>RX755</td>
                <td>Tu Th S</td>
                <td>11:20 UTC</td>
                <td>14:30 UTC</td>
              </tr>
              <tr>
                <td>Panamá</td>
                <td>RX705</td>
                <td>M W F</td>
                <td>11:40 UTC</td>
                <td>13:20 UTC</td>
              </tr>
              <tr>
                <td>Chile</td>
                <td>RX725</td>
                <td>Tu Th S</td>
                <td>10:20 UTC</td>
                <td>16:30 UTC</td>
              </tr>
              <tr>
                <td>Canada</td>
                <td>RX735</td>
                <td>Tu Th S</td>
                <td>11:40 UTC</td>
                <td>17:40 UTC</td>
              </tr>
            </tbody>
          </table>

          <table className="table text-center animated fadeInLeft">
            <thead>
              <tr style={{ background: '#900B0B', color: 'white' }}>
                <th colSpan="5">Flights from Sint Maarten - SXM</th>
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
                <td>RX716</td>
                <td>M W F</td>
                <td>14:40 UTC</td>
                <td>16:40 UTC</td>
              </tr>
            </tbody>
          </table>

          <table className="table text-center animated fadeInLeft">
            <thead>
              <tr style={{ background: '#900B0B', color: 'white' }}>
                <th colSpan="5">Flights from Costa Rica - SJO</th>
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
                <td>RX756</td>
                <td>Tu Th S</td>
                <td>15:20 UTC</td>
                <td>18:30 UTC</td>
              </tr>
            </tbody>
          </table>

          <table className="table text-center animated fadeInLeft">
            <thead>
              <tr style={{ background: '#900B0B', color: 'white' }}>
                <th colSpan="5">Flights from Panamá - PTY</th>
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
                <td>RX706</td>
                <td>M W F</td>
                <td>14:00 UTC</td>
                <td>16:10 UTC</td>
              </tr>
            </tbody>
          </table>

          <table className="table text-center animated fadeInLeft">
            <thead>
              <tr style={{ background: '#900B0B', color: 'white' }}>
                <th colSpan="5">Flights from Chile - SCL</th>
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
                <td>RX726</td>
                <td>Tu Th S</td>
                <td>17:10 UTC</td>
                <td>23:20 UTC</td>
              </tr>
            </tbody>
          </table>

          <table className="table text-center animated fadeInLeft">
            <thead>
              <tr style={{ background: '#900B0B', color: 'white' }}>
                <th colSpan="5">Flights from Canada - YYZ</th>
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
                <td>RX736</td>
                <td>Tu Th S</td>
                <td>18:20 UTC</td>
                <td>01:30 UTC</td>
              </tr>
            </tbody>
          </table>

          <Link to="/#services" className="btn btn-outline-black">
            BACK TO SERVICES
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default InternationalTimetable
