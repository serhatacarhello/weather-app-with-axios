import axios from "axios";
import { useEffect, useState } from "react";
import City from "./City";

function Weather() {

  const apiKey = "7da72d19095232656f106a185a0ea91a";

  const [city, setCity] = useState();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function getApi() {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`
        );
        const data = res.data;
        setCity(data);
      } catch (error) {
        console.error(error);
      }
    }

    getApi();
  }, [searchInput]);

  return (
    <div className="container-fluid p-5 m-5">
      <div className="container border-5 rounded w-50 my-5 p-5  bg-secondary text-white h-100">
        <div className="mb-3">
          <label htmlFor="" className="form-label fs-5">
            Which city's weather condition would you like to learn ?
          </label>
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            className="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="Enter a city name"
          />
        </div>
      </div>
      <City city={city} />
    </div>
  );
}

export default Weather;
