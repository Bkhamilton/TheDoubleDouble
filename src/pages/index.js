import * as React from "react"
import NavBar from '../components/NavBar/NavBar.jsx';
import TheDoubleDouble from "../components/TheDoubleDouble/TheDoubleDouble.jsx";
import '../constants/typefaces.css';
import Seo from "../components/seo"
import Footer from "../components/Footer/Footer.jsx";

export default function IndexPage() {
  return (
    <div className="main-background">
      <NavBar/>
      <TheDoubleDouble/>
      <Footer/>
    </div>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="The Double Double" />
