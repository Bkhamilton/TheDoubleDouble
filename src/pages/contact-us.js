import * as React from 'react';
import DoubleDoubleTitle from '../components/TheDoubleDouble/DoubleDoubleTitle/DoubleDoubleTitle';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ContactPage from '../components/ContactPage/ContactPage';

export default function ContactUs() {
    return (
        <div className='main-background'>
            <NavBar/>
            <DoubleDoubleTitle/>
            <ContactPage/>
            <Footer/>
        </div>
    )
}