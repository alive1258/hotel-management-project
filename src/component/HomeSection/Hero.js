import React from 'react';
import './Home.css';
import slider1 from '../../image/slider1.jpg';

const Hero = () => {

    return (
        <div className='slider'>
          
                <img src={slider1} alt='img'/>
            

            <section className='slide-form'>
                <div className='container'>
                    <h2>Enjoy Your Holiday</h2>
                    <span>Search and Book Hotel</span>
                    <form action=''>
                        <input type="text" placeholder='Search City' />
                        <div className='flex_space'>
                           <input type="date" placeholder='Check In'/> 
                           <input type="date" placeholder='Check Out'/>
                        </div>
                        <div className='flex_space'>
                           <input type="number" placeholder='Adult(s)(+18)'/> 
                           <input type="number" placeholder='Children(0 -17)'/>
                        </div>
                        <input type="number" placeholder='Rooms'/>
                        <input type="number"  placeholder='Search' className='submit'/>
                    </form>
                </div>
                
            </section>

          
        </div>
    );
};

export default Hero;