//import { Activity, TrendingUp, Timer } from "lucide-react";
// import StatCard from "@/features/dashboard/components/StatCard";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
        <p className="text-gray-500 mt-2">Track your fitness journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={Activity} label="Total Workouts" value="24" />
        <StatCard icon={TrendingUp} label="Volume This Week" value="12,450 kg" />
        <StatCard icon={Timer} label="Avg. Workout Time" value="52 min" />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 divide-y divide-gray-100">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">Full Body Workout</p>
                  <p className="text-sm text-gray-500">3 days ago</p>
                </div>
                <div className="text-right">
                  <p className="text-accent font-medium">8,200 kg</p>
                  <p className="text-sm text-gray-500">45 min</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;