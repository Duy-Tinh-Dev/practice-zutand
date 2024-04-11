import { StateCreator } from "zustand";

export type Counter = {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
};

export const createCounterSlice: StateCreator<Counter, [], [], Counter> = (
  set
) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },
});
