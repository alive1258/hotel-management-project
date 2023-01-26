import React from 'react';
import DestinationHome from '../component/HomeSection/Destina/DestinationHome';
import Download from '../component/HomeSection/Download/Download';
import Gallery from '../component/HomeSection/gallery/Gallery';
import Hero from '../component/HomeSection/Hero';
import HomeAbout from '../component/HomeSection/HomeAbout';
import MostPopular from '../component/HomeSection/popular/MostPopular';
import Works from '../component/HomeSection/work/Works';

const Home = () => {
    return (
        <div>
            <Hero />
            <HomeAbout/>
            <MostPopular/>
            <DestinationHome/>
            <Download/>
            <Works/>
            <Gallery/>
            
        </div>
    );
};

export default Home;