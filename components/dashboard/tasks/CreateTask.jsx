"use client";
import { createNewTask } from "@/utils/actions";
import React from "react";
import { useFormStatus, useFormState } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="btn btn-accent join-item">
      {pending ? "please-wait" : "Add"}
    </button>
  );
};

const CreateTask = () => {
  const [state, getState] = useFormState(createNewTask, null);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form action={getState}>
        {state && state.msg}
        <div className="join">
          <label className="join-item input input-bordered flex items-center gap-2">
            Task
            <input
              name="task"
              required
              type="text"
              className="grow"
              placeholder="drink water"
            />
          </label>

          {/* *****************88 */}

          <input
            name="time"
            type="time"
            className=" join-item border border-base-900"
          />
          <input name="date" className="join-item" type="date" />
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
  );
};

export default CreateTask;
