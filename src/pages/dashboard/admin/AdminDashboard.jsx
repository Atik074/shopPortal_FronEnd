import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaBox, FaUsers, FaShoppingCart, FaDollarSign } from "react-icons/fa";

const AdminDashboard = () => {
  // Dummy data (replace with real API calls)
  const { data: dashboardData, isLoading } = useQuery({
    queryKey: ["adminDashboard"],
    queryFn: async () => {
      // Simulate API call
      return {
        totalSales: 12500,
        totalOrders: 320,
        totalCustomers: 85,
        totalProducts: 120,
        salesChart: [
          { date: "Aug 1", sales: 500 },
          { date: "Aug 2", sales: 700 },
          { date: "Aug 3", sales: 400 },
          { date: "Aug 4", sales: 900 },
          { date: "Aug 5", sales: 300 },
        ],
      };
    },
  });

  if (isLoading) return <div className="p-4 text-center">Loading dashboard...</div>;

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="flex items-center gap-4 p-4">
          <FaDollarSign className="text-green-500 text-2xl" />
          <CardContent>
            <p className="text-sm text-gray-500">Total Sales</p>
            <p className="text-xl font-semibold">${dashboardData.totalSales}</p>
          </CardContent>
        </Card>
        <Card className="flex items-center gap-4 p-4">
          <FaShoppingCart className="text-blue-500 text-2xl" />
          <CardContent>
            <p className="text-sm text-gray-500">Total Orders</p>
            <p className="text-xl font-semibold">{dashboardData.totalOrders}</p>
          </CardContent>
        </Card>
        <Card className="flex items-center gap-4 p-4">
          <FaUsers className="text-purple-500 text-2xl" />
          <CardContent>
            <p className="text-sm text-gray-500">Customers</p>
            <p className="text-xl font-semibold">{dashboardData.totalCustomers}</p>
          </CardContent>
        </Card>
        <Card className="flex items-center gap-4 p-4">
          <FaBox className="text-orange-500 text-2xl" />
          <CardContent>
            <p className="text-sm text-gray-500">Products</p>
            <p className="text-xl font-semibold">{dashboardData.totalProducts}</p>
          </CardContent>
        </Card>
      </div>

      {/* Sales Chart */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Sales This Week</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dashboardData.salesChart}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
