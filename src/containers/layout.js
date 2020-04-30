import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "../components/nav"
import Footer from "../components/footer"
import Container from "../components/container"
import "./layout.css"
import typeStyle from "../components/type.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Nav />
      <Container>
        <main>{children}</main>
        <h1 className={typeStyle.title}>Header</h1>
      </Container>
      <Footer / >
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
