import React from "react";

function City({ city }) {
  console.log(city);
  if (!city) {
    return null; // Eğer city verisi yoksa, bileşen null döndürsün
  }

  return (
   <div className="container d-flex align-items-center justify-content-center ">
     <div className="container my-2">
      <div className="row container-md d-flex align-items-center justify-content-center ">
        <div className="col-4 ">
          <div className="card">
          <div className="card-body bg-success fs-5 text-white p-4 rounded">

              <h2 className="card-title">{city.name}</h2>
              <p className="card-text">Temperature: {city.main.temp}°C</p>
              <p className="card-text">
                Description: {city.weather[0].description}
              </p>
              <p className="card-text">Wind speed: {city.wind.speed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default City;
