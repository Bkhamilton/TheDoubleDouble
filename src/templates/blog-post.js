import * as React from 'react';
import DoubleDoubleTitle from '../components/TheDoubleDouble/DoubleDoubleTitle/DoubleDoubleTitle';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import BlogPost from '../components/BlogPost/BlogPost';

export default function BlogPostTemplate({ pageContext }) {
    const { node } = pageContext;

    return (
        <div className='main-background'>
            <NavBar/>
            <DoubleDoubleTitle/>
            <BlogPost node={node}/>
            <Footer/>
        </div>
    )
}