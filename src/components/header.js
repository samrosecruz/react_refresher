import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="Header">
      <div className="HeaderGroup">
        <Link to="/courses">Courses</Link>
      </div>

    </div>
    <h1>Logo</h1>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
