import * as React from 'react';
import DoubleDoubleTitle from '../components/TheDoubleDouble/DoubleDoubleTitle/DoubleDoubleTitle';
import DraftPage from '../components/DraftPage/DraftPage';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

export default function DraftGuide() {
    return (
        <div className='main-background'>
            <NavBar/>
            <DoubleDoubleTitle/>
            <DraftPage/>
            <Footer/>
        </div>
    )
}