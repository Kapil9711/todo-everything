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
    <div className="pt-24 px-4 border-l-2 border-base-500 bg-base-200 overflow-hidden hidden sm:block min-h-screen">
      <Link
        className="text-white py-4 px-5 text-xl mb-10 bg-orange-500 hover:bg-orange-600"
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
