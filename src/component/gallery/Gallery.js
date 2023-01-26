import React from 'react';
import HeadTitle from '../../common/HeadTitle/HeadTitle';
import Card from './Card';
import GalleryData from './GalleryData';
import './Gallery.css';

const Gallery = () => {
    return (
        <div>
           <HeadTitle/> 

           <section className='gallery top'>
        <div className='container grid'>
          {GalleryData.map((value) => {
            return <Card imgaes={value.img} title={value.title} />
          })}
        </div>
      </section>
        </div>
    );
};

export default Gallery;