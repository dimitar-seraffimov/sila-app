import React, { createContext, useState, useContext, ReactNode } from 'react';

type WorkoutContextType = {
  isWorkoutActive: boolean;
  isOnWorkoutScreen: boolean;
  toggleWorkout: () => void;
  setIsOnWorkoutScreen: (value: boolean) => void;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [isOnWorkoutScreen, setIsOnWorkoutScreen] = useState(false);

  const toggleWorkout = () => {
    setIsWorkoutActive((prev) => !prev);
  };

  return (
    <WorkoutContext.Provider value={{ isWorkoutActive, isOnWorkoutScreen, toggleWorkout, setIsOnWorkoutScreen }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }
  return context;
};