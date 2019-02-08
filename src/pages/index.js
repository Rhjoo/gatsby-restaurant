import React from "react"
// import styled from "styled-components";
// import { FaBeer } from 'react-icons/fa'
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
    {/* <h3>Hello from Gatsby</h3>
    <h3> Lets go for a <FaBeer />? </h3> */}
    <h3>this is the home page</h3>
  </Layout>
)



export default IndexPage
