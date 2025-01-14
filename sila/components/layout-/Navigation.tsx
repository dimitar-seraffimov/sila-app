//import { Link, useLocation } from "react-router-dom";
//import { Home, Dumbbell, History, Plus } from "lucide-react";
//import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/exercises", icon: Dumbbell, label: "Exercises" },
    { to: "/history", icon: History, label: "History" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:relative md:border-t-0 md:border-r md:w-64 md:h-screen">
      <div className="flex justify-between items-center md:flex-col md:h-full md:justify-start md:space-y-6 md:pt-8">
        {links.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            className={cn(
              "flex flex-col items-center p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 md:flex-row md:w-full md:space-x-4",
              location.pathname === to
                ? "text-accent"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            <Icon className="h-6 w-6" />
            <span className="text-xs md:text-sm">{label}</span>
          </Link>
        ))}
        <Link
          to="/new-workout"
          className="fixed right-4 bottom-20 md:static flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white shadow-lg hover:bg-accent-hover transition-colors duration-200 md:w-full md:rounded-lg md:h-auto md:py-2 md:mt-auto md:mb-8"
        >
          <Plus className="h-6 w-6 md:h-5 md:w-5 md:mr-2" />
          <span className="hidden md:inline">New Workout</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;