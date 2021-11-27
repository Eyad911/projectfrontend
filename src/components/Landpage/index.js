import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
export const Landpage = () => {
  const navigate = useNavigate();
  return (
    <div className="contener">
      <div className="contener">
        <div id="imgDev">
          <img
            id="landImg"
            src="https://www.capgemini.com/at-de/wp-content/uploads/sites/25/2019/02/procurement-source-capgemini-invent.jpg"
            alt="landpic"
          />
        </div>
        <div id="textDev">
          <h1 id="mainH1">
            AN ONLINE
            <br />
            SHOP WITH <br />
            COMPETITIVE PRICE
            <br />
          </h1>
          <h5>
            <br />
            Connect with quality products!
            <br />
            <br />
          </h5>
          <button
            className="btn-land1 btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            LOG IN
          </button>
          <br />
          <button
            className="btn-land2 btn"
            onClick={() => {
              navigate("/signup");
            }}
          >
            SIGN UP
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p id="landP">
            Be the first to hear about upcoming sales, hot trends, and new
            arrivals.
          </p>
        </div>
      </div>
    </div>
  );
};
