import Calender from "@/components/dashboard/tasks/Calender";
import Tasks from "@/components/dashboard/tasks/Tasks";
import { getAllTasks } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";

const TaskPage = async () => {
  const { userId } = auth();
  const tasks = await getAllTasks(userId);
  return (
    <>
      <Tasks tasks={tasks} />
      <Calender />
    </>
  );
};

export default TaskPage;
