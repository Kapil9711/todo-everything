import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "./ThemeToggleButton";
import React from "react";

const DashboardNav = () => {
  return (
    <>
      <div className="drawer  ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content fixed w-full z-10  flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-200  w-full">
            {/* <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div> */}
            <div className=" sm:ml-12 text-3xl sm:text-5xl text-orange-500 tracking-wider italic font-extrabold mx-2 flex-1 px-2">
              Listify
            </div>
            <div className=" flex-none ">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li className="sm:mr-4">
                  <ThemeToggle />
                </li>
                <li>
                  <UserButton afterSignOutUrl="/" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
          
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default DashboardNav;
