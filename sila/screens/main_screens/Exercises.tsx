import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const exerciseCategories = [
  "All",
  "Chest",
  "Back",
  "Legs",
  "Shoulders",
  "Arms",
  "Core",
];

const exercises = [
  {
    name: "Bench Press",
    category: "Chest",
    personalBest: "100 kg",
    lastUsed: "2 days ago",
  },
  {
    name: "Deadlift",
    category: "Back",
    personalBest: "160 kg",
    lastUsed: "5 days ago",
  },
  {
    name: "Squat",
    category: "Legs",
    personalBest: "140 kg",
    lastUsed: "1 week ago",
  },
];

const Exercises = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Exercises</h1>
        <p className="text-gray-500 mt-2">Browse and manage your exercises</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          placeholder="Search exercises..."
          className="pl-10 bg-white border-gray-200"
        />
      </div>

      <div className="flex overflow-x-auto pb-2 -mx-4 px-4 space-x-2">
        {exerciseCategories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {exercises.map((exercise) => (
          <div
            key={exercise.name}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-accent transition-colors duration-200 cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{exercise.name}</h3>
                <p className="text-sm text-gray-500">{exercise.category}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-accent">
                  PB: {exercise.personalBest}
                </p>
                <p className="text-sm text-gray-500">
                  Last used: {exercise.lastUsed}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;