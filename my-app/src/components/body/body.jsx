import Axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../card";
import "../styls/style.css";

const Body = () => {
  const [countries, setCountries] = useState([]);
  const [finalCountries, setFinalCountries] = useState([]);

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
  return (
    <div>
      <header className="App-header"></header>
      <br />
      <br />
      <br />
      <br />
      <div className="background">
        <input
          className="input"
          id="search"
          onChange={(event) => Search(event)}
          type="text"
          placeholder={"Search for a country"}
        />
        <div className="cards">
          {finalCountries.map((country) => {
            return <Card country={country} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
