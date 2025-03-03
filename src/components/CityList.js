import React from "react";
import '../App.css';

function CityList({ state, countryIndex, stateIndex, setCountries }) {
  const addCity = () => {
    const name = prompt("Enter city name:");
    if (name) {
      setCountries(prev => {
        const updated = [...prev];
        updated[countryIndex].states[stateIndex].cities.push({ name });
        return updated;
      });
    }
  };

  const deleteCity = (cityIndex) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      setCountries(prev => {
        const updated = [...prev];
        updated[countryIndex].states[stateIndex].cities.splice(cityIndex, 1);
        return updated;
      });
    }
  };

  return (
    <div>
      <h5>Cities</h5>
      <button onClick={addCity}  className="btn add-btn">Add City</button>
      {state.cities.map((city, index) => (
        <div key={index}>
          <p>{city.name}</p>
          <button onClick={() => deleteCity(index)} className="btn delete-btn">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CityList;