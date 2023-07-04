import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Singleproduct = () => {
  const [finalcountry, setfinalcountry] = useState({});
  const  countryName = useParams();
  const nativeName = [];

  useEffect(() => {
    async function getCountries() {
      const url = await fetch(`https://restcountries.com/v3.1/name/${Object.values(countryName).toString()}?fullText=true`);
      const response = await url.json();
      setfinalcountry(response);
    }
    getCountries();
  }, [countryName]);
  
  return (
    <div>
      <img src={finalcountry[0]?.flags?.png} />
      <h1>{finalcountry[0]?.name?.common}</h1>
      <div>
        <div>
          <span>Native name: </span>
          {finalcountry[0]?.name?.nativeName && (
          <span>
          {Object.values(finalcountry[0].name?.nativeName).map((nativeName) => (
          <span>{nativeName.common}</span>
          ))} 
          </span>
         )}
        </div> 
        <div>
          <span>Population: </span>
          <span>{finalcountry[0]?.population}</span>
        </div>
        <div>
          <span>Region: </span>
          <span>{finalcountry[0]?.region}</span>
        </div>
        <div>
          <span>Sub Region: </span>
          <span>{finalcountry[0]?.subregion}</span>
        </div>
        <div>
          <span>Capital: </span>
          <span>{finalcountry[0]?.capital}</span>
        </div>
        <div>
          <span>Top Level Domain: </span>
          <span>{finalcountry[0]?.tld}</span>
        </div>
        <div>
          <span>Currencies: </span>
          {finalcountry[0]?.currencies && (
          <span>
          {Object.values(finalcountry[0].currencies).map((currency) => (
          <span>{currency.name}</span>
          ))} 
          </span>
      )}
        </div>
          <div>
            <span>language: </span>
            {finalcountry[0]?.languages && (
            <span>
            {Object.values(finalcountry[0].languages).map((language) => (
            <span>{language} </span>
            ))} 
            </span>
          )}
          </div>  
      </div>
    </div>
  );
};

export default Singleproduct;