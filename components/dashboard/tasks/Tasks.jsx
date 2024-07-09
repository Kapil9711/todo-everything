"use client";

import { deleteTask, updateTask } from "@/utils/actions";
import { useRef, useState, useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className=" ml-5 p-2 bg-violet-600 rounded-lg">
      {pending ? "please-wait" : "delete"}
    </button>
  );
};

let lastPosition = 99999999;

const Tasks = ({ tasks }) => {
  let noOfCompleted = 0;
  let noOfunCompleted = 0;
  for (let task of tasks) {
    if (task.completed) noOfCompleted++;
    else noOfunCompleted++;
  }

  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();
  let allDays = [];
  // console.log(day);

  const [state, getFormState] = useFormState(deleteTask, null);
  const [isActive, setIsActive] = useState(day);
  const [position, setPosition] = useState(211);
  const btnRef = useRef(null);
  const taskRef = useRef(null);
  const mainRef = useRef(null);

  const activeRef = useRef(isActive);

  let monthTasks = tasks.filter((task) => {
    const taskYr = parseInt(task.createdDate.split("/")[2]);
    const taskMnt = parseInt(task.createdDate.split("/")[1]);
    const day = parseInt(task.createdDate.split("/")[0]);
    if (year === taskYr && month === taskMnt) {
      if (!allDays.includes(day)) allDays.push(day);
      return true;
    } else return false;
  });

  allDays.sort((a, b) => a - b);
  console.log(allDays);

  const filteredTask = monthTasks.filter(
    (task) => parseInt(task.createdDate.split("/")[0]) === isActive
  );

  const handleScroll = (e) => {
    const { top } = taskRef.current.getBoundingClientRect();
    console.log(top);
    if (top < 100) {
      e.target.classList.remove("px-2");
      taskRef.current.classList.add("pt-28");
      taskRef.current.classList.add("sm:pt-28");
    } else {
      e.target.classList.add("px-2");
      taskRef.current.classList.remove("pt-28");
      taskRef.current.classList.remove("sm:pt-28");
    }

    // else if (top < 200) {
    // e.target.classList.remove("px-2");
    // taskRef.current.classList.remove(`static`);
    // taskRef.current.classList.add(`absolute`);
    // taskRef.current.classList.add(`w-full`);

    //   if (top % 10 === 0) taskRef.current.style.top = top + "px";
    // } else {
    //   e.target.classList.add("px-2");
    //   taskRef.current.classList.remove("pt-20");
    // }
  };

  useEffect(() => {
    // const { top } = taskRef.current.getBoundingClientRect();
    // if (lastPosition < position) {
    //   if (lastPosition + 10 < position) {
    //     lastPosition = position;
    //     console.log("hi");
    //     taskRef.current.classList.remove(`absolute`);
    //     taskRef.current.classList.remove(`static`);
    //     taskRef.current.classList.add(`static`);
    //     // if (top > 200) e.target.classList.add("px-2");
    //     taskRef.current.classList.remove(`w-full`);
    //     mainRef.current.classList.remove("px-2");
    //     mainRef.current.classList.add("px-2");
    //   }
    // } else {
    //   mainRef.current.classList.remove("px-2");
    //   taskRef.current.classList.remove(`static`);
    //   taskRef.current.classList.remove(`absolute`);
    //   taskRef.current.classList.add(`absolute`);
    //   taskRef.current.classList.add(`w-full`);
    //   taskRef.current.style.top = position + "px";
    // }
  }, [position]);

  useGSAP(() => {
    gsap.from(".box", {
      delay: 0.1,
      duration: 0.2,
      height: 0,
      stagger: 0.1,
      opacity: 0,
      ease: Expo.ease,
    });
  }, [isActive]);

  return (
    <div
      ref={mainRef}
      style={{ scrollbarWidth: "none" }}
      onScroll={handleScroll}
      className="px-2 sm:px-0 sm:pl-4 pt-4 transition-all duration-200 ease-in-out bg-secondary relative   inline-block  max-h-screen overflow-scroll "
    >
      <Link
        className=" z-30 top-52 rounded-l-xl right-0 fixed inline-block sm:hidden  text-white py-2 px-2 text-sm font-bold   bg-orange-500 hover:bg-orange-600"
        href={"/createTask"}
      >
        + Add
      </Link>
      <div className="h-2 w-2 pt-20"></div>
      <section className=" pt-4 sm:px-10 dashboard ">
        {/* <h2 className=" text-2xl">Dashboard</h2>
        <p className="text-base-400 py-1">See your Performance</p> */}

        <section className="px-4  cards grid grid-cols-3 gap-8  sm:gap-16">
          <div className="p-2 tracking-wide pt-5 sm:pt-2  rounded-full text-center text-xs sm:text-xl font-extrabold text-white bg-pink-400  h-20 sm:h-20">
            All Tasks
            <span className=" text-xl  sm:text-2xl  block text-bold text-center">
              {tasks.length}
            </span>
          </div>
          <div className="p-2 pt-5 sm:pt-2 tracking-wide text-white font-extrabold bg-violet-500 h-20 sm:h-20 rounded-full ">
            <p className="sm:text-xl tracking-wide text-xs text-center ">
              Completed{" "}
            </p>
            <p className="text-xl  sm:text-2xl  text-center ">
              {noOfCompleted}
            </p>
          </div>
          <div className="p-2 pt-5 sm:pt-2 tracking-wide text-white font-extrabold bg-fuchsia-500 h-20 sm:h-20 rounded-full ">
            <p className="sm:text-xl tracking-wide text-xs text-center ">
              Remaining
            </p>
            <p className="text-xl  sm:text-2xl  text-center ">
              {noOfunCompleted}
            </p>
          </div>
        </section>
      </section>

      <section
        ref={taskRef}
        style={{ borderRadius: "50px" }}
        className=" px-2 transition-all duration-300 ease-in-out py-8 sm:py-5   show-task min-h-screen mt-5 bg-base-200 "
      >
        {/* <input type="date" /> */}
        <div className="relative">
          <p
            style={{ scrollbarWidth: "none" }}
            className="p-2 cursor-pointer relative z-20  rounded-full flex mx-auto bg-orange-600  gap-5 justify-center  max-w-60 overflow-x-scroll"
          >
            {/* <span className="px-2  text-2xl  border-black bg-neutral-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {isActive}
            </span> */}
            <span
              style={{ height: "40px" }}
              onClick={() => setIsActive(day - 1)}
              className={`transition-all duration-300  ease-in-out text-2xl px-4  text-white ${isActive === day - 1 && "text-4xl font-extrabold"} `}
            >
              {day - 1}
            </span>
            <span
              onClick={() => setIsActive(day)}
              className={`transition-all duration-300 ease-in-out text-2xl px-4 text-white ${isActive === day && "text-4xl font-extrabold"} `}
            >
              {day}
            </span>
            <span
              onClick={() => setIsActive(day + 1)}
              className={`transition-all duration-300 ease-in-out text-2xl px-4 text-white ${isActive === day + 1 && "text-4xl font-extrabold"} `}
            >
              {day + 1}
            </span>

            {/* {allDays.map((day) => {
             
              return (
                <span
                  onClick={() => setIsActive(day)}
                  className={`cursor-pointer text-xl `}
                >
                  {day}
                </span>
              );
            })} */}
          </p>
        </div>

        <section
          style={{ borderRadius: "50px", maxWidth: "500px" }}
          className="z-20  sm:px-8  relative  bg-orange-500 text-white mx-auto py-5 px-2 mt-10 "
        >
          <span
            className={`h-20 w-20 transition-all duration-100 ease-in-out  bg-orange-500 rotate-45 rounded-lg block absolute mt-5 -top-12  -translate-x-1/2  ${isActive === day - 1 && "left-1/3 sm:ml-5"} ${isActive === day && "left-1/2"} ${isActive === day + 1 && "left-2/3 sm:-ml-5"}`}
          ></span>
          {filteredTask.length === 0 && (
            <div className="relative  box  mt-2 mx-auto py-2 bg-orange-600  rounded-full  justify-between items-center flex px-4 gap-8  ">
              <p className="p-2 text-2xl text-center">Nothing To Show</p>
            </div>
          )}
          {filteredTask.map((task) => {
            const cDate = new Date().toLocaleDateString().split("/");
            const tDate = task.targetDate.split("/");
            const tTime = task.targetTime.split(":");
            const cTime = new Date().toLocaleTimeString().split(":");
            const d = tDate[0] - cDate[0];
            const m = tDate[1] - cDate[1];
            const y = tDate[2] - cDate[2];

            let minutes = Number(cTime[0]) * 60 + Number(cTime[1]);
            let tmin = Number(tTime[0]) * 60 + Number(tTime[1]);
            let rminutes = tmin - minutes;

            let h = Math.floor(rminutes / 60);
            let min = rminutes % 60;
            if (h < 0) h = "00";
            else if (h < 10) h = "0" + h;
            if (min < 0) min = "00";
            else if (min < 10) min = "0" + min;

            let t = h + ":" + min;

            return (
              <div
                className="relative  box  mt-2 mx-auto py-2 bg-orange-600  rounded-full  justify-between items-center flex px-4 gap-8  "
                key={task.id}
              >
                <form
                  className=" flex flex-col   items-center gap-2"
                  action={updateTask}
                >
                  <div className="flex  items-center gap-4">
                    <input
                      type="text"
                      name="updateId"
                      defaultValue={task.id}
                      className="hidden"
                    />
                    <button className="pt-2" ref={btnRef}>
                      <input
                        style={{ width: "24px", height: "24px" }}
                        onChange={() => btnRef.current.click()}
                        name="completed"
                        type="checkbox"
                        defaultChecked={task.completed}
                        className=" inline-block"
                      />
                    </button>
                    <h1
                      className={`${task.completed && "line-through text-gray-300"} text-lg capitalize tracking-wide font-bold`}
                    >
                      {task.content}
                    </h1>
                  </div>
                  {/* <h2 className="text-sm text-gray-600">
                  {task.createdDate + " " + task.createdTime}
                </h2> */}
                </form>
                <div></div>
                {/* <div>
                <h2>{task.targetDate + " " + task.targetTime}</h2>
                <h2>
                  <span className="border border-black p-1">{d}</span>
                  <span className="border border-black p-1">{m}</span>
                  <span className="border border-black p-1">{y}</span>
                  <span className="ml-4">{t}</span>
                </h2>
              </div> */}

                <form action={getFormState}>
                  <input
                    type="text"
                    name="taskid"
                    defaultValue={task.id}
                    className="hidden"
                  />
                  <DeleteBtn />
                </form>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default Tasks;
