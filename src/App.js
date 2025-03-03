import React, { useState } from "react";
import CountryList from "./components/CountryList";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const name = prompt("Enter country name:");
    if (name) {
      setCountries([...countries, { name, states: [] }]);
    }
  };

  const editCountry = (index) => {
    const name = prompt("Edit country name:", countries[index].name);
    if (name && window.confirm("Are you sure you want to update?")) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = name;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="app-container">
      <h1>Country, State, and City Management</h1>
      <button onClick={addCountry} className="btn add-btn">Add Country</button>
     
      <CountryList countries={countries} editCountry={editCountry} deleteCountry={deleteCountry} setCountries={setCountries} />
    </div>
  );
}


export default App;