import React, { createContext, useState } from "react";

export const ExerciseContext = createContext<any>(null);

export const ExerciseProvider = ({ children }: any) => {
  const [exercises, setExercises] = useState([
       {
      id: "1",
      name: "Push Ups",
      description: "Great exercise for chest, shoulders, and triceps.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
      
    },
    {
      id: "2",
      name: "Squats",
      description: "Excellent for legs and lower body strength.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
    }
  
  ]);

  return (
    <ExerciseContext.Provider value={{ exercises, setExercises }}>
      {children}
    </ExerciseContext.Provider>
  );
};