import { Calendar } from "lucide-react";

const workouts = [
  {
    date: "Today",
    name: "Full Body Workout",
    duration: "45 min",
    volume: "8,200 kg",
    exercises: ["Bench Press", "Squats", "Deadlifts"],
  },
  {
    date: "Yesterday",
    name: "Upper Body Focus",
    duration: "55 min",
    volume: "6,800 kg",
    exercises: ["Shoulder Press", "Pull-ups", "Rows"],
  },
  {
    date: "3 days ago",
    name: "Leg Day",
    duration: "50 min",
    volume: "9,500 kg",
    exercises: ["Squats", "Lunges", "Leg Press"],
  },
];

const History = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Workout History</h1>
        <p className="text-gray-500 mt-2">Track your progress over time</p>
      </div>

      <div className="grid gap-6">
        {workouts.map((workout, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:border-accent transition-colors duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-500">{workout.date}</p>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mt-1">
                  {workout.name}
                </h3>
              </div>
              <div className="text-right">
                <p className="text-accent font-medium">{workout.volume}</p>
                <p className="text-sm text-gray-500">{workout.duration}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {workout.exercises.map((exercise) => (
                <span
                  key={exercise}
                  className="px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-700"
                >
                  {exercise}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;