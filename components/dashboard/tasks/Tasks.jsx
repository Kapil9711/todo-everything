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
  const [state, getFormState] = useFormState(deleteTask, null);
  const btnRef = useRef(null);
  return (
    <div className="mt-10">
      {state && state.msg}
      {tasks.map((task) => {
        return (
          <div className="flex flex-col gap-2 mt-8" key={task.id}>
            <h1>{task.content}</h1>
            <h2>created at {task.createdDate + " " + task.createdTime}</h2>

            <h2>target time {task.targetDate + " " + task.targetTime}</h2>
            <form action={updateTask}>
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
                  className="w-8 h-8"
                />
              </button>
            </form>

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
