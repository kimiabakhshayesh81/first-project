import Axios from 'axios'
import React, {useState, useEffect} from "react"
import Card from '../card';

const Body = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect( () => { 
      async function getCountries() {
        const url = 'https://restcountries.com/v3.1/all';
        const response = await Axios.get(url).then(res => res.data);
        console.log({response})
        setCountries(response)
      }
      getCountries();
    }, []);
    return (
        
      <div className="App">
          
        <header className="App-header">
        
        </header>

        <input type="text" placeholder={'Search for a country'} />
        {
          countries.map(country => {
            return <Card country={country} />
          })
        }
      </div>
      
    );}

export default Body;