"use client";
import { useUser } from "@clerk/clerk-react";

import Link from "next/link";

const Dashboard = () => {
  const { user } = useUser();
  let firstName;
  let lastName;
  if (user) {
    firstName = user.firstName;
    lastName = user.lastName;
  }

  return (
    <>
      <div className="drawer tracking-wide drawer-open hidden sm:block  ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side      bg-base-300 p-0">
          {/* <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label> */}

          <ul className="menu pt-20 overflow-hidden   gap-4 text-base-content min-h-full  w-80 p-4 ">
            <h1 className="p-4 mt-4 text-2xl">
              Hello , {firstName + " " + lastName}
            </h1>
            <li className="mt-16">
              <Link href={"/tasks"} className="text-3xl text-base-400">
                Tasks
              </Link>
            </li>
            <li>
              <Link href={"/calender"} className="text-3xl">
                Calender
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
