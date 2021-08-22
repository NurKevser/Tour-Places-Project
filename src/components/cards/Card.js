import React from "react";
import { data } from "../../helpers/Data";
import "./Card.css";

function Card() {
  return Datas();
}

function Datas() {
    
  for (let i = 0; i < data.length; i++) {
    return (
     <div className="card-container">
        <div className="cards">
          <div className="title">
            <h2>{data[i].title}</h2>
          </div>
          <img src={data[i].image} alt={data[i].title} />
          <div className="card-over">
            <p>{data[i].desc}</p>
          </div>
        </div>
      </div>
        
    );
}
}

export default Card;

/*  <div className="card-container">
            <div className="cards">
                <div className="title">
                <h2>{data[0].title}</h2>
                </div>
                <img src={data[0].image} alt={data[0].title} />
                <div className="card-over">
                    <p>{data[0].desc}</p>
                </div>
            </div>
        </div> */
