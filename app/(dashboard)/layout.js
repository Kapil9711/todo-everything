import Dashboard from "@/components/dashboard/Dashboard";

const DashboardLayout = ({ children }) => {
  return (
    <div
      style={{ gridTemplateColumns: ".8fr 2fr .8fr" }}
      className="min-h-screen grid  bg-white "
    >
      <Dashboard />
      {children}
    </div>
  );
};

export default DashboardLayout;
