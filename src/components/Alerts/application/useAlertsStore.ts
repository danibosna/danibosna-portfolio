import type { ZodIssue } from "zod";
import { create } from "zustand";

type State = {
  errors: ZodIssue[];
};

type Action = {
  updateErrors: (errors: State["errors"]) => void;
  clearAllErrors: () => void;
  clearError: (fieldName: string) => void;
};

export const useAlertsStore = create<State & Action>((set) => ({
  errors: [],
  updateErrors: (errors) => set(() => ({ errors })),
  clearError: (fieldName) =>
    set((state) => ({
      errors: state.errors.filter((error) => error.path[0] !== fieldName), // Asume que `path[0]` contiene el nombre del campo
    })),
  clearAllErrors: () => set(() => ({ errors: [] })),
}));
