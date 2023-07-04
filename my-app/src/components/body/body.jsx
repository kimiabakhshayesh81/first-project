import Axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../card";
import "../styls/style.css";
import Header from "../header";
import { Link } from "react-router-dom";

const Body = () => {
  const [countries, setCountries] = useState([]);
  const [finalCountries, setFinalCountries] = useState([]);
  const [region, setRegion] = useState("");

  useEffect(() => {
    async function getCountries() {
      const url = "https://restcountries.com/v3.1/all";
      const response = await Axios.get(url).then((res) => res.data);
      console.log({ response });
      setCountries(response);
      setFinalCountries(response);
    }
    getCountries();
  }, []);

  function Search(event) {
    let finalResponse = [];

    countries.forEach(function result(country) {
      let value = country.name.common.toLowerCase();
      let searchValue = event.target.value.toLowerCase();
      if (value.includes(searchValue)) {
        finalResponse.push(country);
      }
    });

    setFinalCountries(finalResponse);
  }

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value.toLowerCase();
    const filteredRegion = countries.filter(
      (country) =>
        selectedRegion === "" || country.region.toLowerCase() === selectedRegion
    );
    setRegion(selectedRegion);
    setFinalCountries(filteredRegion);
  };

  return (
    <div className="all">
      <Header />
      <header className="App-header"></header>

      <div className="background">
        <div className="detailes">
          <input
            id="search"
            onChange={(event) => Search(event)}
            type="text"
            placeholder={"Search for a country"}
          />

          <select value={region} onChange={handleRegionChange} id="Select">
            <option value="" disabled selected hidden>
              Filter by region
            </option>
            <option value="asia">Asia</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>

        <div className="cards">
          {finalCountries.map((country) => {
            return (
              <Link to={`/details/${country.name.common}`}>
                <Card country={country} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
