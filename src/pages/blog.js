import * as React from 'react';
import DoubleDoubleTitle from '../components/TheDoubleDouble/DoubleDoubleTitle/DoubleDoubleTitle';
import NavBar from '../components/NavBar/NavBar';
import BlogPage from '../components/BlogPage/BlogPage';
import Footer from '../components/Footer/Footer';

export default function Blog() {
    return (
        <div className='main-background'>
            <NavBar/>
            <DoubleDoubleTitle/>
            <BlogPage/>
            <Footer/>
        </div>
    )
}