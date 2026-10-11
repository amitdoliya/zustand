import { create } from "zustand";

export const counterStore = create((set) => ({
  count: 0,
  increament: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decreament: () => set((state) => ({ count: state.count - 1 })),
  increamentBy5: (data) => set((state) => ({ count: state.count + data })),
}));
