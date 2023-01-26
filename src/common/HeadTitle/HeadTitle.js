import React from 'react';
import './HeadTitle.css';
import { useLocation ,Link} from 'react-router-dom';

const HeadTitle = () => {
    const location = useLocation()
    return (
        <div>
            <section className='image-heading'>
                <div className='container'>
                    {/* jokon je page jaby tokon se page curent location dekaby nice coad {location.pathname.split("/")[1]} */}
                    <h1>{location.pathname.split("/")[1]}</h1>
                  
                    <div className='btn-h-a'>
                        <Link to="/">Home /</Link>
                        <span>{location.pathname.split("/")[1]}</span>
                    </div>

                    
                    
                </div>
            </section>
        </div>
    );
};

export default HeadTitle;