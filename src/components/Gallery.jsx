import React from 'react'
import "../Styles/Gallery.css";
import Buzo1 from "../assets/img/1.png";
import Buzo2 from "../assets/img/2.png";
import Reme1 from "../assets/img/3.png";
import Reme2 from "../assets/img/4.png";
import Gorra1 from "../assets/img/5.png";
import Gorra2 from "../assets/img/6.png";



const Gallery = () => {
  return (
    <div className='div-grid'>
        <img className="images-grid" src={Buzo1} alt="" />
        <img className="images-grid" src={Buzo2} alt="" />
        <img className="images-grid" src={Reme1} alt="" />
        <img className="images-grid" src={Reme2} alt="" />
        <img className="images-grid" src={Gorra1} alt="" />
        <img className="images-grid" src={Gorra2} alt="" />

    </div>
  )
}

export default Gallery;