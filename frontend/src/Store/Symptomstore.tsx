
import { create } from "zustand";

export type SymptomDetails = {
  duration: string;
  severity: string;
  additionalInfo: string;
};

type SymptomState = {
  selectedSymptoms: string[];
  details: Record<string, SymptomDetails>;

  saveSymptom: (id: string, details: SymptomDetails) => void;
  removeSymptom: (id: string) => void;
  clearSymptoms: () => void;
};

export const useSymptomStore = create<SymptomState>((set) => ({
  selectedSymptoms: [],
  details: {},

  saveSymptom: (id, details) =>
    set((state) => ({
      selectedSymptoms: state.selectedSymptoms.includes(id)
        ? state.selectedSymptoms
        : [...state.selectedSymptoms, id],
      details: {
        ...state.details,
        [id]: details,
      },
    })),

  removeSymptom: (id) =>
    set((state) => ({
      selectedSymptoms: state.selectedSymptoms.filter(
        (item) => item !== id
      ),
    })),

  clearSymptoms: () => set({
    selectedSymptoms: [],
    details: {},
  }),
}));
