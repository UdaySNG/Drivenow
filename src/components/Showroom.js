// Importeer React en de stylesheet
import React from "react";
import "../scss/components/showroom.scss";

// Showroom component
const Showroom = () => {
  const cars = [
    {
      id: 1,
      name: "BMW 3 Serie",
      year: 2022,
      mileage: 15000,
      image: "https://www.bmw.nl/content/dam/bmw/common/all-models/3-series/sedan/2022/highlights/bmw-3-series-sedan-sp-desktop.jpg",
    },
    {
      id: 2,
      name: "Mercedes-Benz C-Klasse",
      year: 2021,
      mileage: 18000,
      image: "https://www.topgear.com/sites/default/files/2021/11/Mercedes_C300D_0000.jpg",
    },
    {
        id: 3,
        name: "Range Rover",
        year: 2021,
        mileage: 18000,
        image: "https://www.newsauto.gr/wp-content/uploads/2022/02/220214113824_RANGE-ROVER-SPORT-2022-2.jpg",
      },
    // Voeg meer auto's toe zoals nodig
  ];

  return (
    <div className="showroom">
      <h2>Auto's in de Showroom.</h2>
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <div className="car-info">
              <h3>{car.name}</h3>
              <p>Bouwjaar: {car.year}</p>
              <p>Kilometerstand: {car.mileage} km</p>
              <a href={`/model/${car.id}`} className="view-details-button">
                Bekijk Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporteer de Showroom component
export default Showroom;
