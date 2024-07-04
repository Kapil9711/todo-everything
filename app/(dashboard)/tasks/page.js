import Calender from "@/components/dashboard/tasks/Calender";
import Tasks from "@/components/dashboard/tasks/Tasks";
import { getAllTasks } from "@/utils/actions";

const TaskPage = async () => {
  const tasks = await getAllTasks();
  return (
    <>
      <Tasks tasks={tasks} />
      <Calender />
    </>
  );
};

export default TaskPage;
