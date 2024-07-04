import Link from "next/link";
import React from "react";

const Calender = () => {
  return (
    <div className="min-h-screen">
      <Link className="btn btn-accent" href={"/createTask"}>
        + Create New
      </Link>
    </div>
  );
};

export default Calender;