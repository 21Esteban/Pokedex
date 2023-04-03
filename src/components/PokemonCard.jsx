import React, { useState } from "react";
import "./PokemonCard.css";
import pokeball from "../img/pokeball.png";

export const PokemonCard = ({
  id,
  name,
  image,
  type,
  height,
  weight,
  stats,
  statsName,
}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="container">
      {isShown && (
        <div className="show">
          <div className="stat-container-title">
            <p>{name}</p>
            <img src={image} alt="" className="img-title" />
          </div>
          <img src={image} alt={name} />
          <div style={{ display: "flex", width: "100%" }}>
            <div
              className="stats-left"
              style={{ background: "#fffff", textAlign: "center" }}
            >
              <p>type</p>
              <p>height</p>
              <p>weight</p>
            </div>
            <div className="stats-right" style={{ background: "#fffff" }}>
              <p>{type}</p>
              <p>{height} cm</p>
              <p>{weight} lbs</p>
            </div>
          </div>
          <div className="base-stats">
            <div>
              {statsName.map((stats,index) => (
                <p className="stats" key={index}>{stats}</p>
              ))}
              <div>
              {stats.map((stats,index) => (
                <p className="stats" key={index}>{stats}</p>
              ))}
              
            </div>
            </div>
            
          </div>
        </div>
      )}

      <div
        className="right"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img
          src={image}
          alt={name}
          style={{ maxHeight: "50px", marginRight: "10px", width: "50px" }}
        />
        <p style={{ width: "270px" }}>No.{id}</p>
        <p>{name}</p>
        <img
          src={pokeball}
          alt="pokeball"
          style={{ marginLeft: "auto", width: "40px" }}
        />
      </div>
    </div>
  );
};

// lo que hacemos aca es tener un estado y ese estado va a comenzar en false, de acuerdo a como este ese estado se va a motrar nuestra className o clase y la estructura "show"
