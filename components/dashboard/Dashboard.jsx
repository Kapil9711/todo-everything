import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu    bg-white gap-10 text-base-content min-h-full  w-80 p-4">
          {/* Sidebar content here */}
          <li className="mt-24">
            <Link href={"/tasks"} className="text-3xl text-base-400">
              Tasks
            </Link>
          </li>
          <li>
            <Link href={"/calender"} className="text-3xl">
              Calender
            </Link>
          </li>
          <li>
            <UserButton afterSignOutUrl="/"></UserButton>
          </li>
        </ul>
      </div>
    </div>
    // <nav className="min-h-screen w-96 border border-black">
    //   <ul className="mt-24 ml-10">
    //     <li>
    //       <Link className="text-4xl" href="/calender">
    //         calender
    //       </Link>
    //     </li>
    //     <li className="mt-8">
    //       <Link className="text-4xl " href="/tasks">
    //         Tasks
    //       </Link>
    //     </li>
    //     <li className="mt-8">
    //       <Link className="text-4xl " href="/createTask">
    //         Create Task
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Dashboard;
