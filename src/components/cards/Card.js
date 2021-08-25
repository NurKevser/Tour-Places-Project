import React from "react";
import { data } from "../../helpers/Data";
import "./Card.css";

function Card(props) {
  return (
    <div className='card-container'>
      {data.map((card) => {
        return (
          <div className='cards' onClick={props.onMouseClick} >
            <div className='title'>
              <h2>{card.title}</h2>
            </div>

            <img src={card.image} alt={card.title} />

            <div className={props.isVisible ? 'card-over' : 'card-over-no'}>
              <p>{card.desc}</p>
            </div>
          </div>

        );
      })}

    </div>
  );
};

export default Card;

