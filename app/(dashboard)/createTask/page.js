import CreateTask from "@/components/dashboard/tasks/CreateTask";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import Description from "@/components/dashboard/tasks/Description";

const page = () => {
  const userId = auth().userId;
  return (
    <>
      <CreateTask clerkId={userId} />
      <Description />
    </>
  );
};

export default page;
