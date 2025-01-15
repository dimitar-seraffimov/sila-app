import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const exercises = [
  "Bench Press",
  "Squats",
  "Deadlifts",
  "Pull-ups",
  "Shoulder Press",
];

const NewWorkout = () => {
  const [selectedExercises, setSelectedExercises] = useState<string[]>([]);

  const addExercise = (exercise: string) => {
    if (!selectedExercises.includes(exercise)) {
      setSelectedExercises([...selectedExercises, exercise]);
    }
  };

  const removeExercise = (exercise: string) => {
    setSelectedExercises(selectedExercises.filter((e) => e !== exercise));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">New Workout</h1>
        <p className="text-gray-500 mt-2">Create your workout routine</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Workout Name
          </label>
          <Input placeholder="e.g., Full Body Workout" className="max-w-md" />
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Exercises</h3>
          <div className="grid gap-4">
            {selectedExercises.map((exercise) => (
              <div
                key={exercise}
                className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200"
              >
                <span className="font-medium text-gray-900">{exercise}</span>
                <button
                  onClick={() => removeExercise(exercise)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add Exercise
            </label>
            <div className="flex flex-wrap gap-2">
              {exercises
                .filter((e) => !selectedExercises.includes(e))
                .map((exercise) => (
                  <button
                    key={exercise}
                    onClick={() => addExercise(exercise)}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    {exercise}
                  </button>
                ))}
            </div>
          </div>
        </div>

        <Button className="w-full md:w-auto">Start Workout</Button>
      </div>
    </div>
  );
};

export default NewWorkout;