import React from 'react';
import AboutCard from './AboutCard';
import featureImg from '../../image/featureImg.jpg';
import HeadTitle from '../../common/HeadTitle/HeadTitle';

const About = () => {
    return (
        <div>
            <HeadTitle/>
            <section className='about top'>
                <div className='container'>
                    <AboutCard />   
                </div>
            </section>

            <section className='features top'>
                <div className='container aboutCard flex_space'>
                    <div className='row row1'>
                        <h1>
                            Our <span>Feature</span>
                        </h1>
                        <p>Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro</p>
               <p>Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro</p>
                    <button className='secondary-btn'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                    </div>
                    <div className='row image'>
                    <img src={featureImg} alt="aboutImg"/>
                    <div className='control-btn'>
                        <button className='prev'>
                        <i className='fas fa-play'></i>
                        </button>
                        
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default About;