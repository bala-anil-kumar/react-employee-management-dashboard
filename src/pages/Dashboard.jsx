import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEmployees } from "../features/employees/employeeSlice";
import { mockEmployees } from "../features/employees/mockEmployees";
import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEmployees(mockEmployees));
  }, [dispatch]);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
