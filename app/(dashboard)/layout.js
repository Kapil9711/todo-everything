import Dashboard from "@/components/dashboard/Dashboard";
import DashboardNav from "@/components/dashboard/DashboardNav";

const DashboardLayout = ({ children }) => {
  return (
    <section className="max-h-screen ">
      <DashboardNav />
      <div
        // style={{ gridTemplateColumns: ".8fr 2fr .8fr" }}
        className="min-h-screen  grid grid-cols-[.8fr,2fr,.8fr] bg-white "
      >
        <Dashboard />
        {children}
      </div>
    </section>
  );
};

export default DashboardLayout;
