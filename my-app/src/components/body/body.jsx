import Axios from 'axios'
import React, {useState, useEffect} from "react"
import Card from '../card';
import '../styls/style.css';


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
        
        </header><br/><br/><br/><br/>
        
        <input id="search" type="text" placeholder={'Search for a country'}/>

        <div className="cards">
        {
          countries.map(country => {
            return <Card country={country} />
          })
        }
        </div>
        
      </div>
      
    );}

export default Body;