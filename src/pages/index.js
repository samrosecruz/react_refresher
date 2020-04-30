import React from "react"
import { Link } from "gatsby"

import "../components/basestyles.js"
import Layout from "../containers/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
)

export default IndexPage
