import React, { useState } from "react";
import "./car.css";
import ImageSwiper from "./ImageSwiper";
import { DatePicker } from "./DatePicker";
export const Car = ({ car }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [success, setSuccess] = useState(false);

  const selectDate = (date) => {
    setSelectedDate(date);
  };

  const bookTheCar = (car) => {

    //save the selectd car and time to 
    setSuccess(true);
  };
  return (
    <div className="carContainer ">
      {success && (
        <div class="alert alert-primary fixed-top" role="alert">
          { ( setTimeout(
                () => setSuccess(false),
                2000
              )
                ? ""
                : "")
          }
          Thanks Your Booking Is Added
        </div>
      )}
      <div className="carInfo d-flex align-items-start">
        <div className="me-5">
          {/* <img className="carImage" src={car.images[0]} alt="car Img" /> */}
          <ImageSwiper images={car.images} />
        </div>

        <div className="mt-5">
          <div className="carName">
            Car Name: <span className="carNamespan">{car.carName}</span>{" "}
          </div>
          <div className="features">
            <span style={{ fontSize: 20 }}>Features</span>
            {car.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </div>
          <hr />
          <div className="carPrice">
            Price : <span className="text-danger">{"US$ " + car.carPrice}</span>{" "}
          </div>
          <hr />
          <span style={{ fontSize: 20 }}>With</span>
          {car.includedInThePrice.map((included, index) => (
            <li key={index}>{included}</li>
          ))}
          <hr />
        </div>
      </div>

      <div className="carDesc d-flex">
        <div className="flex-grow-1">{car.detail}</div>
      </div>

      <div className="bookButton d-flex flex-wrap justify-content-center align-items-center ms-5">
        <div className="">
          <DatePicker onSelect={selectDate} />
        </div>
        <button
          disabled={!selectedDate}
          onClick={() => bookTheCar(car)}
          className="btn btn-primary px-4 "
        >
          Book
        </button>
      </div>
    </div>
  );
};
