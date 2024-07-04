import CreateTask from "@/components/dashboard/tasks/CreateTask";
import React from "react";
import { auth } from "@clerk/nextjs/server";

const page = () => {
  const userId = auth().userId;
  return (
    <>
      <CreateTask clerkId={userId} />
    </>
  );
};

export default page;
