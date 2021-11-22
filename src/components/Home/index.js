import React from 'react'
import { useNavigate } from 'react-router';
import { Electronics } from '../Electronics';

export const Home = () => {
    const navigate = useNavigate();
    return (
       
             <div className="homeDiv">
      <h1>Geners</h1>

      <div className="genreCardsDiv">
        <div
          className="genres"
          onClick={() => {
            navigate("/rock");
          }}
        >
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/8b/15/c4/8b15c41b8b22f5c2a7a6debd25f7f6c8.jpg"
            alt="rockImg"
          />
          <h2 className="genHead">Rock</h2>
        </div>
        <div
          className="genres"
          onClick={() => {
            navigate("/pop");
          }}
        >
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/91/f4/c7/91f4c75d05f3a193cbd38524b5f55a77.jpg"
            alt="popImg"
          />
          <h2 className="genHead">Pop</h2>
        </div>
        <div
          className="genres"
          onClick={() => {
            navigate("/kpop");
          }}
        >
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/e5/e1/b2/e5e1b272a5d1a234bd626310c932f701.jpg"
            alt="jazzImg"
          />
          <h2 className="genHead">Kpop</h2>
        </div>
        <div
          className="genres"
          onClick={() => {
            navigate("/soul");
          }}
        >
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/19/79/4f/19794fa23fedd4226ac1f598de7a6490.jpg"
            alt="ClassicImg"
          />
          <h2 className="genHead">R&B/Soul</h2>
        </div>
      </div>

      <Electronics/>
        </div>
       

    )
}
