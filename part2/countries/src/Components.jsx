import React from "react";
import Weather from "./Weather";

const OneCountry = ({ country, onShowDetails, isSelected }) => {
  return (
    <div key={country.name.common}>
      <p>{country.name.common}</p>
      <button onClick={() => onShowDetails(country)}>
        {isSelected ? "Hide" : "Show"}
      </button>
    </div>
  );
};

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {Object.keys(country.languages).map((key) => (
          <li key={key}>{country.languages[key]}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width="100"
      />
      <Weather Country={country} />
    </div>
  );
};

export { OneCountry, CountryDetails };
