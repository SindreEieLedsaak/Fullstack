import { useState, useEffect } from "react";
import axios from "axios";
import { OneCountry, CountryDetails } from "./Components";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.error("Error fetching countries", error));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setSelectedCountry(null);
    }
  };

  const handleButton = (country) => {
    if (
      selectedCountry &&
      selectedCountry.name.common === country.name.common
    ) {
      setSelectedCountry(null);
    } else {
      setSelectedCountry(country);
    }
  };

  const filteredCountries =
    search.length > 0
      ? countries.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  return (
    <div>
      <form>
        <label>
          Find countries:
          <input type="text" value={search} onChange={handleSearch} />
        </label>
      </form>
      {filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter.</p>
      ) : (
        filteredCountries.map((country) => (
          <OneCountry
            key={country.name.common}
            country={country}
            onShowDetails={handleButton}
            isSelected={
              selectedCountry &&
              selectedCountry.name.common === country.name.common
            }
          />
        ))
      )}
      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div>
  );
}

export default App;
