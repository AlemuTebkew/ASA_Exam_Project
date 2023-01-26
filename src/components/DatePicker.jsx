import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Calendar, DateRangePicker } from "react-date-range";
export const DatePicker = (props) => {
  // const [rangeDate, setRangDate] = useState({startDate:new Date(),endDate:new Date()});
  const [startDate, setStartDate] = useState(new Date());
  
  const handleSelect = (date) => {
    console.log(date); // native Date object
    props.onSelect(date)
    setStartDate(date);
  };

  return <Calendar date={startDate} onChange={handleSelect} />;
};
