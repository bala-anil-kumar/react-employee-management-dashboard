import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stat Cards (placeholder) */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-sm text-gray-500">Total Employees</h3>
          <p className="text-2xl font-semibold mt-2">0</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-sm text-gray-500">Active Employees</h3>
          <p className="text-2xl font-semibold mt-2">0</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-sm text-gray-500">Inactive Employees</h3>
          <p className="text-2xl font-semibold mt-2">0</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
