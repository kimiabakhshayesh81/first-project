// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const Singleproduct = () => {
//   const [finalcountry, setfinalcountry] = useState({});
//   const params = useParams();
//   useEffect(() => {
//     async function getCountries() {
//       const url = await fetch(
//         `https://restcountries.com/v3.1/name/${params.countryname}?fullText=true`
//       );
//       const response = await url.json();
//       setfinalcountry(response);
//     }
//     console.log(params);
//     getCountries();
//   }, []);


//   const getCurrency = (currencies ) => {
//     if(!currencies) return"";
  
//     const currencyNames = Object.values(currencies).map(
//       (currency) => currency.name
//     );
//     return currencyNames
    
//   }  

//   const getNativeNames = (nativeName) => {
//     if (!nativeName) return "";

//     const nativeNames = Object.values(nativeName).map(
//       (Native) => Native.common
//     );
//     return nativeNames.join(", "); 
//   };

//       const getLanguage = (languages) => {
//     if(!languages) return"";

//     const languageNames = Object.values(languages).map(
//       (language) => language
//     );
//     return languageNames.join('-')
//   }


//   let TargetCountry = finalcountry[0];

//   // const countrySpecification = {
//   //   nativeName: {
//   //     label: "Native name:",
//   //     value: Object.values(TargetCountry.name?.nativeName).map((nativeName) => (
//   //       <span>{nativeName.common}</span>
//   //     )),
//   //   },
//   //   population: {
//   //     label: "Population",
//   //     value: TargetCountry?.population,
//   //   },
//   //   region: {
//   //     label: "Region",
//   //     value: TargetCountry?.region,
//   //   },
//   //   subregion :{
//   //     label : "Sub Region",
//   //     value : TargetCountry?.subregion,
//   //   },
//   //   capital:{
//   //     label : "Capital",
//   //     value : TargetCountry?.capital,
//   //   },
//   //   topLevelDomain : {
//   //     label :"Top Level Domain",
//   //     value :TargetCountry?.tld
//   //   },
//   //   currencies : {
//   //     label : "Currencies",
//   //     value : getCurrency(TargetCountry?.currencies),
//   //   },
//   //   language : {
//   //     label : "Language",
//   //     value : Object.values(TargetCountry.languages).map((language) => (
//   //       <span>{language} </span>
//   //       )),
//   //   }

//   // };
  
//   return (
//     <div>
//       <img src={TargetCountry?.flags?.png} alt='' />
//       <h1>{TargetCountry?.name?.common}</h1>
//       <div>
//         <div>

          
//           <span>Native name: </span>
//           {getNativeNames(TargetCountry?.name?.nativeName)}

//           {/* {TargetCountry?.name?.nativeName && (
//           <span>
//           {Object.values(TargetCountry.name?.nativeName).map((nativeName) => (
//           <span>{nativeName.common}</span>
//           ))} 
//           </span>
//          )} */}
//         </div> 
//         <div>
//           <span>Population: </span>
//           <span>{TargetCountry?.population}</span>
//         </div>
//         <div>
//           <span>Region: </span>
//           <span>{TargetCountry?.region}</span>
//         </div>
//         <div>
//           <span>Sub Region: </span>
//           <span>{TargetCountry?.subregion}</span>
//         </div>
//         <div>
//           <span>Capital: </span>
//           <span>{TargetCountry?.capital}</span>
//         </div>
//         <div>
//           <span>Top Level Domain: </span>
//           <span>{TargetCountry?.tld}</span>
//         </div>

//         <div>
//           <span>Currencies: </span>
//           {getCurrency(TargetCountry?.currencies)}

          

//         </div>
//           <div>
//             <span>Language: </span>
//             {getLanguage(TargetCountry?.languages)}
          
//           </div>  
//       </div>
//     </div>
//   );
// };

// export default Singleproduct;



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

    const currencyNames = Object.values(currencies).map((currency) => currency.name);
    return currencyNames.join(", ");
  };

  const getNativeNames = (nativeName) => {
    if (!nativeName) return "";

    const nativeNames = Object.values(nativeName).map((Native) => Native.common);
    return nativeNames.join(", ");
  };

  const getLanguage = (languages) => {
    if (!languages) return "";

    const languageNames = Object.values(languages).map((language) => language);
    return languageNames.join("-");
  };

  let TargetCountry = finalcountry[0];

  const countrySpecifications = [
    {
      label: "Native name:",
      value: getNativeNames(TargetCountry?.name?.nativeName),
    },
    {
      label: "Population",
      value: TargetCountry?.population,
    },
    {
      label: "Region",
      value: TargetCountry?.region,
    },
    {
      label: "Sub Region",
      value: TargetCountry?.subregion,
    },
    {
      label: "Capital",
      value: TargetCountry?.capital,
    },
    {
      label: "Top Level Domain",
      value: TargetCountry?.tld,
    },
    {
      label: "Currencies",
      value: getCurrency(TargetCountry?.currencies),
    },
    {
      label: "Language",
      value: getLanguage(TargetCountry?.languages),
    },
  ];

  return (
    <div>
      <img src={TargetCountry?.flags?.png} alt="" />
      <h1>{TargetCountry?.name?.common}</h1>
      <div>
        
        {countrySpecifications.map((specification, index) => (
          <div key={index}>
            <span>{specification.label}</span>
            <span>{specification.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Singleproduct;
