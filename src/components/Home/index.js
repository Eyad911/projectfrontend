import React from 'react'
import './style.css'
import { useNavigate } from 'react-router';
// import { Electronics } from '../Electronics';

export const Home = () => {
    const navigate = useNavigate();
    return (
       
             <div className="homeDiv">
      <h1 id="departH1">Department</h1>

      <div className="genreCardsDiv">
        <div
          className="genres"
          onClick={() => {
            navigate("/accessories");
          }}
        >
          <img
            className="genreImg"
            src="https://m.media-amazon.com/images/I/71m-EsCA2aL._AC_UL640_FMwebp_QL65_.jpg"
            alt="rockImg"
          />
          <h2 className="genHead">Accessories</h2>
        </div>
        <div
          className="genres"
          onClick={() => {
            navigate("/phone");
          }}
        >
          <img
            className="genreImg"
            src="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UL640_FMwebp_QL65_.jpg"
            alt="popImg"
          />
          <h2 className="genHead">Phone</h2>
        </div>
        <div
          className="genres"
          onClick={() => {
            navigate("/printers");
          }}
        >
          <img
            className="genreImg"
            src="https://m.media-amazon.com/images/I/81BJDjwDjVL._AC_UL640_QL65_.jpg"
            alt="jazzImg"
          />
          <h2 className="genHead">Printers</h2>
        </div>
        <div
          className="genres"
          onClick={() => {
            navigate("/headphones");
          }}
        >
          <img
            className="genreImg"
            src="https://m.media-amazon.com/images/I/61Kq-Pz8d-L._AC_UY436_FMwebp_QL65_.jpg"
            alt="ClassicImg"
          />
          <h2 className="genHead">Headphones</h2>
        </div>
        <div
          className="genres"
          onClick={() => {
            navigate("/soul");
          }}
        >
          <img
            className="genreImg"
            src="https://m.media-amazon.com/images/I/61Kq-Pz8d-L._AC_UY436_FMwebp_QL65_.jpg"
            alt="ClassicImg"
          />
          <h2 className="genHead">Headphones</h2>
        </div>
        <div
          className="genres"
          onClick={() => {
            navigate("/soul");
          }}
        >
          <img
            className="genreImg"
            src="https://m.media-amazon.com/images/I/61Kq-Pz8d-L._AC_UY436_FMwebp_QL65_.jpg"
            alt="ClassicImg"
          />
          <h2 className="genHead">Headphones</h2>
        </div>
        {/* <div
          className="genres"
          onClick={() => {
            navigate("/soul");
          }}
        >
          <img
            className="genreImg"
            src="https://m.media-amazon.com/images/I/61Kq-Pz8d-L._AC_UY436_FMwebp_QL65_.jpg"
            alt="ClassicImg"
          />
          <h2 className="genHead">Headphones</h2>
        </div> */}
        {/* <div
          className="genres"
          onClick={() => {
            navigate("/soul");
          }}
        >
          <img
            className="genreImg"
            src="https://m.media-amazon.com/images/I/61Kq-Pz8d-L._AC_UY436_FMwebp_QL65_.jpg"
            alt="ClassicImg"
          />
          <h2 className="genHead">Headphones</h2>
        </div> */}
      </div>

      {/* <Electronics/> */}
        </div>
       

    )
}
