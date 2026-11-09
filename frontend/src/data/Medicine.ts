export type Medicine = {
  id: string;
  name: string;
  dose: string;
  frequency: string;
  startDate: string;
  endDate: string;
  reminderTimes: string[];
  instruction: string;
  icon: string;
  color: string;
};

export const initialMedicines: Medicine[] = [
  {
    id: "1",
    name: "Paracetamol",
    dose: "500mg",
    frequency: "3 times daily",
    startDate: "",
    endDate: "",
    reminderTimes: ["08:00 AM"],
    instruction: "After Food",
    icon: "medical",
    color: "#F5A623",
  },
  {
    id: "2",
    name: "Vitamin D3",
    dose: "1000 IU",
    frequency: "Once daily",
    startDate: "",
    endDate: "",
    reminderTimes: ["12:00 PM"],
    instruction: "With Food",
    icon: "sunny",
    color: "#ECA51B",
  },
  {
    id: "3",
    name: "Metformin",
    dose: "500mg",
    frequency: "2 times daily",
    startDate: "",
    endDate: "",
    reminderTimes: ["06:00 PM"],
    instruction: "After Food",
    icon: "radio-button-on",
    color: "#5266E8",
  },
  {
    id: "4",
    name: "Melatonin",
    dose: "3mg",
    frequency: "Once daily",
    startDate: "",
    endDate: "",
    reminderTimes: ["10:00 PM"],
    instruction: "Before Sleep",
    icon: "moon",
    color: "#A56BE9",
  },
];