import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Container from "./container"

const Nav = ({ siteTitle }) => (
  <nav>
    <Container>
      <h1>Logo</h1>
      <div className="Header">
        <div className="HeaderGroup">
          <Link to="/courses">Link</Link>
          <Link to="/courses">Link</Link>
          <Link to="/courses">Link</Link>
        </div>
      </div>
    </Container>
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
