import React, { useState } from "react";
import CityList from "./CityList";
import "../App.css";

function StateList({ country, countryIndex, setCountries }) {
  const [selectedState, setSelectedState] = useState(null);

  const addState = () => {
    const name = prompt("Enter state name:");
    if (name) {
      setCountries(prev => {
        const updated = [...prev];
        updated[countryIndex].states.push({ name, cities: [] });
        return updated;
      });
    }
  };

  const editState = (stateIndex) => {
    const name = prompt("Edit state name:", country.states[stateIndex].name);
    if (name && window.confirm("Are you sure you want to update?")) {
      setCountries(prev => {
        const updated = [...prev];
        updated[countryIndex].states[stateIndex].name = name;
        return updated;
      });
    }
  };

  const deleteState = (stateIndex) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      setCountries(prev => {
        const updated = [...prev];
        updated[countryIndex].states.splice(stateIndex, 1);
        return updated;
      });
    }
  };

  return (
    <div>
      <h3>States</h3>
      <button onClick={addState} className="btn add-btn">Add State</button>
      {country.states.map((state, index) => (
        <div key={index}>
          <h4>{state.name}</h4>
          <button onClick={() => editState(index)} className="btn edit-btn" >Edit</button>
          <button onClick={() => deleteState(index)} className="btn delete-btn">Delete</button>
          <button onClick={() => setSelectedState(index)} className="btn manage-states-btn">Manage Cities</button>
          {selectedState === index && <CityList state={state} countryIndex={countryIndex} stateIndex={index} setCountries={setCountries} />}
        </div>
      ))}
    </div>
  );
}

export default StateList;
