"use client";

import { useEffect, useState } from "react";
import Images from "@/components/landingPage/header/Images";
import Navbar from "@/components/landingPage/header/Navbar";
import Texts from "@/components/landingPage/header/Texts";
import Boxes from "@/components/landingPage/header/Boxes";
import Content from "@/components/landingPage/header/Content";
import Explore from "@/components/landingPage/explore/Explore";

const Landingpage = () => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(Number(window.innerHeight));
  }, []);

  return (
    <div className="min-h-screen px-4 overflow-hidden sm:px-0 w-full bg-black  text-white">
      {height !== 0 && (
        <>
          <header className="container font-sans relative h-screen mx-auto pt-20 ">
            <Navbar />
            <Images height={height} />
            <Texts height={height} />
            <Boxes height={height} />
            <Content />
          </header>
          <Explore />
        </>
      )}
    </div>
  );
};

export default Landingpage;
