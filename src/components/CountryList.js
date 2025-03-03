import React, { useState } from "react";
import StateList from "./StateList";
import "../App.css";

function CountryList({ countries, editCountry, deleteCountry, setCountries }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <h2>{country.name}</h2>
          <button onClick={() => editCountry(index)} className="btn edit-btn">Edit</button>
          <button onClick={() => deleteCountry(index)} className="btn delete-btn">Delete</button>
          <button onClick={() => setSelectedCountry(index)} className="btn manage-states-btn">Manage States</button>
          {selectedCountry === index && <StateList country={country} countryIndex={index} setCountries={setCountries} />}
        </div>
      ))}
    </div>
  );
}

export default CountryList;