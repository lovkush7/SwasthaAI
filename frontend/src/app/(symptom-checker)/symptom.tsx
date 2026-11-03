export type symptomCategory = | "General" | "Respiratory" | "Cardiovascular" | "Gastrointestinal" | "Neurological" | "Musculoskeletal" | "Dermatological" | "Psychological" | "Endocrine" | "Hematological" | "Infectious" | "Allergic" | "Immunological" | "Other";

export type symptom = {
    id: string;
    name: string;
    category: symptomCategory;
    description: string;
    icon: string;
}

export const categories =[
    "General",
    "Respiratory",
    "Cardiovascular",
    "Gastrointestinal",
    "Neurological",
    "Musculoskeletal",
    "Dermatological",
    "Psychological",
    "Endocrine",
    "Hematological",
    "Infectious",
    "Immunological",
    "Allergic",
    "Other"
]

export const symptoms: symptom[] = [
    {
        id: "1",
        name: "Fever",
        category: "General",
        description: "Elevated body temperature",
        icon: "🌡️"
    },
    {
        id: "2",
        name: "Cough",
        category: "Respiratory",
        description: "A sudden, forceful hacking sound to release air and clear irritation in the throat or airway",            
        icon: "💨"
    },
    {
        id: "3",
        name: "Shortness of Breath",    
    category: "Respiratory",
        description: "Difficulty in breathing or feeling of not getting enough air",
        icon: "😮‍💨"
    },
    {
        id: "4",
        name: "Chest Pain",
        category: "Cardiovascular",
        description: "Discomfort or pain in the chest area",
        icon: "❤️"      
    },
    {
        id: "5",
        name: "Nausea",
        category: "Gastrointestinal",
        description: "Feeling of sickness with an inclination to vomit",
        icon: "🤢"
    },
    {
        id: "6",
        name: "Headache",
        category: "Neurological",
        description: "Pain or discomfort in the head or neck area",
        icon: "🤕"
    },
    {
        id: "7",
        name: "Muscle Pain",
        category: "Musculoskeletal",
        description: "Discomfort or pain in the muscles",
        icon: "💪"
    },{
        id: "8",
        name: "Joint Pain",
        category: "Musculoskeletal",
        description: "Discomfort or pain in the joints",
        icon: "🦴"
    },
    {
        id: "9",
        name: "Skin Rash",
        category: "Dermatological",
        description: "Visible changes in the skin, such as redness, bumps, or irritation",
        icon: "🩹"
    },{
        id: "10",
        name: "Fatigue",
        category: "General",
        description: "A feeling of tiredness or lack of energy",
        icon: "😴"
    },{
        id: "11",
        name: "Dizziness",
        category: "Neurological",
        description: "A sensation of lightheadedness or unsteadiness",
        icon: "😵"
    },
    {
        id: "12",
        name: "Anxiety",
        category: "Psychological",
        description: "A feeling of worry, nervousness, or unease",
        icon: "😰"
    },
    {
        id: "13",
        name: "Depression",
        category: "Psychological",
        description: "A persistent feeling of sadness or loss of interest",
        icon: "😔"
    },
    {
        id: "14",
        name: "Weight Loss",
        category: "Endocrine",
        description: "Unintentional loss of body weight",
        icon: "⚖️"
    },{
        id: "15",
        name: "Weight Gain",
        category: "Endocrine",
        description: "Unintentional gain of body weight",
        icon: "🧍"
    },
    {
        id: "16",
        name: "Anemia",
        category: "Hematological",
        description: "A condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues",
        icon: "🩸"
    },{
        id: "17",
        name: "Infection",
        category: "Infectious",
        description: "Invasion and multiplication of microorganisms such as bacteria, viruses, and parasites that are not normally present within the body",
        icon: "🦠" 
    },{
        id: "18",
        name: "Allergy",
        category: "Immunological",
        description: "An immune system reaction to a substance that is typically harmless to most people",
        icon: "过敏"    
    },{
        id: "19",
        name: "Other",
        category: "Other",
        description: "Any other symptom not listed above",
        icon: "❓"
    }
]