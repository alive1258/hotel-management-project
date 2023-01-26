import React from 'react';
import './About.css';
import aboutImg1 from '../../image/aboutImg1.jpg';

const AboutCard = () => {
    return (
        <div>
           <div className='aboutCard mtop flex_space'>
                <div className='row row1'>
                    <h4>About Us</h4>
                    <h1>
                        We <span>provide Solution</span> to grow your business
                    </h1>
               <p>Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro</p>
               <p>Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro</p>
                    <button className='secondary-btn'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                </div>
                <div className='row image'>
                    <img src={aboutImg1} alt="aboutImg"/>
                    <div className='control-btn'>
                        <button className='prev'>
                        <i className='fas fa-play'></i>
                        </button>
                        
                    </div>
                </div>
           </div>
        </div>
    );
};

export default AboutCard;