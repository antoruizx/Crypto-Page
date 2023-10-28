import React from 'react'
import "../Styles/Gallery.css";
import Img1 from '../assets/img/img1.jpg';
import Img2 from '../assets/img/img2.jpg';
import Img3 from '../assets/img/img4.jpg';

const Gallery = () => {
  return (
    <div className='div-grid'>
        <img className="images-grid" src={Img1} alt="" />
        <img className="images-grid" src={Img2} alt="" />
        <img className="images-grid" src={Img3} alt="" />
        <img className="images-grid" src={Img1} alt="" />
        <img className="images-grid" src={Img2} alt="" />
        <img className="images-grid" src={Img3} alt="" />
        <img className="images-grid" src={Img1} alt="" />
        <img className="images-grid" src={Img1} alt="" />

    </div>
  )
}

export default Gallery;