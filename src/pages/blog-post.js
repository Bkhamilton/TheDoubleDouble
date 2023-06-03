import * as React from "react"
import NavBar from '../components/NavBar/NavBar.jsx';
import '../constants/typefaces.css';
import Seo from "../components/seo"
import Footer from "../components/Footer/Footer.jsx";
import BlogPost from "../components/BlogPost/BlogPost.jsx";

export default function BlogPostPage() {
  return (
    <div className="main-background">
      <NavBar/>
      <BlogPost/>
      <Footer/>
    </div>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blog Post" />
