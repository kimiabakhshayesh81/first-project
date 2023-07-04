import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Singleproduct = () => {
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

  const getCurrency = (currencies) => {
    if (!currencies) return "";
    console.log({ currencies });
    const altCU = {
      KRW: { name: "South Korean won", symbol: "₩" },
      dollar: { name: "South Korean won", symbol: "₩" },
    };
    // [({ name: "South Korean won", symbol: "₩" }, dollar: { name: "South Korean won", symbol: "₩" },];
    const currencyNames = Object.values(currencies).map(
      (currency) => currency.name
    );
    // ['South Korean won','dollar']
    let str = currencyNames.join(",");
    return str;
  };
  let targetCountry = finalcountry[0];
  // const countrySpecification = {
  //   nativeName: {
  //     label: "Native name:",
  //     value: Object.values(targetCountry.name?.nativeName).map((nativeName) => (
  //       <span>{nativeName.common}</span>
  //     )),
  //   },
  //   population: {
  //     label: "Population",
  //     value: targetCountry?.population,
  //   },
  //   region: {
  //     label: "Population",
  //     value: targetCountry?.population,
  //   },
  // };

  return (
    <div>
      <img src={targetCountry?.flags?.png} />
      <h1>{targetCountry?.name?.common}</h1>

      <div>
        <div>
          <span>Native name: </span>
          {targetCountry?.name?.nativeName && (
            <span>
              {Object.values(targetCountry.name?.nativeName).map(
                (nativeName) => (
                  <span>{nativeName.common}</span>
                )
              )}
            </span>
          )}
        </div>
        <div>
          <span>Population: </span>
          <span>{targetCountry?.population}</span>
        </div>
        <div>
          <span>Region: </span>
          <span>{targetCountry?.region}</span>
        </div>
        <div>
          <span>Sub Region: </span>
          <span>{targetCountry?.subregion}</span>
        </div>
        <div>
          <span>Capital: </span>
          <span>{targetCountry?.capital}</span>
        </div>
        <div>
          <span>Top Level Domain: </span>
          <span>{targetCountry?.tld}</span>
        </div>

        <div>
          <span>Currencies: </span>

          <span>{getCurrency(targetCountry?.currencies)}</span>
        </div>
        <div>
          <span>language: </span>
          {targetCountry?.languages && (
            <span>
              {Object.values(targetCountry.languages).map((language) => (
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
