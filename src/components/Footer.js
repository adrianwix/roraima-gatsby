import React from 'react'
import FooterLinks from './FooterLinks'
import Copyright from './Copyright'

export default () => {
  return (
    <section id="footer">
      <div className="container-fluid">
        <FooterLinks />
        <Copyright />
      </div>
    </section>
  )
}
