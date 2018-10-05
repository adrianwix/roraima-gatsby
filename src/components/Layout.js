import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, withPrefix } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
// import './layout.css'
import './css/bootstrap.css'
import './css/roraima.css'
import "../../node_modules/aos/dist/aos.css"

// import SiteScripts from './SiteScripts'

// import './js/fontawesome-all.min.js'
// import 'jquery'
// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/css/fontawesome.css'
// import './js/popper.min'
// import 'bootstrap/dist/js/bootstrap'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Roraima Virtual Airline' },
            { name: 'keywords', content: 'roraima, airline' },
          ]}
        >
          <html lang="en" />
          <link rel="icon" href={withPrefix("img/favicom.png")} />
          {/* <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
          <link rel="stylesheet" type="text/css" href="css/roraima.css" />
          <link rel="stylesheet" type="text/css" href="css/animate.min.css" />
          <link rel="stylesheet" type="text/css" href="css/efectos.css" /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500"
            rel="stylesheet"
          />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
        <Footer />
        {/*<SiteScripts/>*/}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
