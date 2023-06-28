import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleCountry = () => {
  const [finalcountry, setfinalcountry] = useState({});
  const params = useParams();
  useEffect(() => {
    async function getCountries() {
      const url = await fetch(
        `https://restcountries.com/v3.1/name/${params.countryname}?fullText=true`
      );
      const response = await url.json();
      setfinalcountry(response);
    }
    console.log(params);
    getCountries();
  }, []);

  currencies.Rial.name - Currencies.Toman.name;

  return (
    <div>
      <img src={finalcountry[0]?.flags?.png} />
      <h1>{finalcountry[0]?.name?.common}</h1>
      <div>
        <div>
          <span>Native Name: </span>
          <span>
            {finalcountry[0]?.name?.nativeName?.eng?.common},{" "}
            {finalcountry[0]?.name?.nativeName?.urd?.common}
          </span>
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
          <span>{finalcountry[0]?.currencies?.PKR?.name}</span> 'Rial, Toman'
        </div>
        <div>
          <span>Languages: </span>
          <span>
            {finalcountry[0]?.languages?.eng} ,{" "}
            {finalcountry[0]?.languages?.urd}
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SingleCountry;
