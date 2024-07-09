"use client";

import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

import Link from "next/link";

import MyCalendar from "./MyCalendar";

const MainCalender = () => {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  console.log(value);

  return (
    <div className="tracking-wide pt-32 px-4 transition-all duration-200 ease-in-out bg-secondary overflow-hidden hidden sm:block min-h-screen">
      <Link
        className="text-white py-4 px-8 text-2xl font-bold mb-10 bg-orange-500 hover:bg-orange-600"
        href={"/createTask"}
      >
        + Add New
      </Link>
      <div className="bg-orange-200 mt-20">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            className="text-black "
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default MainCalender;
