import * as React from 'react';
import '../../constants/typefaces.css';
import AboutUs from './AboutUs/AboutUs';
import DoubleDoubleTitle from './DoubleDoubleTitle/DoubleDoubleTitle';
import FeaturedEpisode from './FeaturedEpisode/FeaturedEpisode';
import LatestEpisode from './LatestEpisode/LatestEpisode';
import Socials from './Socials/Socials';

export default function TheDoubleDouble() {
    return (
        <div>
            <DoubleDoubleTitle/>
            <Socials/>
            <LatestEpisode/>
            <AboutUs/>
            <FeaturedEpisode/>
        </div>
    );
}