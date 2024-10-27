import React, { useState, useEffect } from "react";
import "./header.css";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CarCard from "../CarsCard/CarCard";
import CarData from "../../data/carsdata";

const Header = () => {
  const [carData] = useState(CarData);
  const [filteredCars, setFilteredCars] = useState(CarData);
  const [search, setSearch] = useState("");
  const [tSearch, settSearch] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [year, setYear] = useState("");
  const [page, setPage] = useState(1);
  const carsPerPage = 6;

  const indexLast = page * carsPerPage;
  const indexFirst = indexLast - carsPerPage;
  const currentCars = filteredCars.slice(indexFirst, indexLast);

  const filterCars = () => {
    const filtered = carData.filter((car) => {
      const matchesSearch = car.car_name.toLowerCase().includes(search.toLowerCase());
      const matchesFuelType = fuelType ? car.fuel_type === fuelType : true;
      const matchesYear = year ? car.car_model_year === parseInt(year) : true;
      return matchesSearch && matchesFuelType && matchesYear;
    });
    setFilteredCars(filtered);
    setPage(1);
  };

  useEffect(() => {
    filterCars();
  }, [search, fuelType, year]);

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, Math.ceil(filteredCars.length / carsPerPage)));
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };
  const handleSearchClick = () => {
    setSearch(tSearch);
    setPage(1);
  };

  return (
    <div className="header">
      <div className="search-filter">
      <div  className="search-bar">
      <input
          type="text"
          placeholder="Search..."
          value={tSearch}
          onChange={(e) => settSearch(e.target.value)}
        />
        <button className="btn" onClick={handleSearchClick}>
        <FaSearch style={{ width: '25px' }} />
        </button>
      </div>

        <select className="dropdown" value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
          <option value="">All Fuel Types</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>

        <select className="dropdown" value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">All Years</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>

      <div className="car-grid">
        {currentCars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>

      <div className="footer-filter">
        <div className="left-s">
          <span>
            Page {page} of {Math.ceil(filteredCars.length / carsPerPage)}
          </span>
        </div>
        <div className="right-s">
          <button onClick={handlePrev} disabled={page === 1} className="page-btn">
            <FaArrowLeft />
          </button>
          {Array.from({ length: Math.ceil(filteredCars.length / carsPerPage) }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`page-btn ${page === index + 1 ? "active" : ""}`}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={handleNext} disabled={page === Math.ceil(filteredCars.length / carsPerPage)} className="page-btn">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
