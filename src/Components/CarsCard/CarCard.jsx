import React from "react";
import "./carsCard.css";
import { IoMdPeople } from "react-icons/io";
import { LuFuel } from "react-icons/lu";
import { SiTransmission ,SiFueler} from "react-icons/si";
const CarCard = ({car}) => {
  return (
    <div className="car-card">
      <img src={car.image_url} alt={`${car.car_name}`} className="car-image" />
      <div className="card-1">
      <h2>{car.car_name}</h2>
      <p className="car-year">{car.car_model_year}</p>
      </div>
      <div className="car-info">
        <div className="card-2">
        <p><IoMdPeople style={{fill:'#007bff',}}/> {car.seating_capacity} People</p>
        <p><LuFuel style={{fill:'#007bff',}}/> {car.fuel_type}</p>
        </div>
      <div className="card-2">
      <p><SiTransmission style={{fill:'#007bff',}}/> {car.mileage} km/litre</p>
      <p><SiFueler style={{fill:'#007bff',}}/>{car.transmission_type}</p>
      </div>
      </div>
      <hr />
      <div className="card-3">
      <h4 className="car-price">${car.rent_per_month} / month</h4>
      <button className="rent-button">Rent now</button>
      </div>
    </div>
  );
};

export default CarCard;
