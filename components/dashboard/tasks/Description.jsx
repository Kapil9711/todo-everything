"use client";
import React, { useState } from "react";

const Description = ({ desValue, setDesValue }) => {
  return (
    <div className="bg-secondary hidden sm:block relative   p-2 min-h-screen sm:-ml-20 sm:pt-36 sm:mt-2">
      {/* <form className="border border-white max-w-96 p-4" action="">
        <h1 className="text-4xl mb-4 text-white">Description</h1>
        <textarea
          onChange={(e) => setDesValue(e.target.value)}
          value={desValue}
          name="description"
          id=""
          className="border-base-200 w-full max-w-96 h-52 p-4 text-2xl leading-8"
        ></textarea>
      </form> */}
    </div>
  );
};

export default Description;
