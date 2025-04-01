import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './components/Card/Card'

function App() {

  let [country, setCountry] = useState([]);

  useEffect(() => {

    fetch("https://xcountries-backend.azurewebsites.net/all")
    .then(async (data) => {
      let countryData = await data.json();
      setCountry(countryData);
    }).catch((error) => {
      console.error("Error fetching data:", error);
    })
  }, []);

  return (
    <>
      <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
        {country.map(({name,flag,abbr}) => (<Card name={name} flag={flag} abbr={abbr}/>))}
      </div>
    </>
  )
}

export default App
