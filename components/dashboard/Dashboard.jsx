import Link from "next/link";

const Dashboard = () => {
  return (
    <nav className="min-h-screen w-96 border border-black">
      <ul className="mt-24 ml-10">
        <li>
          <Link className="text-4xl" href="/calender">
            calender
          </Link>
        </li>
        <li className="mt-8">
          <Link className="text-4xl " href="/tasks">
            Tasks
          </Link>
        </li>
        <li className="mt-8">
          <Link className="text-4xl " href="/createTask">
            Create Task
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
