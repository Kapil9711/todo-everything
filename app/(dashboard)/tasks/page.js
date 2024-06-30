import Tasks from "@/components/dashboard/tasks/Tasks";
import { getAllTasks } from "@/utils/actions";

const TaskPage = async () => {
  const tasks = await getAllTasks();
  return (
    <section className="flex-1 border border-orange-500 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl text-center">All Tasks </h1>

      <Tasks tasks={tasks} />
    </section>
  );
};

export default TaskPage;
