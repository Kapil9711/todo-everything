"use server";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import z from "zod";

const createNewTask = async (prevState, formData) => {
  const task = z.object({
    content: z.string().min(4),
    targetDate: z.string().min(4),
    targetTime: z.string().min(4),
  });

  try {
    const content = formData.get("task");
    const targetTime = formData.get("time");
    const targetDate = formData.get("date").split("-").reverse().join("/");
    const clerkId = formData.get("clerkId");

    task.parse({ content, targetDate, targetTime });
    await prisma.task.create({
      data: {
        content,
        targetTime,
        targetDate,
        clerkId,
        createdTime: new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",

          hour12: false, // For 12-hour format with AM/PM
        }),
        createdDate: new Date().toLocaleDateString("en-IN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
      },
    });
    revalidatePath("/tasks");
    return { msg: "created" };
  } catch (error) {
    console.log(error);
    return { msg: "some-error" };
  }
};

const getAllTasks = async () => {
  return prisma.task.findMany();
};

const deleteTask = async (prevState, formData) => {
  const id = formData.get("taskid");
  try {
    await prisma.task.delete({
      where: {
        id,
      },
    });
    revalidatePath("/tasks");
    return { msg: "deleted" };
  } catch (error) {
    console.log(error);
    return { msg: "error in deleting" };
  }
};

const updateTask = async (formData) => {
  const completed = formData.get("completed") === "on";
  const id = formData.get("updateId");
  try {
    await prisma.task.update({
      where: {
        id,
      },
      data: {
        completed,
      },
    });
    revalidatePath("/tasks");
  } catch (error) {
    console.log(error);
  }
};

export { createNewTask, getAllTasks, deleteTask, updateTask };

// https://dribbble.com/shots/24407533-Luxoa-Dashboard-Calendar  //design theme calender
