import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "../features/employees/employeeSlice";
import { mockEmployees } from "../features/employees/mockEmployees";
import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard = () => {
  const dispatch = useDispatch();

  const employees = useSelector((state) => state.employees.employees);

  useEffect(() => {
    dispatch(setEmployees(mockEmployees));
  }, [dispatch]);

  const totalEmployees = employees.length;
  const activeEmployees = employees.filter((emp) => emp.isActive).length;
  const inactiveEmployees = employees.filter((emp) => !emp.isActive).length;

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-sm text-gray-500">Total Employees</h3>
          <p className="text-2xl font-semibold mt-2">
            {totalEmployees}
          </p>
        </div>

        {/* Active */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-sm text-gray-500">Active Employees</h3>
          <p className="text-2xl font-semibold mt-2 text-green-600">
            {activeEmployees}
          </p>
        </div>

        {/* Inactive */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-sm text-gray-500">Inactive Employees</h3>
          <p className="text-2xl font-semibold mt-2 text-red-500">
            {inactiveEmployees}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
