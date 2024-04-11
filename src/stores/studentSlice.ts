import { StateCreator } from "zustand";

interface Student {
  name: string;
  age: number;
}

export type StudentsState = {
  students: {
    name: string;
    age: number;
  };
  updateInfo: (student: Student) => void;
};

export const createStudentSlice: StateCreator<
  StudentsState,
  [],
  [],
  StudentsState
> = (set) => ({
  students: {
    name: "John Doe",
    age: 20,
  },
  updateInfo: (student: Student) =>
    set((state) => ({ students: { ...state.students, ...student } })),
});
