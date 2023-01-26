import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logohotel from '../../image/logohotel.webp';


const Navbar = () => {
    const [click, setClick] = useState(false)
    
    const handelClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <div>
            <nav className='navbar'>
                <div className='container flex_space'>
                    <div className='menu-icon' onClick={handelClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li><Link to='/' className={closeMobileMenu}>Home</Link></li>
                        <li><Link to='/about'className={closeMobileMenu}>About</Link></li>
                        <li><Link to='/gallery' className={closeMobileMenu}>Gallery</Link></li>
                        <li><Link to='/destination' className={closeMobileMenu}>Destination</Link></li>
                        <li><Link to='/blog' className={closeMobileMenu}>Blog</Link></li>
                        <li><Link to='/testimonial' className={closeMobileMenu}>Testimonial</Link></li>
                        <li><Link to='/contact' className={closeMobileMenu}>Contact Us</Link></li>
                                
                    </ul>
                  
                    <div className='login-area flex '>
                        <ul>
                            <li><Link to='/sign-in'><i>Sign in</i></Link></li>
                            <li><Link to='/register'> <i >Register</i></Link></li>
                            <li><Link to='/contact'><button className='primary-btn'>Request a Quote</button></Link></li>                                                          
                       </ul>                         
                    </div>                    
                </div>
                
            </nav>

            <header>
                <div className='container flex_space'>
                    <div className='logo flex items-center align-center justify-center gap-4'>
                        <img className='logo-hotel' src={logohotel} alt=""/> 
                        <h1 className='text-2xl text-[#f4d008] font-bold'>Z-LUXURIOUS HOTEL</h1>                     
                    </div>                    
              
                <div className='contact flex_space'>
                    <div className='box flex_space'>
                        <div className='icons'>
                            <i className='far fa-clock'></i>
                        </div>
                        <div className='text'>
                            <h4>Working Hours</h4>
                            <Link>Monday - Sunday: 9:00am to 6.00pm</Link>
                        </div>
                    </div>
                    <div className='box flex_space'>
                        <div className='icons'>
                            <i className='fas fa-phone-volume'></i>
                        </div>
                        <div className='text'>
                            <h4>Call Us Hours</h4>
                            <Link>+123 4456 466 005</Link>
                        </div>
                    </div>
                    <div className='box flex_space'>
                        <div className='icons'>
                        <i class="fa-regular fa-envelope"></i>
                        </div>
                        <div className='text'>
                            <h4>Mail Us</h4>
                            <Link>info@gmail.com</Link>
                        </div>
                    </div>
                  
                </div>
                </div>
            </header>
          
        </div>
    );
};

export default Navbar;