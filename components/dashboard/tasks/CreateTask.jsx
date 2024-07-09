"use client";
import { createNewTask } from "@/utils/actions";
import React from "react";
import { useFormStatus, useFormState } from "react-dom";
// import { TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-orange-500 hover:bg-orange-600  text-white px-16 tracking-wider mt-5 sm:mt-8 block mx-auto p-2 text-2xl"
    >
      {pending ? "wait" : "Add"}
    </button>
  );
};

const CreateTask = ({ clerkId }) => {
  const [state, getState] = useFormState(createNewTask, null);

  return (
    <>
      <div className="sm:px-12 px-2 sm:pt-28 pt-20 relative transition-all duration-100 ease-in-out  bg-primary tracking-wide  min-h-screen">
        <form
          style={{ maxWidth: "410px" }}
          className="mt-10 p-5 relative sm:static  border  mx-auto border-white"
          action={getState}
        >
          <Link
            className=" top-2  rounded-l-xl right-0 absolute inline-block sm:hidden  text-white py-2 px-2 pr-4 text-sm font-bold mb-10 bg-orange-500 hover:bg-orange-600"
            href={"/tasks"}
          >
            Back
          </Link>
          {state && (
            <p
              className={`${state.msg === "created" ? "text-green-500 font-extrabold" : "text-red-500 font-extrabold"} text-xl capitalize p-2 text-center `}
            >
              {state.msg}
            </p>
          )}

          <input
            name="clerkId"
            className="hidden"
            type="text"
            defaultValue={clerkId}
          />
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}

          <div>
            <div className="flex flex-col gap-2">
              <label
                className="text-white sm:text-2xl font-bold text-xl"
                htmlFor="task"
              >
                Task
              </label>
              <label className="sm:text-2xl text-xl input input-bordered flex items-center gap-2">
                <input
                  name="task"
                  id="task"
                  required
                  type="text"
                  className="grow"
                  placeholder="drink water"
                />
              </label>
            </div>

            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker name="date" className="bg-white" />
          </LocalizationProvider> */}

            {/* *****************88 */}
            <div className="flex flex-col gap-2 mt-5 sm:mt-8">
              <label
                className="text-white sm:text-2xl font-bold text-xl"
                htmlFor="time"
              >
                Target Time
              </label>
              <input
                id="time"
                name="time"
                type="time"
                className="w-full py-2 px-4 rounded-lg text-xl  border border-base-900"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5 sm:mt-8">
              <label
                className="text-white sm:text-2xl font-bold text-xl"
                htmlFor="date"
              >
                Target Date
              </label>

              <input
                id="date"
                name="date"
                type="date"
                className=" py-2 px-4 text-xl w-full  border border-base-900"
              />
            </div>

            <div className=" mt-5 sm:mt-2 max-w-96 sm:border sm:p-4 block sm:absolute sm:top-36  z-10 sm:-right-80 ">
              <label
                htmlFor="description"
                className="sm:text-4xl text-xl  sm:mb-4 text-white"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="mt-2 sm:mt-5 border border-white  w-full max-w-96 h-28 sm:h-40 p-4 text-xl leading-8"
              ></textarea>
            </div>
            {/* <button
              disabled={pending}
              className="bg-orange-500 hover:bg-orange-600  text-white px-16 tracking-wider mt-5 sm:mt-8 block mx-auto p-2 text-2xl"
            >
              {pending ? "wait" : "Add"}
            </button> */}
            <SubmitBtn />
            {/* <div className="relative join">
            <label className="input join-item input-bordered flex items-center gap-2">
              Time
              <input type="text" className="grow" placeholder="12-h-format" />
            </label> */}

            {/* <select className="join-item w-20 select select-bordered max-w-xs">
              <option>PM</option>
              <option selected>AM</option>
            </select> */}
            {/* </div> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
