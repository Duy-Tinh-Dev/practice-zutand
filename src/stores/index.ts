import { create } from "zustand";
import { Counter, createCounterSlice } from "./counterSlide";
import { StudentsState, createStudentSlice } from "./studentSlice";

export const useBoundStore = create<Counter & StudentsState>()((...a) => ({
  ...createCounterSlice(...a),
  ...createStudentSlice(...a),
}));
