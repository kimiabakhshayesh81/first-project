import React from "react";
const Card = (props) => {
  let { country } = props;
  console.log(props.country);
  return (
    <div className="grid-container">
      <div className="grid-items-image">
        <img src={country.flags.png} alt=""></img>
      </div>
      <div className="info">
        <div className="grid-items">
          <div className="detaliesName">{country.name.common}</div>
        </div>
        <div className="grid-items">
          <div className="papulation">Population: </div>
          <div>{country.population}</div>
        </div>
        <div className="grid-items">
          <div>Region: </div>
          <div>{country.region}</div>
        </div>
        <div className="grid-items">
          <div>Capital: </div>
          <div>{country.capital}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
