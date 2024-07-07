"use client";

import { deleteTask, updateTask } from "@/utils/actions";
import { useRef, useState } from "react";
import { useFormStatus, useFormState } from "react-dom";

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className=" ml-5 btn btn-accent">
      {pending ? "please-wait" : "delete"}
    </button>
  );
};

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
  console.log(day);

  const [state, getFormState] = useFormState(deleteTask, null);
  const [isActive, setIsActive] = useState(day);
  const btnRef = useRef(null);
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

  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className=" pt-20 bg-base-200   inline-block  max-h-screen overflow-scroll "
    >
      <section className=" pt-4 sm:px-10 dashboard ">
        {/* <h2 className=" text-2xl">Dashboard</h2>
        <p className="text-base-400 py-1">See your Performance</p> */}

        <section className="px-4  cards grid grid-cols-3 gap-8  sm:gap-16">
          <div className="p-2 pt-5 tracking-wide rounded-full text-center text-xs sm:text-2xl font-extrabold text-white bg-pink-400  h-20 sm:h-28">
            All Tasks
            <span className="sm:mt-2 text-xl  sm:text-3xl  block text-bold text-center">
              {tasks.length}
            </span>
          </div>
          <div className="p-2 pt-5 tracking-wide text-white font-extrabold bg-violet-500 h-20 sm:h-28 rounded-full ">
            <p className="sm:text-2xl text-xs text-center ">Completed </p>
            <p className="text-xl  sm:text-3xl  text-center sm:pt-2">
              {noOfCompleted}
            </p>
          </div>
          <div className="p-2 pt-5 tracking-wide text-white font-extrabold bg-violet-700 h-20 sm:h-28 rounded-full ">
            <p className="sm:text-2xl text-xs text-center ">Remaining</p>
            <p className="text-xl  sm:text-3xl  text-center sm:pt-2">
              {noOfunCompleted}
            </p>
          </div>
        </section>
      </section>

      <section
        style={{ borderRadius: "50px" }}
        className=" px-2 py-5   show-task min-h-screen mt-5 bg-base-200"
      >
        {/* <input type="date" /> */}
        <div className="relative">
          <p
            style={{ scrollbarWidth: "none" }}
            className="p-4 cursor-pointer  rounded-full flex mx-auto bg-orange-600  gap-8 justify-center  max-w-60 overflow-x-scroll"
          >
            {/* <span className="px-2  text-2xl  border-black bg-neutral-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {isActive}
            </span> */}
            <span
              onClick={() => setIsActive(day - 1)}
              className={`text-2xl px-2 text-white ${isActive === day - 1 && "text-4xl font-extrabold"} `}
            >
              {day - 1}
            </span>
            <span
              onClick={() => setIsActive(day)}
              className={`text-2xl px-2 text-white ${isActive === day && "text-4xl font-extrabold"} `}
            >
              {day}
            </span>
            <span
              onClick={() => setIsActive(day + 1)}
              className={`text-2xl px-2 text-white ${isActive === day + 1 && "text-4xl font-extrabold"} `}
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
          className="z-20 sm:px-8 relative min-h-80 bg-orange-500 text-white mx-auto py-5 px-2 mt-10 "
        >
          <span
            className={`h-20 w-20   bg-orange-500 rotate-45 rounded-lg block absolute mt-5 -top-12  -translate-x-1/2  ${isActive === day - 1 && "left-1/3 sm:ml-5"} ${isActive === day && "left-1/2"} ${isActive === day + 1 && "left-2/3 sm:-ml-5"}`}
          ></span>
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
                className="relative  mt-2 mx-auto py-2 bg-orange-600  rounded-full  justify-between items-center flex px-4 gap-8  "
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
                    <h1 className=" text-2xl capitalize tracking-wide font-bold">
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

                {/* <form action={getFormState}>
                  <input
                    type="text"
                    name="taskid"
                    defaultValue={task.id}
                    className="hidden"
                  />
                  <DeleteBtn />
                </form> */}
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default Tasks;
