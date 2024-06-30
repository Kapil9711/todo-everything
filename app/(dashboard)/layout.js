import Dashboard from "@/components/dashboard/Dashboard";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen sm:flex  bg-white ">
      <Dashboard />
      {children}
    </div>
  );
};

export default DashboardLayout;
