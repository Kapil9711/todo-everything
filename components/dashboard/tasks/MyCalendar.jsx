"use client";

import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

const MyCalendar = () => {
  //   const [date, setDate] = useState(new Date());
  //   console.log(date);
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  console.log(value);

  return (
    <div>
      {/* <Calendar className="text-black" onChange={setDate} value={date} />
      <p className="text-center mt-4">Selected date: {date.toDateString()}</p> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    </div>
  );
};

export default MyCalendar;
