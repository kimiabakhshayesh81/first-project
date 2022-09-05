import React from "react";

const Card = (props) => {

    let { country } = props;
    console.log(props.country)

    return (
        
        <div style={{border:"solid 2px ",padding:"5px",margin:"10px"}}>
            
        <div>
           <img src={country.flags.png}></img>
        </div> 

        <div>
           {country.nativeName}
        </div>

        <div>
            {country.population}
        </div>

        <div>
            {country.region}
        </div>

        <div>
            {country.subRegion}
        </div>

        <div>
            {country.capital}
        </div>

        <div>
           {country.TopLevelDomain}
        </div>    

        </div>
    )
}

export default Card;

