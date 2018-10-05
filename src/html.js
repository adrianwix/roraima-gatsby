import React from "react"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src={withPrefix("js/jquery-3.2.1.min.js")} charSet="utf-8"/>
          <script src={withPrefix("js/popper.min.js")} charSet="utf-8"/>
          <script src={withPrefix("js/fontawesome-all.min.js")} charSet="utf-8"/>
          <script src={withPrefix("js/bootstrap.js")} charSet="utf-8"/>
          <script src={withPrefix("js/roraima.js")} charSet="utf-8"/>
          <script src={withPrefix("js/aos.js")} charSet="utf-8"/>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            AOS.init({
              offset: 0,
              once: true
            });
            window.addEventListener('load', AOS.refresh);
        `,
            }}
          />
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
