import React, { useEffect, useState } from "react";
import axios from "axios";
import { Car } from "../components/Car";
import "./carList.css";

export const CarList = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCars();
  }, []);

  /*
   * a function fetching cars from th api
   */
  const fetchCars = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        "https://mocki.io/v1/4f7bf80f-e4c8-44c5-9be2-afc649a5af96"
      );
      if (response.status === 200) {
        setCars(response.data.cars);
      }
    } catch (error) {
      setError("Error While Fetching Cars");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="carListContainer">
      {isLoading && (
        <div class="spinner-border text-dark spinner" role="status"></div>
      )}

      <h2 className="text-primary">Welcome To Car Booking System</h2>
      {<div className="text-danger">{error}</div>}

      <div className="carList">
        {cars.splice(0,5).map((car, index) => {
          console.log(car);
          return <Car key={index} car={car} />;
        })}
      </div>

      <div>
        <button  className="btn btn-primary mb-5 mt-5">Load More...</button>
      </div>
    </div>
  );
};
