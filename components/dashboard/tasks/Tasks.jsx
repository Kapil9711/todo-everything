"use client";

import { deleteTask, updateTask } from "@/utils/actions";
import { useRef } from "react";
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

  const [state, getFormState] = useFormState(deleteTask, null);
  const btnRef = useRef(null);
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="px-10 pt-20  bg-secondary-content inline-block border-2 border-black max-h-screen overflow-scroll"
    >
      {state && state.msg}

      <section className=" dashboard pt-5">
        <h2 className=" text-2xl">Dashboard</h2>
        <p className="text-base-400 py-1">See your Performance</p>

        <section className=" pt-4 cards grid grid-cols-3 gap-16">
          <div className="p-4 text-center text-4xl font-extrabold text-white bg-pink-400  h-48 rounded-3xl ">
            All Tasks
            <span className="mt-8 text-6xl block text-bold text-center">
              {tasks.length}
            </span>
          </div>
          <div className="p-4 text-white font-extrabold bg-violet-500 h-48 rounded-3xl ">
            <p className="text-4xl text-center ">Completed </p>
            <p className="text-6xl text-center pt-8">{noOfCompleted}</p>
          </div>
          <div className="p-4 text-white font-extrabold bg-violet-500 h-48 rounded-3xl ">
            <p className="text-4xl text-center ">Remaining</p>
            <p className="text-6xl text-center pt-8">{noOfunCompleted}</p>
          </div>
        </section>
      </section>

      <section className="mt-8 show-task">
        <div className="flex gap-8">
          <input type="date" />
          <p className="flex gap-4">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
          </p>
        </div>
      </section>

      {tasks.map((task) => {
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
            style={{ maxWidth: "500px" }}
            className=" mx-auto border border-black justify-between items-center flex px-4 gap-8 mt-8 "
            key={task.id}
          >
            <form
              className=" flex flex-col  items-center gap-2"
              action={updateTask}
            >
              <div className="flex gap-4">
                <input
                  type="text"
                  name="updateId"
                  defaultValue={task.id}
                  className="hidden"
                />
                <button className="w-fit" ref={btnRef}>
                  <input
                    onChange={() => btnRef.current.click()}
                    name="completed"
                    type="checkbox"
                    defaultChecked={task.completed}
                    className="w-4 h-4"
                  />
                </button>
                <h1 className="text-2xl">{task.content}</h1>
              </div>
              <h2 className="text-sm text-gray-600">
                {task.createdDate + " " + task.createdTime}
              </h2>
            </form>
            <div>
              <h2>{task.targetDate + " " + task.targetTime}</h2>
              <h2>
                <span className="border border-black p-1">{d}</span>
                <span className="border border-black p-1">{m}</span>
                <span className="border border-black p-1">{y}</span>
                <span className="ml-4">{t}</span>
              </h2>
            </div>

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
    </div>
  );
};

export default Tasks;
