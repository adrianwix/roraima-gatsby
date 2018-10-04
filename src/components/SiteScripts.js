import React from 'react'
import { withPrefix } from 'gatsby'
const SiteScripts = () => {
  return (
    <div>
      <script src={withPrefix("js/jquery-3.2.1.min.js")} charset="utf-8" />
      <script src={withPrefix("js/popper.min.js")} charset="utf-8" />
      <script src={withPrefix("js/fontawesome-all.min.js")} charset="utf-8" />
      <script src={withPrefix("js/bootstrap.js")} charset="utf-8" />
      <script src={withPrefix("js/roraima.js")} charset="utf-8" />
    </div>
  )
}
export default SiteScripts