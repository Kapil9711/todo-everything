import { Link } from "lucide-react";

const Dashboard = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/calender">calender</Link>
          <Link href="/tasks">Tasks</Link>
          <Link></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
