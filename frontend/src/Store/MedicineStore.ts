import { create } from 'zustand'
import type { Medicine } from '../data/Medicine'

type MedicineStore ={
    Medicines: Medicine[]
    addMedicine: (medicine: Medicine) => void;
    deleteMedicine: (id: string) => void;
}

export const usemedicineStore = create<MedicineStore>((set)=>({

    Medicines: [],

    addMedicine:(medicine)=>{
        set((state)=>({Medicines:[...state.Medicines, medicine]}))
    },
    deleteMedicine:(id)=>{
        set((state)=>({Medicines: state.Medicines.filter((m) => m.id !== id)}))
    }
}))