import React from "react"
// import styled from "styled-components";
import { FaBeer } from 'react-icons/fa'
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>this is menu page</h3>
  </Layout>
)

export default MenuPage
