import React from "react";
const Card = (props) => {
    let { country } = props;
    console.log(props.country)
    return (
      <div className="grid-container">
        <div className="grid-items-image">
          <img src={country.flags.png}></img>
        </div>
        <div className="grid-items">
            <div className="detaliesName">{country.name.common}</div>
        </div>
        <div className="grid-items">
            <div>Population: </div>
            <div>{country.population}</div>
        </div>
        <div className="grid-items">
            <div>Region: </div>
            <div>{country.region}</div>
        </div>
        <div className="grid-items">
            <div>Subregion: </div>
            <div>{country.subregion}</div>
        </div>
        <div className="grid-items">
            <div>Capital: </div>
            <div>{country.capital}</div>
        </div>
        <div className="grid-items">
            <div>Top Level Domain: </div>
            <div>{country.tld}</div>
        </div>
      </div>
    );
}
export default Card;
