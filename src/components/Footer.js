import React from 'react'
import FooterLinks from './FooterLinks'
import Copyright from './Copyright'

const Footer = () => {
  return (
    <section id="footer">
      <div className="container-fluid">
        <FooterLinks />
        <Copyright />
      </div>
    </section>
  )
}

export default Footer;