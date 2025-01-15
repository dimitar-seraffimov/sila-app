import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

const StatCard = ({ icon: Icon, label, value }: StatCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-gray-50 rounded-lg">
        <Icon className="h-6 w-6 text-gray-600" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

export default StatCard;