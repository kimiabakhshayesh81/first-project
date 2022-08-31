import React from "react";

const Card = (props) => {

    let data = [
        {
            id: 1,
            nativeName:'الكويت', 
            population:'4,270,563',
            region:'Asia',
            subRegion:'Western Asia',
            capital:'Kuwait City'}
    ]
    console.log(data)

    // {
    //     props.countries.map((country,index) => {
    //         return (<div>{country.name.common}</div>)
    //     })
    // }

    return (
        
        <div style={{border:"solid red 5px ",padding:"5px",margin:"10px"}}>
        <div>
           {data[0].nativeName}
        </div>

        <div>
            {data[0].population}
        </div>

        <div>
            {data[0].region}
        </div>

        <div>
            {data[0].subRegion}
        </div>

        <div>
            {data[0].capital}
        </div>
        </div>
    )
}

export default Card;






